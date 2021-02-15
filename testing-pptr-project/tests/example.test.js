const puppeteer = require('puppeteer');
const expect = require('chai').expect;

const config = require('../lib/config');

const click = require('../lib/helpers').click;
const typeText = require('../lib/helpers').typeText;
const loadUrl = require('../lib/helpers').loadUrl;
const waitForText = require('../lib/helpers').waitForText;
const pressKey = require('../lib/helpers').pressKey;
const shouldExist = require('../lib/helpers').shouldExist;
const getCount = require('../lib/helpers').getCount;

const utils = require('../lib/utils');

describe('My puppeteer test', () => {

    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({
            headless: config.isHeadless,
            slowMo: config.slowMo,
            devtools: config.isDevtools,
            timeout: config.launchTimeout
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(config.waitingTimeout);
        await page.setViewport({
            width: config.viewportWidth,
            height: config.viewportHeight
        });
    });

    after(async () => {
        await browser.close();
    });

    const LOGIN_FORM = '#login_form';

    describe('Login Test', () => {

        it('should navigate to homepage', async () => {
            await loadUrl(page, config.baseUrl);
            await shouldExist(page, '#online-banking-features');
        });

        it('should click on signin button', async () => {
            await click(page, '#signin_button');
            await shouldExist(page, LOGIN_FORM);
        });

        it('should submit login form', async () => {
            await typeText(page, utils.generateID(), '#user_login');
            await typeText(page, utils.generateNumbers(), '#user_password');
            await click(page, '.btn-primary');
        });

        it('should get error message', async () => {
            await waitForText(page, 'body', 'Login and/or password are wrong');
            await shouldExist(page, LOGIN_FORM);
        });

    }); // describe (Login Test)

    describe('Search Test', () => {

        it('should navigate to homepage', async () => {
            await loadUrl(page, config.baseUrl);
            await shouldExist(page, '#online_banking_features');
        });

        it('should submit search phrase', async () => {
            await typeText(page, 'hello world', '#searchTerm');
            await pressKey(page, 'Enter');
        });

        it('should display search result', async () => {
            await waitForText(page, 'h2', 'Search Result');
            await waitForText(page, 'body', 'No results were found for the query');
        });

    }); // describe (Search Test)

    describe('Navbar Links Test', () => {

        it('should navigate to homepage', async () => {
            await loadUrl(page, config.baseUrl);
            await shouldExist(page, '#online_banking_features');
        });

        it('should have correct number of links', async () => {
            const numberOfLinks = await getCount(page, '#pages-nav > li');
            expect(numberOfLinks).to.equal(3);
        });

    }); // describe (Navbar Links Test)

    describe('Feedback Test', () => {

        it('should navigate to homepage', async () => {
            await loadUrl(page, config.baseUrl);
            await shouldExist(page, '#online_banking_features');
        });

        it('should click on feedback link', async () => {
            await click(page, '#feedback');
            await shouldExist(page, 'form');
        });

        it('should submit feedback form', async () => {
            await typeText(page, 'Sasha', '#name');
            await typeText(page, utils.generateEmail(), '#email');
            await typeText(page, 'Just Subject', '#subject');
            await typeText(page, 'Just a comment', '#cooment');
            await click(page, 'input[type="submit"]');
        });

        it('should display success message', async () => {
            await shouldExist(page, '#feedback-title');
            await waitForText(page, 'body', 'Thank you for comments');
        });

    }); // describe (Feedback Test)

    describe('Forgotten Password', () => {

        it('should navigate to homepage', async () => {
            await loadUrl(page, config.baseUrl);
            await shouldExist(page, '#online_banking_features');
        });

        it('should load forgotten password form', async () => {
            await loadUrl(page, 'http://zero.webappsecurity.com/forgot-password.html');
            await waitForText(page, 'h3', 'Forgotten Password');
        });

        it('should submit email', async () => {
            await typeText(page, utils.generateEmail(), '#user_email');
            await click(page, '.btn-primary');
        });

        it('should display success message', async () => {
            await waitForText(
                page,
                'body',
                'Your password will be sent to the following email'
            );
        });

    }); // describe (Forgotten Password)

});