import test, { expect } from "@playwright/test";


test('PromptMe', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/alerts/');
    
    let aleartMessage = "";
    let promptText = "";

    page.on('dialog', async (dialog) => {
        // await page.waitForTimeout(5000);
        aleartMessage = await dialog.message();
        
        promptText = "Shazzad";
        await dialog.accept(promptText);
    });

    await Promise.all([
        page.waitForSelector("#prompt"), 
        page.click("#prompt") 
    ]);

    await page.waitForTimeout(5000); 
    
    expect(aleartMessage).toBe('Please enter your name');

    await page.waitForTimeout(2000);

    const paragraph = await page.locator("//p[@id='Parademo']");
    expect(await paragraph.textContent()).toBe("Hello Shazzad! How are you today?");
});


//npm test test.spec.ts