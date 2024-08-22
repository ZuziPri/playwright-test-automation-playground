import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Modal", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/modal.html");
    })
    test("Otevři modal okno pomocí tlačítka", async ({ page }) => {
        await pages.ModalPage.secretButton.click();

        await expect(pages.ModalPage.nameSecret).toBeVisible();
        await expect(pages.ModalPage.textSecret).toBeVisible();
    })
    test("Zavři modal stisknutím tlačítka 'Skryj tajemství o jednorožci'", async ({ page }) => {
        await pages.ModalPage.secretButton.click();
        await pages.ModalPage.closingButton.click();

        await expect(pages.ModalPage.textSecret).toBeHidden();
        await expect(pages.ModalPage.nameSecret).toBeHidden();
    })
    test("Zavři Modal kliknutím na křížek v rohu", async ({ page }) => {
        await pages.ModalPage.secretButton.click();
        await pages.ModalPage.cross.click();

        await expect(pages.ModalPage.nameSecret).toBeHidden();
        await expect(pages.ModalPage.textSecret).toBeHidden();
    })
    test("Zavři modal kliknutím na šedou masku za modal oknem", async ({ page }) => {
        await pages.ModalPage.secretButton.click();
        await page.waitForTimeout(500);
        await pages.ModalPage.shadowMask.click({ position: { x: 0, y: 0}});

        await expect(pages.ModalPage.nameSecret).toBeHidden();
        await expect(pages.ModalPage.textSecret).toBeHidden();
        
    })
    test("Ověř, že text obsahuje slovo Škarpa", async ({ page }) => {
        await pages.ModalPage.secretButton.click();

        await expect(pages.ModalPage.wordSkarpa).toBeVisible();
    })
}) 