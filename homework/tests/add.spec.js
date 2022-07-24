const { test, expect } = require("@playwright/test");

const data = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//ADD STARTS
data.forEach((version) => {
  test.describe(version + ": Add", () => {
    test("Adding -10 and 13 results in 3", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("-10");
      await page.locator("#number2Field").type("13");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("3");
    });
  });
});

data.forEach((version) => {
  test.describe(version + ": Add", () => {
    test("Adding 2.5 and 6.7 results in 9.2", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("2.5");
      await page.locator("#number2Field").type("6.7");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("9.2");
    });
  });
});

data.forEach((version) => {
  test.describe(version + ": Add", () => {
    test("Adding 0 and 4 results in 4", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("0");
      await page.locator("#number2Field").type("4");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("4");
    });
  });
});

data.forEach((version) => {
  test.describe(version + ": Add", () => {
    test("Adding -6 and 0 results in -6", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("-6");
      await page.locator("#number2Field").type("0");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("-6");
    });
  });
});

data.forEach((version) => {
  test.describe(version + ": Add", () => {
    test("Adding 100 and 350 results in 450", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("100");
      await page.locator("#number2Field").type("350");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("450");
    });
  });
});

data.forEach((version) => {
  test.describe(version + ": Add", () => {
    test("Adding 45.7 and 3 results in 48", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("45.7");
      await page.locator("#number2Field").type("3");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });

      await page.locator("#integerSelect").click();
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("48");
    });
  });
});
//ADD ENDS
