const puppeteer = require('puppeteer');
const util = require('util');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      slowMo: 500
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
  //await page.waitFor('#imgid_12');
 
 // await page.click(attselector);
  //await page.waitForNavigation();
  var frames = await page.frames();
  //f   rames = util.inspect(frames);
//   frames.map((frame) => {
//     frame = util.inspect(frame);  
//     //console.log(JSON.stringify(frame,null,'\t'));
//     console.log(frame);
//     console.log('\n');
//     });
   var myframe = frames.find(f => f.name() === 'mygurukuliframe_submenu'); 
   const attselector = '#imgid_12';
   const attel = await myframe.$(attselector);
   const outerHTML = await attel.evaluate(e => e.parentNode.outerHTML);
   console.log('the outerhtml: ', outerHTML);
    await attel.click({button:'middle'});
    await page.waitForNavigation();
   await page.screenshot({path : 'example.png'});
  browser.close();
})();