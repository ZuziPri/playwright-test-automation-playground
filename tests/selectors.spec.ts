import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Selectors", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/selectors.html");
    })

    test("finding the element acording to the atribute data-qa", async ({ page }) => {
        await expect(pages.SelectorsPage.atributDataqa).toBeVisible();
    })

    test("finding the element with id zapletka", async ({ page }) => {
        await expect(pages.SelectorsPage.idZapletka).toBeVisible();
    })

    test("finding the elements with this-is-interesting-paragraph class 1", async ({ page }) => {
        await expect(pages.SelectorsPage.tridaIntPar1).toBeVisible();
    })

    test("finding the elements with this-is-interesting-paragraph class 2", async ({ page }) => {
        await expect(pages.SelectorsPage.tridaIntPar2).toBeVisible();
    })

    test("finding the elements with this-is-interesting-paragraph class in one test case", async ({ page }) => {
        await expect(pages.SelectorsPage.tridaIntPar1).toBeVisible();
        await expect(pages.SelectorsPage.tridaIntPar2).toBeVisible();
    })

    test("finding the element of image", async ({ page }) => {
        await expect(pages.SelectorsPage.img).toBeVisible();
    })

    test("counting the paragraphs", async ({ page }) => {
        await expect(pages.SelectorsPage.paragraph).toHaveCount(16);
    })


    test("likes", async ({ page }) => {
        await pages.SelectorsPage.likeButton.click({clickCount: 4});

        await expect(pages.SelectorsPage.likesCounter).toHaveText("4");

    })
})