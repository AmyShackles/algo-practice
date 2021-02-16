const puppeteer = require("puppeteer");
const fs = require("fs");

class Crawler {
    constructor() {}
        crawl() {
            (async () => {
                const browser = await puppeteer.launch({ timeout: 0, dumpio: true, headless: false });
                const page = await browser.newPage();
                const urls = fs.readFileSync("urls.txt").toString().split("\n").filter(line => !!line);
                try {
                    let next = 0;
                    while (next < urls.length) {
                        await page.goto("https://leetcode.com");
                        await page.evaluate(() => {
                            localStorage.setItem('global_lang', 'javascript');
                        })
                        await page.goto(`https://leetcode.com/problems/${urls[next]}/`);

                        await page.waitForSelector('pre', { visible: true, timeout: 50000});
                            const content = await page.content();
                            fs.writeFileSync(`./out/${urls[next]}.html`, content);
                        next++;
                    }
                } catch (err) {
                    console.log("ERROR", err);
                }
                await browser.close();
            })();
        }
}

console.log("started");

new Crawler().crawl();