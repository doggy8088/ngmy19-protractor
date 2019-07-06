import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';

xdescribe('make sure Will Huang is on the list of Speakers', () => {

  const defaultTimeout = 5000; // ExpectedConditions's default timeout

  beforeAll(async () => {
    await browser.manage().window().setSize(350, 280);
  });

  beforeEach(async () => {
  });

  it('should make sure Will Huang is on the Speakers page', async () => {
    await browser.get('https://2019.ng-my.org/');

    const elem2 = element(by.linkText('Speakers'));
    await elem2.click();

    const elem3 = element(by.xpath('//main[@id="team"]/section/div/div/div[5]/article/div[2]'));
    await elem3.click();

    const elem4 = element(by.xpath('//main[@id="team"]/my-modal/section/div/div/div/div/div'));
    const text4 = 'Will Huang (保哥)';
    expect(await elem4.getText()).toContain(text4);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
