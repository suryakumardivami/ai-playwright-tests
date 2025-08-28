import { test, expect } from '@playwright/test';

test.describe('Swag Labs Login', () => {
  test('valid user should log in and reach products page', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://www.saucedemo.com/');

    // Fill in valid credentials
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    // Click login button
    await page.click('[data-test="login-button"]');

    // Verify navigation to products page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });
});
