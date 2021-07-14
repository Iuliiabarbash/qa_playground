var myData = {
    firstName: "Yulia",
    lastName: "Barbash",
    age: 31
}

// console.log(myData.age);

// var namesOfstudents = [
//     {
//         fName: "Yulia",
//         lName: "barbash"
//     },
//     {
//         fName: "Daniel",
//         lName: "Ehrich"
//     }
// ]

// console.log(namesOfstudents[1].lName);
// console.log(
//     `Person:\n\t Name: "${myData.firstName} ${myData.lastName}" \n\t Age: "${myData.age}`
// );

let myNewArray = [
    "Harry Potter",
    "5th Element",
    "Friends",
    "Somin",
    "Lord of the Rings",
    "Game of Thrones"
];
// for (let i = 0; i < myNewArray.length; i++) {
//     console.log(i);
// }
// myNewArray.forEach((movie, i) => {
//     console.log(`${i + 1}. ${movie}`);
// });

let newPeopleBook = [
    {
        name: "Yulia",
        age: 31,
        books: "Harry Potter"
    },
    {
        name: "Daniel",
        age: 34,
        books: "Naruto"
    }
]

console.log("\nAn object with an array\n========================");
    
var newArrayWithHappits = {
    firstName: "Yulia",
    lastName: "Barbash",
    age: 33,
    movies: [
        "Harry Potter",
        "5th Elemet",
        "Game of Thrones"
    ],
};
console.log(`Person:`);
console.log(
    `\t Name: "${newArrayWithHappits.firstName} ${newArrayWithHappits.lastName}"`
);
console.log(`\t Age: ${newArrayWithHappits.age}`);
console.log(`\t Movies:`);
newArrayWithHappits.movies.forEach((movie) => {
    console.log(`\t\t${movie}`)
});