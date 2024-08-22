import { Locator, Page, expect } from "@playwright/test";

export class InputsPage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;

    readonly setRange: Locator;
    readonly lvlAwesomeness: Locator;
    readonly inputSecretPasword: Locator;
    readonly buttonCheckNumber: Locator;
    readonly superText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});

        this.setRange = page.locator("#formControlRange");
        this.lvlAwesomeness = page.locator("#lvlAwesome");
        this.inputSecretPasword = page.getByPlaceholder("Secret number");
        this.buttonCheckNumber = page.locator("#checkSecretNumber");
        this.superText = page.getByText("Super secret je super správně.");
    }
}