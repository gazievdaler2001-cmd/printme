import { chromium } from "playwright";

const EXEC = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const BASE = "http://localhost:3000";

const pages = [
  ["home", "/ru"],
  ["catalog", "/ru/catalog"],
  ["studio", "/ru/studio"],
  ["about", "/ru/about"],
];

const browser = await chromium.launch({
  executablePath: EXEC,
  args: ["--no-sandbox", "--disable-gpu"],
});
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

async function autoScroll() {
  const height = await page.evaluate(() => document.body.scrollHeight);
  const vh = 900;
  for (let pos = 0; pos <= height; pos += Math.round(vh * 0.6)) {
    await page.evaluate((y) => window.scrollTo(0, y), pos);
    await page.waitForTimeout(350); // let IntersectionObserver + animation fire
  }
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
}

for (const [name, path] of pages) {
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
  await autoScroll(); // trigger framer-motion whileInView reveals
  await page.screenshot({ path: `/tmp/${name}.png`, fullPage: true });
  console.log("shot", name);
}

await browser.close();
