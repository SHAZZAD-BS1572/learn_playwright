import test, { expect } from "@playwright/test";
//npm test basicInteractions.spec.ts

test("Interaction eith inputs", async ({ page }) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("//input[@id='user-message']");
    await messageInput.scrollIntoViewIfNeeded;
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Before entering data: '+await messageInput.inputValue());
    await messageInput.type("hi shazzad")
    console.log('After entering data: '+await messageInput.inputValue());
}

)

test("Sum", async ({ page }) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const Sum1Input = page.locator("//input[@id='sum1']");
    const Sum2Input = page.locator("//input[@id='sum2']");
    const getSumbutton = page.locator("//button[contains(text(),'Get Sum')]");

    await Sum1Input.type("121")
    await Sum2Input.type("546")

    await getSumbutton.click();

    await page.waitForTimeout(5000)

    const result = await page.locator("//p[@id='addmessage']");
    console.log(await result.textContent())
    await expect(result).toHaveText("667");
    
}

)

test("Checkbox", async ({ page }) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const SingleCheckbox = page.locator("//input[@id='isAgeSelected']");

    expect(SingleCheckbox).not.toBeChecked()
    await SingleCheckbox.check()
    expect(SingleCheckbox).toBeChecked()
    
    
}

)