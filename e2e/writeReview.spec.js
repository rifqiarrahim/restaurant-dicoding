/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');
const { exit } = require('process');

Feature('Liking Restaurants');

Scenario('write one review', async ({ I }) => {
  I.amOnPage('/');
  const firstResto = locate('.content a').first();
  I.click(firstResto);

  I.seeElement('.card-review');
  const beforeAddReview = await I.grabNumberOfVisibleElements('.card-review');

  I.seeElement('#nama');
  I.fillField('#nama', 'tes');
  I.fillField('#review', 'bagus');
  I.click('#submit');
  const afterAddReview = await I.grabNumberOfVisibleElements('.card-review');
  assert(beforeAddReview < afterAddReview);
});
