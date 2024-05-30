import { expect, test } from "../base/pomFixture";
import * as data from "../testData/addtocartTestdata.json";

test.describe("Page object test demo", async () => {
  test("Regester test_01", async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName(data.fistname);
    await registerPage.enterLastName(data.lastname);
    await registerPage.enterEmail(data.email);
    await registerPage.enterTelephone(data.phone_number);
    await registerPage.enterPassword(data.password);
    await registerPage.enterPasswordConfirm(data.password);
    await registerPage.clickTermandCondition();
    await registerPage.clickContinueToRegister();
  });

  test("Login test_02", async ({ page, baseURL, loginPage }) => {
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.enterEmail(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickinBtn();
    expect(await page.title()).toBe("My Account");
  });
  test("Login test_03", async ({ page, baseURL, loginPage, specialPage }) => {
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.login(data.email, data.password);
    await specialPage.clickMegaMenue();
    await specialPage.addFirstProducttoThecart();
    const isCartVisible = await specialPage.isToastVisible();
    expect(isCartVisible).toBeVisible();
  });
});
