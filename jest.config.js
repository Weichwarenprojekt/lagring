module.exports = {
    preset: "jest-puppeteer",
    testMatch: [
        "**/test/**/*.test.js"
    ],
    globals: {
        PATH: "http://localhost:4444"
    },
}