module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/_index.scss";`,
      },
    },
  },
};
