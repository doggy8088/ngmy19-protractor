import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

xdescribe('udemy.com', () => {

  beforeAll(async () => { });
  beforeEach(async () => { });

  it('should browser 2 pages', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().setSize(1024, 768);
    await browser.get('https://www.udemy.com/');
    await element(by.linkText('電子商務')).click();

    await browser.sleep(10000);

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
