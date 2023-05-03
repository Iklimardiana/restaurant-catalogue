class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Copyright &#169; 2023, MedianaFood</p>
        </footer>
        `;
  }
}

customElements.define('footer-element', Footer);
