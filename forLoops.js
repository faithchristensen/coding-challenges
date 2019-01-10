function addAll(arr) {
    var added = 0;
    for (var i = 0; i < arr.length; i++) { 
        if (typeof arr[i] === "number") {
            added += arr[i];
        } else {
            return "only numbers allowed";
        }
    }
    return added;
}

var animals = [
    {
        species: "llama",
        tail: "short",
        sound: "sneeze",
        color: "white"
    }, 
    {
        species: "cat",
        tail: "long",
        sound: "mrow",
        color: "black",
    },
    {
        species: "dog",
        tail: "long",
        sound: "woof",
        color: "brown"
    }
]


function animalProcess(arr, prop) {
    var animalTrait = [];
    for (var i = 0; i < arr.length; i++) {
        var trait = arr[i][prop];
        if (arr[i].hasOwnProperty(prop)) {
            animalTrait.push(trait);
        } else {
            return "Property does not exist"
        }
    }
    return animalTrait;
}


function lowestValue(arr) {
    var currentLow = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < currentLow) {
            currentLow = arr[i];
        }
    }
    return currentLow;
}


console.log(
    addAll([ 1, 3, 12 ])
)

console.log(animalProcess(animals, 'sound'));


console.log(lowestValue([1, 7, 19, -2, 10, 17, -7]));