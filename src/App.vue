<template>
  <div id="app">
    <LanguageSelector />
    <HelloWorld :msg="$t('hello')" />
    <img class="logo" alt="Vue logo" src="./assets/world.svg" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import LanguageSelector from "./components/LanguageSelector.vue";
import i18n from "./plugin/i18n";

export default {
  name: "App",
  components: {
    HelloWorld,
    LanguageSelector,
  },
  beforeCreate() {
    if (localStorage.locale) {
      i18n.locale = localStorage.locale;
    }
  },
};
</script>

<style lang="scss">
@import "~sanitize.css";
@import "~sanitize.css/typography.css";

$defaultSpace: 3rem;

#app {
  font-family: Titillium Web, Helvetica, Arial, sans-serif;
  font-size: var(--font-size);
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--dark);
  color: var(--light);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: $defaultSpace;
  padding-bottom: $defaultSpace;
}

.logo {
  margin-top: $defaultSpace;
  padding: $defaultSpace;
}
</style>
