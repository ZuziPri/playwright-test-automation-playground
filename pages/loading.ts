import { Locator, Page, expect } from "@playwright/test";

export class LoadingPage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;

    readonly showButton: Locator;
    readonly loadingSpinner: Locator;
    readonly qaSecret: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});

        this.showButton = page.getByText("Show me the secret!");
        this.loadingSpinner = page.locator("#loading-spinner");
        this.qaSecret = page.locator(".qa-secret");
    }
}