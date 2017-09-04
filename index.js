const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://www.my-gurukul.com/login.aspx?BROWSERWINDOW=&BROWSER=FF&DF=MM/DD/YYYY&CF=MYGURUKUL&SID=1022');
  const userselector = '#txtUserName';
  const passselector = '#txtPassword';
  const loginselector = '#Validate';
  const CREDS = {
      username: '1NT15CS211',
      password: 'ZAM050397'
  }
  await page.click(userselector);
  await page.type(CREDS.username);
  
  await page.click(passselector);
  await page.type(CREDS.password);
  
  await page.click(loginselector);
  
  await page.waitForNavigation();

//   const attselector = '#submenuIconDiv > table > tbody > tr:nth-child(2) > td:nth-child(5)';
//   await page.waitForSelector(attselector);
//   await page.click(attselector);
//   await page.waitForNavigation();
  let url = 'http://www.my-gurukul.com/frmAcaViewInfo.aspx?kmlm=066057043042059065066062064050';
  await page.goto(url);
  await page.waitFor(5*1000);
  await page.screenshot({path: 'example.png'});
  browser.close();
})();