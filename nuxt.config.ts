// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  vite: { plugins: [tailwindcss()] },
  css: ["~/assets/css/main.css"],
  fonts: {
    provider: "fontshare",
  },
});
