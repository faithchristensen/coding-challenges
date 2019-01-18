var strings = require('../lib/strings.js');

function getInitials (name) {
    var namesArr = name.split(' ')
    return strings.firstLetter(namesArr[0]) + "." + strings.firstLetter(namesArr[1]) + "." + strings.firstLetter(namesArr[2]) + "."
}

console.log(
    getInitials("Paul Derbin Christensen"),
    getInitials("Faith Annemarie Christensen"),
    getInitials("Dallin Porter Christensen")
);
