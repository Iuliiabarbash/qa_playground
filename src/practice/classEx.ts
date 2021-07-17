class Bird {
    // in class you can declare prperties just like in object
    birdName: string;//no value
    canFly: boolean;//no value
    hasFeasers: boolean = true //for this one it will always be true, has a value
    //this is just a placeholders
    //they do not have any value
// make a constructor - we will give parameteres in order to change above preperties
    flapWings() {
        if(this.canFly === true) {
            console.log(`the ${this.birdName} flap to the sky`)

        } else {
            console.log(`The ${this.birdName} smth else`)
        }
    }
    constructor(
        name: string,
        canFly: boolean) {
            this.birdName = name;
            this.canFly = canFly;
        }
}

//to used it we need create a new instance

let myBirds: Array<Bird> = [
    new Bird("Goldfinch", true),
    new Bird("Peacock", true),
    new Bird("Kiwi", false),
    new Bird("Robin", true),
    new Bird("Emu", true)
]
let pidgean = new Bird("F", true)
console.log(myBirds[0].flapWings)

let toucan: Bird = new Bird('Toucan', true)
let penguin: Bird = new Bird('Pengiun', false)

// toucan.flapWings()
// penguin.flapWings()



//let's try to extend class Birds
class southBirds extends Bird {
    liveSouth: boolean

    function () {
        if(this.liveSouth === true) {
            console.log("This bird is living on South")
        } else {
            console.log(" Where does this bird live?")
        }
    }
    constructor(
        birdName: string,
        canFly: boolean,
        liveSouth: boolean
    ) {
        super(birdName, canFly)
        this.liveSouth = liveSouth
    }
}
let Flamingo = new southBirds("Flamingo", false, true);
console.log(Flamingo)

Flamingo.function()
// so we create variable => assign a class (in the class we have function) and variable.function
//and we will see on console whjat we assign un function to that bird

//variable => class(function) => console:variable.function 









/////////////////////////////////////ANother example////////////////////////////////





// another example

class Animal {
    name: string;
    sound: string;
    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound
    }
}
const lion: Animal = new Animal("Lion", "Roar");
console.log(lion)

class Mammal extends Animal {
    fur: string;
    constructor(name: string, sound: string, fur: string) {
        super(name, sound);
        this.fur = fur
    }
}

const cow: Mammal = new Mammal(
    "Cow",
    'Moo',
    "Black"
);
console.log(cow)

const bear: Mammal = new Mammal('Bear', 'offoff-rooor', "brown")

console.log(bear)