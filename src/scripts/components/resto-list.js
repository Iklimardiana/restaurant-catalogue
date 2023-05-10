class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container_restoList"></div>
    `;
  }
}

customElements.define('resto-list', RestoList);
