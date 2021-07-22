import{WebDriver, By, until} from 'selenium-webdriver'

export class GoogL {
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