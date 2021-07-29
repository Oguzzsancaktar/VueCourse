<template>
  <button
    @click="onclick(onclickText)"
    class="btn"
    :style="{ background: color }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Default Button Text",
    },
    color: String,
    onclickText: String,
  },
  methods: {
    onclick(string) {
      console.log(string);
    },
  },
};
</script>
