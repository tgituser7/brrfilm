import { chromium } from "playwright";

const scratch =
  "C:\\Users\\256262\\AppData\\Local\\Temp\\claude\\d--BRR-Website\\23a18a1a-d1a5-4cae-bba7-2c0383601e06\\scratchpad";

const browser = await chromium.launch();
const errors = [];

async function shot(viewport, label) {
  const page = await browser.newPage({ viewport });
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(`${label}: ${msg.text()}`); });
  page.on("pageerror", (err) => errors.push(`${label}: ${err}`));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3200);
  await page.locator("#about").scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, 700));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${scratch}\\v741-swami-overlap-${label}.png` });
  await page.close();
}

await shot({ width: 1600, height: 1200 }, "desktop");
await shot({ width: 390, height: 1400 }, "mobile");

console.log("ERRORS:", JSON.stringify(errors));
await browser.close();
