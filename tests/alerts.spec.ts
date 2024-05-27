import test, { expect } from "@playwright/test";

//The alert dialog box is used to display an alert message
test("Submit", async ({ page }) => {
  await page.goto("https://qavbox.github.io/demo/alerts/");
  let aleartMessage = "";

  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    aleartMessage = await dialog.message();

    await dialog.accept();
  });

  await page.click("input[value='Submit']");
  await page.waitForTimeout(3000);
  console.log(aleartMessage);

  expect(aleartMessage).toBe("Have a nice day!!!");
});

//Alert will appear after 5 sec

test("SubmitDelay", async ({ page }) => {
  await page.goto("https://qavbox.github.io/demo/alerts/");
  let aleartMessage = "";

  page.on("dialog", async (dialog) => {
    aleartMessage = await dialog.message();
    await dialog.accept();
  });

  await page.click("//input[@id='delayalert']");
  await page.waitForTimeout(5000);
  console.log(aleartMessage);
  expect(aleartMessage).toBe("I appeared after 5 seconds!");
});

//The prompt dialog box allows the user to enter information

test("PromptMe", async ({ page }) => {
  await page.goto("https://qavbox.github.io/demo/alerts/");
  let aleartMessage = "";
  let promptText = "";

  page.on("dialog", async (dialog) => {
    aleartMessage = await dialog.message();
    promptText = "shazzad";
    await dialog.accept(promptText);
  });

  await page.click("//input[@id='prompt']");
  console.log(aleartMessage);
  expect(aleartMessage).toBe("Please enter your name");
  const text = await page.locator("//p[@id='Parademo']");
  expect(await text.textContent()).toBe("Hello shazzad! How are you today?");
});

//The confirm dialog box returns the user's selection.

test("Confirm", async ({ page }) => {
  await page.goto("https://qavbox.github.io/demo/alerts/");
  let aleartMessage = "";
  let promptText = "";

  page.on("dialog", async (dialog) => {
    aleartMessage = await dialog.message();
    await page.waitForTimeout(5000);
    await dialog.dismiss();
  });

  await page.click("//input[@id='confirm']");
  console.log(aleartMessage);
  await page.waitForTimeout(5000);

  // const Parademo = await page.locator("//p[@id='Parademo']");
  expect(await page.locator("#Parademo").textContent()).toBe(
    "You pressed Cancel!"
  );
});

//npm test alerts.spec.ts
