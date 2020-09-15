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

      <div v-if="stage >= 8" class="chevrons">
        <button class="previous-chevron" @click="prevStage">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
        <button class="next-chevron" @click="nextStage">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>

      <transition-group v-bind:name="transitionName">
        <Help v-if="help" class="help-component" :stage="stage" @closeHelp="closeHelp" key="help" />
        <PetStory :pet.sync="currentPet" :stage.sync="stage" key="story" v-if="stage < 7" />
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
        <DogGender
          v-if="stage === 3"
          :name="currentPet.name"
          :gender.sync="currentPet.gender"
          @genderSubmit="handleGender"
          key="gender"
        />
        <DogAge
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
          v-if="stage === 7 && currentPet.animal === 'dog'"
          :name="currentPet.name"
          :body.sync="currentPet.body"
          @bodySubmit="handleBody"
          key="bodytype"
        />
        <Recommendation
          v-if="stage === 8"
          :name="currentPet.name"
          key="recommendation"
          @handleNext="nextStage"
        />
        <Nutrition
          v-if="stage === 9"
          :name="currentPet.name"
          key="nutrition"
          @handleNext="nextStage"
          @handlePrev="prevStage"
        />
        <Reviews v-if="stage === 10" key="reviews" @handleNext="nextStage" @handlePrev="prevStage" />
        <Delivery
          v-if="stage === 11"
          key="delivery"
          @handleNext="nextStage"
          @handlePrev="prevStage"
        />
      </transition-group>

      <div class="footer-buttons">
        <button @click="prevStage">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <!-- <button @click="help = !help">
          <font-awesome-icon :icon="['far', 'comment-dots']" />
        </button>-->
        <button>
          <font-awesome-icon :icon="['far', 'save']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserEmail from "./UserEmail";
import DogAge from "./DogAge";
import PetName from "./PetName";
import PetStory from "./PetStory";
import PetBreed from "./PetBreed";
import PetAnimal from "./PetAnimal";
import DogGender from "./DogGender";
import PetWeight from "./PetWeight";
import DogBodyType from "./DogBodyType";

import Help from "./Help";
import Reviews from "./Reviews";
import Delivery from "./Delivery";
import Nutrition from "./Nutrition";
import Recommendation from "./Recommendation";

export default {
  name: "Wizardv2",
  components: {
    UserEmail,
    DogAge,
    PetName,
    PetBreed,
    PetStory,
    PetAnimal,
    DogGender,
    PetWeight,
    DogBodyType,
    Help,
    Reviews,
    Delivery,
    Nutrition,
    Recommendation,
  },
  props: {},
  data: () => {
    return {
      help: false,
      transitionName: "slide-fade",
      stage: 0,
      user: {
        email: "",
      },
      currentPet: {},
      pets: [],
    };
  },
  methods: {
    // ALL HANDLES WHICH JUST DO NEXT STAGE WILL CALL THE NEXTSTAGE FUNTION IN THE FUTURE
    nextStage() {
      this.stage++;
      if (this.stage === 7 && this.currentPet.animal === "cat")
        this.nextStage();
    },
    prevStage() {
      if (this.stage > 0) {
        this.stage--;
      }
      if (this.stage === 7 && this.currentPet.animal === "cat")
        this.prevStage();
    },
    handleEmail() {
      this.nextStage();
    },
    handleName() {
      this.nextStage();
    },
    handleAnimal(animal) {
      this.currentPet.animal = animal;
      this.currentPet.weight.unit = animal === "cat" ? "g" : "kg";
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
        animal: "",
        gender: "",
        age: {
          years: "",
          months: "",
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
        activity: "",
        body: "",
        working: "",
        health: [],
        experience: "",
        foodPreference: "",
      };
      this.pets.push(newPet);
      this.currentPet = this.pets[this.pets.length - 1];
    },
  },
  mounted() {
    this.addNewPet();
    console.log(this.currentPet);
  },
};
</script>

<style>
.wizard {
  background-color: #00263a;
  width: 100%;
  display: flex;
  justify-content: center;
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
  margin: 10px;
  padding: 10px 10px 0 10px;
  width: 350px;
  background-color: white;
  color: #00263a;
  border-radius: 10px;
  display: flex;
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
  right: 0;
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
  left: 0;
  cursor: pointer;
}

.footer-buttons {
  z-index: 10;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  border-bottom: #ee7623 solid 2px;
}

.footer-buttons button {
  width: 70px;
  font-size: 30px;
  border: none;
  color: #ee7623;
  background-color: white;
  transition: 0.3s ease;
}

.footer-buttons button:hover {
  cursor: pointer;
  color: #a35219;
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
  opacity: 0.93;
}
</style>
