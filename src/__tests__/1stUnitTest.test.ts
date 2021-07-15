//#1
// describe block contain multipal test
// describe used to house different type of test that related to each other
describe('my first test', ()=>{
    it('adds 2+2', () => {
        expect(2 + 2).toBe(4);
    });
});
//#2
describe("2nd test", () => {
    it('My name to be correct', () =>{
        expect(true).toBeTruthy();
        expect("Yulia").not.toBe("Iuliia");
    });
});

//#3#4
//creating function and named it mirrorText and in set we show what we should reverse 
function mirrorText(text) {
    return text.split('').reverse().join('');
}

describe('The function mirrorText', () => {
    it('should reverse a short string', () => {
        const short = 'Hi';
        const shortReversed = 'iH';
        expect(mirrorText(short)).toBe(shortReversed);
    });
    it('SHOULD REVeRSE A SHORT STRING', () => {
        const long = "Hello there!";
        const longReverse = "!ereht olleH";
        expect(mirrorText(long)).toBe(longReverse);
    });
});

expect(2+2).toBe(4)
expect(2+2).not.toBe(5)


var fruit = [ 'Apple', 'orange', 'banana'];
expect(fruit).toHaveLength(3);

//#5#6
describe("name of the collection of test - Jest expect test", () => {
    //inside we can have a a lot of test
    it('can multiply 2*2', () => {
        expect(2*2).toBe(4)
    });
//"it" is formated as syntax for the "describe" 
    it('Can verify a sentence', () => { // here is an actual code that will run
        expect("Sentence will be a sentence").toBe("Sentence will be a sentence")
    });
});

let pi = 3.14

expect(pi).toBe(3.14)

console.log(pi)

test('My test', () => {
    var myNumber: number = 31
    console.log(myNumber)

    myNumber = 3.14
    console.log(myNumber)
})

//in typescript we can type things

//dataType

test('Declaring and Using variables', () => {
    //lets declare a variable

    let theNumber: number = 2
    var theWords: string = 'Whiskey'
    const theTrue: boolean = true

    expect(numberChecker(theNumber)).toBeTruthy()
    expect(stringChecker(theWords)).toBeTruthy()
    expect(booleanChecker(theTrue)).toBeTruthy()

})

function numberChecker(x) {
    return typeof x == "number"
}

function stringChecker(x) {
    return typeof x == "string"
}

function booleanChecker(x) {
    return typeof x == "boolean"
}




