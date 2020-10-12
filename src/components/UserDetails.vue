<template>
  <div class="user-details">
    <h2>Your Details</h2>
    <div class="user-details-inputs">
      <v-select
        class="title-chooser"
        v-bind:class="{ 'input-error': inputErrorTitle }"
        placeholder="Title"
        :options="titles"
        v-model="title"
      />
      <div class="name-inputs">
        <input
          placeholder="First name"
          class="user-name-input first-name detail-input"
          v-bind:class="{ 'input-error': inputErrorName }"
          type="text"
          :value="firstName"
          @input="$emit('update:firstName', $event.target.value)"
          required
        />

        <input
          placeholder="Surname"
          class="user-name-input surname detail-input"
          v-bind:class="{ 'input-error': inputErrorSurname }"
          type="text"
          :value="surname"
          @input="$emit('update:surname', $event.target.value)"
          required
        />
      </div>
      <input
        placeholder="Phone Number"
        class="detail-input"
        v-bind:class="{ 'input-error': inputErrorPhone }"
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        :value="phoneNumber"
        @input="$emit('update:phoneNumber', $event.target.value)"
        required
      />
      <span id="password-required" v-show="inputErrorPasswordCopy"
        >passwords do not match</span
      >
      <div class="password-inputs">
        <input
          placeholder="Create password"
          class="password-input pass-1 detail-input"
          v-bind:class="{ 'input-error': inputErrorPassword }"
          type="password"
          @input="$emit('update:password', $event.target.value)"
          :value="password"
          required
        />
        <input
          placeholder="Confirm password"
          class="password-input pass-2 detail-input"
          v-bind:class="{ 'input-error': inputErrorPassword }"
          type="password"
          @blur="checkForCopy($event.target.value)"
          required
        />
      </div>
      {{ inputErrorPassword }}
      <div class="email-form">
        <input
          id="email"
          placeholder="Confirm Email"
          class="detail-input"
          v-bind:class="{ 'input-error': inputErrorEmail }"
          type="email"
          :value="email"
          @input="$emit('update:firstName', $event.target.value)"
          required
        />
        <label class="email-label" for="email">Confirm Email</label>
      </div>
      <h3 class="billing-text">Billing Address</h3>
      <div class="postcode">
        <input
          id="postcode"
          placeholder="Postcode"
          class="postcode-input detail-input"
          v-bind:class="{ 'input-error': inputErrorPostcode }"
          type="email"
          :value="postcode"
          @input="$emit('update:postcode', $event.target.value)"
          required
        />
        <button class="btn-green postcode-btn" @click="findPostcode">
          Find address
        </button>
      </div>
      <div class="address">
        <input
          placeholder="Address Line 1"
          class="detail-input"
          v-bind:class="{ 'input-error': inputErrorAddress }"
          type="text"
          :value="addressLine1"
          @input="$emit('update:addressLine1', $event.target.value)"
          required
        />
      </div>
      <div class="address">
        <input
          placeholder="Address Line 2"
          class="detail-input"
          type="text"
          :value="addressLine2"
          @input="$emit('update:addressLine2', $event.target.value)"
          required
        />
      </div>
      <div class="address">
        <input
          placeholder="City"
          class="detail-input"
          v-bind:class="{ 'input-error': inputErrorCity }"
          type="text"
          :value="city"
          @input="$emit('update:city', $event.target.value)"
          required
        />
      </div>
    </div>
    <button class="btn-green next-button" @click="confirmDetails">Next</button>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: {
    title: String,
    firstName: String,
    surname: String,
    phoneNumber: String,
    password: String,
    postcode: String,
    addressLine1: String,
    addressLine2: String,
    email: String,
    city: String,
  },
  data: () => {
    return {
      inputErrorName: false,
      inputErrorSurname: false,
      inputErrorPhone: false,
      inputErrorPassword: false,
      inputErrorEmail: false,
      inputErrorPostcode: false,
      inputErrorAddress: false,
      inputErrorCity: false,
      inputErrorTitle: false,
      inputErrorPasswordCopy: false,
      titles: ["Mr", "Mrs", "Miss", "Mz", "Mx"],
    };
  },
  methods: {
    findPostcode() {
      this.addressLine1 = "75 Test Place";
      this.addressLine2 = "Test Line 2";
      this.city = "Glasgow";
    },
    checkForCopy(passwordCopy) {
      if (this.password !== passwordCopy) {
        this.inputErrorPassword = this.inputErrorPasswordCopy = true;
      } else {
        this.inputErrorPassword = this.inputErrorPasswordCopy = false;
      }
    },
    confirmDetails() {
      if (!this.title) this.inputErrorTitle = true;
      else this.inputErrorTitle = false;
      if (!this.firstName) this.inputErrorName = true;
      else this.inputErrorName = false;
      if (!this.surname) this.inputErrorSurname = true;
      else this.inputErrorSurname = false;
      if (!this.phoneNumber) this.inputErrorPhone = true;
      else this.inputErrorPhone = false;
      if (!this.password || this.password !== this.passwordCopy) {
        this.inputErrorPassword = true;
        this.inputErrorPasswordCopy(this.passwordCopy);
      } else this.inputErrorPassword = false;
      if (!this.email) this.inputErrorEmail = true;
      else this.inputErrorEmail = false;
      if (!this.postcode) this.inputErrorPostcode = true;
      else this.inputErrorPostcode = false;
      if (!this.addressLine1) this.inputErrorAddress = true;
      else this.inputErrorAddress = false;
      if (!this.city) this.inputErrorCity = true;
      else this.inputErrorCity = false;
      if (!this.title) this.inputErrorTitle = true;
      else this.inputErrorTitle = false;
    },
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

.next-button {
  width: 300px;
  margin: 15px 0 0 0;
}
#password-required {
  align-self: flex-end;
  font-size: 10px;
  color: #e1251b;
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
