/* 
Test Case 1: Account Registration

Steps:
1. Navigate to application URL
2. Go to 'My Account' and click 'Register'
3. Fill in Registration details with Random data
4. Agree to privacy policy and submit the form
5. Validate the confirmation message
*/

import { expect, test } from '@playwright/test'

import { HomePage } from '../pages/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../test.config'

//Keeping global to access in every method
let homePage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl); //1. Navigate to application URL
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
})

test.afterEach(async ({ page }) => {
    //Optional
    await page.close();
    await page.waitForTimeout(4000);
})

test('User Registration test @master @sanity @regression', async () => {

    //2. Go to 'My Account' and click 'Register'
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    //3. Fill in Registration details with Random data

    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    //Why same password - because both 'setPassword' and 'setConfirmPassword' should have same data
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //5. Validate the confirmation message
    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!');

})