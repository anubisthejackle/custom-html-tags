class ARIAHeading extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('role','heading');
    }
}

class ARIAArticle extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('role', 'article');
    }
}

class ARIANav extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('role', 'navigation');
    }
}

class ARIAImg extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('role','img');
    }
}

class LogoText extends ARIAHeading {
    constructor() {
        super();
        this.setAttribute('aria-level', 1);
    }
    
    connectedCallback() {
        let h1 = document.createElement('h1');
        setTimeout( () => {
            h1.innerHTML = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(h1);
        });
    }
}
class ContentHeader extends ARIAHeading {}
class ContentParagraph extends ARIAArticle {}
class MainMenu extends ARIANav {}
class SiteLogo extends ARIAImg {}

customElements.define("logo-text", LogoText);
customElements.define("content-header", ContentHeader);
customElements.define("content-paragraph", ContentParagraph);
customElements.define("main-menu", MainMenu);
customElements.define("site-logo", SiteLogo);