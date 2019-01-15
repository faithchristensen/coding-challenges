var strings = {
    stringAdd: function(str, str1) {
        return str + str1;
    },
    firstLetter: function(str) {
        return str[0];
    },
    stringLength: function(str) {
        return str.length;
    },
    lastLetter(str) {
        return str[this.stringLength(str) -1];
    },
    stringArray: function(str) {
        return str.split(" ");
    },
    firstWord: function(str) {
        return this.stringArray(str)[0];
    },
    lastWord: function(str) {
        var arr = this.stringArray(str);
        var length = arr.length;
        return arr[length -1];
    }
};

module.exports = strings

// console.log(stringsObj.stringAdd("Hello", " Dallin!"))

// console.log(stringsObj.firstLetter("Apple"))

// console.log(stringsObj.stringLength("Cake"))

// console.log(stringsObj.lastLetter("Universe"))

// console.log(stringsObj.stringArray("How was class"))

// console.log(stringsObj.firstWord("Hello Dallin Porter"))

// console.log(stringsObj.lastWord("How are you"))