import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Loading", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/loading.html");
    })

    test("Loading animation is shown after clicking the button", async ({ page }) => {
        await pages.LoadingPage.showButton.click();

        await expect(pages.LoadingPage.loadingSpinner).toBeVisible();
    })

    test("Loading of the qa secret after clicking the button", async ({ page }) => {
        await pages.LoadingPage.showButton.click();
        await page.waitForTimeout(10000);
        
        await expect(pages.LoadingPage.qaSecret).toBeVisible();
    })

    test("Multiple clicking on the button show just one secret", async ({ page }) => {
        await pages.LoadingPage.showButton.click();
        await page.waitForTimeout(10000);
        await pages.LoadingPage.showButton.click();
        await page.waitForTimeout(10000);

        await expect(pages.LoadingPage.qaSecret).toHaveCount(1);
    })
})
