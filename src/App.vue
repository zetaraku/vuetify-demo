<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/vue-logo.png"
      style="width: 200px; padding: 0px"
    />
    <img
      alt="Vite logo"
      src="./assets/vite-logo.svg"
      style="width: 200px; padding: 12px"
    />
    <HelloWorld msg="Hello Vue 2 + Vite" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
