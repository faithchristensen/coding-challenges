function stringAdd(str1, str2) {
    return str1 + str2;
}

function firstLetter(stri) {
    return stri[0];
}

function stringLength(str) {
    return str.length;
}

function lastLetter(str) {
    return str[stringLength(str) -1];
}

function stringArray(str) {
    return str.split(" ");
}

function firstWord(str) {
    return stringArray(str)[0];
}

function lastWord(str) {
    var arr = stringArray(str);
    var length = arr.length;
    return arr[length -1];
}


console.log(stringAdd("Hello", " Dallin!"))

console.log(firstLetter("Apple"))

console.log(stringLength("Cake"))

console.log(lastLetter("Universe"))

console.log(stringArray("How was class"))

console.log(firstWord("Hello Dallin Porter"))

console.log(lastWord("How are you"))