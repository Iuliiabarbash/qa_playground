import chromerdriver from 'chromedriver';
import { Builder, By, Capabilities } from 'selenium-webdriver';

const chromedriver = require('chromedriver')
//this line make sure that our automation will find our chromedriver

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
//that always the same
//here we are creating a driver to interect with chrome browser

//now we can write a test, and we are creating a jest tes for aour automation
//whenever you are interevting with a browser we need 'async' a keyword

// test('Google search test', async() => {
//     //we want put test to wait, or await until the page has loaded or command is complete 
//     await driver.get('https://www.google.com/')

//     let searchBar = await driver.findElement(By.name('q')) //By is how we locating a search bar
//     await searchBar.sendKeys('Tenet\n')
//     await driver.sleep(1500)
//     await driver.quit()
// })

//if we see async - await

test("search in google smth", async () => {
    await (await driver).get('https://www.google.com/')

    let searchBar = await (await driver).findElement(By.name('q'))
    await searchBar.sendKeys('Error\n')
    await (await driver).sleep(1000)
    
})