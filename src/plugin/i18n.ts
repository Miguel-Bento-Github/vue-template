import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const locales = require.context(
    "../locales/",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: Record<string, string> = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
};

export const languages = Object.getOwnPropertyNames(loadLocaleMessages());

/**
 * Checks for browser language.
 *
 * We'll need cover several languages.
 * This way we are able to create a fallback to the closest related language.
 *
 * @returns {string | null} Language code.
 */
const checkDefaultLanguage = (): string | null => {
  let activeLanguage = null;

  if (!activeLanguage) {
    languages.forEach((language) => {
      const [languagePartial] = navigator.language.split("-");

      if (language === navigator.language) activeLanguage = language;

      if (language === languagePartial) {
        return (activeLanguage = language);
      }

      const [currentLanguagePartial] = language.split("-");
      if (currentLanguagePartial === languagePartial) {
        return (activeLanguage = language);
      }
    });
  }

  return activeLanguage;
};

export const selectedLocale =
  checkDefaultLanguage() || process.env.VUE_APP_I18N_LOCALE || "en";

export default new VueI18n({
  locale: selectedLocale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
