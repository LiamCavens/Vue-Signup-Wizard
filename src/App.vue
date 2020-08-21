<template>
  <div id="app">
    <img class="headerLogo" alt="BnD Logo" src="./assets/BnDinline.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Wizardv1 subActive="Active" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Wizardv1 from "./components/Wizardv1.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Wizardv1,
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
  margin-top: 5px;
}

.headerLogo {
  height: 70px;
}
</style>
