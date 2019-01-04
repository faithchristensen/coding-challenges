function buildArr(item1, item2, item3) {
    var array = [item1, item2, item3];
    return array;
}

function pushToArray(arr, val) {
    arr.push(val);
    return arr;
}

function popToArray(arr) {
    arr.pop();
    return arr;
}

function buildSent(arr) {
    return arr.join(" ");
}

function combArr(arr1, arr2) {
    return arr1.concat(arr2);
}

function arrSort(arr) {
    return arr.sort();
}

console.log(buildArr("Dallin", "Paul", "Faith"));

console.log(pushToArray(["cake", "penguin"], 11));

console.log(popToArray([1, 2, 3]));

console.log(buildSent(["Hello", "how", "are", "you"]));

console.log(combArr([1, 2], [4, 5]));

console.log(arrSort(["Bravo", "Charlie", "Alpha"]));