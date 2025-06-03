# Test info

- Name: User Registration test
- Location: D:\PWTS_SDET\opencartplaywright\tests\AccountRegistration.spec.ts:19:5

# Error details

```
Error: locator.check: Error: Not a checkbox or radio button
Call log:
  - waiting for locator('input[value=\'Continue\']')
    - locator resolved to <input type="submit" value="Continue" class="btn btn-primary"/>

    at RegistrationPage.clickContinue (D:\PWTS_SDET\opencartplaywright\pages\RegistrationPage.ts:75:32)
    at D:\PWTS_SDET\opencartplaywright\tests\AccountRegistration.spec.ts:44:28
```

# Page snapshot

```yaml
- navigation:
  - button "$ Currency ":
    - strong: $
    - text: Currency 
  - list:
    - listitem:
      - link "":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
      - text: "123456789"
    - listitem:
      - link " My Account":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/account
    - listitem:
      - link " Wish List (0)":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
    - listitem:
      - link " Shopping Cart":
        - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
    - listitem:
      - link " Checkout":
        - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
- banner:
  - heading "Qafox.com" [level=1]:
    - link "Qafox.com":
      - /url: https://tutorialsninja.com/demo/index.php?route=common/home
  - textbox "Search"
  - button ""
  - button " 0 item(s) - $0.00"
- navigation:
  - list:
    - listitem:
      - link "Desktops":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
    - listitem:
      - link "Laptops & Notebooks":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
    - listitem:
      - link "Components":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
    - listitem:
      - link "Tablets":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
    - listitem:
      - link "Software":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
    - listitem:
      - link "Phones & PDAs":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
    - listitem:
      - link "Cameras":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
    - listitem:
      - link "MP3 Players":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
- list:
  - listitem:
    - link "":
      - /url: https://tutorialsninja.com/demo/index.php?route=common/home
  - listitem:
    - link "Account":
      - /url: https://tutorialsninja.com/demo/index.php?route=account/account
  - listitem:
    - link "Register":
      - /url: https://tutorialsninja.com/demo/index.php?route=account/register
- heading "Register Account" [level=1]
- paragraph:
  - text: If you already have an account with us, please login at the
  - link "login page":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/login
  - text: .
- group "Your Personal Details":
  - text: Your Personal Details * First Name
  - textbox "* First Name": Maritza
  - text: "* Last Name"
  - textbox "* Last Name": Durgan
  - text: "* E-Mail"
  - textbox "* E-Mail": Jeramie.Dicki@hotmail.com
  - text: "* Telephone"
  - textbox "* Telephone": (529) 701-8569 x56273
- group "Your Password":
  - text: Your Password * Password
  - textbox "* Password": 2g6bUXbtP3xZXwp
  - text: "* Password Confirm"
  - textbox "* Password Confirm": 2g6bUXbtP3xZXwp
- group "Newsletter":
  - text: Newsletter Subscribe
  - radio "Yes"
  - text: "Yes"
  - radio "No" [checked]
  - text: "No"
- text: I have read and agree to the
- link "Privacy Policy":
  - /url: https://tutorialsninja.com/demo/index.php?route=information/information/agree&information_id=3
- checkbox [checked]
- button "Continue"
- complementary:
  - link "Login":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/login
  - link "Register":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/register
  - link "Forgotten Password":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
  - link "My Account":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/account
  - link "Address Book":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/address
  - link "Wish List":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
  - link "Order History":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/order
  - link "Downloads":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/download
  - link "Recurring payments":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
  - link "Reward Points":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
  - link "Returns":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/return
  - link "Transactions":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
  - link "Newsletter":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
    - listitem:
      - link "Delivery Information":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
    - listitem:
      - link "Privacy Policy":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
    - listitem:
      - link "Terms & Conditions":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
    - listitem:
      - link "Returns":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
    - listitem:
      - link "Site Map":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
    - listitem:
      - link "Gift Certificates":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
    - listitem:
      - link "Affiliate":
        - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
    - listitem:
      - link "Specials":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/special
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/account
    - listitem:
      - link "Order History":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/order
    - listitem:
      - link "Wish List":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
    - listitem:
      - link "Newsletter":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: http://www.opencart.com
    - text: Qafox.com © 2025
```

