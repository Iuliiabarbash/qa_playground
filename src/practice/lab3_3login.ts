import { getParsedCommandLineOfConfigFile } from "typescript";

//we will create array of the objects

// identify Array and we will create class

class Login {
    username: boolean;
    password: boolean

    credenChecker() {
        if(this.username === false || this.password === false) {
            console.log(`Username or password is incorect`)
        } else {
            console.log("You are successfully logged in")
        }
    }

    constructor(
        username: boolean,
        password: boolean
    ) {
        this.username = username,
        this.password = password
    }

}

let myCredentials: Array<Login> = [
    new Login(true, true),
    new Login(true, false),
    new Login(false, true)
]
console.log(myCredentials[0].credenChecker())
myCredentials[1].credenChecker()

let firstCred: Login = new Login(false, false)
firstCred.credenChecker()

// console.log(firstCred.credenChecker())
