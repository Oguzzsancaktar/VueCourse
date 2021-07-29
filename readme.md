# VUE JS COURSE

- What Is VUE ?
  vue is framework.

- Create

- After adding cdn to html say

```javascript
const app = Vue.createApp({
  template: "<h1>Hello {{firstName}} </h1>",
  data() {
    firstName: "first name ";
  },
});

app.mount("#app");
```

- v-bind:src

using template data in attributes you must use this.
after v-bind: you can use variables together use in string ``for like js ${}

you can use v-bind: like just : that is shortcut;

- v-on:click

youn can use v-on:click like that @click

add app to methods objects and create functions here;
you can use data in methods with this keywords

- props: ["title"],

send props and take it and export default

```javascript
export default {
  name: "header",
  props: {
    title: {
      type: String,
      default: "Default Sting",
    },
  },
};
```
