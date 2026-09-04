import { chromium } from "playwright";

const scratch =
  "C:\\Users\\256262\\AppData\\Local\\Temp\\claude\\d--BRR-Website\\23a18a1a-d1a5-4cae-bba7-2c0383601e06\\scratchpad";

const browser = await chromium.launch();
const errors = [];

async function shotSwami(viewport, label) {
  const page = await browser.newPage({ viewport });
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(`swami-${label}: ${msg.text()}`); });
  page.on("pageerror", (err) => errors.push(`swami-${label}: ${err}`));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3200);
  await page.locator("#about").scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, 700));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${scratch}\\v751-swami-fixed-${label}.png`, fullPage: label === "mobile" });
  await page.close();
}

async function shotSynopsis() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(`synopsis: ${msg.text()}`); });
  page.on("pageerror", (err) => errors.push(`synopsis: ${err}`));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3200);
  await page.locator("#synopsis").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${scratch}\\v751-synopsis.png` });
  await page.close();
}

async function shotMessage() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(`message: ${msg.text()}`); });
  page.on("pageerror", (err) => errors.push(`message: ${err}`));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3200);
  await page.locator("text=राधे राधे नाम ही जीवन का सार है").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${scratch}\\v751-message.png` });
  await page.close();
}

await shotSwami({ width: 1600, height: 1200 }, "desktop");
await shotSwami({ width: 390, height: 900 }, "mobile");
await shotSynopsis();
await shotMessage();

console.log("ERRORS:", JSON.stringify(errors));
await browser.close();
