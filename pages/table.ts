import { Locator, Page, expect } from "@playwright/test";

export class TablePage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});
    }
    async visit() {
        await this.page.goto("/table.html");
    }
}