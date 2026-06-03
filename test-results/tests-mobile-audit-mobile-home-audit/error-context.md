# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/mobile-audit.spec.js >> mobile home audit
- Location: tests/mobile-audit.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#expertise')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - heading "404" [level=1] [ref=e5]
    - heading "This page could not be found." [level=2] [ref=e7]
  - alert [ref=e8]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('mobile home audit', async ({ page }) => {
  4  |   await page.setViewportSize({ width: 390, height: 844 });
  5  |   await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle' });
  6  | 
  7  |   const overflow = await page.evaluate(() => ({
  8  |     innerWidth: window.innerWidth,
  9  |     clientWidth: document.documentElement.clientWidth,
  10 |     scrollWidth: document.documentElement.scrollWidth,
  11 |     bodyScrollWidth: document.body.scrollWidth,
  12 |   }));
  13 |   console.log('OVERFLOW', JSON.stringify(overflow));
  14 | 
  15 |   const floatingButton = page.getByRole('button', { name: /talk to us/i });
  16 |   const floatingVisible = await floatingButton.isVisible().catch(() => false);
  17 |   console.log('FLOATING_VISIBLE', floatingVisible);
  18 |   if (floatingVisible) {
  19 |     const box = await floatingButton.boundingBox();
  20 |     console.log('FLOATING_BOX', JSON.stringify(box));
  21 |     await floatingButton.click();
  22 |     await page.waitForTimeout(300);
  23 |     const panelVisible = await page.locator('#floating-contact-panel').isVisible().catch(() => false);
  24 |     const buttonStillVisible = await floatingButton.isVisible().catch(() => false);
  25 |     console.log('FLOATING_OPEN', JSON.stringify({ panelVisible, buttonStillVisible }));
  26 |     const closeButton = page.locator('#floating-contact-panel button[aria-label]').first();
  27 |     if (await closeButton.isVisible().catch(() => false)) {
  28 |       await closeButton.click();
  29 |       await page.waitForTimeout(300);
  30 |     }
  31 |   }
  32 | 
  33 |   const menuToggle = page.getByRole('button', { name: /toggle menu|abrir o cerrar menú|menu openen of sluiten/i });
  34 |   const menuVisible = await menuToggle.isVisible().catch(() => false);
  35 |   console.log('MENU_TOGGLE_VISIBLE', menuVisible);
  36 |   if (menuVisible) {
  37 |     await menuToggle.click();
  38 |     await page.waitForTimeout(400);
  39 |     const dialogVisible = await page.getByRole('dialog').isVisible().catch(() => false);
  40 |     const localeTextVisible = await page.getByText(/English|Español|Nederlands/).first().isVisible().catch(() => false);
  41 |     console.log('MOBILE_MENU', JSON.stringify({ dialogVisible, localeTextVisible }));
  42 |     await menuToggle.click().catch(() => {});
  43 |     await page.waitForTimeout(300);
  44 |   }
  45 | 
> 46 |   await page.locator('#expertise').scrollIntoViewIfNeeded();
     |                                    ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  47 |   await page.waitForTimeout(300);
  48 |   const expertiseButtons = page.locator('#expertise button');
  49 |   const expertiseCount = await expertiseButtons.count();
  50 |   console.log('EXPERTISE_COUNT', expertiseCount);
  51 |   if (expertiseCount > 0) {
  52 |     await expertiseButtons.nth(0).click();
  53 |     await page.waitForTimeout(350);
  54 |     const dialogCount = await page.locator('[role="dialog"]').count();
  55 |     console.log('EXPERTISE_DIALOG_COUNT', dialogCount);
  56 |   }
  57 | 
  58 |   expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  59 | });
  60 | 
```