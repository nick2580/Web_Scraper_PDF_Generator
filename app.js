const puppeteer = require("puppeteer");

async function scrapeData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);

  const result = await page.evaluate(() => {
    // Show Answer - Unhide them
    let answersData = document.getElementsByClassName("collapseomatic_content");
    for (let index = 0; index < answersData.length; index++) {
      const answer = answersData[index];
      answer.style.display = "block";
    }
    return;
  });
  const count = Math.floor(Math.random() * 250);
  await page.emulateMediaType("screen");
  await page.pdf({
    path: `mechatronics_${count}.pdf`,
    format: "A4",
  });
  console.log(`Success ${count}`);

  browser.close();
}

urlData = [
  // "https://www.sanfoundry.com/mechatronics-questions-answers-elements-mechatronics-system/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-mechatronics-design-process/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-measurement-systems/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-control-systems/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-microprocessor-based-controllers/",
  // "https://www.sanfoundry.com/mechatronics-interview-questions-answers/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-campus-interviews/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-humanoid-robot/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-advanced-vehicle-control-system/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-advantages-disadvantages/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-types-transducers/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-transducers-dynamic-characteristics/",
  // "https://www.sanfoundry.com/mechatronics-assessment-questions-answers/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-position-sensors/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-motion-sensors/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-force-sensors/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-acceleration-sensors/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-torque-sensors/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-fluid-pressure-sensors/",
  // "https://www.sanfoundry.com/mechatronics-questions-answers-liquid-flow-sensors/",
  // "https://www.sanfoundry.com/mechatronics-question-papers/",
];

async function processArray(array) {
  for (const url of array) {
    await scrapeData(url);
  }
  console.log("Done!");
}
processArray(urlData);

console.log(urlData.length);
