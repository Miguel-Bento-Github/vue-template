<template>
  <div id="app">
    <LanguageSelector />
    <nav class="nav">
      <router-link class="link" to="/">{{ $t("home") }}</router-link> |
      <router-link class="link" to="/about">{{ $t("about") }}</router-link>
    </nav>
    <transition name="fade">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script lang="ts">
import i18n from "./plugin/i18n";
import LanguageSelector from "@/components/LanguageSelector.vue";

export default {
  name: "App",
  components: {
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
</style>

<style lang="scss" scoped>
.nav {
  padding: 3rem;
}

.link {
  color: var(--light);
  text-decoration: none;
}

.router-link-exact-active {
  position: relative;

  &::before {
    @include pseudo;
    top: 100%;
    height: 1px;
    width: 0%;
    background-color: var(--light);
    animation: fullWidth 0.4s ease-out forwards;
  }
}

.view {
  display: flex;
  flex-direction: column;
}

.fade-enter-active {
  transition: opacity 0.4s ease-out;
}

.fade-enter {
  opacity: 0;
}

@keyframes fullWidth {
  to {
    width: 100%;
  }
}
</style>
