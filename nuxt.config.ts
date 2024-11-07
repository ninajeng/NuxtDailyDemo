// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/stylesheets/_variables.scss"; // 在全部的元件都引入 _variables.scss
          `,
        },
      },
    },
  },
  app: {
    baseURL: "/NuxtDailyDemo/",
  },
});
