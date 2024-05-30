import { test as baseTest } from '@playwright/test';
import RegisterPage from "../page/registerPage";
import LoginPage from "../page/loginPage";
import HomePage from "../page/homePage";
import SpecialHotPage from "../page/specialHotPage";

type pages = {
    registerPage: RegisterPage
    loginPage: LoginPage
    specialPage: SpecialHotPage
}

const testPages = baseTest.extend<pages>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    specialPage: async ({ page }, use) => {
        await use(new SpecialHotPage(page))
    }
})

export const test = testPages;

export const expect = testPages.expect;