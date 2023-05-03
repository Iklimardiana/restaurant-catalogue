import RestoDBSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../components/resto-list';

const ListResto = {
  async render() {
    return `
      <div class="loading"></div>
      <resto-list></resto-list>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');
    loading.addEventListener('animationend', () => {
      loading.classList.add('hide');
    });
    const list = await RestoDBSource.ListResto();
    const restoContainer = document.querySelector('.container_restoList');
    list.restaurants.forEach((menu) => {
      restoContainer.innerHTML += createRestoItemTemplate(menu);
    });
  },
};

export default ListResto;
