import path from 'path';
import fs from 'fs';
import { test } from '@playwright/test';
import * as loginPage from '../pages/Login'

const authSessionFile = path.resolve(__dirname, '../../playwright/.auth/user.json');
const loginDataFile = path.resolve(__dirname, '../../playwright/.auth/loginData.json');

test('authenticate', async ({ page }) => {
    const loginData = JSON.parse(fs.readFileSync(loginDataFile, 'utf-8')) as {
        email: string,
        pass: string
    };

    await page.goto('/login')

    await loginPage.login(
        page,
        loginData.email,
        loginData.pass
    )
    await loginPage.verifySuccessfulLogin(page)

    await page.context().storageState({
        path: authSessionFile
    })
  
})

