<template>
  <div class="hello">
    <transition name="fade">
      <h1>{{ msg }}</h1>
    </transition>

    <p>
      {{ $t("greeting") }}
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
