import test from "@playwright/test";

// test('Drop down demo', async ({ page }) => {
//     await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
//     await page.selectOption("//select[@id='select-demo']", {

//         value: "Friday",

//     })
//     await page.waitForTimeout(5000)

//     await page.locator("//button[@id='printAll']").scrollIntoViewIfNeeded();
//     await page.selectOption("//select[@id='multi-select']",
//         {
//             label: "Texas"
//         }
//     )
//     // await page.locator("//option[@value='Washington']").click()
//     await page.waitForTimeout(5000)
//     await page.locator("//button[@id='printAll']").click()

//     await page.waitForTimeout(5000)

// });

// import test from "@playwright/test";

// test("basic test", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
//   );
//   await page.waitForTimeout(5000);
//   const element = page.locator("#multi-select");
//   await element.click();
//   await page.waitForTimeout(5000);
//   // await element.selectOption({ value: "Texas" });
//   await element.click();

//   await element.selectOption({ value: "Pennsylvania" });
//   await page.waitForTimeout(5000);
//   await page.click("//button[@id='printAll']");
//   await page.waitForTimeout(5000);
// });

//npm test test.spec.ts

// test("basic test", async ({ page }) => {
//   await page.goto(
//     "https://www.myutrx.com/products/dropdown-demo"
//   );
//   await page.waitForTimeout(5000);
//   const element = page.locator("//select[@class='pf-variant-select']");
//   await element.click();
//   await element.selectOption({ value: "2 PACK ($10 off)" });
//   await page.click("//span[normalize-space()='ADD TO CART']");
//   await page.waitForTimeout(5000);
// });

test("dropedown", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1"
  );

  await page.waitForTimeout(5000);

  const element = page.locator("//select[@id='phoneInput']");
  const numberField = page.locator("//input[@id='keypoint']");
  const genderField = page.locator("#select40");
  const quantity = page.locator(
    "(//select[contains(@class,'ease-linear transition-all duration-150 w-full')])[1]"
  );

  await element.click();
  await element.selectOption({ label: "+02" });
  await numberField.type("01236547895", { delay: 100 });
  await genderField.selectOption({ label: "Female" });
  await page.click("//option[@value='Canada']");
  await page.click("//option[@value='British Columbia']");
  await quantity.selectOption({ label: "3" });
  await page.click("//button[normalize-space()='Continue']");
  await page.waitForTimeout(5000);
});
