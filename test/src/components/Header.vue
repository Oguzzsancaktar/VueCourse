<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <Button onclickText="add" text="Add text" color="green" />
  <Button onclickText="update" text="Update text" color="blue" />
  <Button onclickText="Delete" text="Delete text" color="red" />
</template>

<script>
import Button from "./Button.vue";

export default {
  components: { Button },
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Default Sting",
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
