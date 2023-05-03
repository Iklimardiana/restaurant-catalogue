import heroImage from '../../public/images/heros/hero-image_2.jpg';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html*/ `
    <div class="hero-container" role="banner" aria-label="Mediana Food Restaurant">
      <div class="hero-text">
        <h1 id="hero-heading">Mediana Food Restaurant</h1>
        <p>"Setiap suapan adalah kenangan yang tak terlupakan"</p>
      </div>
      <picture>
        <img src="${heroImage}" alt="Gambar Hero"/>
      </picture>
    </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
