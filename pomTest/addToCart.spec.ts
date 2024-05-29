import test, { expect } from "@playwright/test";
import RegisterPage from "../page/registerPage";
import LoginPage from "../page/loginPage";
import HomePage from '../page/homePage';
import SpecialHotPage from "../page/specialHotPage";


const email = "abidkhan@gmail.com";
const password = "123456789";
test("Regester test_01", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("abid")
    await register.enterLastName("khan")
    await register.enterEmail(email)
    await register.enterTelephone("01245789654")
    await register.enterPassword(password)
    await register.enterPasswordConfirm(password)
    await register.clickTermandCondition();
    await register.clickContinueToRegister();

});

test("Login test_02", async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  await page.goto(`${baseURL}route=account/login`);
  await login.enterEmail(email);
  await login.enterPassword(password);
  await login.clickinBtn();
  expect(await page.title()).toBe("My Account");
});