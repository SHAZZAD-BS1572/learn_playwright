import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")

  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('abdulhamid@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123456789');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('Telephone').dblclick();
  await page.getByPlaceholder('Telephone').fill('01654789547');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('hamid khan');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('abdul khan');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")

  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});