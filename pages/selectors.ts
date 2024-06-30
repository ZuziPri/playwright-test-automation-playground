import { Locator, Page, expect } from "@playwright/test";

export class SelectorsPage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;

    readonly atributDataqa: Locator;
    readonly idZapletka: Locator;
    readonly tridaIntPar1: Locator;
    readonly tridaIntPar2: Locator;
    readonly img: Locator;
    readonly likeButton: Locator;
    readonly likesCounter: Locator;
    readonly paragraph: Locator;


    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});

        this.atributDataqa = page.getByTestId("selector-by-dataQA");
        this.idZapletka = page.locator("#zapletka");
        this.tridaIntPar1 = page.getByText("Liška hrášek snědla");
        this.tridaIntPar2 = page.getByText("Dědeček s babičkou přišli domů");
        this.img = page.getByAltText("Ilustrace Budulínka");
        this.paragraph = page.locator("p")
        this.likeButton = page.getByText("Dej like!");
        this.likesCounter = page.locator("#lvlAwesome");


    }

    async visit() {
        await this.page.goto("/selectors.html");
      }
}