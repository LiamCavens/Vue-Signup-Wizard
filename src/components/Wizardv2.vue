<template>
  <div class="wizard">
    <div class="wizard-components">
      <div v-if="stage != 2" class="help-button">
        <button @click="openHelp">
          <p class="help-text">HELP</p>
          <span class="help-icon">
            <font-awesome-icon :icon="['fas', 'question']" />
          </span>
        </button>
      </div>

      <!-- <div v-if="stage >= 13 && stage <= 16" class="chevrons">
        <button class="previous-chevron" @click="prevStage">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
        <button v-if="stage < 16" class="next-chevron" @click="nextStage">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div> -->

      <transition-group v-bind:name="transitionName">
        <Help
          v-if="help"
          class="help-component"
          :stage="stage"
          @closeHelp="closeHelp"
          key="help"
        />
        <PetStory
          :pet.sync="currentPet"
          :stage.sync="stage"
          @changeStage="handleStage"
          key="story"
          v-if="stage < 12"
        />
        <UserEmail
          v-if="stage === 0"
          :email.sync="user.email"
          @emailSubmit="handleEmail"
          key="email"
        />
        <PetName
          v-if="stage === 1"
          :name.sync="currentPet.name"
          @nameSubmit="handleName"
          key="name"
        />
        <PetAnimal
          v-if="stage === 2"
          :name="currentPet.name"
          :animal.sync="currentPet.animal"
          @animalSubmit="handleAnimal"
          key="animal"
        />
        <PetGender
          v-if="stage === 3"
          :name="currentPet.name"
          :animal="currentPet.animal"
          :gender.sync="currentPet.gender"
          @genderSubmit="handleGender"
          key="gender"
        />
        <PetAge
          v-if="stage === 4"
          :name="currentPet.name"
          :age.sync="currentPet.age"
          @ageSubmit="handleAge"
          key="age"
        />
        <PetBreed
          v-if="stage === 5"
          :name="currentPet.name"
          :animal="currentPet.animal"
          :breed.sync="currentPet.breed"
          @breedSubmit="handleBreed"
          key="breed"
        />
        <PetWeight
          v-if="stage === 6"
          :name="currentPet.name"
          :animal="currentPet.animal"
          :weight.sync="currentPet.weight"
          @weightSubmit="handleWeight"
          key="weight"
        />
        <DogBodyType
          v-if="stage === 7 && currentPet.animal != 'cat'"
          :name="currentPet.name"
          :body.sync="currentPet.body"
          @bodySubmit="handleBody"
          key="bodytype"
        />
        <DogActivity
          v-if="stage === 8 && currentPet.animal != 'cat'"
          :name="currentPet.name"
          :gender="currentPet.gender"
          :activity.sync="currentPet.activity"
          @activitySubmit="handleActivity"
          key="activity"
        />
        <DogWorking
          v-if="stage === 9 && currentPet.animal != 'cat'"
          :working.sync="currentPet.working"
          @workingSubmit="handleWorking"
          key="activity"
        />
        <DogHealth
          v-if="stage === 10 && currentPet.animal != 'cat'"
          :name="currentPet.name"
          :health.sync="currentPet.health"
          @healthSubmit="handleHealth"
          key="health"
        />
        <DogBehaviour
          v-if="stage === 11 && currentPet.animal != 'cat'"
          :name="currentPet.name"
          :behaviour.sync="currentPet.behaviour"
          @behaviourSubmit="handleBehaviour"
          key="behaviour"
        />
        <RawExperience
          v-if="stage === 12"
          :experience.sync="user.experience"
          :foodPreference.sync="user.foodPreference"
          @experienceSubmit="handleExperience"
          key="experience"
        />
        <MealPlanNutrtionReviews
          v-if="stage === 13"
          :name="currentPet.name"
          key="recommendation"
          @handleNext="nextStage"
        />
        <Delivery
          v-if="stage === 14"
          key="delivery"
          @handleNext="nextStage"
          @handlePrev="prevStage"
        />
      </transition-group>

      <!-- <div class="footer-buttons">
        <button @click="prevStage">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          <p class="footer-button-text">back</p>
        </button>
        <button>
          <font-awesome-icon :icon="['far', 'save']" />
          <p class="footer-button-text">save</p>
        </button>
        <button id="hidden" @click="help = !help">
          <font-awesome-icon :icon="['far', 'comment-dots']" />
        </button>
      </div> -->
    </div>
    <div class="footer-buttons2">
      <button @click="prevStage">
        <BackArrow class="footer-icon" iconColor="#00263a" />
        <p class="footer-button-text">back</p>
      </button>
      <button>
        <Save class="footer-icon" iconColor="#00263a" />
        <p class="footer-button-text">save</p>
      </button>
      <button id="hidden" @click="help = !help">
        <font-awesome-icon :icon="['far', 'comment-dots']" />
      </button>
    </div>
  </div>
