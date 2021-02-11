const puppeteer = require('puppeteer');

(async () => {
    //faking geolocations
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //grant permissions for geolocation change
    const context = await browser.defaultBrowserContext();
    await context.overridePermissions('https://pptr.dev', ['geolocation']);

    await page.goto('https://pptr.dev');
    await page.waitForSelector('title');

    //change geolocation to the north pole
    await page.setGeolocation({latitude: 90, longitude: 0});

    await browser.close();
})();