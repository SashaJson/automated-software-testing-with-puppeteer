import BasePage from "./basePage";

export default class FeedbackPage extends BasePage {

    async visit() {
        await page.goto('https://zero.webappsecurity.com/feedback.html');
    }

    async isFeedbackFormDisplayed() {
        await page.waitForSelector('#name');
        await page.waitForSelector('#email');
        await page.waitForSelector('#subject');
        await page.waitForSelector('#comment');
    }

    async submitFeedback(
        name,
        email,
        subject,
        comment
    ) {
        await page.type('#name', name);
        await page.type('#email', email);
        await page.type('#subject', subject);
        await page.type('#comment', comment);
        await page.type('input[type="submit"]');
    }

}