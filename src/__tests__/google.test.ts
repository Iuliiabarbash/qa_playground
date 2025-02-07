import chromerdriver from 'chromedriver';
import { Builder, By, Capabilities, until, WebDriver } from 'selenium-webdriver';
import { isConstructorDeclaration } from 'typescript';

// import GoogL from '../pageObject/googlePage'

const chromedriver = require('chromedriver')
//this line make sure that our automation will find our chromedriver


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// that always the same
// here we are creating a driver to interect with chrome browser

// now we can write a test, and we are creating a jest tes for aour automation
// whenever you are interevting with a browser we need 'async' a keyword


class GoogL {
    url: string = 'https://www.google.com/'
    driver: WebDriver
    searchBar: By = By.name('q')
    result: By = By.id('res')
    constructor(drive) {
        this.driver = driver
    }
    async navigate() {
        await this.driver.get(this.url)
    }

    /**
     * 
     * @param {string} search  should be all LOVERCSE
     * @example object.doSearch('cats')
     */
    async doSearch (search: string) {
        await this.driver.wait(until.elementLocated(this.searchBar))
        let searchBar = await this.driver.findElement(this.searchBar)
        await searchBar.clear()
        await searchBar.sendKeys(`${search}\n`)
        await this.driver.wait(until.elementLocated(this.result))
        let myText = await driver.findElement(this.result).getText()
        expect(myText.toLowerCase()).toContain(search)
    }  
}

const myPage = new GoogL(driver)

test('Google search with page object model', async () => {
    await myPage.navigate()
    await myPage.doSearch('cats')
    await myPage.driver.quit()

})







test('Google search test', async() => {
    //we want put test to wait, or await until the page has loaded or command is complete 
    await driver.get('https://www.google.com/')

    let searchBar = await driver.findElement(By.name('q')) //By is how we locating a search bar
    await searchBar.sendKeys('Tenet\n')
    await driver.sleep(1500)
    await driver.quit()
})

//if we see async - await

test("search in google smth", async () => {
    await (await driver).get('https://www.google.com/')

    let searchBar = await (await driver).findElement(By.name('q'))
    await searchBar.sendKeys('Error\n')
    await (await driver).sleep(1000)
    
})