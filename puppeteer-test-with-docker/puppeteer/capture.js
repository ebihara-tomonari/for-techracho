const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({width: 1024, height: 800});
  const url = 'http://web/techracho-sample.html';
  const mailUrl = 'http://mail';
  let now = new Date();
  now.setHours(now.getHours() + 9);

  await page.goto(url);
  await page.screenshot({path: 'logs/capture_before_' + dateToFormat(now) + '.png'});
  console.log("save screenshot: " + url);

  await page.type('input[name="name"]', 'hogehoge');
  await page.screenshot({path: 'logs/capture_after_' + dateToFormat(now) + '.png'});
  console.log("save screenshot after input: " + url);

  await page.click('input[type="submit"]');
  await page.goto(mailUrl);
  await page.click('a.email-item:first-of-type');
  await page.screenshot({path: 'logs/capture_mail_' + dateToFormat(now) + '.png'});
  console.log("save screenshot maildev");

  const iPhone = puppeteer.devices['iPhone 6'];
  const techrachoUrl = 'https://techracho.bpsinc.jp/';
  await page.emulate(iPhone);
  await page.goto(techrachoUrl);
  await page.screenshot({path: 'logs/capture_techracho_' + dateToFormat(now) + '.png'});
  console.log("save screenshot Techracho for SP");

  await browser.close();
})();

function dateToFormat(date) {
  const year     = date.getFullYear();
  const month    = date.getMonth() + 1;
  const day      = date.getDate();
  const hour     = date.getHours();
  const min      = date.getMinutes();
  return `${year}${month}${day}_${hour}_${min}`;
}
