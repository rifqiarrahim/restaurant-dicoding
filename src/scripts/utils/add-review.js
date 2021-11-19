/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
import CONFIG from '../globals/config';
import { createReviewTemplate } from '../views/templates/template-creator';

const insertReview = async (review) => {
  try {
    const response = await fetch(`${CONFIG.BASE_URL}review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    const reviewContainer = document.querySelector('.reviews');
    const reviews = responseJson.customerReviews;
    reviewContainer.innerHTML = '';
    reviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewTemplate(review);
    });
  } catch (error) {
    alert(error);
  }
};
export default insertReview;
