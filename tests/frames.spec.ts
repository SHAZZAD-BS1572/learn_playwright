import test, { expect } from "@playwright/test";
import { url } from "inspector";

test("Interact with iframes", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const myFrames = page.frame({ url: "https://letcode.in/frameUI" });
  const frameLocator = page.frameLocator("#firstFr");

  await frameLocator.getByPlaceholder("Enter name").type("Shazzad", { delay: 100 });

  await frameLocator.locator('input[placeholder="Enter email"]').type("Mia", { delay: 100 });

  const innerFrameLocator = frameLocator.frameLocator("//iframe[@class='has-background-white']");

  await innerFrameLocator.locator('input[placeholder="Enter email"]').type("shazzadmia123@gmail.com", { delay: 100 });


  //   const inputLocator = frameLocator.getByPlaceholder('Enter name');
  // await frameLocator.getByPlaceholder('Enter name').type('Shazzad', { delay: 100 });
  //   await inputLocator.type('Shazzad', { delay: 100 });

  //   await myFrames?.type("//input[@placeholder='Enter name']", "Shazzad", {
  //     delay: 100,
  //   });
  //   await myFrames?.type("//input[@placeholder='Enter email']", "Mia", {
  //     delay: 100,
  //   });
  //   console.log(
  //     await myFrames
  //       ?.locator("//input[@placeholder='Enter email']")
  //       .getAttribute("placeholder")
  //   );
  //   expect(
  //     await myFrames?.locator("//p[@class='title has-text-info']").textContent()
  //   ).toBe("You have entered Shazzad Mia");

  await page.waitForTimeout(5000);

  //   console.log("No.of frames: " + allFrames.length);
});
