import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

xdescribe('udemy.com', () => {

  const defaultTimeout = 5000; // ExpectedConditions's default timeout

  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().setSize(1024, 768);
  });

  beforeEach(async () => { });

  it('should browser 2 pages', async () => {
    await browser.get('https://www.udemy.com/');

    const elem2 = element(by.xpath('//a[@id="header.browse"]/span[2]'));
    await browser.wait(EC.elementToBeClickable(elem2), defaultTimeout,
      'Unable to find elem2 to be clickable.');
    await elem2.click();

    const elem3 = element(by.xpath('//body[@id="udemy"]/div/div[2]/div/div[2]/div[2]/div/ul/li/ul/li/a/span[2]'));
    await browser.wait(EC.elementToBeClickable(elem3), defaultTimeout,
      'Unable to find elem3 to be clickable.');
    await elem3.click();

    await browser.sleep(100000);

    /*
      Add Fiddle Custom Rule: OnBeforeResponse

      oSession.utilReplaceInResponse('<head>',
        '<head>' +
        '  <script>' +
        '    const newProto = navigator[\'__proto__\'];' +
        '    delete newProto.webdriver;' +
        '    navigator[\'__proto__\'] = newProto;' +
        '    Object.defineProperty(navigator, \'languages\', {' +
        '      get: function() { return [\'en-US\', \'en\']; },' +
        '    });' +
        '  <\/script>');
    */
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
