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

## DOM Structure Input Methods

Provide the DOM structure using ONE of these methods:

### Method 1: HTML Snippet
```html```