/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('resto-name').focus();
    });
    return `
        <div class="top-banner">
        </div>
        <div class="explore-restaurant">
            <h2 tabindex="0">Explore Restaurant</h2>
        </div>
        <div class="restaurant-list"></div>
        `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.allRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};
export default Home;
