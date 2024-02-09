const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  rootDir: "",
  setupFilesAfterEnv: ["<rootDir>/test/unit/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/test/e2e"],
  coverageDirectory: "<rootDir>/test/jest/coverage",
};

module.exports = createJestConfig(customJestConfig);