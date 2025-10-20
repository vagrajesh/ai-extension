# AI Code Generator (Chrome Extension)

A browser side-panel extension that uses generative AI to produce test automation code (Cucumber feature files, Page Objects, and test-data generators). It supports multiple LLM providers and stores API keys in the browser's extension storage.

## Summary

- Purpose: Inspect a page, select DOM snippets, and generate automation code using AI.
- UI: A side panel (`panel.html`) with a "Code Generator" tab and a "Settings" tab.
- Languages/engines: Built for Java + Selenium by default; additional bindings (C#, Python, TypeScript) are present in the UI but not fully supported.
- LLM Providers: Groq, OpenAI, Testleaf (and placeholders for Claude).

## Quick start — Load the extension in Chrome/Edge

1. Open Chrome/Edge and go to `chrome://extensions`
2. Enable *Developer mode* (top-right)
3. Click *Load unpacked* and select this repository folder (`ai-extension`)
4. Open a web page, then open the side panel from the extension action and use the inspector to select DOM elements.

## Configure API keys and model

- Open the extension side panel and switch to the *Settings* tab.
- Choose an LLM provider and model from the dropdowns.
- Enter your API key in the appropriate input (visible after selecting a provider).
- Keys are saved to `chrome.storage.sync` (so they're scoped to the browser/Chrome profile).

## GitHub integration

- There are inputs in the Settings popup for GitHub Token, Repository (owner/repo) and branch.
- You can validate the repository using the *Test connection* button.
- The extension attempts direct fetch calls to the GitHub API; when not possible it falls back to messaging the background/service-worker.

## Project structure (important files)

- `manifest.json` - Chrome extension manifest (MV3). Side panel default path is `panel.html`.
- `panel.html` - Side panel UI.
- `bg.js` - Background/service worker (handles long-lived tasks/messages).
- `src/content/content.js` - Content script injected into pages to collect DOM and handle inspector toggling.
- `src/scripts/chat.js` - Main UI logic: inspector, generating prompts, orchestration with LLM wrappers.
- `src/scripts/popup.js` - Settings UI logic, model/provider handling, GitHub helpers.
- `src/config/appConfig.js` and `src/config/configUtils.js` - Theme/color configuration used immediately to prevent white flashes.
- `src/styles/` - CSS for the side panel and chat UI.
- `src/scripts/api/` - API wrapper implementations (e.g., `openai-api.js`, `groq-api.js`, `testleaf-api.js`).
- `lib/marked/marked.min.js` and `lib/prism/` - Used for markdown rendering and syntax highlighting.

## How to use

1. Click *Inspect* in the side panel to enable element selection on the current page.
2. Select a DOM region you want the generator to base its code on.
3. Choose generation modes (Feature File, Page Class, Test Data Generator) and language/browser engine in *Settings*.
4. Enter any additional instructions in the input field and click *Generate*.
5. Generated output appears in the chat pane; use the Copy action to copy code blocks.

Notes:
- At least one of "Feature File" or "Page Class" must be selected — the code maps selections to prompt keys.
- The extension truncates excess `<option>` children in `<select>` elements to keep generated snippets representative.

## Development notes

- No build step is required — files are plain HTML/JS/CSS. Edit files and reload the extension in the browser.
- Use the browser devtools to debug `panel.html` (side panel) and `bg.js` (service worker) logs.
- Code highlights and parsing are handled by marked + Prism (`src/scripts/chat.js`).

## Where config is stored

- API keys and selections are saved with `chrome.storage.sync` keys like `groqApiKey`, `openaiApiKey`, `testleafApiKey`, `selectedModel`, `selectedProvider`, `githubToken`, `githubRepo`, `githubBranch`.

## Troubleshooting

- "Cannot inject scripts into chrome:// pages": The inspector/content script cannot run on internal URLs. Open a normal webpage.
- If the model dropdown is empty: ensure you selected a provider and that `modelsByProvider` in `src/scripts/popup.js` includes models for that provider.
- If API calls fail from the popup, the code will fall back to sending the request through the background script.

## Security and privacy

- API keys are stored in local `chrome.storage.sync`. Keep them secret.
- The extension requests `<all_urls>` host permissions so it can inject a content script and read selected DOM. Only enable it on sites you trust.

## Contributing

- Fix UI issues in `panel.html` and related scripts in `src/scripts/`.
- Add model support to `src/scripts/popup.js` models list, and implement any provider-specific wrapper in `src/scripts/api/`.

---

If you'd like, I can now:
- Stage & commit this `README.md` for you, and attempt to push to the repository remote (I may need a remote URL or your permission to use stored credentials).
- Or just leave the file for you to review locally.
