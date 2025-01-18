# Cypress Test Cases for Perfumetix

This repository contains automated end-to-end test cases written using [Cypress](https://www.cypress.io/). These test cases are designed to verify the functionality of the Perfumetix application.

---

## 📋 Project Structure

The repository is structured as follows:
- cypress
  - downloads
  - e2e
  - fixtures
  - plugins
  - screenshots
  - support
---

## 🛠️ Prerequisites

### 1. Install Dependencies
Ensure you have the following installed on your system:
- **Node.js** (v16 or later recommended)  
  Download from [Node.js official website](https://nodejs.org).
- **npm** (installed automatically with Node.js)

---

## 🚀 Setup and Installation

Follow these steps to clone the repository and set up Cypress:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install the dependencies**:
   Run the following command in the project root:
   ```bash
   npm install
   ```

---

## 🧪 Running Test Cases

### 1. Open Cypress Test Runner
Use the Cypress interactive test runner to visually run and debug test cases:
```bash
npx cypress open
```
- Select the desired test file (e.g., `homepage.cy.js`) from the Test Runner UI.
- The tests will open in a browser for live interaction.

### 2. Run All Tests in Headless Mode
Run all the tests in headless mode (non-interactive) in the terminal:
```bash
npx cypress run
```
The results of the test run will be displayed in your terminal.

### 3. Run a Specific Test File
To run a specific test file (e.g., `homepage.cy.js`), use the `--spec` option:
```bash
npx cypress run --spec "cypress/e2e/3-perfumetix/homepage.cy.js"
```

---

## 🛠️ Configuration

The base URL and other settings for Cypress are located in the `cypress.config.js` file. Modify this file if necessary.

- Example `baseUrl` configuration:
  ```javascript
  module.exports = {
    e2e: {
      baseUrl: 'http://localhost:3000', // Replace with your application's URL
    },
  };
  ```

---

## 📂 Key Features

1. **Automated Testing**: Fully automated test cases to cover major application areas.
2. **Cross-Browser Support**: Tests can be executed on Chrome, Firefox, Edge, and Electron.
3. **Easy Debugging**: Use Cypress's interactive Test Runner for debugging.
4. **Time Travel Debugging**: Inspect snapshots of tests at each step for easy debugging.

---

## 💡 Tips for Debugging Tests

- Use `cy.pause()` to stop execution at specific points.
- Use the Cypress Test Runner's **command log** to inspect values or element states during runtime.
- Insert `cy.log()` to log custom messages for debugging.
- Use the browser DevTools (press `F12`) to inspect UI or network behavior.

---

## 🖼️ Cypress Screenshots and Videos

Cypress automatically captures:
- **Screenshots**: On test failures, screenshots are saved in the `cypress/screenshots/` folder.
- **Videos**: If configured in `cypress.config.js`, videos are saved in the `cypress/videos/` folder after executing tests in `headless` mode.

To disable video recording, add the following to `cypress.config.js`:
```javascript
module.exports = {
  e2e: {
    video: false,
  },
};
```

---

## 🌐 Resources

1. Official Cypress Documentation: [https://docs.cypress.io](https://docs.cypress.io)
2. Cypress API Reference: [Cypress API](https://docs.cypress.io/api)

---

## 🤝 Contributing

Contributions to this test suite are welcome! Feel free to:
1. Open issues for any bugs or irregularities.
2. Submit pull requests for new test cases or updates.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.