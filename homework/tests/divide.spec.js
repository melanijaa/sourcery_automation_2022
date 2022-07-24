const { test, expect } = require("@playwright/test");

const data = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//DIVIDE STARTS
data.forEach((version) => {
  test.describe(version + ": Divide", () => {
    test("Dividing 20 and 2 results in 10", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("20");
      await page.locator("#number2Field").type("2");
      await page.selectOption("#selectOperationDropdown", { label: "Divide" });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("10");
    });

    test("Dividing -20 and 2 results in -10", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("-20");
      await page.locator("#number2Field").type("2");
      await page.selectOption("#selectOperationDropdown", { label: "Divide" });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("-10");
    });

    test("Dividing -20 and -2 results in 10", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("-20");
      await page.locator("#number2Field").type("-2");
      await page.selectOption("#selectOperationDropdown", { label: "Divide" });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("10");
    });

    test("Dividing 20.4 and 2.9 results in 7.0344827586206895", async ({
      page,
    }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("20.4");
      await page.locator("#number2Field").type("2.9");
      await page.selectOption("#selectOperationDropdown", { label: "Divide" });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue(
        "7.0344827586206895"
      );
    });

    test("Dividing 20.4 and 2.9 results in 7", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("20.4");
      await page.locator("#number2Field").type("2.9");
      await page.selectOption("#selectOperationDropdown", { label: "Divide" });
      await page.selectOption("#integerSelect");

      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("7");
    });
  });
});
//DIVIDE STARTS
