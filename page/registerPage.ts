import { Page } from '@playwright/test';

export default class RegisterPage {
  constructor(public page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.locator("//input[@id='input-firstname']").type(firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.locator("//input[@id='input-lastname']").type(lastName);
  }

  async enterEmail(email: string) {
    await this.page.locator("//input[@id='input-email']").type(email);
  }

  async enterTelephone(telephone: string) {
    await this.page.locator("//input[@id='input-telephone']").type(telephone);
  }

  async enterPassword(password: string) {
    await this.page.locator("//input[@id='input-password']").type(password);
  }

  async enterPasswordConfirm(passwordConfirm: string) {
    await this.page
      .locator("//input[@id='input-confirm']")
      .type(passwordConfirm);
  }

  async isSubscribeChecked() {
    return await this.page.isChecked('input[name="newsletter"][value="1"]');
  }

  async clickTermandCondition() {
    await this.page.click("label[for='input-agree']");
  }

  async clickContinueToRegister() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      await this.page.click("//input[@value='Continue']"),
    ]);
  }
}