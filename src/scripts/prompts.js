/**
 * Collection of default prompts for different use cases (ICE POT Format)
 */
export const DEFAULT_PROMPTS = {
 
  /**
   * Selenium Java Page Object Prompt (No Test Class)
   */
  SELENIUM_JAVA_PAGE_ONLY: `
    Instructions:
    - Generate ONLY a Selenium Java Page Object Class (no test code).
    - Add JavaDoc for methods & class.
    - Use Selenium 2.30+ compatible imports.
    - Use meaningful method names.
    - Do NOT include explanations or test code.

    Context:
    DOM:
    \`\`\`html
    \${domContent}
    \`\`\`

    Example:
    \`\`\`java
    package com.testleaf.pages;

    /**
     * Page Object for Component Page
     */
    public class ComponentPage {
        // Add methods as per the DOM
    }
    \`\`\`

    Persona:
    - Audience: Automation engineer focusing on maintainable POM structure.

    Output Format:
    - A single Java class inside a \`\`\`java\`\`\` block.

    Tone:
    - Clean, maintainable, enterprise-ready.
  `,
   /**
   * Playwright Type Page Object Prompt (No Test Class)
   */
  PLAYWRIGHT_TYPESCRIPT_PAGE_ONLY: `
    Instructions:
    - Generate ONLY a Playwright TypeScript Page Object Class (no test code).
    - Use Playwright 1.40.0 and TypeScript 5.0+ compatible imports.
    - Use meaningful method names.
    - Write clean, maintainable test code using Page Object Model (POM) pattern
    - Use Playwright's built-in locator strategies (getByRole, getByLabel, getByTestId) over CSS/XPath when possible
    - Implement proper waits using Playwright's auto-waiting features and explicit waits when needed
    - Add meaningful assertions using expect() from @playwright/test
    - Handle common scenarios: dynamic content, multiple tabs, file uploads/downloads, API mocking
    - Include error handling and retry logic where appropriate
    - Write tests that are independent, isolated, and can run in parallel
    - Use fixtures for test setup and teardown
    - Add descriptive test names and organize tests in describe blocks
    - Include comments for complex logic only
    - Do NOT include explanations or test code.

    Context:
    DOM:
    \`\`\`html
    \${domContent}
    \`\`\`

    Example:
    \`\`\`typescript
    package com.test.pages;

    /**
     * Page Object for Component Page
     */
    public class ComponentPage {
        // Add methods as per the DOM
    }
    \`\`\`

    Persona:
    - You are a senior QA automation engineer with 5+ years of experience in:
    - Building robust test automation frameworks from scratch
    - Implementing best practices for flaky test prevention
    - Optimizing test execution speed and reliability
    - Writing accessible, maintainable code that other engineers can understand
    - Deep knowledge of Playwright's advanced features (tracing, debugging, network interception)
    - Experience with CI/CD integration and parallel test execution
    - Strong TypeScript skills with proper typing and interfaces

    Output Format:
    - A single TypeScript class inside a \`\`\`TypeScript\`\`\` block.
    - TypeScript class with proper typing
    - Locators defined as class properties
    - Reusable methods for page interactions
    - Return appropriate types for chaining
    - **Format**: Provide complete, runnable code with proper imports and typing.
    - **Style**: Follow Playwright documentation conventions and TypeScript best practices.

    Tone:
    - Clean, maintainable, enterprise-ready.
  `,

  /**
   * Cucumber Feature File Only Prompt
   */
  CUCUMBER_ONLY: `
    Instructions:
    - Generate ONLY a Cucumber (.feature) file.
    - Use Scenario Outline with Examples table.
    - Make sure every step is relevant to the provided DOM.
    - Do not combine multiple actions into one step.
    - Use global realistic dataset (names, addresses, pin codes, mobile numbers).
    - Use dropdown values only from provided DOM.
    - Generate multiple scenarios if applicable.

    Context:
    DOM:
    \`\`\`html
    \${domContent}
    \`\`\`

    Example:
    \`\`\`gherkin
    Feature: Login to OpenTaps

    Scenario Outline: Successful login with valid credentials
      Given I open the login page
      When I type "<username>" into the Username field
      And I type "<password>" into the Password field
      And I click the Login button
      Then I should be logged in successfully

    Examples:
      | username   | password  |
      | "testuser" | "testpass"|
      | "admin"    | "admin123"|
    \`\`\`

    Persona:
    - Audience: BDD testers who only need feature files.

    Output Format:
    - Only valid Gherkin in a \`\`\`gherkin\`\`\` block.

    Tone:
    - Clear, structured, executable.
  `,

  /**
   * Cucumber with JAVA Step Definitions
   */
  CUCUMBER_WITH_SELENIUM_JAVA_STEPS: `
    Instructions:
    - Generate BOTH:
      1. A Cucumber .feature file.
      2. A Java step definition class for selenium.
    - Do NOT include Page Object code.
    - Step defs must include WebDriver setup, explicit waits, and actual Selenium code.
    - Use Scenario Outline with Examples table (Global realistic data).

    Context:
    DOM:
    \`\`\`html
    \${domContent}
    \`\`\`
    URL: \${pageUrl}

    Example:
    \`\`\`gherkin
    Feature: Login to OpenTaps

    Scenario Outline: Successful login with valid credentials
      Given I open the login page
      When I type "<username>" into the Username field
      And I type "<password>" into the Password field
      And I click the Login button
      Then I should be logged in successfully

    Examples:
      | username   | password  |
\      | "admin"    | "admin123"|
    \`\`\`

    \`\`\`java
    package com.leaftaps.stepdefs;

    import io.cucumber.java.en.*;
    import org.openqa.selenium.*;
    import org.openqa.selenium.chrome.ChromeDriver;
    import org.openqa.selenium.support.ui.*;

    public class LoginStepDefinitions {
        private WebDriver driver;
        private WebDriverWait wait;

        @io.cucumber.java.Before
        public void setUp() {
            driver = new ChromeDriver();
            wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            driver.manage().window().maximize();
        }

        @io.cucumber.java.After
        public void tearDown() {
            if (driver != null) driver.quit();
        }

        @Given("I open the login page")
        public void openLoginPage() {
            driver.get("\${pageUrl}");
        }

        @When("I type {string} into the Username field")
        public void enterUsername(String username) {
            WebElement el = wait.until(ExpectedConditions.elementToBeClickable(By.id("username")));
            el.sendKeys(username);
        }

        @When("I type {string} into the Password field")
        public void enterPassword(String password) {
            WebElement el = wait.until(ExpectedConditions.elementToBeClickable(By.id("password")));
            el.sendKeys(password);
        }

        @When("I click the Login button")
        public void clickLogin() {
            driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
        }

        @Then("I should be logged in successfully")
        public void verifyLogin() {
            WebElement success = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("success")));
            assert success.isDisplayed();
        }
    }
    \`\`\`

    Persona:
    - Audience: QA engineers working with Cucumber & Selenium.

    Output Format:
    - Gherkin in \`\`\`gherkin\`\`\` block + Java code in \`\`\`java\`\`\` block.

    Tone:
    - Professional, executable, structured.
  `,
  /**
   * Cucumber with Playwright TypeScript Step Definitions
   */
  CUCUMBER_WITH_PLAYWRIGHT_TYPESCRIPT_STEPS: `
    Instructions:
      - Generate BOTH:
          1. A Cucumber .feature file.
          2. A TypeScript step definition class for Playwright.
      - Do NOT include Page Object code.
      - Step defs must include Playwright setup, proper waits, and actual Playwright code.
      - Use Scenario Outline with Examples table.
      - Use Playwright 1.40.0 and TypeScript 5.0+ compatible imports.
      - Use meaningful method names.
      - Write clean, maintainable test code step definitions
      - Use Playwright's built-in locator strategies (getByRole, getByLabel, getByTestId) over CSS/XPath when possible
      - Implement proper waits using Playwright's auto-waiting features and explicit waits when needed
      - Add meaningful assertions using expect() from @playwright/test
      - Handle common scenarios: dynamic content, multiple tabs, file uploads/downloads, API mocking
      - Include error handling and retry logic where appropriate
      - Write tests that are independent, isolated, and can run in parallel
      - Use fixtures for test setup and teardown
      - Add descriptive test names and organize tests in describe blocks
      - Include comments for complex logic only
      - Do NOT include explanations or test code.
    Context:
      DOM:
      \`\`\`html
      \${domContent}
      \`\`\`
      URL: \${pageUrl}

      Example:
      \`\`\`gherkin
      Feature: Login to OpenTaps

      Scenario Outline: Successful login with valid credentials
        Given I open the login page
        When I type "<username>" into the Username field
        And I type "<password>" into the Password field
        And I click the Login button
        Then I should be logged in successfully

      Examples:
        | username   | password  |
        | "admin"    | "admin123"|
      \`\`\`
      \`\`\`typescript
      /**
         * GIVEN STEPS
         * WHEN STEPS
         * THEN STEPS
      */
    Persona:
      - Audience: QA engineers working with Cucumber & Selenium.

    Output Format:
      - Gherkin in \`\`\`gherkin\`\`\` block + Java code in \`\`\`java\`\`\` block.

    Tone:
      - Professional, executable, structured. 
 `  
};

