
// var firstString: string = "Say";
// var secondString: string = "Hello";

// // console.log(firstString + " " + secondString);
// // console.log(`${firstString} ${secondString}`);



function newFunction(firstString: string, secondString: string): string {
  return `${firstString}**************\n**************${secondString}`;
}
console.log(newFunction("Say", "Hello"));