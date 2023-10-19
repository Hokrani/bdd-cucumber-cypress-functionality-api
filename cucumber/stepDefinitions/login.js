import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { user, verify } from "../hooks";
import {
  LOGIN_PAGE,
  YOUR_STORES_PAGE,
} from "../../cypress/constants/pageIdentifiers";
import { HOME_PAGE } from "../../cypress/constants/pageConstants";
import * as data from "../../test-data/test-data.json";

const environmentTestData = data.testApplication;

Given("Open MYBIJNESSGURU application", () => {
  user.navigateTo("/");
});

When("Provide valid userName and Password", () => {
  user.typeText(LOGIN_PAGE.TEXT_EMAIL, environmentTestData.email);
  user.typeText(LOGIN_PAGE.TEXT_PASSWORD, environmentTestData.password);
});

Then("Click on submit button", () => {
  user.clickElement(LOGIN_PAGE.BUTTON_SUBMIT);
});

Then("Click on Proceed to store button", () => {
  user.clickElement(YOUR_STORES_PAGE.BUTTON_PROCEED);
});

And("Verify title of Dashboard Page", () => {
  verify.pageTitle(HOME_PAGE.TITLE);
});
