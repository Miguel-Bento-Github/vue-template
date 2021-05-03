<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ $t("greeting") }}
    </p>
  </div>
</template>

<script lang="ts">
interface Message {
  msg: string;
}

export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: Object as () => Message,
      required: true,
    },
  },
};
</script>
