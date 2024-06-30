import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Hover", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/hover.html");
    })
    
    test("imgCat is visible", async ({ page }) => {
        await expect(pages.HoverPage.imgCat).toBeVisible();
    })

    test("imgCat - when pointing with mouse on it, it has popup underneath", async ({ page }) => {
        await page.getByAltText("Kočka").hover();

        await expect(pages.HoverPage.popupCat).toBeVisible();
    })

    test("imgCat - when pointing with mouse on it, it has popup underneath with text", async ({ page }) => {
        await page.getByAltText("Kočka").hover();

        await expect(pages.HoverPage.popupCat).toHaveText("Kočka A jaké krásné očička má!");
    })

    test("imgDog is visible", async ({ page }) => {
        await expect(pages.HoverPage.imgDog).toBeVisible();
    })

     test("imgDog - when pointing with mouse on it has popup underneath", async ({ page }) => {
        await page.getByAltText("Pes").hover();

        await expect(pages.HoverPage.popupDog).toBeVisible();
    })

    test("imgDog - when pointing with mouse on it has popup underneath with text", async ({ page }) => {
        await page.getByAltText("Pes").hover();

        await expect(pages.HoverPage.popupDog).toHaveText("Pes A jak je heboučký!");
    })

    test("imgUnicorn is visible", async ({ page }) => {
        await page.getByAltText("Jednorožec").hover();

        await expect(pages.HoverPage.imgUnicorn).toBeVisible();
    })

    test("imgUnicorn - when pointing with mouse on it, it has popup underneath", async ({ page }) => {
        await page.getByAltText("Jednorožec").hover();

        await expect(pages.HoverPage.popupUnicorn).toBeVisible();   
    })

    test("imgUnicorn - when pointing with mouse on it, it has popup underneath with text", async ({ page }) => {
        await page.getByAltText("Jednorožec").hover();

        await expect(pages.HoverPage.popupUnicorn).toHaveText("Jednorožec A jak je husťácký!");   
    })
})
