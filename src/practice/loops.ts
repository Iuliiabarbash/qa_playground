// Ex1
for (let i = 0; i > -1; i++) {
    console.log(i)
    console.log(`Loop step ${i}`);
} 

//Ex2
for (var cheesburger = 10; cheesburger > 0; cheesburger--) {
    console.log(`That is correct number of cheesburgers ${cheesburger}`);
}

// //Ex3
 let pieNames: Array<string> = ["Apple", "Peach", "Cherry"];

 for(let i = 0; i <pieNames.length; i++) {
     console.log(`I love ${pieNames[i]} Pie`);  
 }

//4

console.log("pie list:", pieNames);
for (let i =0; i <pieNames.length; i++) {
    pieNames[i] = pieNames[i].toLowerCase();
    console.log(`I love ${pieNames[i]} pie!`);
}
console.log('Pie list:', pieNames);
  

// if(statement) {
//     action;
// }

// If/Else

// if(x == y) {
//     console.log('x was equal to y')
// }

// if(statement is true) {
//     //what is in here happenes
// }
// else{
//     //this will not happem
// }


// While loops
let myNum = 5;
while(myNum > 1) {
    console.log(myNum);
    myNum = myNum/2
}
console.log(`Exited when myNum was ${myNum}`);

let theNumb = 60;
while (theNumb > 6) {
    console.log(theNumb);
    theNumb = theNumb/3
}
console.log(`Exit when ${theNumb}`);

//Do while loops

let p = -12;
do {
    console.log(p);
    p = p/2;
} while (p > 1);
console.log(`Exit when my number was ${p}`);

//for Each loop
const numberList: Array<number> = [0, 5.5, 3.14159, -2000];

console.log('For each:');
for( let i = 0; i < numberList.length; i++) {
    console.log(`\tIndex: ${i}, Number: ${numberList[i]}`);
}

console.log('Array.forEach():');
numberList.forEach((num, index) => {
    console.log(`\tNumber: ${num} is at index ${index} in the list`);
});

const stringList: Array<string> = ["lio", 'zebra', 'smth else'];

console.log('For each string');
for( let i = 0; i < stringList.length; i++) {
    console.log(`\t Index: ${i}, String: ${stringList[i]}`);
}

console.log('String.forEach:');
stringList.forEach((str, index) => {
    console.log(`\tString: ${str} had index ${index} in this list of string`);
});
// ex 3
stringList.forEach((mystring) => {
    console.log(mystring)
})

let mystring = (strings: string) => {
    console.log(`Oh gosh this is ${strings}`)
}
stringList.forEach((line) => {
    mystring(line)
})