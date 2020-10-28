<template>
  <div class="user-details">
    <h2>Your Details</h2>
    <div class="user-details-inputs">
      <v-select
        class="title-chooser"
        v-bind:class="{ 'input-error': errorsArray.some((t) => t === 'title') }"
        placeholder="Title"
        :options="titles"
        v-model="title"
      />
      <div class="name-inputs">
        <input
          placeholder="First name"
          class="user-name-input first-name detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'firstName'),
          }"
          type="text"
          v-model="firstName"
          @input="checkInput('firstName')"
        />

        <input
          placeholder="Surname"
          class="user-name-input surname detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'surname'),
          }"
          type="text"
          v-model="surname"
          @input="checkInput('surname')"
        />
      </div>
      <input
        placeholder="Phone Number"
        class="detail-input"
        v-bind:class="{
          'input-error': errorsArray.some((t) => t === 'phoneNumber'),
        }"
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        v-model="phoneNumber"
        @input="checkInput('phoneNumber')"
      />
      <div class="email-form">
        <input
          id="email"
          placeholder="Confirm Email"
          class="detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'email'),
          }"
          type="email"
          v-model="email"
          @input="checkInput('email')"
        />
        <label class="email-label" for="email">Confirm Email</label>
      </div>
      <span id="password-required" v-show="inputErrorPasswordCopy"
        >passwords do not match</span
      >
      <span id="password-required" v-show="inputErrorPasswordLength"
        >password must be 8 or more characters</span
      >
      <div class="password-inputs">
        <input
          placeholder="Create password"
          class="password-input pass-1 detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'password'),
            'matching-pass' : passwordsMatch
          }"
          type="password"
          v-model="password"
          @input="checkInput('password')"
          @keyup="checkMatch()"
        />
        <input
          placeholder="Confirm password"
          class="password-input pass-2 detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'password'),
            'matching-pass' : passwordsMatch
          }"
          type="password"
          @blur="checkForCopy($event.target.value)"
          @keyup="checkMatch()"
          v-model="passwordCopy"
          required
        />
      </div>
      <div class="email-info">
        <p>Please create a password for your member portal.</p>
        <p>Please use at least 8 characters.</p>
      </div>
      <h3 class="billing-text">Billing Address</h3>
      <div class="postcode">
        <input
          id="postcode"
          placeholder="Postcode"
          class="postcode-input detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'postcode'),
          }"
          type="text"
          v-model="postcode"
          @input="checkInput('postcode')"
        />
        <button class="btn-green postcode-btn" @click="findPostcode">
          Find address
        </button>
      </div>
      <div class="address" v-if="postcodeFound">
        <input
          placeholder="Address Line 1"
          class="detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'addressLine1'),
          }"
          type="text"
          v-model="addressLine1"
          @input="checkInput('addressLine1')"
        />
      </div>
      <div class="address" v-if="postcodeFound">
        <input
          placeholder="Address Line 2"
          class="detail-input"
          type="text"
          v-model="addressLine2"
        />
      </div>
      <div class="address" v-if="postcodeFound">
        <input
          placeholder="City"
          class="detail-input"
          v-bind:class="{
            'input-error': errorsArray.some((t) => t === 'city'),
          }"
          type="text"
          v-model="city"
          @input="checkInput('city')"
        />
      </div>
    </div>
    <p
      class="address-error"
      v-if="
        errorsArray.some((t) => t === 'city') &&
        errorsArray.some((t) => t === 'addressLine1')
      "
    >
      you must find address before continuing
    </p>
    <button class="btn-green next-button" @click="confirmDetails">Next</button>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "UserDetails",
  props: {
    user: Object,
  },
  data: () => {
    return {
      errorsArray: [],
      postcodeFound: false,
      passwordsMatch: false,
      inputErrorPasswordCopy: false,
      inputErrorPasswordLength: false,
      titles: ["Mr", "Mrs", "Miss", "Mz", "Mx"],
      title: "",
      firstName: "",
      surname: "",
      phoneNumber: "",
      password: "",
      passwordCopy: "",
      postcode: "",
      addressLine1: "",
      addressLine2: "",
      email: "",
      city: "",
    };
  },
  methods: {
    findPostcode() {
      if (!this.postcode) return this.errorsArray.push("postcode");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "postcode";
        });
        this.addressLine1 = "75 Test Place";
        this.addressLine2 = "Test Line 2";
        this.city = "Glasgow";
        this.postcodeFound = true;
      }
    },
    checkInput(field) {
      _.remove(this.errorsArray, (e) => {
        return e === field;
      });
    },
    checkMatch(){
        if (this.password === this.passwordCopy){
            this.passwordsMatch = true;
        } else {
            this.passwordsMatch = false;
        }
    },
    checkForCopy(passwordCopy) {
      if (this.password !== passwordCopy) {
        this.inputErrorPasswordCopy = true;
        this.errorsArray.push("password");
      } else {
        this.inputErrorPasswordCopy = false;
        _.remove(this.errorsArray, (e) => {
          return e === "password";
        });
      }
    },
    confirmDetails() {
      if (!this.title) this.errorsArray.push("title");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "title";
        });
      }
      if (!this.firstName) this.errorsArray.push("firstName");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "firstName";
        });
      }
      if (!this.surname) this.errorsArray.push("surname");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "surname";
        });
      }
      if (!this.phoneNumber) this.errorsArray.push("phoneNumber");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "phoneNumber";
        });
      }
      if (
        !this.password ||
        this.password !== this.passwordCopy ||
        this.password.length < 8
      ) {
        if (this.password !== this.passwordCopy) {
          this.inputErrorPasswordCopy = true;
        } else {
          this.inputErrorPasswordCopy = false;
        }
        if (this.password.length < 8) {
          this.inputErrorPasswordLength = true;
        } else {
          this.inputErrorPasswordLength = false;
        }
        this.errorsArray.push("password");
      } else {
        this.inputErrorPasswordCopy = false;
        this.inputErrorPasswordLength = false;
        _.remove(this.errorsArray, (e) => {
          return e === "password";
        });
      }
      if (!this.email) this.errorsArray.push("email");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "email";
        });
      }
      if (!this.postcode) this.errorsArray.push("postcode");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "postcode";
        });
      }
      if (!this.addressLine1) this.errorsArray.push("addressLine1");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "addressLine1";
        });
      }
      if (!this.city) this.errorsArray.push("city");
      else {
        _.remove(this.errorsArray, (e) => {
          return e === "city";
        });
      }
      if (this.errorsArray.length) return;
      else
        this.$emit("userSubmit", {
          title: this.title,
          firstName: this.firstName,
          surname: this.surname,
          phoneNumber: this.phoneNumber,
          password: this.password,
          postcode: this.postcode,
          addressLine1: this.addressLine1,
          addressLine2: this.addressLine2,
          email: this.email,
          city: this.city,
        });
    },
  },
  beforeMount() {
    if (this.user.title) this.title = this.user.title;
    if (this.user.firstName) this.firstName = this.user.firstName;
    if (this.user.surname) this.surname = this.user.surname;
    if (this.user.phoneNumber) this.phoneNumber = this.user.phoneNumber;
    if (this.user.password) this.password = this.user.password;
    if (this.user.password) this.passwordCopy = this.user.password;
    if (this.user.email) this.email = this.user.email;
    if (this.user.addressLine1) this.addressLine1 = this.user.addressLine1;
    if (this.user.addressLine2) this.addressLine2 = this.user.addressLine2;
    if (this.user.city) this.city = this.user.city;
    if (this.user.postcode) {
      this.postcodeFound = true;
      this.postcode = this.user.postcode;
    }
  },
};
</script>

