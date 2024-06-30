import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Cats", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await page.goto("https://automat.ostrava.digital/adding.html");
  });

  test("button Pridej kocku adds cat card", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    
    await expect(pages.catsPage.catCards).toBeVisible();
  });

  test("button Pridej kocku adds cat, counter changes to 1", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    
    await expect(pages.catsPage.counter).toHaveText("1");
  });

  test("button Pridej kocku adds two cat cards", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    
    await expect(pages.catsPage.catCards).toHaveCount(2);
  });

  test("button Pridej kocku adds two cat, counter shows 2", async ({ page }) => {
    await pages.catsPage.addCatButton.click()
    await pages.catsPage.addCatButton.click()
    
    await expect(pages.catsPage.counter).toHaveText("2");
  });

  test("button Odeber kocku removes one cat card", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.removeCaButton.click();
    
    await expect(pages.catsPage.catCards).toHaveCount(0);
  });

  test("button Odeber kocku removes one cat card, counter shows 0", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.removeCaButton.click();
    
    await expect(pages.catsPage.counter).toHaveText("0");
  });

  test("button Apokalypsa! remove all cats card", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.apocalypseButton.click();
    
    await expect(pages.catsPage.catCards).toHaveCount(0);
  });

  test("cat counter works when adding a cat", async ({ page }) => {
    await pages.catsPage.addCatButton.click();

    
    await expect(pages.catsPage.counter).toHaveText("1");
  });

  test("cat counter works when removing a cat", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.removeCaButton.click();

    
    await expect(pages.catsPage.counter).toHaveText("1");
  });

  test("cat counter works when removing all cats", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.apocalypseButton.click();

    
    await expect(pages.catsPage.counter).toHaveText("0");
  });

  test("possible to add 20 cats - 20 cat cards appear", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    

    
    await expect(pages.catsPage.catCards).toHaveCount(20);
  })

  test("possible to add 20 cats - counter text 20", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.addCatButton.click();
    

    
    await expect(pages.catsPage.counter).toHaveText("20");
  })

  test("removing cat button enabled with at least one cat card", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    
    await expect(pages.catsPage.removeCaButton).toBeEnabled();
  })

  test("removing cat button disabled when removing last cat card", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.removeCaButton.click();

    await expect(pages.catsPage.removeCaButton).toHaveClass("btn btn-danger removing disabled");
  })

  test("Apokalypsa! button enabled with at least one cat card", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    
    await expect(pages.catsPage.apocalypseButton).toBeEnabled();
  })

  test("Apokalypsa! button disabled when removing last cat card", async ({ page }) => {
    await pages.catsPage.addCatButton.click();
    await pages.catsPage.apocalypseButton.click();
    
    await expect(pages.catsPage.apocalypseButton).toHaveClass("btn btn-danger removing disabled");
  })

});
