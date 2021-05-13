# Custom HTML Tags
This project is a thought experiment, more than anything. It likely has things that can be fixed, especially around accessibility,
and I not only encourage, but _actively request_ any help in that area that can be provided. I'm not an expert, but I want to make
this as accessible as possible.

The project itself is _technically_ a Vite app, but only because it benefits from a build pipeline, and Vite has one that is easy to use. None of this project uses Vue.js directly, and should be left as standalone as possible.

# Contributing
Ignore the `/docs` folder entirely. This is our built folder, and changes should not be made there. Instead, there are three distinct files for changes.

## Installing
Clone the repository, and then run `npm install`. This should take care of all your dependencies.

## ./index.html
This is our single page HTML content. This is our structure. No styling should be added here, no functionality, only markup.

## ./main.js
This is our functionality. Largely, this should be kept minimal, and focused on accessibility. The point of this project isn't to create a fancy SPA, but to create semantic, and accessible, custom markup.

## ./src/index.css
Every style that is used starts here. We use Tailwind CSS to apply styles to each custom HTML tag, filtering things through PostCSS to remove any unused style, leaving us with the bare minimum amount of CSS that we need to create the look we are going for.

Where straight Tailwind falls short, we incorporate traditional CSS (such as for the site logo).

## Building
Please don't commit built files, new built files will be generated periodically as merges are made to `main`.

# Using this in a production application
It's obvious this project is just a thought experiment. There are already perfectly good tags for most, if not all, of what we're creating custom HTML tags for here. It was never about creating _perfect_ HTML.

Where a pure HTML tag is fine, then continue to use pure HTML tags, but the second that you use an HTML tag with a class name, ask yourself, could this be custom HTML? Likely, the answer is yes. Likely, what you are creating is a custom component. A section of a page that is named.

The benefits are multiple: Semantic markup makes our HTML easier to read, debug, and style. It also creates reusable components that we can incorporate everywhere. Removing inline classes and styles shrinks the size of our HTML, speeding up the download process, and improving all of our core web vitals. Creating custom html components with a focus on accessibility promotes a world where accessibility is top of mind for everyone who writes code, while also putting ourselves in a position to repair any accessibility issues without having to restructure the entire website.

Everything has a place, and everyone knows what that place is.