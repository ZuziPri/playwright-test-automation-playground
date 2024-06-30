import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogIn: Locator;
  readonly imageOwl: Locator;
  readonly loggedHeader: Locator;
  readonly paragraph: Locator;
  readonly errorToast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka"});

    this.inputUsername = page.getByPlaceholder("mamamia@czechitas.cz");
    this.inputPassword = page.getByPlaceholder("your awesome password");
    this.buttonLogIn = page.locator("#login-submit");
    this.imageOwl = page.getByAltText("Frajersky vyhlížející sova");
    this.loggedHeader = page.getByText("LOGGED!");
    this.paragraph = page.getByText("Jsi přihlášená! Dobrá práce! Tak. Teď ještě doprogramovat ověření, že jsi přihlášená.");
    this.errorToast = page.getByRole("alert");
  }

  async visit() {
    await this.page.goto("/login.html");
  }
}