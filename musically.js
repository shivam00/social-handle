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
  
    await page.goto(link);

    await page.waitFor(5000);
    const following = await page.$eval('#musicContent > div > div > p:nth-child(1) > strong', el => el.innerHTML);
    const heart = await page.$eval('#musicContent > div > div > p:nth-child(3) > strong', el => el.innerHTML);
    const fans = await page.$eval('#musicContent > div > div > p:nth-child(2) > strong', el => el.innerHTML);
   await browser.close();
let result = "{ following : "+following+",heart:"+ heart+", fans : "+fans+"}";

   res.end(result);

  };
  module.exports= automate;
  