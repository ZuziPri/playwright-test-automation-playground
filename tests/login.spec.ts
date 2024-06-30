import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Login", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await page.goto("https://automat.ostrava.digital/login.html");
  });

  test("log in - happy path, obrázek jde vidět", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("budoucnost");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.imageOwl).toBeVisible();

  });

  test("log in - happy path, objeví se nápis LOGGED!", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("budoucnost");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.loggedHeader).toBeVisible();

  });

  test("log in - happy path, objeví se nápis, který má text LOGGED!", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("budoucnost");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.loggedHeader).toHaveText("LOGGED!");

  });

  test("log in - happy path, objeví se odstavec", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("budoucnost");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.paragraph).toBeVisible();

  });

  test("log in - happy path, objeví se odstavec s textem", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("budoucnost");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.paragraph).toHaveText("Jsi přihlášená! Dobrá práce! Tak. Teď ještě doprogramovat ověření, že jsi přihlášená.");

  });

  test("log in, invalid password, inputPassword to be empty", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("123456");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.inputPassword).toBeEmpty();

  });

  test("log in, invalid password, toast to be visible", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("123456");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.errorToast).toBeVisible();

  });

  test("log in, invalid password, toast to Have text", async ({ page }) => {
    await pages.LoginPage.inputUsername.fill("czechitas");
    await pages.LoginPage.inputPassword.fill("123456");
    await pages.LoginPage.buttonLogIn.click();

    await expect(pages.LoginPage.errorToast).toHaveText("Špatné heslo!");

  });
});
