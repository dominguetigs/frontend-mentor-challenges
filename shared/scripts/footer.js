class FooterComponent extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'closed' });

    const footer = document.createElement('footer');
    footer.innerHTML = `
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor </a>.
      Coded by <a href="https://www.linkedin.com/in/dominguetigs/"> Gustavo Domingueti </a>.
    `;

    const style = document.createElement('style');
    style.textContent = `
      footer {
        bottom: 0;
        display: none;
        font-size: 11px;
        left: 50%;
        padding: 1rem;
        position: fixed;
        transform: translateX(-50%);
        width: max-content;
      }
      
      footer.light {
        color: black;
      }
      
      footer.dark {
        color: white;
      }

      footer a {
        color: hsl(228, 45%, 44%);
      }
      
      @media screen and (min-width: 768px) {
        footer {
          display: block;
        }
      }
    `;

    this.shadow.appendChild(style);
    this.shadow.appendChild(footer);
  }

  static get observedAttributes() {
    return ['theme'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'theme') {
      this.updateTheme(newValue);
    }
  }

  updateTheme(theme) {
    const footer = this.shadow.querySelector('footer');
    if (theme === 'dark') {
      footer.classList.add('dark');
      footer.classList.remove('light');
    } else {
      footer.classList.add('light');
      footer.classList.remove('dark');
    }
  }

  connectedCallback() {
    this.updateTheme(this.getAttribute('theme'));
  }
}

customElements.define('wc-footer', FooterComponent);
