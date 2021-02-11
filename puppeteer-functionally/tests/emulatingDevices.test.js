const puppeteer = require('puppeteer');

(async () => {
    //Emulating devices
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices['iPhone X']);
    await page.goto('https://pptr.dev');
    await page.waitForTimeout(10000);
    await browser.close();
})();