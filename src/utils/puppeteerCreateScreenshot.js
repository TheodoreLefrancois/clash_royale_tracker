const puppeteer = require("puppeteer");
// import userAgent from "user-agents";
import { useRouter } from "vue-router";
const router = useRouter();
const getScreenshot = async (tag) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setUserAgent(userAgent.toString());
  await page.goto(`https://royaleapi.com/player/${tag}`);
  await page.click(
    "#tyche_cmp_modal > div > div > div > div.banner_consentContainer--2LvIr > div:nth-child(2) > a"
  );
  await page.waitFor(1000);
  await page.setViewport({ width: 1440, height: 4000 });
  await page.screenshot({ path: "screenshot.png" });

  await browser.close();
  router.push("/result");
};

export default getScreenshot;
