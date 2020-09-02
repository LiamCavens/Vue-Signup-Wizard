<template>
  <div class="wizard">
    <div class="wizard-components">
      <div class="help-button">
        <button @click="openHelp">
          <!-- <font-awesome-icon :icon="['far', 'question-circle']" /> -->
          <span class="help-icon">
            <font-awesome-icon :icon="['fas', 'info']" />
          </span>
        </button>
      </div>

      <transition-group v-bind:name="transitionName">
        <Help v-if="help" class="help-component" :stage="stage" @closeHelp="closeHelp" key="help" />
        <DogStory :pet.sync="pet" :stage.sync="stage" key="story" v-if="stage < 7" />
        <DogName v-if="stage === 1" :name.sync="pet.name" @nameSubmit="handleName" key="name" />
        <DogGender
          v-if="stage === 2"
          :name="pet.name"
          :gender.sync="pet.gender"
          @genderSubmit="handleGender"
          key="gender"
        />
        <DogAge
          v-if="stage === 3"
          :name="pet.name"
          :age.sync="pet.age"
          @ageSubmit="handleAge"
          key="age"
        />
        <DogBreed
          v-if="stage === 4"
          :name="pet.name"
          :breed.sync="pet.breed"
          @breedSubmit="handleBreed"
          key="breed"
        />
        <DogWeight
          v-if="stage === 5"
          :name="pet.name"
          :weight.sync="pet.weight"
          @weightSubmit="handleWeight"
          key="weight"
        />
        <DogBodyType
          v-if="stage === 6"
          :name="pet.name"
          :body.sync="pet.body"
          @bodySubmit="handleBody"
          key="bodytype"
        />
        <Recommendation
          v-if="stage === 7"
          :name="pet.name"
          key="recommendation"
          @handleNext="nextStage"
        />
        <Nutrition
          v-if="stage === 8"
          :name="pet.name"
          key="nutrition"
          @handleNext="nextStage"
          @handlePrev="prevStage"
        />
        <Reviews v-if="stage === 9" key="reviews" @handleNext="nextStage" @handlePrev="prevStage" />
      </transition-group>

      <div class="footer-buttons">
        <button @click="prevStage">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <button @click="help = !help">
          <font-awesome-icon :icon="['far', 'comment-dots']" />
        </button>
        <button>
          <font-awesome-icon :icon="['far', 'save']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DogAge from "./DogAge";
import DogName from "./DogName";
import DogStory from "./DogStory";
import DogBreed from "./DogBreed";
import DogGender from "./DogGender";
import DogWeight from "./DogWeight";
import DogBodyType from "./DogBodyType";

import Help from "./Help";
import Reviews from "./Reviews";
import Nutrition from "./Nutrition";
import Recommendation from "./Recommendation";

export default {
  name: "Wizardv2",
  components: {
    DogAge,
    DogName,
    DogBreed,
    DogStory,
    DogGender,
    DogWeight,
    DogBodyType,
    Help,
    Reviews,
    Nutrition,
    Recommendation,
  },
  props: {},
  data: () => {
    return {
      help: false,
      transitionName: "slide-fade",
      stage: 1,
      pet: {
        name: "",
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
      },
    };
  },
  methods: {
    nextStage() {
      this.stage++;
    },
    prevStage() {
      if (this.stage > 1) {
        this.stage--;
      }
    },
    handleName() {
      this.stage = 2;
    },
    handleGender(gender) {
      this.pet.gender = gender;
      this.stage = 3;
    },
    handleAge() {
      if (this.pet.age.years && this.pet.age.months) {
        this.stage = 4;
      }
    },
    handleBreed() {
      this.stage = 5;
    },
    handleWeight() {
      this.stage = 6;
    },
    handleBody(bodyType) {
      this.pet.body = bodyType;
      this.stage = 7;
    },
    openHelp() {
      this.transitionName = "help-transition";
      setTimeout(() => {
        this.help = true;
      }, 0);
    },
    closeHelp() {
      this.help = false;
      setTimeout(() => {
        this.transitionName = "slide-fade";
      }, 0);
    },
  },
};
</script>

<style>
.wizard {
  background-color: #00263a;
  color: #e1b77e;
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
}

.help-button {
  position: absolute;
  top: 40%;
  right: 0;
}

.help-button button {
  font-size: 13px;
  height: 31px;
  color: white;
  background-color: #00263a;
  border-radius: 5px 0 0 5px;
  border-bottom: #789904 2px solid;
  border-left: #789904 2px solid;
  border-right: none;
  border-top: #789904 2px solid;
  padding: 2px 1px;
  cursor: pointer;
}

.help-button button:focus {
  outline: none;
}

.help-button button p {
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-transform: lowercase;
  font-variant: small-caps;
  margin: 0;
}

.help-icon {
  padding: 2px 6px;
  margin: 2px;
  border: white solid 2px;
  border-radius: 50%;
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
  opacity: 1;
}
</style>
