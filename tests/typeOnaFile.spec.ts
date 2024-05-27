import test, { expect } from "@playwright/test";


test('PromptMe', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const userName = await page.locator("//input[@id='username']")   
    const passWord = await page.locator("//input[@id='password']")  
    
    await userName.type("tomsmith", { delay: 100 });
    await passWord.type("SuperSecretPassword!", { delay: 100 });

    await page.click("//i[contains(text(),'Login')]")

    await page.waitForTimeout(5000);


    
});