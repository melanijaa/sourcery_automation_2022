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
  });
});
//MULTIPLY ENDS
