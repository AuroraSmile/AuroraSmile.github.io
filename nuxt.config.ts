// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/color-mode",
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
  },
  colorMode: {
    classSuffix: "",
  },
  css: [resolve("./assets/css/main.css")],
});
