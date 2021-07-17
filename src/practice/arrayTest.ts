//value of the list is based on what is inside of the brackets "[]"
let myString = 'Hello there'

import { createImmediatelyInvokedFunctionExpression } from "typescript"

let firstArray: Array<any> = []
let secondArray = ['thing1', 'th2', '3']

firstArray.push(0)
firstArray.push(true)
firstArray.push("The Grinch")
firstArray.push(27)


console.log(firstArray)
// console.log(firstArray[3])
firstArray[2] = 'ANotherValue' //change value in a array
console.log(firstArray)
console.log(firstArray.length)
firstArray.forEach(item => {})
firstArray.push('item')
console.log(firstArray)
console.log(firstArray.pop())



// for (let i = 0; i > -1; i++) {
//     console.log("Hello")
// }

for (let i = 0; i < firstArray.length; i++) {
    console.log(i)
}

let favMovies: Array<string> = [
    'Die Hard',
    'Pulp fiction',
    'Lost in translatopn',
    'Saw',
    'Avangers',
    '666',
    'Star wars'
]

//writing a function
let stringify = (movie: string) => {
console.log(`Oh my goodness: ${movie} is so GREAAT!`)
}

favMovies.forEach((flix) => {
    // console.log(flix)
    stringify(flix)
})