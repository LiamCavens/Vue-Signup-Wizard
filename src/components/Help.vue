<template>
  <div id="help-component" class="help">
    <h3 class="help-title">{{helpTitle}}</h3>
    <p class="help-message">{{helpMessage}}</p>
    <div @click="closeHelp">
      <Times class="close-times" />
      <p class="close-text">Close</p>
    </div>
  </div>
</template>

<script>
import Times from "../assets/fontawesome/times.vue";
export default {
  name: "Help",
  components: {
    Times,
  },
  props: {
    stage: Number,
  },
  data: () => {
    return {
      helpTitle: "",
      helpMessage: "",
    };
  },
  methods: {
    closeHelp() {
      this.$emit("closeHelp");
    },
    getHelp(stage) {
      //   if (stage === 1) {
      //     this.helpTitle = `Name`;
      //     this.helpMessage = `We need to know the name of your dog.`;
      //   }
      switch (stage) {
        case 0:
          this.helpTitle = `Email`;
          this.helpMessage = `We use your email so we can send you a copy of this wizard in case you don’t have time to finish. 
                            What we don’t do is share your email with anybody else. 
                            After collecting information about dogs and cats we provide a specific recommendation for each animal based on the answers you give.`;
          break;
        case 1:
          this.helpTitle = `Name`;
          this.helpMessage = `We need to know the name of your dog.`;
          break;
        case 2:
          this.helpTitle = `Animal`;
          this.helpMessage = `We need to know if you have a cat or dog.`;
          break;
        case 3:
          this.helpTitle = `Gender`;
          this.helpMessage = `Different genders need slightly different amounts of food.`;
          break;
        case 4:
          this.helpTitle = `Age`;
          this.helpMessage = `Different ages need slightly different amounts of food.`;
          break;
        case 5:
          this.helpTitle = `Breed`;
          this.helpMessage = `Different breeds need slightly different food mixes. 
          Some breeds have propensities for certain conditions so it is helpful to 
          know if your dog is or has some of that genetic inheritance. 
            We publish guides about individual breeds. 
            If your animal is one of those breeds, we will be sending you a copy.`;
          break;
        case 6:
          this.helpTitle = `Weight`;
          this.helpMessage = `Weight is a critical input for our recommendation engine. If you don’t know your pet’s weight, there are a couple of ways to estimate.`;
          break;
        default:
          this.helpTitle = `No help here`;
          this.helpMessage = `Either the button wont show, or the help message is to still be written`;
          break;
      }
    },
  },
  mounted() {
    this.getHelp(this.stage);
    let helpOnMount = document.querySelector("#help-component");
    setTimeout(() => {
      helpOnMount.style.opacity = 0.9;
      helpOnMount.style.transition = "opacity 0.5s";
    }, 0);
  },
  beforeDestroy() {
    let helpOnMount = document.querySelector("#help-component");
    helpOnMount.style.opacity = 0;
  },
};
</script>

<style scoped>
.help {
  /* opacity: 0.9; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00263a;
  color: #fff;
  z-index: 100;
  border-radius: 10px;
}

.help-title {
  opacity: 1 !important;
}

.help-message {
  margin: 10px;
  padding: 20px 15px;
  text-align: left;
  opacity: 1 !important;
}

.close-text {
  color: #fff;
  font-size: 24px;
  text-transform: lowercase;
  font-variant: small-caps;
  font-family: Montserrat;
  margin: 0;
  opacity: 1 !important;
  cursor: pointer;
}

.close-times {
  height: 100px;
  opacity: 1 !important;
  cursor: pointer;
}

.help-close {
  opacity: 1;
  margin: 20px;
  font-family: Montserrat;
  text-transform: lowercase;
  font-variant: small-caps;
  background-color: #789904;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
