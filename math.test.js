var test = require('./test.js');
var math = require('./mathOperators.js');

test("testing squared function", math.okSquared(3), 9);

test("testing even or odd function", math.evenOrOdd(11), "odd");

test("testing digit length function", math.digitLength(11), 2);

test("testing adding function", math.okAdd(1, 2), 3);

test("testing subtraction function", math.okSubtract(2, 2), 0);

test("testing dividing function", math.okDivide(14, 7), 2);

test("testing multiplying function", math.okMultiply(1, 7), 7);