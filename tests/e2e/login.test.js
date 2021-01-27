'use strict';

const puppeteer = require('puppeteer');

describe('Device Emulation', () => {

    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false
        });

        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);

    });

    after(async () => {
        await browser.close();
    });

    it('0. Login Test - Invalid Credentials', async () => {



    });

    it('1. Login Test - Valid Credentials', async () => {

    });

});