var makeSound = function() {
    return this.sound;
}

var paul = {
    tail: "long",
    nose: "black",
    talk: makeSound,
    sound: "maw",
}

var jax = {
    tail: "long",
    nose: "brown",
    talk: makeSound,
    sound:  "snoring",
}

console.log(paul.talk());

console.log(jax.talk());