<template>
  <div class="pet-age">
    <h2>How old are you?</h2>
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

    <div class="input-date">
      <h3>Or your date of birth?</h3>
      <v-date-picker
        id="date-picker-age"
        v-model="age.dob"
        :max-date="new Date()"
        :input-props="inputProps"
        :popover="calendarPopover"
      />
    </div>

    <transition name="fade">
      <button
        class="btn-green next-button"
        v-if="ageSubmitted"
        @click="handleNext"
        key="next-button"
      >
        Next
      </button>
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
      dob: Date,
    },
  },
  data: () => {
    return {
      ageSubmitted: false,
      inputProps: {
        placeholder: "Please enter your birthday",
      },
      calendarPopover: {
        placement: "bottom",
        labelClass: "popover",
      },
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
  watch: {
    age: function (val) {
      console.log("Liam: val");
      console.log(val);
    },
  },
};
</script>

<style scoped>
.pet-age {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-age-selects {
  margin: 10px 0;
}

.pet-age-select {
  font-family: Montserrat;
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #00263a;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  margin: 0 5%;
  outline: none;
  transition: 0.2s linear;
}

.pet-age-select option {
  color: #00263a;
}

.pet-age-select:focus {
  border: 1px solid #00263a;
  transition: 0.2s linear;
}

.next-button {
  margin: 20px auto;
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

<style>
#date-picker-age {
  display: flex;
  justify-content: center;
}
#date-picker-age .vc-w-full {
  width: auto;
  flex: 1;
}

.popover {
  font-family: Montserrat;
}
</style>
