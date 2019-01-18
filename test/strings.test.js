var test = require('../lib/test.js');
var strings = require('../lib/strings.js');


function stringTest() {
    test("testing add string function", strings.stringAdd('Hello ', 'Hus!'), 'Hello Hus!');
    test("testing first letter of string function", strings.firstLetter('Hello '), 'H');
    test("testing string length function", strings.stringLength('Hello'), 5);
    test("testing last letter of string function", strings.lastLetter('Hello'), 'o');
    test("testing array into string function", strings.stringArray('Hello Hus'), ['Hello', 'Hus']);
    test("testing first word function", strings.firstWord('Hello Hus!'), 'Hello');
    test("testing last word function", strings.lastWord('Hello Hus!'), 'Hus!');
}

module.exports = stringTest;