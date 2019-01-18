var array = {
    buildArr: function(item1, item2, item3) {
        var array = [item1, item2, item3];
        return array;
    },
    pushToArray: function(arr, val) {
        arr.push(val);
        return arr;
    },
    popToArray: function(arr) {
        arr.pop();
        return arr;
    },
    buildSent: function(arr) {
        return arr.join(" ");
    },
    combArr: function(arr1, arr2) {
        return arr1.concat(arr2);
    },
    arrSort: function(arr) {
        return arr.sort();
    }
}

module.exports = array;

console.log(array.buildArr("Dallin", "Paul", "Faith"));

console.log(array.pushToArray(["cake", "penguin"], 11));

console.log(array.popToArray([1, 2, 3]));

console.log(array.buildSent(["Hello", "how", "are", "you"]));

console.log(array.combArr([1, 2], [4, 5]));

console.log(array.arrSort(["Bravo", "Charlie", "Alpha"]));