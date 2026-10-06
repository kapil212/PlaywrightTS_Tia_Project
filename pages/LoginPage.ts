import { Page,Locator,expect } from "@playwright/test";

export class LoginPage {

    private page:Page;
    private emailInput:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;
    private loggedIn:Locator;


    constructor(page:Page){
        this.page=page;
        this.emailInput=page.locator('//div[@class="login-form"]//input[@type="email"]');
        this.passwordInput=page.getByPlaceholder('Password');
        this.loginButton=page.getByRole('button',{name:'Login'});
        this.loggedIn= page.locator('a:has-text("Logged in as")');

    }


    async goto(){
        await this.page.goto('/login',{waitUntil:'domcontentloaded'});
    }

    async login(email:string,password:string){
            await this.emailInput.fill(email);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
    }

    async loggedInVerify(){
        await expect(this.loggedIn).toBeVisible();
    }
}