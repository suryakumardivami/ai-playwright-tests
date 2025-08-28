import { test, expect } from '@playwright/test';

test.describe('Swag Labs Login', () => {
  test('should show error message for invalid login', async ({ page }) => {
    // Go to Swag Labs login page
    await page.goto('https://www.saucedemo.com/');

    // Enter invalid username and password
    await page.fill('[data-test="username"]', 'invalid_user');
    await page.fill('[data-test="password"]', 'wrong_password');

    // Click login button
    await page.click('[data-test="login-button"]');

    // Assert error message is visible
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match');
  });
});