import test from "@playwright/test";
import moment from "moment";

// test("Calendar demo using fill function", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
//   );
//   let date = "1995-02-08";

//   await page.fill("//input[@id='birthday']", date);
//   await page.waitForTimeout(3000);
// });

//   await page.click("div[class='datepicker-days'] th[class='prev']");
//   await page.click("(//td[contains(@class,'day')][normalize-space()='5'])[1]");

test("Calendar Demo Using moment", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  await selectStartDate(6, "May 2023");

  await page.waitForTimeout(3000);

  await selectEndDate(6, "December 2024");

  await page.waitForTimeout(5000);

  async function selectStartDate(date: number, dateToSelect: string) {
    await page.click("//input[@placeholder='Start date']");

    const mmyy = page.locator(
      "div[class='datepicker-days'] th[class='datepicker-switch']"
    );
    const prev = page.locator("div[class='datepicker-days'] th[class='prev']");
    const next = page.locator("div[class='datepicker-days'] th[class='next']");

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(moment()); // Pass the current moment for comparison
    console.log(thisMonth);

    while ((await mmyy.textContent()) !== dateToSelect) {
      if (thisMonth) {
        await prev.click();
      } else {
        await next.click();
      }
      // Adding a small wait time to ensure the UI updates correctly
    }
    await page.click(
      `(//td[contains(@class,'day')][normalize-space()='${date}'])[1]`
    );
  }

  async function selectEndDate(date: number, dateToSelect: string) {
    await page.click("//input[@placeholder='End date']");

    const mmyy = page.locator(
      "div[class='datepicker-days'] th[class='datepicker-switch']"
    );
    const prev = page.locator("div[class='datepicker-days'] th[class='prev']");
    const next = page.locator("div[class='datepicker-days'] th[class='next']");

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(moment()); // Pass the current moment for comparison
    console.log(thisMonth);

    while ((await mmyy.textContent()) !== dateToSelect) {
      if (thisMonth) {
        await prev.click();
      } else {
        await next.click();
      }
      // Adding a small wait time to ensure the UI updates correctly
    }
    await page.click(
      `(//td[contains(@class,'day')][normalize-space()='${date}'])[1]`
    );
  }
});

//Write on console[document.getElementById("birthday").value]
