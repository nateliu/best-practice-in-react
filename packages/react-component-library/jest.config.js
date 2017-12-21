module.exports = {
    "verbose": true,
    "collectCoverage": true,
    "moduleNameMapper": {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    "testPathIgnorePatterns": [
        "/node_modules/"
    ],
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
      },
      "setupFiles": [
        "./tests/setup.jsx"
      ]
};
