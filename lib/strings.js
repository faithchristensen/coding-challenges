var strings = {
    stringAdd: (str, str1) => str + str1,
    firstLetter: (str) => str[0],
    stringLength: (str) => str.length,
    lastLetter(str) {
        return str[this.stringLength(str) -1];
    },
    stringArray: function(str) { 
        return str.split(" ")
    },
    firstWord: function(str) {
        return this.stringArray(str)[0]
    },
    lastWord: function (str) {
        var arr = this.stringArray(str);
        var length = arr.length;
        return arr[length -1];
    }
};

module.exports = strings