<template>
  <div class="pet-gender">
    <p class="pet-gender-label">{{ name }} is...?</p>
    <div class="pet-gender-buttons">
      <div class="pet-gender-buttons-card">
        <button @click="handleGender('female')">
          <img
            class="pet-gender-image cat-image"
            src="../assets/icon_potatoes_white.png"
            alt="Female Image"
          />
        </button>
        <p class="pet-gender-text">Female</p>
      </div>
      <div class="pet-gender-buttons-card">
        <button @click="handleGender('male')">
          <img
            class="pet-gender-image pet-image"
            src="../assets/icon_corn_white.png"
            alt="Male Image"
          />
        </button>
        <p class="pet-gender-text">Male</p>
      </div>
    </div>
    <!-- <div v-if="showNeutered" class="pet-neutered">
        <span>Is he neutered? <input type="checkbox" name="" id=""> </span>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "PetGender",
  props: {
    name: String,
    animal: String,
    gender: String,
  },
  data: () => {
    return {
      blurred: false,
      showSpayed: false,
      showNeutered: false,
    };
  },
  methods: {
    handleGender(gender) {
      this.$emit("genderSubmit", gender);
      //   if (gender === "male") {
      //     this.showNeutered = true;
      //     this.showSpayed = false;
      //   } else {
      //     this.showNeutered = false;
      //     this.showSpayed = true;
      //   }
    },
    // handleNeuteredSpayed(gender) {},
  },
  computed: {},
};
</script>

<style scoped>
.pet-gender {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-gender-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.pet-gender-buttons button {
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  margin: 3px;
  padding: 3px;
  border: 2px solid #00263a;
  background-color: white;
  border-radius: 50%;
}

.pet-gender-buttons button:hover {
  color: #789904;
  border: #789904 2px solid;
}

.pet-gender-buttons button:focus {
  outline: none;
}

.pet-gender-text {
  font-family: Montserrat;
  font-size: 22px;
  margin: auto;
}

.pet-gender-image {
  height: 120px;
}

.pet-gender-label {
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 8px;
}
</style>
