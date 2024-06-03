import { expect, test } from "../base/pomFixture";
import * as data from "../testData/addtocartTestdata.json";

test("Login test_03", async ({ page, baseURL, loginPage }) => {
  await page.goto(`${baseURL}route=account/login`);
  await loginPage.login(data.email, data.password);
  // Save storage state after login
  await page.context().storageState({ path: 'storageState.json' });
});
test.use({ storageState: 'storageState.json' });

test("Add to Cart test_04", async ({ page, specialPage }) => {
  // Perform actions as a logged-in user
  await specialPage.clickMegaMenue();
  await specialPage.addFirstProducttoThecart();
  const isCartVisible = await specialPage.isToastVisible();
  expect(isCartVisible).toBeVisible();
});