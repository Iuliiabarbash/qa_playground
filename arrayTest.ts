//value of the list is based on what is inside of the brackets "[]"
let myString = 'Hello there'

import { createImmediatelyInvokedFunctionExpression } from "typescript"

let firstArray = []
let secondArray = ['thing1', 'th2', '3']

firstArray.push(0)
firstArray.push(true)
firstArray.push("The Grinch")
firstArray.push(27)

// console.log(firstArray)
// console.log(firstArray[3])
// console.log(firstArrey).pop()


// for (let i = 0; i > -1; i++) {
//     console.log("Hello")
// }

for (let i = 0; i < firstArray.length; i++) {
    console.log(i)
}

let favMovies: Array<string> = [
    'Die Hard',
    'Pulp',
    'Lost in translatopn',
    'Saw',
    '777',
    '666',
    'Star wars'
]

let stringify = (flix: any) => {
console.log(`Oh my goodness: ${flix} is my fav`)
}

favMovies.forEach((movie) => {
    stringify(movie)
})