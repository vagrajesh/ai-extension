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
  SELENIUM_GROOVY_PAGE_ONLY: `
    Purpose: You are creating automated web testing scripts using Groovy and Selenium WebDriver. Your scripts should automate browser interactions, validate web application functionality, perform regression testing, and generate clear test reports. The automation should be robust, maintainable, and follow best practices for web testing.

    Role: Act as an expert QA Automation Engineer specializing in Groovy-based Selenium test automation. You have deep knowledge of:
        1.  Groovy scripting and its dynamic features
        2. Selenium WebDriver API (element location, interactions, waits)
        3. Page Object Model (POM) design pattern
        4. Test framework integration (Spock, JUnit, TestNG)
        5. Web element handling strategies and synchronization techniques
        6. Cross-browser testing considerations
        7. Exception handling and logging best practices

    Instructions
        1. Setup & Configuration:
            - Import necessary Selenium and Groovy libraries (org.openqa.selenium.*, org.openqa.selenium.support.ui.*)
            - Initialize WebDriver with appropriate driver (ChromeDriver, FirefoxDriver, EdgeDriver)
            - Set up WebDriverManager or specify driver path explicitly
            - Configure browser options (headless mode, window size, timeouts)
            - Set implicit/explicit wait times appropriately

        2. Code Structure & Organization
            - Use Page Object Model (POM) pattern to separate page logic from test logic
            - Create separate classes for each web page with locators and methods
            - Implement a base test class for common setup/teardown operations
            - Group related test cases logically
            - Follow Groovy naming conventions (camelCase for methods, PascalCase for classes)

        3. Element Location Strategy
            - Prefer stable locators in this priority: ID > Name > CSS Selector > XPath
            - Avoid using absolute XPath; use relative XPath with meaningful attributes
            - Store locators as constants or in separate configuration files
            - Use dynamic locators with Groovy's string interpolation when needed
            - Implement custom wait conditions for dynamic elements

        4. Synchronization & Waits
            - Always use explicit waits (WebDriverWait) instead of Thread.sleep()
            - Implement common wait conditions:
                - ExpectedConditions.visibilityOfElementLocated()
                - ExpectedConditions.elementToBeClickable()
                - ExpectedConditions.presenceOfElementLocated()
            - Set reasonable timeout values (10-30 seconds based on application)
            - Handle StaleElementReferenceException with retry logic

        5. Actions & Interactions
            - Use Groovy's concise syntax for element interactions
            - Implement JavaScriptExecutor for elements that don't respond to normal clicks
            - Handle alerts, pop-ups, and iframe switches explicitly
            - Use Actions class for complex interactions (hover, drag-drop, double-click)
            - Take screenshots after critical actions for debugging

        6. Assertions & Validations

            - Add assertions using Groovy's assert keyword or testing framework assertions
            - Validate:
                - Element presence/visibility
                - Text content matching
                - URL navigation
                - Page titles
                - Attribute values
            - Provide descriptive assertion messages for failure scenarios

        7. Error Handling & Logging
            - Wrap risky operations in try-catch blocks
            - Capture screenshots on test failures
            - Log important steps using println or logging framework (SLF4J, Log4j)
            - Handle common exceptions:
                - NoSuchElementException
                - TimeoutException
                - StaleElementReferenceException
                - ElementNotInteractableException
            - Implement graceful failure recovery where possible

        8. Cleanup & Best Practices
            - Always close browser in finally block or use @AfterMethod/@AfterClass
            - Clear cookies/cache between tests if needed
            - Use driver.quit() instead of driver.close() to end sessions properly
            - Implement data-driven testing using CSV, Excel, or Groovy collections
            - Avoid hardcoded test data; externalize to configuration files
            - Add meaningful comments for complex logic only (code should be self-documenting)

        9. Groovy-Specific Features to Leverage
            - Use closures for reusable code blocks
            - Leverage Groovy's collection methods (each, find, collect)
            - Use safe navigation operator (?.) to prevent NullPointerException
            - Apply Elvis operator (?:) for default values
            - Utilize string interpolation with GStrings for dynamic content

        10. Code Quality Standards
            - Keep methods small and focused (single responsibility)
            - Use meaningful variable and method names
            - Maintain consistent indentation (2 or 4 spaces)
            - Avoid code duplication; extract common logic to helper methods
            - Add JavaDoc/GroovyDoc comments for public methods
            - Ensure code is production-ready and executable

    Output:Provide well-structured Groovy code that includes:
        1.Script Structure:
            1. Proper imports for Selenium WebDriver and Groovy libraries WebDriver initialization with appropriate browser drivers.
            2. Clean setup and teardown methods.
            3. Code Quality:Use Groovy's concise syntax and closures where appropriate
            4. Implement explicit waits (WebDriverWait) instead of Thread.sleep()
            5. Apply Page Object Model pattern for maintainability
            6. Include robust element locators (preferably ID, CSS, or XPath)
            7. Add meaningful variable names and comments
        2. Error Handling:
            1. Try-catch blocks for exception management
            2. Screenshots on test failures
            3. Descriptive error messages
        3. Assertions:
            1. Clear validation points using assertions
            2. Verification of expected vs actual results
        4. Documentation:
            1. Brief comments explaining complex logic
            2. Test case description at the beginning
            3. Prerequisites and expected outcomes
    DOM:
    \`\`\`html
    \${domContent}
    \`\`\`

    Example:
    \`\`\`groovy
    groovy// Test Case: [Description]
    // Prerequisites: [Any setup required]
    // Expected Result: [What should happen]

    import org.openqa.selenium.*
    import org.openqa.selenium.chrome.ChromeDriver
    import org.openqa.selenium.support.ui.*

    // Setup WebDriver
    // Configure browser options
    // Navigate to URL
    // Perform actions with explicit waits
    // Add assertions with descriptive messages
    // Handle exceptions appropriately
    // Cleanup/teardown with driver.quit()
    \`\`\`
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
  ` ,
  
 CUCUMBER_WITH_SELENIUM_GROOVY_STEPS:`
      Instructions:
        - Behavior-Driven Development (BDD) principles and practices
        - Gherkin syntax (Feature, Scenario, Given-When-Then)
        - Cucumber-JVM framework with Groovy integration
        - Groovy scripting and its dynamic features
        - Selenium WebDriver API (element location, interactions, waits)
        - Step definition implementation and reusability
        - Cucumber hooks (@Before, @After, @BeforeStep, @AfterStep)
        - Test data management and scenario outlines
        - Cucumber expressions and regular expressions for step matching
        - Cross-browser testing considerations
        - Create Groovy classes for step definitions
        - Use package structure matching feature organization
        - Import required Cucumber annotations from io.cucumber.groovy.EN
        - Implement steps using Cucumber expressions or regular expressions
        - Use clear parameter types (String, Integer, DataTable, DocString)
        - Keep step definitions atomic and reusable
        - Avoid duplicating step definitions across classes
        - Use descriptive method names (optional, for clarity)
        - Share state between steps using instance variables or World object
        - Delegate complex logic to helper classes/page objects
        - Include comments for complex logic only
        - Do NOT include explanations or test code.
        - Use stable locator strategies: ID > Name > XPath > CSS
        - Store locators as constants or in separate utility classes
        - Always prefer explicit waits over implicit waits or Thread.sleep()
        - Use WebDriverWait with ExpectedConditions
        - Use Groovy's built-in assert and validation with descriptive messages
        - Error Handling & Reporting
    Context:
      DOM:
      \`\`\`html
      \${domContent}
      \`\`\`
      URL: \${pageUrl}

      Example:
      \`\`\`groovy
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
  ` ,
  HTML_DOM_TEST_DATA_GENERATOR: `
  Instructions
   Generate realistic, diverse test data for automation testing in both JSON and CSV formats, with corresponding DOM structure mapping. Follow these requirements:
    1. **Data Quality**:
      - Create production-like data that mimics real-world scenarios
      - Include edge cases, boundary values, and negative test scenarios
      - Ensure data diversity (different countries, regions, demographics)
      - Use realistic formatting (phone numbers, emails, dates, addresses)
      - Include special characters, Unicode, and internationalization cases

    2. **Data Coverage**:
      - Positive test cases (valid, expected inputs)
      - Negative test cases (invalid, malformed, edge cases)
      - Boundary values (min, max, empty, null)
      - Security test cases (SQL injection, XSS patterns)
      - Performance test cases (large datasets if needed)

    3. **DOM Structure Mapping**:
      - **Extract Selectors**: Identify all form fields, buttons, and elements from provided DOM
      - **Map Data to Fields**: Create direct mapping between test data and DOM elements
      - **Selector Strategy**: Provide multiple selector options (ID, name, data-testid, CSS, XPath)
      - **Prioritize Stability**: Prefer data-testid > ID > name > aria-label > CSS class
      - **Element Properties**: Document element types (input, select, checkbox, radio, textarea)
      - **Validation Attributes**: Extract HTML5 validation (required, pattern, min, max, minlength, maxlength)

    4. **Format Requirements**:
      - **JSON**: Properly formatted, valid JSON with consistent structure
      - **CSV**: Include headers, proper comma/quote escaping, UTF-8 encoding
      - **Selector Mapping JSON**: Separate JSON mapping test data fields to DOM selectors
      - Use consistent naming conventions (camelCase for JSON, snake_case for CSV)
      - Include data type variety (strings, numbers, booleans, dates, arrays, objects)

    5. **Compliance**:
      - Use fake/synthetic data only (no real PII)
      - Follow GDPR/privacy best practices
      - Generate data that complies with field validation rules
      - Include valid and invalid data states

Context
   Provide specific details about your test data needs:
    - **Application Domain**: [e.g., E-commerce, Banking, Healthcare, Education]
    - **Geographic Region**: [e.g., India, USA, Europe, Global]
    - **Test Scenario**: [e.g., User Registration, Order Processing, Payment Flow]
    - **Data Volume**: [e.g., 10 records, 100 records, 1000+ records]
    - **Specific Fields Required**: [List all fields with data types and constraints]
    - **Validation Rules**: [Min/max length, regex patterns, required fields]
    - **Relationships**: [Parent-child relationships, foreign keys, dependencies]
    - **Test Environment**: [Dev, Staging, Production-like]
    - **DOM Structure**: [Provide HTML snippet, screenshot, or description of form structure]

 DOM:
    \`\`\`html
    \${domContent}
    \`\`\`
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
  CUCUMBER_WITH_PLAYWRIGHT_TYPESCRIPT_STEPS: 'Cucumber-With-Playwright-TypeScript-Steps',
  HTML_DOM_TEST_DATA_GENERATOR: 'HTML-DOM-Test-Data-Generator'
};
