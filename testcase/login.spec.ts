import { expect, test } from "../base/pomFixture";
import * as data from "../testData/addtocartTestdata.json";

test("Login test_03", async ({ page, baseURL, loginPage }) => {
  await page.goto(`${baseURL}route=account/login`);
  await loginPage.login(data.email, data.password);
  await page.context().storageState({ path: 'storageState.json' });
});
