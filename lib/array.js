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