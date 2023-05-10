import logo from '../../public/images/icons/logo.png';

class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="navbar">
            <div class="logo">
                <a href="/">
                    <img src="${logo}" alt="Logo" width="27px" height="27px">
                </a>
            </div>
            <button class="hamburger" aria-label="button to open side menu">☰</button>
            <div class="menu">
                <ul>
                    <li class="nav_item"><a href="#/home">Home</a></li>
                    <li class="nav_item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav_item">
                        <a target="_blank" href="https://github.com/iklimardiana">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
  }
}

customElements.define('app-bar', Appbar);
