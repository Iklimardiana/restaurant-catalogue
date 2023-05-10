/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';
import {
  createDetailRestoTemplate,
  createReviewTemplate,
  createReviewFormTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-btn-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div class="loading"></div>
        <div class="container-detail" tabindex="0" role="restaurant detail"></div>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');
    loading.addEventListener('animationend', () => {
      loading.classList.add('hide');
    });
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestoDBSource.detailResto(url.id);

    const restoDetail = document.querySelector('.container-detail');
    restoDetail.innerHTML = createDetailRestoTemplate(detail);

    restoDetail.innerHTML += `
      <div class="resto-review" aria-label="restaurant reviews" role="review">
      </div>
    `;

    const restoReview = document.querySelector('.resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createReviewTemplate(review);
    });
    restoReview.innerHTML += createReviewFormTemplate();

    const reviewForm = document.getElementById('form-review');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const reviewerName = document.getElementById('inputName').value;
      const reviewText = document.getElementById('inputReview').value;
      const reviewData = {
        id: url.id,
        name: reviewerName,
        review: reviewText,
      };

      await RestoDBSource.addReview(reviewData);

      await this.afterRender();
    });

    const likeButtonContainer = document.createElement('div');
    likeButtonContainer.setAttribute('id', 'likeButtonContainer');
    restoDetail.appendChild(likeButtonContainer);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
      likeResto: FavoriteRestoIdb,
    });

    // Add skip to content listener
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.getElementById('maincontent');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });

    // Scroll to main content on page load
    mainContent.scrollIntoView();
  },
};

export default Detail;
