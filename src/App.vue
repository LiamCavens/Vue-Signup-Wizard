<template>
  <div id="app">
    <img class="headerLogo" alt="BnD Logo" src="./assets/BnDinline.png" />
    <Wizardv2 />
  </div>
</template>

<script>
import Wizardv2 from "./components/Wizardv2.vue";

export default {
  name: "App",
  components: {
    Wizardv2,
  },
};
</script>

<style>
@font-face {
  font-family: Montserrat;
  src: local("Montserrat"), url(./fonts/Montserrat/Montserrat-Regular.ttf);
}

@font-face {
  font-family: Montserrat-Bold;
  src: local("Montserrat-Bold"), url(./fonts/Montserrat/Montserrat-Bold.ttf);
}
#app {
  font-family: Montserrat;
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
