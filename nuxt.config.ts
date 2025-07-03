import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@hypernym/nuxt-anime",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    ["@nuxtjs/google-fonts", {
      display: "swap",
      families: {
        Inter: [400, 600, 700],
        Roboto: true,
        Lato: true,
        Poppins: [400, 500, 600, 700],
      },
    }],
  ],
  css: ["~/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  anime: {
    composables: true,
  },
  colorMode: {
    dataValue: "theme",
  },
  i18n: {
    langDir: "locales",
    defaultLocale: "en-us",
    lazy: true,
    strategy: "no_prefix",
    locales: [
      { code: "en-us", iso: "en-US", file: "en-us.json", name: "English" },
    ],
  },
});
