module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/.build/", "build"],
    verbose: true
};
