import { Locator, Page, expect } from "@playwright/test";

export class ModalPage {
    readonly page: Page;
    readonly navigationBar: string;
    readonly header: Locator;

    readonly secretButton: Locator;
    readonly nameSecret: Locator;
    readonly textSecret: Locator;
    readonly cross: Locator;
    readonly closingButton: Locator;
    readonly shadowMask: Locator;
    readonly wordSkarpa: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationBar = "nav";
        this.header = page.getByRole("heading", { name: "Tlačítka"});

        this.secretButton = page.getByText("Odhal mi tajemství!");
        this.nameSecret = page.getByText("Jednorožeč a pohádka");
        this.textSecret = page.locator(".modal-body");
        this.cross = page.locator(".close");
        this.closingButton = page.locator(".btn-danger");
        this.shadowMask = page.getByRole("dialog", {exact: true});
        this.wordSkarpa = page.getByText("Škarpa?");
    }
    async visit() {
        await this.page.goto("/modal.html");
    }
}