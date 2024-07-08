import { Locator, Page, expect } from "@playwright/test";

export class FindFoxPage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;

    readonly imageFox: Locator;
    readonly gratulationText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});

        this.imageFox = page.getByText("🦊", {exact: true});
        this.gratulationText = page.getByText(" Gratuluji! Tvůj úkol je splněn! Vychutnej si ohňostroj s 🦊 ");
    }
}
