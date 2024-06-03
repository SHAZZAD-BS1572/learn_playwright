import { expect, test } from "../base/pomFixture";
import * as data from "../testData/addtocartTestdata.json";

// Use the saved storage state from the login test
test.use({ storageState: 'storageState.json' });

test("Add to Cart test_04", async ({ page, specialPage }) => {
  await specialPage.clickMegaMenue();
  await specialPage.addFirstProducttoThecart();
  const isCartVisible = await specialPage.isToastVisible();
  expect(isCartVisible).toBeVisible();
});
