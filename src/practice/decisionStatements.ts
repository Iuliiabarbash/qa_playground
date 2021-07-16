function addChecks(Check1: number, Check2: number, Check3: number): number {
    return Check1 + Check2 + Check3;
    console.log("This should not print");
}

function checkIfStatement(station1: boolean, station2: boolean, station3: boolean): string {
    //first option is all 3 true
    if(station1 && station2 && station3) return "Nice!"
    if(station3 && station2) return "Not supper nice but OK!"
    if(station1 && station2) return "Not supper nice but OK, let it be!"
    if(station1 || station2 || station3) return "Not nice, could be better"
    return "ooops, next time"
}
 console.log(checkIfStatement(true,true,true),
 checkIfStatement(true, false, false)
 )

function addName(myName: boolean) {
if(myName) return "Yulia"
else 
    return "What's your name?"
}
console.log(addName(false))

var books: number = 2
var games: number = 3

var cart1: number = books + games
var cart2: number = books
var cart3: number = games

console.log(cart1)
console.log(cart2)
console.log(cart1+cart2+cart3)
console.log(`${cart3}`)

// if (x == y) {
//     console.log('x was equal to y')
// }

const myValue = "Match1"
function whatMatch(value: any) {
    switch (value) {
        case "Match1":
            return "That is a match"
            break
        case "Match2":
            return "Also a good match"
            break
        case "Match3":
            return "That is not a good"
            break
        default:
            return "No match"
    }    
}
console.log(whatMatch("Match3"))