</template>

<script>
import UserEmail from "./UserEmail";
import PetAge from "./PetAge";
import PetName from "./PetName";
import PetStory from "./PetStory";
import PetBreed from "./PetBreed";
import PetAnimal from "./PetAnimal";
import PetGender from "./PetGender";
import PetWeight from "./PetWeight";
import DogHealth from "./DogHealth";
import DogWorking from "./DogWorking";
import DogBodyType from "./DogBodyType";
import DogActivity from "./DogActivity";
import DogBehaviour from "./DogBehaviour";

import Help from "./Help";
import Delivery from "./Delivery";
import RawExperience from "./RawExperience";
import MealPlanNutrtionReviews from "./MealPlanNutrtionReviews";

// ICONS
import BackArrow from "../assets/svgicons/backArrow";
import Save from "../assets/svgicons/save";

export default {
  name: "Wizardv2",
  components: {
    UserEmail,
    PetAge,
    PetName,
    PetBreed,
    PetStory,
    PetAnimal,
    PetGender,
    PetWeight,
    DogHealth,
    DogWorking,
    DogBodyType,
    DogActivity,
    DogBehaviour,
    Help,
    Delivery,
    RawExperience,
    MealPlanNutrtionReviews,
    BackArrow,
    Save,
  },
  props: {},
  data: () => {
    return {
      help: false,
      transitionName: "slide-fade",
      stage: 0,
      user: {
        email: "",
        experience: "",
        foodPreference: "noPref",
      },
      currentPet: {},
      pets: [],
    };
  },
  methods: {
    // ALL HANDLES WHICH JUST DO NEXT STAGE WILL CALL THE NEXTSTAGE FUNTION IN THE FUTURE
    handleStage(stageToGo) {
      this.stage = stageToGo;
    },
    nextStage() {
      this.stage++;
      if (this.stage === 7 && this.currentPet.animal === "cat") {
        this.stage = 13;
        return;
      }
      console.log("Liam: this.$route");
      console.log(this.$route);
    },
    prevStage() {
      if (this.stage > 0) {
        this.stage--;
      }
      if (this.stage === 12 && this.currentPet.animal === "cat") {
        this.stage = 6;
        return;
      }
    },
    handleEmail() {
      this.nextStage();
    },
    handleName() {
      this.currentPet.name = this.capitalizeName(this.currentPet.name);
      this.nextStage();
    },
    handleAnimal(animal) {
      this.currentPet.animal = animal;
      //   this.currentPet.weight.unit = animal === "cat" ? "g" : "kg";
      this.nextStage();
    },
    handleGender(gender) {
      this.currentPet.gender = gender;
      this.nextStage();
    },
    handleAge() {
      if (this.currentPet.age.years && this.currentPet.age.months) {
        this.nextStage();
      }
    },
    handleBreed() {
      this.nextStage();
    },
    handleWeight() {
      this.nextStage();
    },
    handleBody(bodyType) {
      this.currentPet.body = bodyType;
      this.nextStage();
    },
    handleActivity(activityLevel) {
      this.currentPet.activity = activityLevel;
      this.nextStage();
    },
    handleWorking() {
      this.nextStage();
    },
    handleHealth() {
      this.nextStage();
    },
    handleBehaviour() {
      this.nextStage();
    },
    handleExperience() {
      this.nextStage();
    },
    openHelp() {
      this.transitionName = "help-transition";
      setTimeout(() => {
        this.help = true;
        // let classToBlur = document.querySelector(".wizard-components");
        // let helpComponent = document.querySelector(".help-component");
        // classToBlur.style.filter = "";
        // helpComponent.style.backdropFilter = "blur(2px)";
      }, 0);
    },
    closeHelp() {
      this.help = false;
      setTimeout(() => {
        this.transitionName = "slide-fade";
        // let classToBlur = document.querySelector(".wizard-components");
        // classToBlur.style.filter = "blur(0)";
      }, 0);
    },
    addNewPet() {
      let newPet = {
        name: "",
        body: 0,
        animal: "",
        gender: "",
        health: [],
        behaviour: [],
        neutered: "",
        activity: 0,
        working: "",
        age: {
          dob: "",
          years: "",
          months: "0",
        },
        breed: {
          type: "",
          parent1: "",
          parent2: "",
        },
        weight: {
          unit: "kg",
          amount: "",
        },
      };
      this.pets.push(newPet);
      this.currentPet = this.pets[this.pets.length - 1];
    },
    capitalizeName(name) {
      return name
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");
    },
  },
  mounted() {
    console.log(this.currentPet);
  },
  beforeMount() {
    this.addNewPet();
  },
};
</script>

