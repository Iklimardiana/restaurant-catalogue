import data from '../../DATA.json';

class MenuList extends HTMLElement {
    set menu(menu) {
      this._menu = menu;
      this.render();
    }
  
    render() {
      this.innerHTML = '';
      const container = document.createElement("div");
      container.classList.add("container");
      container.setAttribute("tabindex", "0");
      container.setAttribute("aria-label", "list menu");
      data.restaurants.forEach((menu) => {
        const description = menu.description.slice(0, 150) + '...';
        const menuItem = `
          <div class="card" aria-label="${menu.name}" tabindex="0" role="listitem"> 
            <img src="${menu.pictureId}" class="card-img-top" alt="gambar ${menu.name}">
            <p class="rating">
              <i class="fas fa-star"></i>
              ${menu.rating}
            </p>
            <p class="city">${menu.city}</p>
            <p class="card-title" aria-describedby="${menu.name}">${menu.name}</p>
            <div class="card-description">
              <p>${description}</p>
            </div>
          </div>
        `;
        container.innerHTML += menuItem;
      });
      this.appendChild(container); 
    }
  };
  
  customElements.define('menu-list', MenuList);
