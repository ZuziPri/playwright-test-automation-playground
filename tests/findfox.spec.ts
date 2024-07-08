import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("FindFox", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/findfox.html");
    })

    test("Find a fox and the fox will stay on the screen.", async ({ page }) => {
        await pages.FindFoxPage.imageFox.click({timeout: 10000});

        await expect(pages.FindFoxPage.imageFox).toBeVisible();
    })
    
    test("Find the fox and the congratulation text is visible.", async ({ page }) => {
        await pages.FindFoxPage.imageFox.click({timeout: 5000});

        await expect(pages.FindFoxPage.gratulationText).toBeVisible();
    })

    test("Find the fox and the congratulation text has correct text.", async ({ page }) => {
        await pages.FindFoxPage.imageFox.click({timeout: 5000});

        await expect(pages.FindFoxPage.gratulationText).toHaveText("Gratuluji! Tvůj úkol je splněn! Vychutnej si ohňostroj s 🦊");
    })
})