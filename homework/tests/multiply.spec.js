const { test, expect } = require("@playwright/test");

const data = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//MULTIPLY STARTS
data.forEach((version) => {
  test.describe(version + ": Multiply", () => {
    test("Multiplying 6 and 9 results in 54", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("6");
      await page.locator("#number2Field").type("9");
      await page.selectOption("#selectOperationDropdown", {
        label: "Multiply",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("54");
    });

    test("Multiplying -96 and -7 results in 672", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("-96");
      await page.locator("#number2Field").type("-7");
      await page.selectOption("#selectOperationDropdown", {
        label: "Multiply",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("672");
    });

    test("Multiplying 12.5 and 3.4 results in 42.5", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("12.5");
      await page.locator("#number2Field").type("3.4");
      await page.selectOption("#selectOperationDropdown", {
        label: "Multiply",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("42.5");
    });

    test("Multiplying 0 and 0 results in 0", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("0");
      await page.locator("#number2Field").type("0");
      await page.selectOption("#selectOperationDropdown", {
        label: "Multiply",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("0");
    });

    test("Multiplying 45.7 and 2 results in 91", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("45.7");
      await page.locator("#number2Field").type("2");
      await page.selectOption("#selectOperationDropdown", {
        label: "Multiply",
      });
      await page.locator("#integerSelect").click();
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("91");
    });
  });
});
//MULTIPLY ENDS
