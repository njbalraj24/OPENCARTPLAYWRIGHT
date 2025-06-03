/* 
Test Case: Account Registration

Steps:
1. Navigate to application URL
2. Go to 'My Account' and click 'Register'
3. Fill in Registration details with Random data
4. Agree to privacy policy and submit the form
5. Validate the confirmation message
*/

import{expect, test} from '@playwright/test'

import { HomePage } from '../pages/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../test.config'

test.skip('User Registration test',async({page})=>{

    const config=new TestConfig();
    //1. Navigate to application URL
    await page.goto(config.appUrl); 

    //When ever we create an Object for any page class, we should pass 'page' parameter
    const homePage=new HomePage(page);
    //2. Go to 'My Account' and click 'Register'
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    //3. Fill in Registration details with Random data
    const registrationPage=new RegistrationPage(page);
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
    const confirmationMsg=await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!');

    await page.waitForTimeout(4000);

})