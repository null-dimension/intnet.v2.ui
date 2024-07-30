// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui",  '@nuxt/test-utils/module'],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  ssr: false,
  nitro: {
    static: true
  }
});
