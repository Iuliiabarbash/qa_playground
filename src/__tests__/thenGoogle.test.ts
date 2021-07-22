import { Builder, By, Capabilities, until } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//this is not async functions
 
test('Promice changinf', () => {
    return driver.get('https://www.google.com/')
    .then(() => {
        //now our test is returing a promise that will resolve to return another promise
        // Jest will ait untill whole chain will resolved 
        return driver.wait(until.elementLocated(By.name('q')))
    })
    .then (() => {
        //each callback is returning a promise 
        //which we call '.then' to use that promise after it has resolved
        return driver.findElement(By.name('q')).sendKeys('Puppies\n')
    })
    .then(() => {
        return driver.wait(until.elementLocated(By.id('res')))
    })
    .then(() => {
        //this will return will resolve into a string certain element text
        return driver.findElement(By.id('res')).getText()
    })
    .then((text) => {
        //this is a technical way to handale the promise
        expect(text.toLocaleLowerCase()).toContain('puppies')

//now our  test is returning a promise - that will wait for whole chain resolved
        return driver.quit()
    })
    .catch((e) => {
        //this block looks for any error if occurs e - uses as error call back
        console.log(e)
        //and we don't want our test to pass if it skipped assertions
        expect(false).toBeTruthy()
        //Lastly we still want our browser to close if there is an error
        return driver.quit()
    })
})

//return does - stop the function - after that will happen
