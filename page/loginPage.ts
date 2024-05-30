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
}
