import { expect, test } from "../base/pomFixture";
const email = "abidkhan@gmail.com";
const password = "123456789";

test.describe("Page object test demo", async () => {
  test("Regester test_01", async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName("abid");
    await registerPage.enterLastName("khan");
    await registerPage.enterEmail(email);
    await registerPage.enterTelephone("01245789654");
    await registerPage.enterPassword(password);
    await registerPage.enterPasswordConfirm(password);
    await registerPage.clickTermandCondition();
    await registerPage.clickContinueToRegister();
  });

  test("Login test_02", async ({ page, baseURL, loginPage }) => {
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickinBtn();
    expect(await page.title()).toBe("My Account");
  });
  test("Login test_03", async ({ page, baseURL, loginPage, specialPage }) => {
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.login(email, password);
    await specialPage.clickMegaMenue();
    await specialPage.addFirstProducttoThecart();
    const isCartVisible = await specialPage.isToastVisible();
    expect(isCartVisible).toBeVisible();
  });
});
