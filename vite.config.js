import { minifyHtml } from 'vite-plugin-html';

export default {
    base: "/custom-html-tags/",
    build: {
        outDir: "./docs"
    },
    plugins: [
        minifyHtml(),
    ]
}