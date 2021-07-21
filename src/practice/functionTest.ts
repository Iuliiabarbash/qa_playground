

function addTwo(input: number): number { //functionality is logging the input and returning the unput +2
    console.log(input);
    return input + 2;
}
let firstNumber = 3
let secondNumber = addTwo(firstNumber)
console.log(`First number: ${firstNumber}, Second number: ${secondNumber}`)

function countTo5(input: number): number {
    return input + 1;
}
let startCount = 0
let nextCount = countTo5(startCount)
// console.log(`Start: ${startCount}, next: ${nextCount}, next: ${nextCount + 1}`)

function checkString(string: string): string {
    return string + "- it is a string"; 
}

let firstString = checkString("Great is great" + " ")

console.log(`${firstString}`)

function checkBoolean(input: boolean): boolean {
    console.log(input)
    return input; //true;
}

let firstBoolean = checkBoolean(true)

console.log(`${firstBoolean}`)

//3 ways to write a function
function addQuotaes1 () {}
let addQuotaes2 = function () {};

//or

let addQuotaes3 = () => {};

function addTwo1(input1:number, input2:number) {
    return input1 + input2
}

var addThree = () => {
    return 2 + 3
}

function addAgain(input1: number, bacon: number) {
    return input1 + bacon
}




function addQuotes(needsQuotes: string): string {

//you can  use string interpolation
//    console.log("This is the best");
    return `"${needsQuotes}"`;
    
}

let quote: string = "this is a quote";
let withQuotations: string = addQuotes(quote);
console.log("This is not 'guoted':", quote);
console.log(
    'This is the return value from addQuotes(quote):',
    withQuotations
);

let myString: string = "Yulia Barbash";
let myQuotedString: string = addQuotes(myString);
console.log("This will be quoted:", myQuotedString);


//getSubtotal.ts om lesson 2 we have created a file 2:06:15

// we will create a subtotal with tax

var bookCost: number = 10
var gameCost: number = 60
var movieCost: number = 20

//we're going to use value above to make some 'Carts'

var cart1: number = 2*bookCost + gameCost
var cart2: number = movieCost + bookCost
var cart3: number = 6 * gameCost + 4 * movieCost + 15 * bookCost

// to see subtotal
console.log(cart1)
console.log(cart2)
console.log(cart3)
console.log(cart1 + cart2 + cart3)

//we are going to console.log the cart and the subtotal
//if you see a \n - new line
// if you se a \t - tabbed over for spacing
//and the ******* and ------ just make that more readable

//we are going to create a function
//.toFixed(4) - it is how many decimal pplaces /ceratcors long we need 

function printSubtotal(total: number, taxRate: number) {
    //we will copy from early before but make some adjustment
    console.log(
        `*******\n
        Your Cart: 
            \n\t Total: ${total}  
            \n\t Tax (at %${taxRate.toFixed(2)}): ${(total * taxRate/100).toFixed(2)}
            \n\t ------- 
            \n\t Subtotal: $${(total * (1 + (taxRate/100))).toFixed(2)}
        \n*******`
    ) 
}
// this function is created but haven't beed used - now we need to USE it
// 1. to used it we need to call it by the name
//

printSubtotal(cart1, 9)
printSubtotal(cart2, 9)
printSubtotal(cart3, 3.65)


// console.log(
//     `*******\nCart 1: 
//         \n\t Total: ${cart1}  
//         \n\t Tax (at 4.85%): ${cart1 * 0.0465}
//         \n\t ------- 
//         \n\t Subtotal: $${cart1 * 1.0485}
//     \n*******`
// ) 


// what if we need re use it we need create a function and use it

function greet(name, lastName) {
    console.log('Hello' + name + " " + lastName);
}

//John - is an argument of greet finction
// agrument - is a value of sypply for that parameter
//name - is parameter of greet function
//parameter - what we have at the declaration 
greet('John', 'Smith');
//function can have inputs 
