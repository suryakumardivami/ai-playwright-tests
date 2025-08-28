## Test 1: Invalid login

**Prompt:**  
"Generate a Playwright test for Swag Labs login page that checks invalid login shows an error."

**AI Output:**  
```ts
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
```

**Final Working Test:** 
```ts 
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
```

**Edits Made:**  
- None (test passed as-is).


## Test 2: Valid login

**Prompt:**  
"Generate a Playwright test for Swag Labs login page that verifies a valid user can log in and reach the products page."

**AI Output:** 
```ts
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
```

**Final Working Test:** 
```ts
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
```

**Edits Made:**  
- None (test passed as-is).