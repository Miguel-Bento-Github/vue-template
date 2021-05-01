<template>
  <div class="about">
    <HelloWorld :msg="$t('hello')" />
    <img class="logo" alt="Vue logo" src="@/assets/world.svg" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.logo {
  margin-top: 3rem;
  padding: 3rem;
  width: 100%;
}
</style>
