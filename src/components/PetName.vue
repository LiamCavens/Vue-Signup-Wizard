<template>
  <div class="pet-name">
    <h2>Lets start with a name...</h2>
    <p v-if="inputError" class="error-message">* {{ errorMessage }}</p>
    <input
      placeholder="Enter your pets name"
      class="pet-name-input"
      v-bind:class="{ 'input-error': inputError }"
      type="text"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
      @blur="blurred = true"
      required
      autofocus
    />
    <p class="info-text">
      Enter the name of your <b>{{ numOfPets > 1 ? "first" : "" }} pet</b> and
      we can get started designing their ideal diet.
      <br />
      <br />
      You will be able to enter other pets later. BTW, we only feed cats and
      dogs at the moment; goldfish coming soon.
    </p>
    <transition name="fade">
      <button
        class="btn-green next-button"
        v-if="name && name.length > 1"
        @click="handleNext"
      >
        Next
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PetName",
  props: {
    name: String,
    numOfPets: Number,
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
      this.name = this.name.trim();
      if (!this.name || this.name.length < 2) {
        this.inputError = true;
        if (!this.name) {
          this.errorMessage = "You must input a name.";
        } else if (this.name.length < 2) {
          this.errorMessage = "Name must be more than 1 character.";
        }
        return;
      } else {
        this.inputError = true;
        this.$emit("nameSubmit");
      }
    },
  },
  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.handleNext();
      }
    });
    if (this.name) {
      this.blurred = true;
    }
  },
};
</script>

<style scoped>
.pet-name {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-name-input {
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  transition: 0.2s linear;
}

.info-text {
  font-size: 12px;
}

.pet-name-input:focus {
  border: 1px solid #00263a;
  transition: 0.2s linear;
}

.next-button {
  margin: 20px 5%;
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
</style>
