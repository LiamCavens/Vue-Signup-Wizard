<template>
  <div class="pet-weight">
    <h2>How much do you weigh?</h2>
    <p v-if="inputError" class="error-message">* {{ errorMessage }}</p>
    <div class="weight-inputs">
      <input
        placeholder="Enter Weight"
        class="pet-weight-input"
        v-bind:class="{ 'input-error': inputError }"
        type="number"
        min="0"
        max="999"
        pattern="^[0-9]+$"
        v-model="weight.amount"
        @keypress="restrictInput($event)"
        @keyup="checkInput"
        autofocus
      />
      <!-- <select name="pet-weight-units" id="weight-units" v-model="weight.unit">
        <option class="unit-option" value="kg" default>Kilograms</option>
        <option class="unit-option" value="lb">Pounds</option>
      </select> -->
    </div>

    <BnDAccordion icon="icon_weight_white" :showThis="false">
      <div slot="header">Easy weight picker</div>
      <!-- <div slot="header-desc">Quick & Easy</div> -->
      <div class="weight-items" v-if="weightChoices">
        <button
          class="weight-item"
          v-for="(weightChoice, index) in weightChoices"
          :key="index"
          @click="handleBodyWeight(weightChoice.value, index)"
          :class="{ active: activatedDiv === index }"
        >
          <img
            class="weight-image"
            v-if="animal === 'dog'"
            :src="
              require(`../assets/icon_dogweight_${weightChoice.imageUrl}.png`)
            "
            alt="weightImage"
          />
          <img
            class="weight-image"
            v-if="animal === 'cat'"
            :src="require(`../assets/cat_icon_${weightChoice.imageUrl}.png`)"
            alt="weightImage"
          />
          <div class="weight-item-text">
            <p class="weight-item-label">{{ weightChoice.label }}</p>
            <p class="weight-item-desc">{{ weightChoice.description }}</p>
          </div>
        </button>
      </div>
    </BnDAccordion>

    <transition name="fade">
      <button
        class="btn-green next-button"
        v-if="weight.amount > 0"
        @click="handleNext"
      >
        Next
      </button>
    </transition>
  </div>
</template>

<script>
import BnDAccordion from "./BnDComponents/BnDAccordion";
export default {
  name: "PetWeight",
  components: {
    BnDAccordion,
  },
  props: {
    name: String,
    weight: Object,
    animal: String,
  },
  data: () => {
    return {
      inputError: false,
      errorMessage: "",
      activatedDiv: "",
      showWeightChoices: false,
      weightChoices: [],
      catWeightChoices: [
        {
          value: 1,
          imageUrl: "small",
          label: "Small Cat",
          description: "Small & Light",
        },
        {
          value: 2,
          imageUrl: "medium",
          label: "Medium Cat",
          description: "Still light and agile",
        },
        {
          value: 4,
          imageUrl: "large",
          label: "Large Cat",
          description: "A small chunker",
        },
      ],
      dogWeightChoices: [
        {
          value: 2,
          imageUrl: "XS",
          label: "Tiny",
          description: "Can pick up with my hand",
        },
        {
          value: 8,
          imageUrl: "S",
          label: "Small",
          description: "Can fire under my arm",
        },
        {
          value: 12,
          imageUrl: "M",
          label: "Medium",
          description: "Two arms needed",
        },
        {
          value: 18,
          imageUrl: "L",
          label: "Large",
          description: "Need to practice my squats",
        },
        {
          value: 26,
          imageUrl: "XL",
          label: "Extra Large",
          description: "My dog carries me",
        },
        {
          value: 36,
          imageUrl: "XXL",
          label: "Humongous",
          description: "My dog is my horse",
        },
      ],
    };
  },
  methods: {
    handleNext() {
      if (!this.weight.amount) {
        this.inputError = true;
        this.errorMessage = "You must input a weight";
        return;
      } else {
        this.$emit("weightSubmit");
      }
    },
    restrictInput(evt) {
      if (evt.keyCode === 45 || evt.keyCode === 43) {
        evt.preventDefault();
      }
    },
    checkInput() {
      if (this.weight.amount > 0) {
        this.inputError = false;
      }
    },
    handleBodyWeight(bodyWeight, index) {
      this.activatedDiv = index;
      this.$emit("weightAmountQuickPick", bodyWeight);
    },
  },
  mounted() {
    if (!this.animal) this.animal = "dog";
    this.weightChoices = this.animal === "cat" ? this.catWeightChoices : this.dogWeightChoices;
    window.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.handleNext();
      }
    });
  },
};
</script>

<style scoped>
.pet-weight {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-weight-input {
  box-sizing: border-box;
  border: 1px solid #00263a;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  height: 50px;
  width: 100%;
  padding: 7px 10px;
  margin: 0 10px;
  outline: none;
  transition: 0.2s linear;
  font-size: 14px;
}

.next-button {
  margin: 20px auto;
  padding: 5px 0;
  width: 315px;
}

.pet-weight-input:focus {
  border: 1px solid #00263a;
  transition: 0.2s linear;
}

.weight-inputs {
  display: flex;
  position: relative;
  margin-bottom: 25px;
}

.weight-inputs::after {
  position: absolute;
  top: 16px;
  right: 20px;
  transition: all 0.05s ease-in-out;
  content: "kg";
  font-size: 14px;
}

.weight-inputs:hover::after,
.weight-inputs:focus-within::after {
  right: 40px;
}

.weight-inputs select {
  font-family: Montserrat;
  color: #00263a;
  border: none;
  width: 100px;
}

.weight-inputs select:focus {
  outline: none;
}

.weight-items {
  display: flex;
  flex-direction: column;
}

.weight-item {
  font-family: Montserrat;
  display: flex;
  margin: 3px;
  padding: 3px 3px 3px 12px;
  border: 1px solid #00263a;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.weight-item:hover,
.active {
  cursor: pointer;
  border: 2px solid #789904;
  /* color: #789904; */
  margin: 2px;
}

.weight-item:hover .weight-image,
.active .weight-image {
  border: 2px solid #789904;
}

.weight-item-text {
  text-align: left;
  padding-left: 20px;
  max-width: 228px;
}

.weight-item:focus {
  outline: 1px #789904 auto;
}

.weight-item-label {
  margin: 10px 0 0 0;
  font-weight: 700;
}

.weight-item-desc {
  margin: 2px 0 0 0;
  font-size: 12px;
}

.weight-image {
  height: 50px;
  width: 50px;
  border: 2px #00263a solid;
  border-radius: 50%;
}

@supports (-moz-appearance: none) {
  .weight-inputs::after {
    right: 1.5em;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
  transition-delay: 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 340px) {
  .pet-weight-input {
    /* width: 180px; */
    margin: 0 5% 0 0;
  }

  .next-button {
    width: 280px;
  }
}

@media screen and (max-width: 380px) {
  .next-button {
    width: 310px;
  }
}
</style>
