import {step} from 'mocha-steps';

import Page from '../builder';

describe('Mocha steps demo', () => {

    let page;

    before(async () => {
        page = await Page.builder('Desktop');
    });

    after(async () => await page.close());

    step('should load google homepage', async () => {
        await page.goto('https://www.google.com/');
    });

    step('step 2 should fail', async () => {
        await page.waitForSelector('#FAIL');
    });

    step('step 3 should fail', async () => {
        console.log('From step 3');
    });

    step('step 4 should fail', async () => {
        console.log('From step 4');
    });

});