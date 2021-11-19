/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async allRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      alert(error);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      alert(error);
    }
  }
}

export default RestaurantSource;
