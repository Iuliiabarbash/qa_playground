const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  import { PracticePage } from "./PracticePage";

  const page = new PracticePage(driver);

  test("can search stories", async () => {
    await page.navigate();
    await page.searchStories("Stories");
    let title = await page.getStoryTitles();
    expect(title[0]).toContain('stories');
  });

afterAll(async () => {
  await driver.quit();
});