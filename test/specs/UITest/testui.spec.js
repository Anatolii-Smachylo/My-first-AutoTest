import {expect, browser} from '@wdio/globals';

//import { expect } from "chai";

describe('HOME TASK Task 1', () => {
  // Test1
  it('Check the title is correct', async () =>{
    await browser.url('https://www.epam.com/');
    const pageTitle = await browser.getTitle();

    expect(pageTitle).toEqual(
        'EPAM | Software Engineering & Product Development Services',
    );
  });
  // Test2
  it('Check the ability to switch Light / Dark mode', async () =>{
    // Open Url
    await browser.url('https://www.epam.com/');
    // Change screen size
   // await browser.setWindowSize(1920, 1080);
    // Get current Thema stile
    const bodyClass = await browser.$('body').getAttribute('class');
    // Alocate toggle
    const toggle = await $(
        '//*[@id="wrapper"]/div[2]/div[1]/header/div/div/section/div',
    );
    // Change the thema
    await toggle.click();
    // Get New thema
    const modeType = await browser.$('body').getAttribute('class');
    expect(bodyClass).not.toEqual(modeType);
  });
 // Test 3
  it('Check that allow to change language to UA', async () =>{
    // Open Url
    await browser.url('https://www.epam.com/');
    // Change screen size
    // await browser.setWindowSize(1920, 1080);
    // Find language controle and click
    await browser.$(
        // eslint-disable-next-line max-len
        'div[class*="header__control"] button[class*="location-selector__but"]',
    ).click();
    // Find Ukrainian language
    const element = $(
        'ul[class^="location-selector"] a[lang="uk"]',
    );
    // Change the language
    if (element.isClickable()) {
      element.click();
    } else {
      console.log('The element is not displayed.');
    };
    // Wait till page is loaded
    await browser.pause(3000);
    // Get page tittle
    const pageTitle = await browser.getTitle();
    console.log(pageTitle);
    //Verify that Language is Ukrainian
    expect(pageTitle).toEqual(
      'EPAM Ukraine - найбільша ІТ-компанія в Україні | Вакансії',
  );
    
  });
});
