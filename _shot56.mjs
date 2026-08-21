import { chromium } from "playwright";

const scratch =
  "C:\\Users\\256262\\AppData\\Local\\Temp\\claude\\d--BRR-Website\\23a18a1a-d1a5-4cae-bba7-2c0383601e06\\scratchpad";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await page.click("text=हिंदी");
await page.waitForTimeout(800);
await page.screenshot({ path: `${scratch}\\v52-hero-desktop-shifted.png` });

// wide screen too
const wide = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await wide.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await wide.click("text=हिंदी");
await wide.waitForTimeout(800);
await wide.screenshot({ path: `${scratch}\\v52-hero-desktop-wide.png` });

await browser.close();
