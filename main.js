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
        this.setAttribute('id', 'logo-text');
    }
}
class ContentHeader extends ARIAHeading {
    constructor() {
        super();
        this.setAttribute('aria-level', 2);
    }
}
class ContentParagraph extends ARIAArticle {}
class MainMenu extends ARIANav {}
class SiteLogo extends ARIAImg {
    constructor() {
        super();
        this.setAttribute('aria-labelledby', 'logo-text');
    }
}

class ContentWrapper extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('role', 'main');
    }
}

class PageBranding extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('role', 'banner');
    }
}

customElements.define("logo-text", LogoText);
customElements.define("content-header", ContentHeader);
customElements.define("content-paragraph", ContentParagraph);
customElements.define("content-wrapper", ContentWrapper);
customElements.define("main-menu", MainMenu);
customElements.define("page-branding", PageBranding);
customElements.define("site-logo", SiteLogo);