function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}

class LogoText extends HTMLHeadingElement {

    constructor() {
        super();
    }

}

customElements.define("logo-text", LogoText, {
    extends:'h1'
});

ready(function() {

    let paragraphs = document.getElementsByTagName('content-paragraph');
    for(let graph of paragraphs) {
        graph.setAttribute("role", "article");
    };

    let headers = document.getElementsByTagName('content-header');
    for(let header of headers) {
        header.setAttribute("role", "heading");
    };

    let mainMenus = document.getElementsByTagName('main-menu');
    for(let menu of mainMenus) {
        menu.setAttribute("role","navigation");
    };

    let logos = document.getElementsByTagName('site-logo');
    for(let logo of logos) {
        logo.setAttribute("role", "img");
    };

});