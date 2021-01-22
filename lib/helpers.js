'use strict';

module.exports = {

    click: async (
        page,
        selector
    ) => {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`);
        }
    },

    getText: async (
        page,
        selector
    ) => {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, element => element.innerHTML);
        } catch (error) {
            throw new Error(`Can not get text from selector: ${selector}`);
        }
    },

    getCount: async (
        page,
        selector
    ) => {
        try {
            await page.waitForSelector(selector);
            return await page.$$eval(selector, element => element.length);
        } catch (error) {
            throw new Error(`Can not get count of selector: ${selector}`);
        }
    }

}