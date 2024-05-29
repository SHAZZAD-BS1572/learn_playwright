import { Page } from "@playwright/test";

export default class SpecialHotPage {
  constructor(public page: Page) {}

  async clickCategoryDesktop() {
    await this.page.click("//a[normalize-space()='Desktops (75)']");
  }

  async addFirstProducttoThecart() {
    await this.page.hover(
      "//div[@class='carousel-item active']//img[@title='HTC Touch HD']",{strict:false}
      );
      
      await this.page.click("(//button[@class='btn btn-cart cart-28'])[1]");
    }

    async isToastVisible() {
        const toast = this.page.locator("//a[normalize-space()='View Cart']");
        await toast.waitFor({ state: "visible" })
        return toast;
    }
    
    
}
