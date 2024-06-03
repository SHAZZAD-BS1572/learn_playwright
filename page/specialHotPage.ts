import { Page } from "@playwright/test";

export default class SpecialHotPage {
  constructor(public page: Page) { }

  async clickMegaMenue() {
    await this.page.hover("//span[normalize-space()='Mega Menu']");
    await this.page.click("//a[normalize-space()='Apple']");
    await this.page.waitForTimeout(5000)

  }

  async addFirstProducttoThecart() {
    await this.page.hover(
      "div[class='carousel-item active'] img[title='iPod Touch']",
      { strict: false }
    );

   

    await this.page.click("//button[@class='btn btn-cart cart-32']");

  }
  
    async isToastVisible() {
      const toast = this.page.locator("//a[normalize-space()='View Cart']");
      await toast.waitFor({ state: "visible" });
      return toast;
    }
  }

