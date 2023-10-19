import * as data from "../../test-data/test-data.json";
import { createHeader, doGet, doPost } from "../../cypress/restHandler";

const environmentTestData = data.apiDetails;

let url;
let myheaders;
let requestBody;

Given("I Set GET all employee from api endpoint", () => {
  url = environmentTestData.baseURL + environmentTestData.employeeAllRecord;
});

Given("I Set Post all employee from api endpoint", () => {
  url = environmentTestData.baseURL + environmentTestData.employeeCreate;
});

When("I Set request HEADER", () => {
  const headers = new Map();
  headers.set("Content-type", "application/json");
  headers.set("Access-Control-Allow-Origin", "*");
  myheaders = createHeader(headers);
});

When(
  "Send a request body with {string}, {string} and {string}",
  (name, salary, age) => {
    requestBody = { name: name, salary: salary, age: age };
  }
);

Then("I receive valid Get Response with {string}", async (status) => {
  try {
    const response = await doGet(url, myheaders);
    if (response.status === status) {
      console.log("response", response.message);
    }
  } catch (error) {
    console.log("ERROR", error);
  }
});

Then("I receive valid Post Response with {string}", async (status) => {
  try {
    const response = await doPost(url, myheaders, requestBody);
    if (response.status === status) {
      console.log("response", response.data);
    }
  } catch (error) {
    console.log("ERROR", error);
  }
});
