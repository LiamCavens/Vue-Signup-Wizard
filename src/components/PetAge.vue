<template>
  <div class="pet-age">
    <p class="pet-age-label">{{ name }}'s age</p>
    <div class="pet-age-selects">
      <select
        class="pet-age-select"
        v-model="age.years"
        name="years"
        id="age-years"
        @change="ageSubmit"
      >
        <option value disabled selected>Years</option>
        <option value="0">0 Years</option>
        <option v-for="n in 22" :key="n.id" :value="n">{{ n }} Years</option>
      </select>

      <select
        class="pet-age-select"
        v-model="age.months"
        name="months"
        id="age-months"
        @change="ageSubmit"
      >
        <option value="0" selected>0 Months</option>
        <option v-for="n in 11" :key="n.id" :value="n">{{ n }} Months</option>
      </select>
    </div>
    <transition name="fade">
      <button
        class="btn-green next-button"
        v-if="ageSubmitted"
        @click="handleNext"
        key="next-button"
      >Next</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PetAge",
  props: {
    name: String,
    age: {
      years: Number,
      months: Number,
    },
  },
  data: () => {
    return {
      ageSubmitted: false,
    };
  },
  methods: {
    ageSubmit() {
      if (this.age.years && this.age.months) {
        this.ageSubmitted = true;
      }
    },
    handleNext() {
      this.$emit("ageSubmit");
    },
  },
  mounted() {
    if (this.age.years && this.age.months) this.ageSubmitted = true;
  },
};
</script>

<style scoped>
.pet-age {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-age-label {
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 5px;
}

.pet-age-selects {
  margin: 10px 0;
}

.pet-age-select {
  font-family: Montserrat;
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  margin: 0 5%;
  outline: none;
  transition: 0.2s linear;
}

.pet-age-select:focus {
  border: 1px solid #00263a;
  transition: 0.2s linear;
}

.next-button {
  margin: 10px auto;
  width: 238px;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
  transition-delay: 0.5s;
}
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
