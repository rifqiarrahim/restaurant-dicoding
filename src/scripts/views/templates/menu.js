/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

class MenuItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .card-menu {
            padding: 20px;
            text-align: center;
            align-items: center;
            overflow: hidden;
            border: none;
            background-color: transparent;
            border-radius: 0.9375rem;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
        </style>
        <div class = card-menu>
        <h4 tabindex='0'>${this._menu.name}</h4>
        </div>
        `;
  }
}
customElements.define('menu-item', MenuItem);
