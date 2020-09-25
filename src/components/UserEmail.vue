<template>
  <div class="email">
    <p class="email-text">
      Welcome to our diet recommendation engine. Together, we will build a
      profile of your pets so we can recommend the best diet plan.
    </p>
    <div class="email-section">
      <p v-if="inputError" class="error-message">* {{ errorMessage }}</p>
      <input
        placeholder="Enter your email..."
        class="email-input"
        v-bind:class="{ 'input-error': inputError }"
        type="email"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
        @blur="blurred = true"
        @keyup="validateEmail"
        required
        autofocus
      />
    </div>

    <label class="email-checkbox" for="email">
      Send me emails related to my order
      <input id="email" type="checkbox" />
      <span class="check"></span>
    </label>

    <transition name="fade">
      <button class="btn-green next-button" @click="handleNext">Next</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "UserEmail",
  props: {
    email: String,
  },
  data: () => {
    return {
      blurred: false,
      inputError: false,
      emailError: false,
      errorMessage: "",
    };
  },
  methods: {
    handleNext() {
      if (!this.email || !this.validEmail(this.email)) {
        this.inputError = true;
        this.emailError = true;
        this.errorMessage = "Valid email required.";
      } else {
        this.inputError = false;
        this.errorMessage = "";
      }

      if (!this.inputError) {
        this.$emit("emailSubmit");
      }
    },
    validateEmail() {
      if (!this.email || (!this.validEmail(this.email) && this.emailError)) {
        this.inputError = true;
        this.errorMessage = "Valid email required.";
      } else {
        this.inputError = false;
        this.errorMessage = "";
      }
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.email {
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.email-text {
  font-size: 18px;
  margin-top: 0;
}

.error-message {
  align-self: flex-start;
  padding-left: 0 !important;
  position: absolute;
  top: -30px;
}

.email-section {
  width: 100%;
  margin-top: 20px;
  position: relative;
}

.email-input {
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  transition: 0.2s linear;
}

.email-input:focus {
  border: 1px solid #00263a;
  transition: 0.2s linear;
}

.email-chackbox input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.next-button {
  width: 100%;
}

.fade-enter-active {
  transition: opacity 0.3s linear;
  transition-delay: 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>

<style>
.email-checkbox {
  margin: 25px 0 10px;
  display: flex;
  align-items: center;
  user-select: none;
  font-size: 14px;
  cursor: pointer;
}

.email-checkbox input {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.email-checkbox input:checked ~ .check {
  border-color: #00263a;
  box-shadow: 0px 0px 0px 15px #00263a inset;
}
.email-checkbox input:checked ~ .check::after {
  opacity: 1;
  transform: scale(1);
}
.email-checkbox .check {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 100px;
  background-color: #fff;
  border: 2px solid #00263a;
  box-shadow: 0px 0px 0px 0px #00263a inset;
  transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
}
.email-checkbox .check::after {
  content: "";
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 4;
  position: absolute;
  transform: scale(0);
  background-size: 50%;
  background-image: url("https://webdevtrick.com/demos/checkmark.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition-delay: 0.2s !important;
  transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
}

@media screen and (max-width: 380px) {
  .email-checkbox {
    font-size: 12px;
  }
}
</style>
