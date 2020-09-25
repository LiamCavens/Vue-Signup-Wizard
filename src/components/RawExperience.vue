<template>
  <div class="raw-exp">
    <h2>First time to raw?</h2>
    <div class="raw-exp-buttons">
      <button
        class="raw-exp-button"
        v-bind:class="{ active: experienceLevel === 'first' }"
        @click="handleExperience('first')"
      >
        First time
      </button>
      <button
        class="raw-exp-button"
        v-bind:class="{ active: experienceLevel === 'occasion' }"
        @click="handleExperience('occasion')"
      >
        Occasional
      </button>
      <button
        class="raw-exp-button"
        v-bind:class="{ active: experienceLevel === 'experienced' }"
        @click="handleExperience('experienced')"
      >
        Experienced
      </button>
    </div>
    <div v-if="showPreference" class="experience-radios">
      <p>
        If you are experienced and have a prefered range, then please select
        one.
      </p>
      <div class="experience-radio">
        <input
          type="radio"
          id="superfood"
          name="preferenceRadio"
          value="superfood"
          v-model="foodPreference"
          @input="checkForNext"
        />
        <label for="superfood">Superfood Enriched</label>
        <div class="check"></div>
      </div>
      <div class="experience-radio">
        <input
          type="radio"
          id="pureMeat"
          name="preferenceRadio"
          value="pureMeat"
          v-model="foodPreference"
          @input="checkForNext"
        />
        <label for="pureMeat">Pure Meat & Bone</label>
        <div class="check"></div>
      </div>
      <div class="experience-radio">
        <input
          type="radio"
          id="premiumComplete"
          name="preferenceRadio"
          value="premiumComplete"
          v-model="foodPreference"
          @input="checkForNext"
        />
        <label for="premiumComplete">Premium Complete</label>
        <div class="check"></div>
      </div>
      <div class="experience-radio">
        <input
          type="radio"
          id="premiumPuppy"
          name="preferenceRadio"
          value="premiumPuppy"
          v-model="foodPreference"
          @input="checkForNext"
        />
        <label for="premiumPuppy">Premium Complete Puppy</label>
        <div class="check"></div>
      </div>
      <div class="experience-radio">
        <input
          type="radio"
          id="noPref"
          name="preferenceRadio"
          value="noPref"
          v-model="foodPreference"
          @input="checkForNext"
        />
        <label for="noPref">No Preference</label>
        <div class="check"></div>
      </div>
    </div>
    <button v-if="showNext" class="btn-green next-button" @click="handleNext">
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "RawExperience",
  props: {
    experience: String,
    foodPreference: String,
  },
  data: () => {
    return {
      showNext: false,
      showPreference: false,
      experienceLevel: "",
    };
  },
  methods: {
    handleExperience(experienceLevel) {
      this.experienceLevel = experienceLevel;
      if (experienceLevel === "first" || experienceLevel === "occasion") {
        this.showPreference = false;
      } else if (experienceLevel === "experienced") {
        this.showPreference = true;
      }
      this.showNext = true;
    },
    checkForNext() {
      this.showNext = true;
    },
    handleNext() {
      this.$emit("experienceSubmit", this.experienceLevel);
    },
  },
  mounted() {
    this.experienceLevel = this.experience;
  },
};
</script>

<style scoped>
.raw-exp-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
}

.raw-exp-button {
  margin: 10px 20px;
  padding: 10px;
  width: 100%;
  height: 42px;
  border: 1px solid #00263a;
  color: #00263a;
  background-color: #fff;
  border-radius: 500px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  cursor: pointer;
}

.raw-exp-button:hover {
  border: 1px solid #789904;
  color: #789904;
}

.raw-exp-button:focus {
  outline: none;
}

.active {
  transition: all 0.4s ease;
  background-color: #789904;
  color: #fff;
}

.active:hover {
  color: #00263a;
}

.next-button {
  margin: 20px auto;
  width: 100%;
}

.experience-radios {
  border: none;
  display: flex;
  flex-direction: column;
}

.experience-radio input[type="radio"] {
  position: absolute;
  visibility: hidden;
}

.experience-radio label {
  cursor: pointer;
  display: block;
  position: relative;
  padding: 2px 0px 5px 25px;
  font-size: 14px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s linear;
}

.experience-radio label:hover {
  /* color: #789904; */
}

.experience-radio {
  position: relative;
}

.check {
  display: block;
  position: absolute;
  border: 3px solid #aaaaaa;
  border-radius: 100%;
  height: 12px;
  width: 12px;
  top: 1px;
  left: 35px;
  z-index: 5;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
}

.check::before {
  display: block;
  position: absolute;
  content: "";
  border-radius: 100%;
  height: 8px;
  width: 8px;
  top: 2px;
  left: 2px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}

input[type="radio"]:checked ~ .check {
  border: 3px solid #789904;
}

input[type="radio"]:checked ~ .check::before {
  background: #789904;
}

/* input[type="radio"]:checked ~ label {
  color: #789904;
} */

.experience-radio:hover .check {
  border: 3px solid #789904;
}
</style>
