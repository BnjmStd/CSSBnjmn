import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });

const page = await browser.newPage();

await page
  .goto
  // links
  ();

const products = await page.$$eval(".s-card-container", (results) =>
  results.map((el) => {
    const title = el.querySelector("h2")?.innerText;

    if (!title) return null;

    const image = el.querySelector("img").getAttribute("src");

    const link = el.querySelector(".a-link-normal").getAttribute("href");

    const price = el.querySelector(".a-price").getAttribute("href");

    return { title, image, price, link };
  }),
);

console.log(products);
await browser.close();
