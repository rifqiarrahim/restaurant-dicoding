/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../templates/menu';
import insertReview from '../../utils/add-review';

const Detail = {
  async render() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('resto__name').focus();
    });
    return `
        <div class="detail-restaurant"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.detail-restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const foodContainer = document.querySelector('.foods');
    const { foods } = restaurant.menus;
    foods.forEach((food) => {
      const foodItemElement = document.createElement('menu-item');
      foodItemElement.menu = food;
      foodContainer.appendChild(foodItemElement);
    });
    const drinkContainer = document.querySelector('.drinks');
    const { drinks } = restaurant.menus;
    drinks.forEach((drink) => {
      const drinkItemElement = document.createElement('menu-item');
      drinkItemElement.menu = drink;
      drinkContainer.appendChild(drinkItemElement);
    });
    const reviewContainer = document.querySelector('.reviews');
    const reviews = restaurant.customerReviews;
    reviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewTemplate(review);
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
    const inputNama = document.querySelector('#nama');
    const inputReview = document.querySelector('#review');
    const buttonReview = document.querySelector('#submit');
    buttonReview.addEventListener('click', (event) => {
      event.preventDefault();
      const review = {
        id: url.id,
        name: inputNama.value,
        review: inputReview.value,
      };
      insertReview(review);
    });
  },
};

export default Detail;
