// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/color-mode",
  ],
  generate: {
    dir: "doc",
  },
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
});
