import { Builder, By, Capabilities, until } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('Awaiting async Functionality', async () => {
    await driver.get('https://www.google.com/')
    await driver.wait(until.elementLocated(By.name('q')))
    await driver.findElement(By.name('q')).sendKeys('kittens\n')
    await driver.wait(until.elementLocated(By.id('res')))
    let text = await driver.findElement(By.id('res')).getText()
    expect(text.toLowerCase()).toContain('kitten')
    await driver.quit()
})