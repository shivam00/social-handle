const puppeteer = require('puppeteer');

const automate = async (link,res) => {
    const browser = await puppeteer.launch({ 
        headless: true,
        args: [
          `--window-size=${ 1024 },${ 700 }`
      ],
    });
    const page = await browser.newPage();
    await page.setViewport({ width:1224, height: 700 })
  
    await page.goto('https:linkedin.com');
  await page.click('#login-email');
    await page.waitFor(5000);
    await page.keyboard.type("mysocialhandles@gmail.com");
  await page.click('#login-password');
    await page.keyboard.type("QWER@123");
await page.click('#login-submit')
await page.waitFor(5000);
    await page.goto(link+"/detail/recent-activity/");
    await page.waitFor(50000);

const followers = await page.$eval('#recent-activity-top-card > div.pv-recent-activity-top-card__extra-info.pv3.ph5 > p', el => el.innerHTML);

   await browser.close();
let result = "{ followers : "+followers+"}";

   res.end(result);

  };
  module.exports= automate;
  
  