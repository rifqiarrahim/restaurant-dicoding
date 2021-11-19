/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <h2 tabindex='0' class="resto__name" id='resto__name'>${resto.name}</h2>
  <h3 tabindex='0'>Information</h3>
  <div class="resto__info">
    <div class='info_item'>
      <h4 tabindex='0'>City</h4>
      <p tabindex='0'>${resto.city}</p>
    </div>
    <div class='info_item'>
      <h4 tabindex='0'>Address</h4>
      <p tabindex='0'>${resto.address}</p>
    </div>
    <div class='info_item'>
      <h4 tabindex='0'>Rating</h4>
      <p tabindex='0'>${resto.rating}</p>
    </div>
  </div>
  <div class="restaurant__overview">
    <h3 tabindex='0'>Description</h3>
    <p tabindex='0'>${resto.description}</p>
  </div>
  <h3 tabindex='0'>Foods</h3>
  <div class='foods'></div>
  <h3 tabindex='0'>Drinks</h3>
  <div class='drinks'>
  </div>
  <h3 tabindex='0'>Reviews</h3>
  <div class='reviews'>
  </div>
  <h3 tabindex='0'>Write a Review</h3>
  <form id='review-form'>
    <h4>Your Name</h4>
    <input id="nama" type="text" placeholder="Write Your Name...">
    <h4>Your Review</h4>
    <input id="review" type="text" placeholder="Write a Review...">
    <button id="submit" class="review-btn">Submit Your Review</button>
  </form>
  
  
`;

const createReviewTemplate = (review) => `
    <div class = card-review>
    <h4 tabindex='0'>${review.name}</h4>
    <h5 tabindex='0'>${review.review}</h5>
    <p tabindex='0'>${review.date}</p> 
    </div>
`;
const createRestaurantItemTemplate = (resto) => `
        <div class = 'card-restaurant'> 
        <img class="lazyload img-resto" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Foto ${resto.name}">
        <div class="content">
        <h3><a id="resto-name" href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <div class="rating">
            <i class="material-icons">star</i>
            <p tabindex="0" aria-label="rating ${resto.rating}" >${resto.rating}</p>
        </div>
        </div>
        </div>
        `;
const createLikeButtonTemplate = () => `
        <button aria-label="like this restaurant" id="likeButton" class="like">
           <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
      `;

const createLikedButtonTemplate = () => `
        <button aria-label="unlike this restaurant" id="likeButton" class="like">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
      `;
export {
  createReviewTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
