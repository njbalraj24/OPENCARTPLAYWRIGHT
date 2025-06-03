/* 
Test Case 2: Login with valid credentials

Steps:
1. Navigate to application URL
2. Navigate to login page via Home page
3. Enter valid credentials and log in
4. Verify successful login by checking 'My Account' page presence
*/

import{test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { MyAccountPage } from '../pages/MyAccountPage'
import { TestConfig } from '../test.config'

let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;

//This hook runs before each test
test.beforeEach(async({page})=>{
 config = new TestConfig(); //load config (URL, credentials)
 await page.goto(config.appUrl); //Navigate to base URL

 //Initialize page objects
 homePage = new HomePage(page);
 loginPage = new LoginPage(page);
 myAccountPage = new MyAccountPage(page);
});

//Optional clean up after each test
test.afterEach(async({page})=>{
  await page.close(); //Close browser tab (good practice in local/dev run)
})

test('User Login test @master @sanity @regression',async()=>{

    //2. Navigate to login page via Home page
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //3. Enter valid credentials and log in
    /* await loginPage.setEmail(config.email);
    await loginPage.setEmail(config.password);  
    await loginPage.clickLogin(); */
    //OR
    await loginPage.login(config.email , config.password);

    //4. Verify successful login by checking 'My Account' page presence
    const isLoggedIn=await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();
})