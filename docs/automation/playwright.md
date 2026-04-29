---
id: playwright
title: Playwright
sidebar_position: 1
---

# Playwright

Playwright is a modern end-to-end automation framework with strong cross-browser support.

```ts
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```
