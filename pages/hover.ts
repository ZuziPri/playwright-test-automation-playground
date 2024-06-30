import { Locator, Page, expect } from "@playwright/test";

export class HoverPage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;
    
    readonly imgCat: Locator;
    readonly imgDog: Locator;
    readonly imgUnicorn: Locator;
    readonly popupCat: Locator;
    readonly popupDog: Locator;
    readonly popupUnicorn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});

        this.imgCat = page.getByAltText("Kočka");
        this.imgDog = page.getByAltText("Pes");
        this.imgUnicorn = page.getByAltText("Jednorožec");
        this.popupCat = page.getByText("Kočka A jaké krásné očička má!");
        this.popupDog = page.getByText("Pes A jak je heboučký!");
        this.popupUnicorn = page.getByText("Jednorožec A jak je husťácký!")
    }

    async visit() {
        await this.page.goto("/hover.html");
      }
}