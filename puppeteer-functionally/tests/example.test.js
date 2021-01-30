'use strict';

const puppeteer = require('puppeteer');

describe('My first puppeteer test', () => {

    it('0. should launch the browser', async () => {

        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false
        });

        const page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example');
        await browser.close();

    });

});