var equals = require('array-equal')

var array = {
    buildArr: (item1, item2, item3) => {
        var array = [item1, item2, item3];
        return array;
    },
    pushToArray: (arr, val) => {
        arr.push(val);
        return arr;
    },
    popToArray: (arr) => {
        arr.pop();
        return arr;
    },
    buildSent: (arr) => arr.join(" "),
    combArr: (arr1, arr2) => arr1.concat(arr2),
    arrSort: (arr) => arr.sort(),
    compareArrays: (arr1, arr2) => equals(arr1, arr2)
}

module.exports = array;