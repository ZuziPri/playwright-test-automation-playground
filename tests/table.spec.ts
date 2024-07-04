import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Table", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/table.html");
    })

    test("The table is visible", async ({ page }) => {
        await expect(pages.TablePage.table).toBeVisible();
    })

    test("The level of awasomeness of a unicorn is always 999", async ({ page }) => {
        await expect(pages.TablePage.awesomenessLvlUnicorn).toHaveText("999");
    })

    test("The level of awesomeness of orangutan to be in the range of 30 to 40", async ({ page }) => {
        let awesomenessLvlOrangutan = await expect(pages.TablePage.awesomenessLvlOrangutanLocator).toHaveValues([/30/, /31/, /32/, /33/, /34/, /35/, /36/, /37/, /38/, /39/, /40/]);
        await expect(awesomenessLvlOrangutan).toBeGreaterThanOrEqual(30);
        await expect(awesomenessLvlOrangutan).toBeLessThanOrEqual(40);
    })

    test("Fur softness of a fox is in the range 40 - 50", async ({ page }) => {

    })

    test("The size of a whale is OBROVITÁNSKÁ", async ({ page }) => {
        await expect(pages.TablePage.whaleSize).toHaveText("OBROVITÁNSKÁ");
    })

    test.only("Number of the rows is 7", async ({ page }) => {
        await expect(pages.TablePage.rows).toHaveCount(7);
    })
})