# Custom HTML Tags
This project is a thought experiment, more than anything. It likely has things that can be fixed, especially around accessibility,
and I not only encourage, but _actively request_ any help in that area that can be provided. I'm not an expert, but I want to make
this as accessible as possible.

# Contributing
Ignore the `/docs` folder entirely. This is our built folder, and changes should not be made there. Instead, there are three distinct files for changes.

## ./index.html
This is our single page HTML content. This is our structure. No styling should be added here, no functionality, only markup.

## ./main.js
This is our functionality. Largely, this should be kept minimal, and focused on accessibility. The point of this project isn't to create a fancy SPA, but to create semantic, and accessible, custom markup.

## ./src/index.css
Every style that is used starts here. We use Tailwind CSS to apply styles to each custom HTML tag, filtering things through PostCSS to remove any unused style, leaving us with the bare minimum amount of CSS that we need to create the look we are going for.

Where straight Tailwind falls short, we incorporate traditional CSS (such as for the site logo). 