<template>
  <main class="home">
    <h2>{{ $t("options.options") }}</h2>
    <router-link
      class="link"
      :to="$t(`options.${option}`)"
      v-for="option in options"
      :key="option"
    >
      {{ $t(`options.${option}`) }}
    </router-link>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      options: ["hardware", "observational", "behavioral"],
    };
  },
};
</script>
