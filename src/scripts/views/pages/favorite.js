import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../components/resto-list';

const Favorite = {
  async render() {
    return `
        <h2 text-align:"center">Favorite page</h2>
        <div class="loading"></div>
        <resto-list></resto-list>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');
    loading.addEventListener('animationend', () => {
      loading.classList.add('hide');
    });
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('.container_restoList');

    resto.forEach((data) => {
      restoContainer.innerHTML += createRestoItemTemplate(data);
    });
  },
};

export default Favorite;
