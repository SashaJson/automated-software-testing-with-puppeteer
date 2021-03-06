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

    test('0. Homepage snapshot', async () => {

        await page.goto('https://example.com');
        const image = await page.screenshot();
        expect(image).toMatchSnapshot();

    });

    test('1. Single element snapshot', async () => {

        await page.goto('https://example.com');
        const h1 = await page.waitForSelector('h1');
        const image = await h1.screenshot();
        expect(image).toMatchSnapshot();

    });

}); // describe (Snapshot testing)