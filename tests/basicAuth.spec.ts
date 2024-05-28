import { test, expect, chromium } from "@playwright/test";

// test("basic auth test", async () => {
//   // Launch browser and create a new context with authentication
//   const browser = await chromium.launch();
//   const context = await browser.newContext({
//     httpCredentials: {
//       username: "admin",
//       password: "admin",
//     },
//   });

//   // Create a new page in the context
//   const page = await context.newPage();

//   // Navigate to the URL with basic authentication
//   await page.goto("https://the-internet.herokuapp.com/basic_auth");

//   // Verify that the authentication was successful
//   await expect(page.locator("body")).toContainText(
//     "Congratulations! You must have the proper credentials."
//   );

//   // Close the browser
//   await browser.close();
// });

test("basic auth test", async ({ page }) => {
  // Set authentication credentials
  await page.context().setHTTPCredentials({
    username: "admin",
    password: "admin",
  });

  // Navigate to the URL with basic authentication
  await page.goto("https://the-internet.herokuapp.com/basic_auth");

  await page.waitForTimeout(5000);

  // Retrieve the text content of the body element
  const bodyText = await page.textContent(
    "//p[contains(text(),'Congratulations! You must have the proper credenti')]"
  );

  // Print the retrieved text content to the console
  console.log(bodyText);

  // Verify that the authentication was successful
  await expect(page.locator("body")).toContainText(
    "Congratulations! You must have the proper credentials."
  );
});
