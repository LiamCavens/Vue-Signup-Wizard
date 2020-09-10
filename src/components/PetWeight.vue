<template>
  <div class="pet-weight">
    <p class="pet-weight-label">What's {{ name }}'s weight?</p>
    <p v-if="inputError" class="error-message">* {{errorMessage}}</p>
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
        @blur="blurred = true"
        @keypress="restrictInput($event)"
        @keyup="checkInput"
        autofocus
      />
      <select
        v-if="animal === 'pet'"
        name="pet-weight-units"
        id="weight-units"
        v-model="weight.unit"
      >
        <option class="unit-option" value="kg" default>Kilograms</option>
        <option class="unit-option" value="lb">Pounds</option>
      </select>
      <select
        v-if="animal === 'cat'"
        name="pet-weight-units"
        id="weight-units"
        v-model="weight.unit"
      >
        <option class="unit-option" value="g" default>Grams</option>
        <option class="unit-option" value="lb">Pounds</option>
      </select>
    </div>
    <transition name="fade">
      <button class="next-button" v-if="blurred" @click="handleNext">Next</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PetWeight",
  props: {
    name: String,
    weight: Object,
    animal: String,
  },
  data: () => {
    return {
      blurred: false,
      inputError: false,
      errorMessage: "",
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
  },
  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.handleNext();
      }
    });
    if (this.weight.amount) {
      this.blurred = true;
    }
  },
};
</script>

<style scoped>
.pet-weight {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-weight-label {
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 5px;
}

.pet-weight-input {
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  height: 50px;
  width: 200px;
  padding: 7px;
  margin: 0 5%;
  outline: none;
  transition: 0.2s linear;
}

.next-button {
  font-family: Montserrat;
  background-color: #789904;
  margin: 10px auto;
  padding: 5px 0;
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  outline: none;
  height: 32px;
  transition: 0.3s ease;
  width: 315px;
}

.next-button:hover {
  cursor: pointer;
  background-color: #617a04;
  transition: 0.3s ease;
}

.pet-weight-input:focus {
  border: 1px solid #00263a;
  transition: 0.2s linear;
}

.weight-inputs {
  display: flex;
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

.fade-enter-active {
  transition: opacity 0.3s linear;
  transition-delay: 0.5s;
}

.fade-enter {
  opacity: 0;
}

@media screen and (max-width: 340px) {
  .pet-weight-input {
    width: 180px;
    margin: 0 5% 0 0;
  }

  .next-button {
    width: 280px;
  }
}
</style>
