module.exports = {
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  globals: {
    "ts-jest": {
      tsConfig: {
        // allow js in typescript
        allowJs: true,
      },
    },
  },
};