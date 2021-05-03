<template>
  <div class="wrapper">
    <select
      @click="isMenuOpen = true"
      class="language-selector"
      v-model="language"
      name="languages"
    >
      <option class="instruction" disabled value="">
        {{ $t("language.selectLanguage") }}
      </option>
      <option
        class="option"
        :value="language"
        v-for="language in languages"
        :key="language"
      >
        {{ possibilities[language] }}
      </option>
    </select>
    <img
      :class="{ active: isMenuOpen }"
      src="../assets/chevron.svg"
      class="chevron"
      alt="chevron"
    />
  </div>
</template>

<script lang="ts">
import i18n, { languages } from "../plugin/i18n";

const possibilities = { en: "English", pt: "Português", zh: "中文" } as const;

export default {
  name: "LanguageSelector",
  data() {
    return {
      possibilities,
      languages,
      language: i18n.locale,
      isMenuOpen: false,
    };
  },
  watch: {
    /**
     * Updates the i18n plugin and localStorage locale.
     */
    language(newValue) {
      if (newValue) i18n.locale = newValue;
      localStorage.locale = newValue;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 3rem;
  color: var(--light);
  background-color: var(--dark);
  box-shadow: 2px 2px 4px 0.4rem #1d2a36, -2px -2px 4px 0.4rem #3c546b;
  transition: box-shadow 0.2s ease-out;
}

.wrapper:hover {
  cursor: pointer;
  box-shadow: 2px 2px 4px 0.4rem #1a2631, -2px -2px 4px 0.4rem #456079;
}

.language-selector {
  all: unset;
  text-align: left;
  width: 12rem;
  padding: 0.25rem 0.5rem;
}

.instruction,
.option {
  background-color: var(--dark);
  color: var(--light);
}

.instruction {
  padding: 0 3.6rem 0 0;
}

.chevron {
  position: absolute;
  right: 0;
  pointer-events: none;
  transform: translateX(-0.8rem);
  height: var(--font-size);
  width: var(--font-size);
}
</style>
