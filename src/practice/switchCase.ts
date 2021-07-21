const expr = "Banana"

function myFruit (fruit) {

switch (fruit) {
    case "Oranges":
        console.log('Oranges are $0.59 a pound');
        break
    case "Mangoes":
        console.log("There is no mangoes in this store");
        break
    case "Papayas":
        console.log("Papayas are $2.75 a pound.");
        break
    default:
        console.log(`Sorry we are out of ${expr}`);

    }
}

console.log(
    myFruit(expr),
    myFruit('Mangoes')
    )


const myValue = "Tuesday"

function switchDay(day) {

switch(day) {
    case "Monday":
        return "You akready know it is gonna be a long Monday"
        break
    case "Tuesday":
        return "You already know, Taco Tuesday!"
        break
    case "Wednesday":
        return "H U M P    D A Y! ! !"
        break
    case "Thursday":
        return "Thursty Thursdays, 1/2 off drinks!"
        break
    case "Friday":
        return "Fish Friday!"
        break
    default:
        return "We're closed on the weekend"
    }
}

console.log(
    switchDay(myValue),
    switchDay('Saturday')
)


let x = 0

function xY (aNum) {
    switch(aNum) {
        case x = 6:
            return 6 * 2
            break
        case x = 0:
            return x - 6
            break
        default:
            return 100
            break
    }
}

console.log(xY(x),
            xY(100))