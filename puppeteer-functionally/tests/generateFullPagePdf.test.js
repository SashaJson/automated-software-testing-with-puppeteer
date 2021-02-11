const puppeteer = require('puppeteer');

(async () => {
    // convert page into PDF file
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com', {waitUntil: 'networkidle0'});
    await page.pdf({path: 'example.pdf', format: 'A4'});
    await browser.close();
})();