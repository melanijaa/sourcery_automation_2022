const { test, expect } = require("@playwright/test");

const data = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//SUBTRACT STARTS
data.forEach((version) => {
    test.describe(version + ": Subtract", () => {
      test("Subtracting 6 and 9 results in -3", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("6");
        await page.locator("#number2Field").type("9");
        await page.selectOption("#selectOperationDropdown", {
          label: "Subtract",
        });
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("-3");
      });
  
      test("Subtracting 10 and 5 results in 5", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("10");
        await page.locator("#number2Field").type("5");
        await page.selectOption("#selectOperationDropdown", {
          label: "Subtract",
        });
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("5");
      });
  
      test("Subtracting 0 and 5 results in -5", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("0");
        await page.locator("#number2Field").type("5");
        await page.selectOption("#selectOperationDropdown", {
          label: "Subtract",
        });
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("-5");
      });
  
      test("Subtracting -9 and 0 results in -9", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("-9");
        await page.locator("#number2Field").type("0");
        await page.selectOption("#selectOperationDropdown", {
          label: "Subtract",
        });
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("-9");
      });
  
      test("Subtracting 89.9 and 45.2 results in 44.7", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("89.9");
        await page.locator("#number2Field").type("45.2");
        await page.selectOption("#selectOperationDropdown", {
          label: "Subtract",
        });
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("44.7");
      });
  
      test("Subtracting -6 and -6 results in 0", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("-6");
        await page.locator("#number2Field").type("-6");
        await page.selectOption("#selectOperationDropdown", {
          label: "Subtract",
        });
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("0");
      });
  
      test("Subtracting 89.2 and 8 results in 81", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("89.2");
        await page.locator("#number2Field").type("8");
        await page.selectOption("#selectOperationDropdown", {
          label: "Subtract",
        });
        await page.locator("#integerSelect").click();
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("81");
      });
    });
  });
  //SUBTRACT ENDS