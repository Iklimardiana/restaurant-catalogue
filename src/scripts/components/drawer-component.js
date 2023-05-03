class Drawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="drawer" id="mydrawer">
            <p>MedianaFood</p>
            <ul class=drawer-list>
                <hr>
                <li><a class="drawer-item" href="#/home">Home</a></li>
                <hr>
                <li class="drawer-item"><a href="#/favorite">Favorite</a></li>
                <hr>
                <li class="drawer-item"><a target="_blank" href="https://github.com/iklimardiana" rel="noopener">About us</a></li>
                <hr>
            </ul>
        </div>
        `;
  }
}

customElements.define('drawer-component', Drawer);
