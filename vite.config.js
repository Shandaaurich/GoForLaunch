import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        category: resolve(__dirname, "src/category-listing/index.html"),
        giftshop: resolve(__dirname, "src/giftshop/index.html"),
        agency: resolve(__dirname, "src/agency/index.html"),
        pictureofday: resolve(__dirname, "src/POD/index.html"),
      },
    },
  },
});
