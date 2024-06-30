import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Table", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await page.goto("https://automat.ostrava.digital/table.html");
    })
})