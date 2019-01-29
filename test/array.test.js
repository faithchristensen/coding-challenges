var test = require('../lib/test.js');
var array = require('../lib/array.js');

function arrayTest() {
    test("testing building array", array.buildArr('first', 'second', 'third'), ['first', 'second', 'third']);
    test("testing push to array", array.pushToArray(['first', 'second'], 'third'), ['first', 'second', 'third']);
    test("testing pop to array", array.popToArray(['first', 'second', 'third']), ['first', 'second']);
    test("testing joining array", array.buildSent(['first', 'second', 'third']), 'first second third');
    test("testing concat array", array.combArr(['first', 'second'], ['third', 'fourth']), ['first', 'second', 'third', 'fourth']);
    test("testing sort array", array.arrSort(['b', 'a']), ['a', 'b']);
    test("testing comparison function", array.compareArrays([1,2], [1,2]), true);
}

module.exports = arrayTest;
