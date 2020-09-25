<template>
  <div class="dog-working">
    <h2>Are you a working dog?</h2>
    <div class="dog-working-buttons">
      <div class="dog-working-buttons-card">
        <button @click="handleWorking(false)">
          <img
            class="dog-working-image"
            src="../assets/icon_sit_white.png"
            alt="Female Image"
          />
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
    <!-- <p class="explain-text">
      We are not asking whether you are busy, feel like you contribute the
      household welfare but whether you are a sheepdog, gun dog or racing
      greyhound. This is a question that our friends in the Inland Revenue need
      us to ask. Click on help for more reasons why
    </p> -->
    <p class="explain-text">
      Strange question to ask, we know. Don't get us wrong because we know you
      work hard to keep the humans happy. Basically, if you are a gundog,
      sheepdog or racing greyhound, then the answer is Yes.
    </p>
    <!-- <div v-if="showNeutered" class="pet-neutered">
        <span>Is he neutered? <input type="checkbox" name="" id=""> </span>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "PetGender",
  props: {
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
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.dog-working-buttons button:hover {
  border: #789904 2px solid;
}

.dog-working-buttons button:focus {
  outline: none;
}

.dog-working-text {
  font-family: Montserrat;
  font-size: 16px;
  margin: auto;
}

.dog-working-image {
  height: 120px;
}

.explain-text {
  font-size: 12px;
}
</style>
