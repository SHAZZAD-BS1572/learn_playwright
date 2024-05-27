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

import test from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto(
    "https://www.myutrx.com/products/dropdown-demo"
  );
  await page.waitForTimeout(5000);
  const element = page.locator("//select[@class='pf-variant-select']");
  await element.click();
  await element.selectOption({ value: "2 PACK ($10 off)" });
  await page.click("//span[normalize-space()='ADD TO CART']");
  await page.waitForTimeout(5000);
});
