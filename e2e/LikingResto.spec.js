/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');
const { exit } = require('process');

Feature('Liking Restaurants');

Scenario('showing empty liked restaurants', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-restaurant');
  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.card-restaurant');
  assert(visibleLikedRestaurants === 0);
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  const firstResto = locate('.content a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-restaurant');
  const likedRestoTitle = await I.grabTextFrom('#resto-name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  const firstResto = locate('.content a').first();
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const firstLikedResto = locate('.content a').first();
  I.click(firstLikedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.card-restaurant');
  assert(visibleLikedRestaurants === 0);
});
