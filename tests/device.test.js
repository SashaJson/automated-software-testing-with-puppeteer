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

    it('0. Desktop device Test', async () => {

        await page.setViewport({width: 1650, height: 1050});
        await page.goto('https://www.example.com');
        await page.waitForTimeout(5000);

    });

    it('1. Table device Test', async () => {

        const table = puppeteer.devices['iPad landscape'];
        await page.emulate(table);
        await page.goto('https://www.example.com');
        await page.waitForTimeout(5000);

    });

    it('2. Mobile device Test', async () => {

        const mobile = puppeteer.devices['iPhone X'];
        await page.emulate(mobile);
        await page.goto('https://www.example.com');
        await page.waitForTimeout(5000);

    });

});