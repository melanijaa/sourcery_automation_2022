const { test, expect } = require("@playwright/test");

const data = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//ADD STARTS
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

    test("Adding 0 and -4 results in -4", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("0");
      await page.locator("#number2Field").type("-4");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("-4");
    });

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

    test("Adding 45.7 and 3 results in 48", async ({ page }) => {
      await page.goto("https://testsheepnz.github.io/BasicCalculator");
      await page.selectOption("#selectBuild", { label: version });
      await page.locator("#number1Field").type("45.7");
      await page.locator("#number2Field").type("3");
      await page.selectOption("#selectOperationDropdown", {
        label: "Add",
      });
      await page.selectOption("#integerSelect");

      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("48");
    });
  });
});
//ADD ENDS

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
      await page.selectOption("#integerSelect");
      await page.locator("#calculateButton").click();

      await expect(page.locator("#numberAnswerField")).toHaveValue("81");
    });
  });
});
//SUBTRACT ENDS

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

    test("Dividing 20.4 and 2.9 results in 7.0344827586206895", async ({ page }) => {
        await page.goto("https://testsheepnz.github.io/BasicCalculator");
        await page.selectOption("#selectBuild", { label: version });
        await page.locator("#number1Field").type("20.4");
        await page.locator("#number2Field").type("2.9");
        await page.selectOption("#selectOperationDropdown", { label: "Divide" });
        await page.locator("#calculateButton").click();
  
        await expect(page.locator("#numberAnswerField")).toHaveValue("7.0344827586206895");
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
