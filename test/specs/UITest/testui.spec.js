import {expect, browser} from '@wdio/globals';

describe('HOME TASK Task 1', () => {
  it('Check the title is correct', async () =>{
    await browser.url('https://www.epam.com/');
    const pageTitle = await browser.getTitle();

    expect(pageTitle).toEqual(
        'EPAM | Software Engineering & Product Development Services',
    );
  });
});
