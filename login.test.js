const puppeteer = require("puppeteer") // v22.0.0 or later

;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  const timeout = 5000
  page.setDefaultTimeout(timeout)

  {
    const targetPage = page
    await targetPage.setViewport({
      width: 1004,
      height: 779,
    })
  }
  {
    const targetPage = page
    const promises = []
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation())
    }
    startWaitingForEvents()
    await targetPage.goto("http://localhost:5173/")
    await Promise.all(promises)
  }
  {
    const targetPage = page
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Email)"),
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 210.359375,
          y: 23.40625,
        },
      })
  }
  {
    const targetPage = page
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Email)"),
      targetPage.locator("#email"),
      targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
      targetPage.locator(":scope >>> #email"),
    ])
      .setTimeout(timeout)
      .fill("user@example.com")
  }
  {
    const targetPage = page
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Password)"),
      targetPage.locator("#password"),
      targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
      targetPage.locator(":scope >>> #password"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 120.359375,
          y: 25.40625,
        },
      })
  }
  {
    const targetPage = page
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Password)"),
      targetPage.locator("#password"),
      targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
      targetPage.locator(":scope >>> #password"),
    ])
      .setTimeout(timeout)
      .fill("string")
  }
  {
    const targetPage = page
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Login)"),
      targetPage.locator("div.chakra-stack > button"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div/div/div/form/div/div[2]/button)'
      ),
      targetPage.locator(":scope >>> div.chakra-stack > button"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 112.359375,
          y: 28.40625,
        },
      })
  }

  await browser.close()
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
