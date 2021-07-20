let pallyChecker = (word:string):string => {
    return word.split("").reverse().join("")
} //this function is reversing the word

const myPals: Array<string> = [
'rer',
'333',
'sos',
'yulia ailuy'
]

test("Suppose tobe a pallindrome Data Driven Test", () => {
    myPals.forEach((pals)=>{
        expect(pallyChecker(pals[0])).toBe(pals[0])

    })
})

for (let i = 0; i<myPals.length; i++) {
    expect(pallyChecker(myPals[i])).toBe(myPals[i])
}

// test('Palindrom data Driver test'), () => {
//     expect(pallyChecker(myData[0])).toBe(myData[0])

