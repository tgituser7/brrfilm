import { chromium } from "playwright";

const scratch =
  "C:\\Users\\256262\\AppData\\Local\\Temp\\claude\\d--BRR-Website\\23a18a1a-d1a5-4cae-bba7-2c0383601e06\\scratchpad";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:3000/team", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 1450));
await page.waitForTimeout(300);
await page.screenshot({ path: `${scratch}\\v541-wellwisher-bg.png` });

console.log("ERRORS:", JSON.stringify(errors));
await browser.close();
