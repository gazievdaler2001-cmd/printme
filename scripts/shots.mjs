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

for (const [name, path] of pages) {
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `/tmp/${name}.png`, fullPage: true });
  console.log("shot", name);
}

await browser.close();
