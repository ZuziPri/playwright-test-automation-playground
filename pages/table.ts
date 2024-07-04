import { Locator, Page, expect } from "@playwright/test";

export class TablePage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;

    readonly table: Locator;
    readonly awesomenessLvlUnicorn: Locator;
    readonly awesomenessLvlOrangutanLocator: Locator;
    readonly furSoftnessFox: Locator;
    readonly whaleSize: Locator;
    readonly rows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});

        this.table = page.getByRole("table");
        this.awesomenessLvlUnicorn = page.getByRole("cell", { name: "999"}).first()
        //this.awesomenessLvlUnicorn = page.locator("table", tr:nth-child(7), td:nth-child(3)")
        this.awesomenessLvlOrangutanLocator = page.getByRole("cell", { name: "37" });
        this.furSoftnessFox = page.getByRole("cell", { name: "44"});
        this.whaleSize = page.getByRole("cell", { name: "OBROVITÁNSKÁ"});
        this.rows = page.locator("data-row-index");

    }
    async visit() {
        await this.page.goto("/table.html");
    }
}