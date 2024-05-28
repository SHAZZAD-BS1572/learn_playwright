import test, { Page } from "@playwright/test";

test("Interact with multiple tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  console.log(page.url());

  const [multiWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//a[@id='followboth']"),
  ]);
  await multiWindow.waitForTimeout(5000);
  const multiplePopup = multiWindow.context().pages();
  console.log("No of tabs: " + multiplePopup.length);

  multiplePopup.forEach((tab) => {
    console.log(tab.url());
  });

  let faceBookPage: Page;
  for (let index = 0; index < multiplePopup.length; index++) {
    faceBookPage = multiplePopup[index];
  }

//   const text = await faceBookPage.textContent("//h1");
//   console.log(text);

  //   const [newWindow] = await Promise.all([
  //     page.waitForEvent("popup"),
  //     page.click("//a[normalize-space()='Follow On Twitter']"),
  //   ]);

  //   console.log(newWindow.url());
});
