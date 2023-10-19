import { Before, After } from "cypress-cucumber-preprocessor/steps";
import { User } from "../cypress/actors/User";
import { Verify } from "../cypress/assertions/Verify";
export let user;
export let verify;

export const assignPageObject = async () => {
  user = new User();
  verify = new Verify();
};
Before(function () {
  // This will run before each scenario
  assignPageObject();
});

After(function () {
  // This will run after each scenario
});
