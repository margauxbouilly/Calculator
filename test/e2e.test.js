const puppeteer = require('puppeteer');
const app = require('../app');

const BASE_URL = 'http://localhost:3000';

let browser;
let page;
let server;

beforeAll(async () => {
    server = app.listen(3000);
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
});

afterAll(async () => {
    await browser.close();
    server.close();
});

test('displays correct sum when Add button is clicked', async () => {
    await page.goto(BASE_URL);
    await page.type('#a', '4');
    await page.type('#b', '5');
    await page.click('#add-btn');
    await page.waitForFunction(() => document.getElementById('result').textContent !== '');
    const result = await page.$eval('#result', el => el.textContent);
    expect(result).toBe('9');
});

test('displays 0 when both inputs are 0', async () => {
    await page.goto(BASE_URL);
    await page.type('#a', '0');
    await page.type('#b', '0');
    await page.click('#add-btn');
    await page.waitForFunction(() => document.getElementById('result').textContent !== '');
    const result = await page.$eval('#result', el => el.textContent);
    expect(result).toBe('0');
});

test('displays correct sum with negative numbers', async () => {
    await page.goto(BASE_URL);
    await page.type('#a', '-3');
    await page.type('#b', '7');
    await page.click('#add-btn');
    await page.waitForFunction(() => document.getElementById('result').textContent !== '');
    const result = await page.$eval('#result', el => el.textContent);
    expect(result).toBe('4');
});

test('displays correct result when Subtract button is clicked', async () => {
    await page.goto(BASE_URL);
    await page.type('#a', '10');
    await page.type('#b', '3');
    await page.click('#substract-btn');
    await page.waitForFunction(() => document.getElementById('result').textContent !== '');
    const result = await page.$eval('#result', el => el.textContent);
    expect(result).toBe('7');
});

test('displays correct result when Multiply button is clicked', async () => {
    await page.goto(BASE_URL);
    await page.type('#a', '4');
    await page.type('#b', '5');
    await page.click('#multiply-btn');
    await page.waitForFunction(() => document.getElementById('result').textContent !== '');
    const result = await page.$eval('#result', el => el.textContent);
    expect(result).toBe('20');
});

test('displays correct result when Divide button is clicked', async () => {
    await page.goto(BASE_URL);
    await page.type('#a', '10');
    await page.type('#b', '2');
    await page.click('#devide-btn');
    await page.waitForFunction(() => document.getElementById('result').textContent !== '');
    const result = await page.$eval('#result', el => el.textContent);
    expect(result).toBe('5');
});
