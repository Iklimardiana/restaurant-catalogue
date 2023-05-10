// import heroImage from '../../public/images/heros/hero-image_2.jpg';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-container" role="banner" aria-label="Mediana Food Restaurant">
      <div class="hero-text">
        <h1 id="hero-heading">Mediana Food Restaurant</h1>
        <p>"Setiap suapan adalah kenangan yang tak terlupakan"</p>
      </div>
      <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
        <img src="./images/heros/hero-image_2-large.jpg" alt="Gambar Hero"/>
      </picture>
    </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
