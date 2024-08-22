import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";
import { TIMEOUT } from "dns";

test.describe("Inputs", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/inputs.html");
    })

    test("Clicking on the left corner of the range the lvlAwesomeness shows 0", async ({ page }) => {
        await pages.InputsPage.setRange.click({ position: {x: 0, y: 0}});
        await page.waitForTimeout(2000);
        await expect(pages.InputsPage.lvlAwesomeness).toHaveText("0");
    })

    test("Clicking the right corner of the range, the lvlAwesomeness shows 100", async ({ page }) => {
        await pages.InputsPage.setRange.click({position: {x: 100, y: 0}})
        await page.waitForTimeout(2000);
        await expect(pages.InputsPage.lvlAwesomeness).toHaveText("100");
    })

    test("sdflkdsjfi lsidflsije", async ({ page }) => {
        await pages.InputsPage.setRange.click({position: {x: 50, y: 0}});

        await expect(pages.InputsPage.lvlAwesomeness).toHaveText("50");
    })

    test.only("Filling the Secret Password - happy path", async ({ page }) => {
        await pages.InputsPage.inputSecretPasword.fill("5775465");
        await pages.InputsPage.buttonCheckNumber.click();

        await expect(pages.InputsPage.superText).toBeVisible();
    })

    

})