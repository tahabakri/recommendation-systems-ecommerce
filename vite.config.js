import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// base must match the GitHub Pages project sub-path, or built assets 404.
// Live URL: https://tahabakri.github.io/recommendation-systems-ecommerce/
export default defineConfig({
  base: '/recommendation-systems-ecommerce/',
  plugins: [tailwindcss()],
});
