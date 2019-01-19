class Dog {
    constructor(sound, speed) {
        this.sound = sound;
        this.speed = speed;
    }
    woof() {
        console.log('Sound: ' + this.sound);
    }
    run() {
        console.log('Speed: ' + this.speed);
    }
    attack() {
        console.log('bite');
    }
    greetHuman(humanName) {
        console.log('hello, ' + humanName);
    }
}


var jax = new Dog('rawf', 'really fast');
var phil = new Dog('bark', 'not so fast');
var benjamin = new Dog('hello', 'no speed');

jax.woof();
phil.woof();
benjamin.woof();

jax.run();
phil.run();
benjamin.run();

jax.attack();
jax.greetHuman('Mimi');
