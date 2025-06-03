import { Page, Expect, Locator, expect } from "@playwright/test";

export class RegistrationPage{

    private readonly page: Page;

    //Locators using CSS selectors
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkdPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConfirmation: Locator;

    constructor(page: Page)
    {
      this.page=page;

      //Initialize Locators with CSS selectors
      //Use 'SelectorHub' option of Getting Multiple locators in a page for multiple elements with each click on element
      this.txtFirstName=page.locator("#input-firstname");
      this.txtLastName=page.locator("#input-lastname");
      this.txtEmail=page.locator("#input-email");
      this.txtTelephone=page.locator("#input-telephone");
      this.txtPassword=page.locator("#input-password");
      this.txtConfirmPassword=page.locator("#input-confirm");
      this.chkdPolicy=page.locator("input[name='agree']");
      this.btnContinue=page.locator("input[value='Continue']");
      this.msgConfirmation=page.locator("h1:has-text('Your Account Has Been Created!')");
    }

    /* Set the firstname in the registration form
    @param fname - First name to enter
    */
    async setFirstName(fname: string):Promise<void>
    {
        await this.txtFirstName.fill(fname);
    }

    async setLastName(lname: string):Promise<void>
    {
        await this.txtLastName.fill(lname);
    }

    async setEmail(email: string):Promise<void>
    {
        await this.txtEmail.fill(email);
    }

    async setTelephone(tel: string):Promise<void>
    {
        await this.txtTelephone.fill(tel);
    }

    async setPassword(pwd: string):Promise<void>
    {
        await this.txtPassword.fill(pwd);
    }

    async setConfirmPassword(pwd: string):Promise<void>
    {
        await this.txtConfirmPassword.fill(pwd);
    }

    async setPrivacyPolicy():Promise<void>
    {
        await this.chkdPolicy.check();
    }

    async clickContinue():Promise<void>
    {
        await this.btnContinue.click();
    }

    async getConfirmationMsg():Promise<string>
    {
        return await this.msgConfirmation.textContent() ?? ''; //CHECK WITH SIR WHAT THIS IS??? ( ?? '' in the end)
    }

    //Complete registration workflow in one method using Objects
    async completeRegistration(userData: {
      firstName: string;
      lastName: string;
      email: string;
      telephone: string;
      password: string;
    }): Promise<void> {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setTelephone(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.setPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msgConfirmation).toBeVisible();
    }

}