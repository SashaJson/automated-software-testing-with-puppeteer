'use strict';

const puppeteer = require('puppeteer');
const {toMatchImageSnapshot} = require('jest-image-snapshot');

expect.extend({toMatchImageSnapshot});

describe('Snapshot testing', () => {

    let browser;
    let page;

    beforeAll(async () => {

        browser = await puppeteer.launch({
            headless: true
        });

        page = await browser.newPage();

    });

    afterAll(async () => browser.close());

    test('0. homepage snapshot', async () => {
        await page.goto('https://example.com');
        const image = await page.screenshot();
        expect(image).toMatchSnapshot();
    });

}); // describe (Snapshot testing)