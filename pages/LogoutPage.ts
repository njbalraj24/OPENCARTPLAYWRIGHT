import { Page, Locator } from "@playwright/test";
import { HomePage } from "./HomePage";

export class LogoutPage {
  private readonly page: Page;
  private readonly btnContinue: Locator;

  constructor(page: Page)
  {
    this.page=page;
    this.btnContinue = page.locator(".btn.btn-primary");
  }

  //Click the continue button after logout
  async clickContinue()
  {
    await this.btnContinue.click();
    return new HomePage(this.page);
  }

  //Verify if continue button is visible
  async isContinueButtonVisible()
  {
    return await this.btnContinue.isVisible();
  }


}

