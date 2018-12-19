function firstLetter(name) {
    return name[0];
}

function getInitials (firstName, middleName, lastName) {

    var firstInit = firstLetter(firstName);
    var middleInit = firstLetter(middleName);
    var lastInit = firstLetter(lastName);

    return firstInit + "." + middleInit + "." + lastInit + ".";
}

console.log(
    getInitials("Faith","Annmarie","Christensen")
);