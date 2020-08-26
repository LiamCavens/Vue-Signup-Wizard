<template>
  <div class="dog-gender">
    <p class="dog-gender-label">What is {{ name }}'s gender?</p>
    <div class="dog-gender-buttons">
      <button @click="handleGender('male')">Male</button>
      <button @click="handleGender('female')">Female</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogName",
  props: {
    name: String,
    gender: String,
  },
  data: () => {
    return {
      blurred: false,
    };
  },
  methods: {
    handleGender(gender) {
      this.$emit("genderSubmit", gender);
    },
  },
  computed: {},
};
</script>

<style scoped>
.dog-gender {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.dog-gender-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.dog-gender-buttons button {
  font-family: Montserrat;
  color: #00263a;
  background-color: white;
  border: #00263a 1px solid;
  border-radius: 4px;
  height: 45px;
  width: 78px;
  cursor: pointer;
}

.dog-gender-buttons button:hover {
  color: #789904;
  border: #789904 1px solid;
}

.dog-gender-label {
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 8px;
}
</style>
