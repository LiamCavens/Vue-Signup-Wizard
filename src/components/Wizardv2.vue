<template>
  <div class="wizard">
    <div class="wizard-components">
      <transition name="slide-fade">
        <DogName v-if="stage === 1" :name.sync="pet.name" @nameSubmit="handleName" />
        <DogGender
          v-if="stage === 2"
          :name="pet.name"
          :gender.sync="pet.gender"
          @genderSubmit="handleGender"
        />
        <DogAge v-if="stage === 3" :name="pet.name" :age.sync="pet.age" @ageSubmit="handleAge" />
        <DogBreed
          v-if="stage === 4"
          :name="pet.name"
          :breed.sync="pet.breed"
          @breedSubmit="handleBreed"
        />
        <DogWeight
          v-if="stage === 5"
          :name="pet.name"
          :weight.sync="pet.weight"
          @weightSubmit="handleWeight"
        />
        <DogBodyType
          v-if="stage === 6"
          :name="pet.name"
          :body.sync="pet.body"
          @bodySubmit="handleBody"
        />
      </transition>

      <!-- <button @click="checkPet">CHECK PET (For Testing Console)</button> -->
      <div class="footer-buttons">
        <button @click="handleBack">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <button>
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
import DogBreed from "./DogBreed";
import DogGender from "./DogGender";
import DogWeight from "./DogWeight";
import DogBodyType from "./DogBodyType";

export default {
  name: "Wizardv2",
  components: {
    DogAge,
    DogName,
    DogBreed,
    DogGender,
    DogWeight,
    DogBodyType,
  },
  props: {},
  data: () => {
    return {
      stage: 5,
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
    handleBack() {
      if (this.stage > 1) {
        this.stage--;
      }
    },
    handleWeight() {
      this.stage = 6;
    },
    handleBody(bodyType) {
      this.pet.body = bodyType;
      this.stage = 7;
      alert("End of proto");
    },
    checkPet() {
      console.log("Liam: this.pet");
      console.log(this.pet);
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

.wizard-components {
  margin: 10px;
  padding: 10px 10px 0 10px;
  width: 350px;
  background-color: white;
  color: #00263a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.footer-buttons {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  border-bottom: #ee7623 solid 2px;
}

.footer-buttons button {
  width: 50px;
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
</style>
