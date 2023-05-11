/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('post a restaurant review', async ({ I }) => {
  const reviewText = ' E2E Post Review Customer text';
  I.amOnPage('/');
  I.waitForElement('.card a', 10);
  I.seeElement('.card a');
  const firstResto = locate('.card a').first();
  I.click(firstResto);

  I.waitForElement('.form-review', 10);
  I.seeElement('.form-review');
  I.fillField('#inputName', 'Name test e2e');
  I.fillField('#inputReview', reviewText);
  I.click('.submitReview');

  I.waitForElement('.review', 10);

  const lastReview = locate('.review p').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText);
});
