
var test = function (testName, returnedVal, expectedVal) {
    if (returnedVal === expectedVal) {
        console.log("\x1b[32m%s\x1b[0m", testName + " passed");
    } else if (typeof expectedVal === 'object' && JSON.stringify(expectedVal) === JSON.stringify(returnedVal)) {
        console.log("\x1b[32m%s\x1b[0m", testName + " passed");
    } else {
        console.log(expectedVal.isArray)
        console.log("\x1b[31m%s\x1b[0m", testName + " failed, expected: " + expectedVal + ", received: " + returnedVal);
    }
}

module.exports = test;