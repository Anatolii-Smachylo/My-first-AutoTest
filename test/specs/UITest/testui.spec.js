// import {expect, browser} from '@wdio/globals';

describe('HOME TASK Task 1', () => {
  it('Check the title is correct', async () =>{
    await browser.url('https://www.epam.com/');
    const pageTitle = await browser.getTitle();

    expect(pageTitle).toEqual(
        'EPAM | Software Engineering & Product Development Services',
    );
  });
  it('Check the ability to switch Light / Dark mode', async () =>{
    // Open Url
    await browser.url('https://www.epam.com/');
    // Change screen size
    await browser.setWindowSize(1920, 1080);
    // Get current Thema stile
    const bodyClass = await browser.$('body').getAttribute('class');
    // Alocate toggle
    const toggle = await $(
        '//*[@id="wrapper"]/div[2]/div[1]/header/div/div/section/div',
    );
    // const toggle = await browser.$('//div[@class="theme-switcher"]');
    // const toggle = await browser.$('.theme-switcher .switch')
    // Change the thema
    await toggle.click();
    // console.log($);
    // Get New thema
    const modeType = await browser.$('body').getAttribute('class');
    expect(bodyClass).not.toEqual(modeType);
    // console.log(bodyClass, modeType);
  }); 
  it('Check that allow to change language to UA', async () =>{
    // Open Url
    await browser.url('https://www.epam.com/');
    // Change screen size
    await browser.setWindowSize(1920, 1080);
    // Find language controle and click
    await browser.$(
        // eslint-disable-next-line max-len
        'div[class*="header__control"] button[class*="location-selector__but"]',
    ).click();
    // await browser.pause(10000);
    // Find Ukrainian language
    const element = $(
        'ul[class^="location-selector"] a[lang="uk"]',
    ); // Locate the element using $ function
    // const element = $('ul[class^="location-selector"] a[href="https://careers.epam.ua"]'); // Locate the element using $ function
    // const element = $('ul[class^="location-selector"] :nth-child(6)');
    // Change the language
    if (element.isClickable()) { // Check if the element is displayed
      element.click(); // Click the element
    } else {
      console.log('The element is not displayed.');
    };
    await browser.pause(10000);
  });
});
