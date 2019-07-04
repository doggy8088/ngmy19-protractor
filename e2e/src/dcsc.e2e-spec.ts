import { browser, by, $, $$, element, Key, logging, ExpectedConditions as EC, ElementFinder, promise } from 'protractor';

xdescribe('dcsc.lenovo.com', () => {

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
  });
  beforeEach(async () => { });

  it('should typing like a human', async () => {
    await browser.get('https://dcsc.lenovo.com/#/');

    const el = $('div.start-configuration-new-tile.lfo-background');
    const lo = $('.Loader__foreground');

    await browser.wait(EC.and(EC.presenceOf(el), EC.stalenessOf(lo)), 5000);
    await browser.wait(EC.elementToBeClickable(el), 5000);

    await el.click();

    const input = element(by.id('selectMode'));
    const partnum = '7X08A00WCN';
    await input.sendKeys(partnum);

    //#region solution 1
    // for (const i of partnum) {
    //   await browser.sleep(200);
    //   await input.sendKeys(i);
    // }
    //#endregion

    //#region solution 2
    // await input.sendKeysSlowly(partnum);
    //#endregion

    await browser.sleep(10000);

    // await input.sendKeys(Key.ENTER);

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});


ElementFinder.prototype.sendKeysSlowly = async function(...keys: (string | number | promise.Promise<string | number>)[]) {
  for (const item of keys) {
    if (item instanceof promise.Promise) {
      return await item;
    } else if (typeof(item) === 'string') {
      for (const key of item) {
        await browser.sleep(200);
        await this.sendKeys(key);
      }
    } else if (typeof(item) === 'number') {
      for (const key of item.toString()) {
        await browser.sleep(200);
        await this.sendKeys(key);
      }
    }
  }
};
