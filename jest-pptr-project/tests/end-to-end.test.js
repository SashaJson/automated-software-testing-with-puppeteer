import HomePage from "../pages/homePage";
import TopBar from "../pages/components/topBar";
import LoginPage from "../pages/loginPage";
import FeedbackPage from "../pages/feedbackPage";

describe('Example test', () => {

    let homepage;
    let feedback;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
        feedback = new FeedbackPage();
        topbar = new TopBar();

    });

    it('0. Homepage should work', async () => {
        await homepage.visit();
    });

    it('1. navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it('2. Feedback should work', async () => {
        await feedback.visit();
        await feedback.isFeedbackFormDisplayed();
        await feedback.submitFeedback(
            'Sasha',
            'sashashulha@gmail.com',
            'subject',
            'comment'
        );
        await feedback.wait(5000);
    });

});