/**
 * Helper function to escape code blocks in prompts
 */
function escapeCodeBlocks(text) {
  return text.replace(/```/g, '\\`\\`\\`');
}

/**
 * Function to fill template variables in a prompt
 */
export function getPrompt(promptKey, variables = {}) {
  let prompt = DEFAULT_PROMPTS[promptKey];
  if (!prompt) {
    throw new Error(`Prompt not found: ${promptKey}`);
  }

  Object.entries(variables).forEach(([k, v]) => {
    const regex = new RegExp(`\\$\\{${k}\\}`, 'g');
    prompt = prompt.replace(regex, v);
  });

  return prompt.trim();
}

export const CODE_GENERATOR_TYPES = {
  SELENIUM_JAVA_PAGE_ONLY: 'Selenium-Java-Page-Only',
  CUCUMBER_ONLY: 'Cucumber-Only',
  CUCUMBER_WITH_SELENIUM_JAVA_STEPS: 'Cucumber-With-Selenium-Java-Steps',
  PLAYWRIGHT_TYPESCRIPT_PAGE_ONLY: 'Playwright-TypeScript-Page-Only',
  CUCUMBER_WITH_PLAYWRIGHT_TYPESCRIPT_STEPS: 'Cucumber-With-Playwright-TypeScript-Steps'
};