<style  scoped>
.user-details-inputs {
  display: flex;
  flex-direction: column;
}

.name-inputs,
.password-inputs,
.postcode {
  display: flex;
  flex-direction: row;
}

.detail-input {
  box-sizing: border-box;
  border: 1px solid #00263a;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 14px 7px;
  outline: none;
  transition: 0.2s linear;
  width: 100%;
  margin: 8px 0;
}

.billing-text {
  text-align: left;
}

.postcode-input,
.postcode-btn {
  width: 50%;
  height: 40px;
}

.postcode-input {
  margin: 0 5px 8px 0;
}

.postcode-btn {
  margin: 0 0 0 5px;
}

.user-name-input {
  margin-top: 16px;
}

.first-name,
.pass-1 {
  margin-right: 8px;
}

.surname,
.pass-2 {
  margin-left: 8px;
}

.email-form {
  margin-top: 10px;
  position: relative;
}

.email-label {
  position: absolute;
  top: -5px;
  left: 0;
  font-size: 10px;
}

.address-error {
  font-size: 10px;
  text-align: end;
  margin: 0;
  color: #e1251b;
}

.email-info {
  font-size: 10px;
  text-align: start;
}

.email-info p {
  margin-top: 0;
}

.next-button {
  width: 300px;
  margin: 15px 0 0 0;
}
#password-required {
  align-self: flex-end;
  font-size: 10px;
  color: #e1251b;
}

.matching-pass {
    border: 1px solid #789904 !important;
    box-shadow: inset 0px 0px 4px 0px #789904 !important;
    transition: 0.5s ease !important;
}
</style>

<style>
.title-chooser .vs__dropdown-toggle {
  height: 45px;
  font-size: 0.85em;
}

.title-chooser ::placeholder {
  color: #727171 !important;
}

.title-chooser .vs__dropdown-toggle,
.title-chooser .vs__dropdown-menu,
.title-chooser .vs__dropdown-menu .vs__dropdown-toggle,
.vs__dropdown-menu {
  border: #00263a 1px solid;
  width: 100%;
}

.title-chooser .vs__clear,
.title-chooser .vs__open-indicator {
  cursor: pointer;
  fill: #00263a;
}
</style>
