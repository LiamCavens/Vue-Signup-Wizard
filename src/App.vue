<template>
  <div id="app">
    <img class="headerLogo" alt="BnD Logo" src="./assets/BnDinline.png" />
    <Wizardv1 subActive="Active" />
  </div>
</template>

<script>
import Wizardv1 from "./components/Wizardv1.vue";

export default {
  name: "App",
  components: {
    Wizardv1,
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.headerLogo {
  height: 70px;
  max-width: 100%;
}
</style>
