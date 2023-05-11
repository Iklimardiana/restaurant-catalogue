import CONFIG from '../../globals/config';

const createRestoItemTemplate = (Resto) => `
<div class="card" aria-label="${Resto.name}" tabindex="0" role="listitem"> 
    <img class="lazyload card-img-top" data-src="${CONFIG.BASE_IMAGE_URL + Resto.pictureId}" alt="gambar ${Resto.name}">
    <p class="rating">
        <i class="fas fa-star"></i>
        ${Resto.rating}
    </p>
    <p class="city">${Resto.city}</p>
    <a href="#/detail/${Resto.id}" class="card-title" aria-describedby="${Resto.name}">${Resto.name}</a>
    <div class="card-description">
        <p>${Resto.description}</p>
    </div>
</div>
`;

const createDetailRestoTemplate = (Resto) => `
<div class="resto_info" aria-label="${Resto.name} detail">
    <h2 class="resto_name">${Resto.name}</h2>
    <div class="img-detail">
        <img src="${CONFIG.BASE_IMAGE_URL + Resto.pictureId}" alt="gambar ${Resto.name}">
    </div>
    <div class="additional-info">
        <p>
            <span id="map-icon"><i class="fas fa-map-marked-alt"></i></span>
            ${Resto.address}, ${Resto.city}
            <br>
            <span id="rate-icon"><i class="fas fa-star"></i></span>
            ${Resto.rating}
        </p>
    </div>
    <h3 id="description-title">Description</h3>
    <p class="description-detail">${Resto.description} minutes</p>
    <div class="menu-resto">
        <h3>Menu</h3>
        <div class="menu-content">
            <ul class="foods">
                <h4>Foods</h4>
                ${Resto.menus.foods.map((food) => `<li><i class="fas fa-utensils" aria-hidden="true"></i> ${food.name}</li>`).join('')}
            </ul>

            <ul class="drink">
                <h4>Bevarage</h4>
                ${Resto.menus.drinks.map((food) => `<li><i class="fas fa-wine-glass-alt" aria-hidden="true"></i> ${food.name}</li>`).join('')}
            </ul>
        </div>
    </div>
</div>
`;

const createReviewTemplate = (review) => `
<div class="review">
    <p>
        <span class="name"><i class="fas fa-user"></i> ${review.name} </span> &bull;
        <span class="date">${review.date}</span>
    </p>
    <p> <i class="fas fa-comments"></i> ${review.review}</p>
</div>
`;

const createReviewFormTemplate = () => `<form class="form-review" id="form-review">
    <h3>Add Your Review</h3>
    <div class="form-field">
        <label for="name">Name</label>
        <input id="inputName" type="text" aria-label="name" class="form-control" placeholder="Your Name...">
    </div>
    <div class="form-field">
        <label for="review">Review</label>
        <textarea id="inputReview" class="form-control" aria-label="review" placeholder="Your Review..."></textarea>
        <input type="hidden" id="date" name="tanggal" value="">
    </div>
    <button id="submitReview" type="submit" class="submitReview">Submit</button>
    </form>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createDetailRestoTemplate,
  createReviewTemplate,
  createReviewFormTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
