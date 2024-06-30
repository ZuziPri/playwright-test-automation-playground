import { Page } from "@playwright/test";
import { ButtonPage } from "./buttons";
import { CatsPage } from "./cats";
import { LoginPage } from "./login";
import { HoverPage } from "./hover";
import { SelectorsPage } from "./selectors";
import { ModalPage } from "./modal";
import { TablePage } from "./table";

export class AllPages {
  readonly buttonPage: ButtonPage;
  readonly catsPage: CatsPage;
  readonly LoginPage: LoginPage;
  readonly HoverPage: HoverPage;
  readonly SelectorsPage: SelectorsPage;
  readonly ModalPage: ModalPage;
  readonly TablePage: TablePage;
  readonly page: Page;
  

  constructor(page: Page) {
    this.page = page;
    this.buttonPage = new ButtonPage(page);
    this.catsPage = new CatsPage(page);
    this.LoginPage = new LoginPage(page);
    this.HoverPage = new HoverPage(page);
    this.SelectorsPage = new SelectorsPage(page);
    this.ModalPage = new ModalPage(page);
    this.TablePage = new TablePage(page);
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
