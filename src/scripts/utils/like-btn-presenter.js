// eslint-disable-next-line max-len
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, likeResto, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._likeResto = likeResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const Resto = await this._likeResto.getResto(id);
    return !!Resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._likeResto.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._likeResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

};

export default LikeButtonPresenter;