<style>
.wizard {
  background-color: #00263a;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  flex: 1;
}

.help-button {
  position: absolute;
  top: 5%;
  right: 0;
  z-index: 10;
}

.help-button button {
  font-size: 13px;
  height: 60px;
  color: white;
  background-color: #789904;
  border-radius: 5px 0 0 5px;
  border-bottom: #789904 2px solid;
  border-left: #789904 2px solid;
  border-right: none;
  border-top: #789904 2px solid;
  padding: 2px;
  cursor: pointer;
}

.help-button button:focus {
  outline: none;
}

.help-icon {
  margin: 2px 0;
}

.help-text {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-transform: lowercase;
  font-variant: small-caps;
  margin: 0 0 3px;
}

.wizard-components {
  margin: 8px;
  padding: 30px 30px;
  width: 300px;
  background-color: white;
  color: #00263a;
  border-radius: 10px;
  display: flex;
  /* MOCK UP FOOTER BUTTONS */
  flex: 1;
  flex-direction: column;
  position: relative;
}

.chevrons {
  position: absolute;
  top: 40%;
  width: inherit;
  z-index: 100;
}

.next-chevron {
  font-size: 30px;
  color: #ee7623;
  align-self: center;
  margin-left: auto;
  background-color: white;
  border: none;
  position: absolute;
  right: -25px;
  cursor: pointer;
}

.previous-chevron {
  font-size: 30px;
  color: #ee7623;
  align-self: center;
  margin-right: auto;
  background-color: white;
  border: none;
  position: absolute;
  left: -25px;
  cursor: pointer;
}

.next-chevron:hover,
.previous-chevron:hover {
  color: #d36415;
}

.next-chevron:focus,
.previous-chevron:focus {
  outline: none;
}

.footer-buttons {
  z-index: 10;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  /* border-bottom: #ee7623 solid 2px; */
}

/* THIS IS THE FOOT MOCKUP */
.footer-buttons2 {
  width: 352px;
  z-index: 10;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 8px 5px;
  border-bottom: #00263a solid 2px;
}

.footer-icon {
  height: 28px;
  position: absolute;
  width: 100%;
  top: 0px;
  right: 10px;
}

.footer-buttons2 button {
  width: 70px;
  font-size: 30px;
  border: none;
  color: #00263a;
  background-color: white;
  transition: 0.3s ease;
  position: relative;
}
/* THIS IS THE FOOT MOCKUP END*/
.footer-button-text {
  font-size: 8px;
  margin: 0;
  position: absolute;
  bottom: -4px;
  left: 25px;
}
.footer-buttons button {
  width: 70px;
  font-size: 30px;
  border: none;
  color: #00263a;
  background-color: white;
  transition: 0.3s ease;
  position: relative;
}

.footer-buttons button:hover {
  cursor: pointer;
  color: #001825;
  transition: 0.3s ease;
}

.footer-buttons button:focus {
  outline: none;
}

.input-error {
  border: 1px solid #e1251b !important;
  box-shadow: inset 0px 0px 4px 0px #e1251b !important;
  transition: 0.5s ease !important;
}

.error-message {
  color: #e1251b;
  font-weight: 700;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 2px;
  font-size: 12px;
}

#hidden {
  visibility: hidden;
}

/* THIS IS THE PREVIOUS TRANSITION LEFT TO RIGHT 
.slide-fade-enter-active {
  transition: all 0.8s ease;
  transition-delay: 0.4s;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
} */

.slide-fade-enter-active {
  transition: all 0.8s ease;
  transition-delay: 0.4s;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateY(100px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.help-transition-leave-active,
.help-transition-enter-active {
  transition: opacity 0.5s ease;
}

.help-transition-enter,
.help-transition-leave-to {
  opacity: 0;
}

.help-transition-enter-to,
.help-transition-leave {
  opacity: 0.9;
}

@media screen and (max-width: 330px) {
  .wizard-components {
    width: 250px;
  }
}

@media screen and (max-width: 400px) {
  .wizard-components {
    position: initial;
  }

  .help-button {
    top: 8px;
  }

  .footer-buttons2 {
    width: 100vw;
  }
}
</style>
