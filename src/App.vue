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
  height: 50px;
  max-width: 100%;
}

.link {
  position: relative;
  color: #789904;
  text-decoration: none;
}

.link:hover {
  color: #789904;
}

.link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #789904;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.link:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.btn-green {
  font-family: Montserrat;
  background: #789904;
  background-image: -webkit-linear-gradient(top, #789904, #91b516);
  background-image: -moz-linear-gradient(top, #789904, #91b516);
  background-image: -ms-linear-gradient(top, #789904, #91b516);
  background-image: -o-linear-gradient(top, #789904, #91b516);
  background-image: linear-gradient(to bottom, #789904, #91b516);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 5px;
  color: #ffffff;
  height: 30px;
  padding: 2px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border: solid #637e05 1px;
  cursor: pointer;
  text-align: center;
  margin: 10px 10px 20px;
}

.btn-green:hover {
  border: solid #637e05 1px;
  background: #91b516;
  background-image: -webkit-linear-gradient(top, #91b516, #789904);
  background-image: -moz-linear-gradient(top, #91b516, #789904);
  background-image: -ms-linear-gradient(top, #91b516, #789904);
  background-image: -o-linear-gradient(top, #91b516, #789904);
  background-image: linear-gradient(to bottom, #91b516, #789904);
}

.btn-green:focus {
  outline: none;
}

.btn-green:active {
  box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
