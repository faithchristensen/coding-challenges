// write a function that returns "Hello " + name if given a name, if not given a name, simply return "Hello!"
// requirements: use a ternary expression in your function :)

// function sayName(name) {
//     if (!name) {
//         return 'Hello!';
//     } else {
//         return 'Hello ' + name;
//     }
// }

function sayName(name) {
    return !name ? 'Hello!' : 'Hello ' + name;
}


// examples: both of these should work :)
// console.log(sayName("Paul"));
console.log(sayName());