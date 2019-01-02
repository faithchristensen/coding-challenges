function firstLetter(name) {
    return name[0].toUpperCase();
}

function getInitials (name) {
    var namesArr = name.split(' ')
    return firstLetter(namesArr[0]) + "." + firstLetter(namesArr[1]) + "." + firstLetter(namesArr[2]) + "."
}

console.log(
    getInitials("Paul derbin Christensen")
);
