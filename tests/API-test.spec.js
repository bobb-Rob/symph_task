import { test, expect } from '@playwright/test';

test.describe('API Test', () => {
  test('Authentication & Authorization Category', async ({ request }) => {
    const response = await request.get('/entries');
    const data = await response.json();

    expect(response.ok()).toBeTruthy();
    // Find objects with property "Category: Authentication & Authorization"
    const foundObjects = data.entries.filter((entry) => entry.Category === 'Authentication & Authorization');
    
    // Compare, count, and verify the number of objects where the property above appears
    const foundCount = foundObjects.length;
    const expectedCount = 7;

    // Verify that the number of objects is as expected
    expect(foundCount).toBe(expectedCount);

    // print found object to console
    foundObjects.forEach((obj) => {
      console.log(obj);
    })
  });
});