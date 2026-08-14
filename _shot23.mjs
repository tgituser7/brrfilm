import { chromium } from "playwright";

const scratch =
  "C:\\Users\\256262\\AppData\\Local\\Temp\\claude\\d--BRR-Website\\23a18a1a-d1a5-4cae-bba7-2c0383601e06\\scratchpad";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1400 } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

const idea = await page.$("#idea");
await idea.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.screenshot({ path: `${scratch}\\v21-idea-section.png` });

const navHrefs = await page.$$eval("header nav a", (as) => as.map((a) => a.getAttribute("href")));
console.log("NAV HREFS:", JSON.stringify(navHrefs));
console.log("ERRORS:", JSON.stringify(errors));
await browser.close();
