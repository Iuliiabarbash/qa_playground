class Bird {
    // in class you can declare prperties just like in object
    name: string;//no value
    canFly: boolean;//no value
    hasFeasers: boolean = true //for this one it will always be true, has a value
    //this is just a placeholders
    //they do not have any value
// make a constructor - we will give parameteres in order to change above preperties
    flapWings() {
        if(this.canFly === true) {
            console.log(`the ${this.name} flap to the sky`)

        } else {
            console.log(`The ${this.name} smth else`)
        }
    }
    constructor(
        namePar1: string,
        canFlyPar2: boolean) {
            this.name = namePar1;
            this.canFly = canFlyPar2;
        }
}

//to used it we need create a new instance

let myBirds: Array<Bird> =[
    new Bird("1 bird", true),
    new Bird("2 bird", true),
    new Bird("3 bird", false),
]

console.log(myBirds[0].flapWings)

// let toucan: Bird = new Bird('Toucan', true)
// let penguin: Bird = new Bird('Pengiun'. false)

// toucan.flapWings()
// penguin.flapWings()