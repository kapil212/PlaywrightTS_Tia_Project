import {test,expect} from './fixtures';
import { LoginPage } from '../pages/LoginPage';

test('Login with Valid Credentials',async ({page})=>{

    const email=process.env.TEST_USER_EMAIL;
    const password=process.env.TEST_USER_PASSWORD;


    if(!email||!password){
        throw new Error('TEST_USER_EMAIL or TEST_USER_PASSWORD missing — check your .env file');
    }

      const loginPage=new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(email,password);
      await loginPage.loggedInVerify();
      await page.screenshot({path:'final.png'});















  //   await page.goto('/login',{waitUntil:'domcontentloaded'});

  //   await expect(page.getByText('Login to your account')).toBeVisible();

  // //await page.getByPlaceholder('Name').fill()
  // await page.locator('//div[@class="login-form"]//input[@type="email"]').fill(email);
  // await page.getByPlaceholder('Password').fill(password);
  // await page.getByRole('button',{name:'Login'}).click();

  // await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();






})