module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: "<rootDir>/tests/config.js",
    "coverageDirectory": "<rootDir>/tests/coverage/jest",
    "coverageReporters": [
      "text",
      "lcov",
      "cobertura"
    ]
};
