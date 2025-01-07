// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ["@nuxt/image", "@vite-pwa/nuxt", "@nuxt/devtools"],

  routeRules: {
    // prerender index route by default
    // "/": { prerender: true },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "GabiPWATest",
      short_name: "GabiPWATest",
      theme_color: "#dddddd",
      background_color: "#000000",
      display: "standalone",
      icons: [
        {
          src: "pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },

    //NOTA:Experimentalhttps://vite-pwa-org.netlify.app/frameworks/nuxt.html =>>
    // pwaAssets: {
    //   config: true,
    // },

    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      navigateFallback: "/",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /.*\.(?:js|css|json|html)$/,

          handler: "NetworkFirst",
          options: {
            cacheName: "assets-cache",
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 60 * 60 * 24, // Cache por 1 día
            },
          },
        },
      ],
    },
  },
});
