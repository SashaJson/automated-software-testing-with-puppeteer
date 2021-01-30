import HomePage from "../pages/homePage";
import TopBar from "../pages/components/topBar";
import LoginPage from "../pages/loginPage";
import FeedbackPage from "../pages/feedbackPage";

import {
    user,
    password,
    timeout
} from '../config';

describe('End to End testing', () => {

    let homepage;
    let feedback;
    let loginpage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homepage = new HomePage();
        feedback = new FeedbackPage();
        loginpage = new LoginPage();
        topbar = new TopBar();
    });

    it('0. Should load homepage', async () => {
        await homepage.visit();
        await homepage.isNavbarDisplayed();
    });

    it('1. Should submit feedback', async () => {
        await homepage.clickFeedbackLink();
        await feedback.isFeedbackFormDisplayed();
        await feedback.submitFeedback(
            'Sasha',
            'sahsashulha@gmail.com',
            'subject',
            'here comes your long comment message'
        );
    });

    it('2. Should login to application', async () => {
        await homepage.visit();
        await topbar.isTopBarDisplayed();
        await topbar.clickSignInButton();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login(user, password);
    });

}); // describe (End to End testing)