# Test source

```ts
   1 | import { Page, Expect, Locator, expect } from "@playwright/test";
   2 |
   3 | export class RegistrationPage{
   4 |
   5 |     private readonly page: Page;
   6 |
   7 |     //Locators using CSS selectors
   8 |     private readonly txtFirstName: Locator;
   9 |     private readonly txtLastName: Locator;
   10 |     private readonly txtEmail: Locator;
   11 |     private readonly txtTelephone: Locator;
   12 |     private readonly txtPassword: Locator;
   13 |     private readonly txtConfirmPassword: Locator;
   14 |     private readonly chkdPolicy: Locator;
   15 |     private readonly btnContinue: Locator;
   16 |     private readonly msgConfirmation: Locator;
   17 |
   18 |     constructor(page: Page)
   19 |     {
   20 |       this.page=page;
   21 |
   22 |       //Initialize Locators with CSS selectors
   23 |       //Use 'SelectorHub' option of Getting Multiple locators in a page for multiple elements with each click on element
   24 |       this.txtFirstName=page.locator("#input-firstname");
   25 |       this.txtLastName=page.locator("#input-lastname");
   26 |       this.txtEmail=page.locator("#input-email");
   27 |       this.txtTelephone=page.locator("#input-telephone");
   28 |       this.txtPassword=page.locator("#input-password");
   29 |       this.txtConfirmPassword=page.locator("#input-confirm");
   30 |       this.chkdPolicy=page.locator("input[name='agree']");
   31 |       this.btnContinue=page.locator("input[value='Continue']");
   32 |       this.msgConfirmation=page.locator("h1:has-text('Your Account Has Been Created!')");
   33 |     }
   34 |
   35 |     /* Set the firstname in the registration form
   36 |     @param fname - First name to enter
   37 |     */
   38 |     async setFirstName(fname: string):Promise<void>
   39 |     {
   40 |         await this.txtFirstName.fill(fname);
   41 |     }
   42 |
   43 |     async setLastName(lname: string):Promise<void>
   44 |     {
   45 |         await this.txtLastName.fill(lname);
   46 |     }
   47 |
   48 |     async setEmail(email: string):Promise<void>
   49 |     {
   50 |         await this.txtEmail.fill(email);
   51 |     }
   52 |
   53 |     async setTelephone(tel: string):Promise<void>
   54 |     {
   55 |         await this.txtTelephone.fill(tel);
   56 |     }
   57 |
   58 |     async setPassword(pwd: string):Promise<void>
   59 |     {
   60 |         await this.txtPassword.fill(pwd);
   61 |     }
   62 |
   63 |     async setConfirmPassword(pwd: string):Promise<void>
   64 |     {
   65 |         await this.txtConfirmPassword.fill(pwd);
   66 |     }
   67 |
   68 |     async setPrivacyPolicy():Promise<void>
   69 |     {
   70 |         await this.chkdPolicy.check();
   71 |     }
   72 |
   73 |     async clickContinue():Promise<void>
   74 |     {
>  75 |         await this.btnContinue.check();
      |                                ^ Error: locator.check: Error: Not a checkbox or radio button
   76 |     }
   77 |
   78 |     async getConfirmationMsg():Promise<string>
   79 |     {
   80 |         return await this.msgConfirmation.textContent() ?? ''; //CHECK WITH SIR WHAT THIS IS??? ( ?? '' in the end)
   81 |     }
   82 |
   83 |     //Complete registration workflow in one method using Objects
   84 |     async completeRegistration(userData: {
   85 |       firstName: string;
   86 |       lastName: string;
   87 |       email: string;
   88 |       telephone: string;
   89 |       password: string;
   90 |     }): Promise<void> {
   91 |         await this.setFirstName(userData.firstName);
   92 |         await this.setLastName(userData.lastName);
   93 |         await this.setEmail(userData.email);
   94 |         await this.setTelephone(userData.telephone);
   95 |         await this.setPassword(userData.password);
   96 |         await this.setConfirmPassword(userData.password);
   97 |         await this.setPrivacyPolicy();
   98 |         await this.clickContinue();
   99 |         await expect(this.msgConfirmation).toBeVisible();
  100 |     }
  101 |
  102 | }
```