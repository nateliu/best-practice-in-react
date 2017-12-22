module.exports = {
    "verbose": true,
    "collectCoverage": true,
    "moduleNameMapper": {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    /*"collectCoverageFrom": [
        "src/**"
    ],*/
    "coverageThreshold": {
        "global": {
            "branches": 0,
            "functions": 0,
            "lines": 0,
            "statements": 0
        }
    },
    "testPathIgnorePatterns": [
        "/node_modules/"
    ],
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
      },
      "setupFiles": [
        "./test/setup.jsx"
      ]
};