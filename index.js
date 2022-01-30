const puppeteer = require("puppeteer");
const userAgent = require("user-agents");
const getScreenshot = async (tag) => {
  const url = `https://royaleapi.com/player/${tag}`;
  console.log(url);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(userAgent.toString());
  await page.goto(url);
  await page.click(
    "#tyche_cmp_modal > div > div > div > div.banner_consentContainer--2LvIr > div:nth-child(2) > a"
  );
  await page.waitFor(1000);
  await page.setViewport({ width: 1440, height: 4000 });
  await page.screenshot({ path: "screenshot.png" });

  await browser.close();
};

getScreenshot("9Y9YGVUG");
