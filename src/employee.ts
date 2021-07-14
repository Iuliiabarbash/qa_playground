// Example 1

class Employee {
    name: string;
    phone: string;
    email: string;
    id: number;

    constructor(
        name:string, 
        phone:string, 
        email:string,
        id:number) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id
    }
    toString(): string {
        let output = 
            `Employee record --- ID: ${this.id}\n` +
            `\t First name: ${this.name}\n` +
            `\t Phone of the emploee: ${this.phone}\n` +
            `\t Email: ${this.email}`;
        return output;
    }
}
let someEmployee =  new Employee(
    "David Aggiro", 
    "540 011 00 07", 
    "david.email@don.com",
    1);

// console.log(someEmployee.toString())



//Example 2
class Cat {
    name: string;
    breed: string;
    age: number;
constructor( 
    name:string,
    breed:string,
    age:number) {
        this.name = name;
        this.breed = breed;
        this.age = age
    }
aMethod(): string {
    let output = 
        `\tThis is my cat!\n` +
        `\tHis name is ${this.name}\n` +
        `\tHe has a mask on his face because hes breed is ${this.breed}\n` +
        `\tAnd he is only ${this.age} month old`;
    return output;
    }
}
let myCat = new Cat (
    "Whiskey",
    "Birman cat",
    4
);
console.log(myCat.aMethod())