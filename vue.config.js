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
      sass: {
        prependData: `
          @import '~sanitize.css';
          @import '~sanitize.css/typography.css';
          @import "@/style/defaults.css";
        `,
      },
    },
  },
};
