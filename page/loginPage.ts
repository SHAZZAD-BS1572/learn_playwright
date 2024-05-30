import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async enterEmail(emailAddress: string) {
    await this.page.locator("//input[@id='input-email']").type(emailAddress);
  }

  async enterPassword(passWord: string) {
    await this.page.locator("//input[@id='input-password']").type(passWord);
  }

  async clickinBtn() {
    await this.page.click("//input[@value='Login']");
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickinBtn();
  }
}
