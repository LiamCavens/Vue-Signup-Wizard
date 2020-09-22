<template>
  <div class="dog-working">
    <h2>Is {{gender === 'male' ? "he" : "she"}} a working dog?</h2>
    <div class="dog-working-buttons">
      <div class="dog-working-buttons-card">
        <button @click="handleWorking(false)">
          <img class="dog-working-image" src="../assets/icon_sit_white.png" alt="Female Image" />
        </button>
        <p class="dog-working-text">No</p>
      </div>
      <div class="dog-working-buttons-card">
        <button @click="handleWorking(true)">
          <img
            class="dog-working-image"
            src="../assets/icon_working_dog_white.png"
            alt="Male Image"
          />
        </button>
        <p class="dog-working-text">Yes</p>
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
    gender: String,
    working: Boolean,
  },
  data: () => {
    return {};
  },
  methods: {
    handleWorking(isWorking) {
      this.$emit("workingSubmit", isWorking);
    },
  },
};
</script>

<style scoped>
.dog-working {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.dog-working-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.dog-working-buttons button {
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  margin: 3px;
  padding: 3px;
  border: 2px solid #00263a;
  background-color: white;
  border-radius: 50%;
}

.dog-working-buttons button:hover {
  color: #789904;
  border: #789904 2px solid;
}

.dog-working-buttons button:focus {
  outline: none;
}

.dog-working-text {
  font-family: Montserrat;
  font-size: 22px;
  margin: auto;
}

.dog-working-image {
  height: 120px;
}
</style>
