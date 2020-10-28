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
      <h3>Or</h3>
      <h3>your date of birth?</h3>
      <div class="dob-selects">
        <select
          class="pet-age-select"
          name="days"
          id="dob-days"
          v-model="dobDay"
          @change="dateChange()"
        >
          <option value disabled selected>Day</option>
          <option v-for="day in daysOfMonth" :key="day.id" :value="day.value">
            {{ day.label }}
          </option>
        </select>

        <select
          class="pet-age-select"
          name="months"
          id="dob-months"
          v-model="dobMonth"
          @change="dateChange()"
        >
          <option value disabled selected>Month</option>
          <option
            v-for="month in monthsOfYear"
            :key="month.id"
            :value="month.value"
          >
            {{ month.label }}
          </option>
        </select>

        <select
          class="pet-age-select"
          name="years"
          id="dob-years"
          v-model="dobYear"
          @change="dateChange()"
        >
          <option value disabled selected>Year</option>
          <option v-for="year in years" :key="year.id" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
      <!-- <v-date-picker
        id="date-picker-age"
        v-model="age.dob"
        :max-date="new Date()"
        :input-props="inputProps"
        :popover="calendarPopover"
      /> -->
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
import { differenceInMonths, getMonth, subMonths } from "date-fns";

const yearNow = new Date().getUTCFullYear();

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
      dobDay: "",
      dobMonth: "",
      dobYear: "",
      ageSubmitted: false,
      inputProps: {
        placeholder: "Please enter your birthday",
      },
      calendarPopover: {
        placement: "bottom",
        labelClass: "popover",
      },
      daysOfMonth: [
        {
          value: 1,
          label: "1st",
        },
        {
          value: 2,
          label: "2nd",
        },
        {
          value: 3,
          label: "3rd",
        },
        {
          value: 4,
          label: "4th",
        },
        {
          value: 5,
          label: "5th",
        },
        {
          value: 6,
          label: "6th",
        },
        {
          value: 7,
          label: "7th",
        },
        {
          value: 8,
          label: "8th",
        },
        {
          value: 9,
          label: "9th",
        },
        {
          value: 10,
          label: "10th",
        },
        {
          value: 11,
          label: "11th",
        },
        {
          value: 12,
          label: "12th",
        },
        {
          value: 13,
          label: "13th",
        },
        {
          value: 14,
          label: "14th",
        },
        {
          value: 15,
          label: "15th",
        },
        {
          value: 16,
          label: "16th",
        },
        {
          value: 17,
          label: "17th",
        },
        {
          value: 18,
          label: "18th",
        },
        {
          value: 19,
          label: "19th",
        },
        {
          value: 20,
          label: "20th",
        },
        {
          value: 21,
          label: "21st",
        },
        {
          value: 22,
          label: "22nd",
        },
        {
          value: 23,
          label: "23rd",
        },
        {
          value: 24,
          label: "24th",
        },
        {
          value: 25,
          label: "25th",
        },
        {
          value: 26,
          label: "26th",
        },
        {
          value: 27,
          label: "27th",
        },
        {
          value: 28,
          label: "28th",
        },
        {
          value: 29,
          label: "29th",
        },
        {
          value: 30,
          label: "30th",
        },
        {
          value: 31,
          label: "31st",
        },
      ],
      monthsOfYear: [
        {
          value: 0,
          label: "January",
        },
        {
          value: 1,
          label: "February",
        },
        {
          value: 2,
          label: "March",
        },
        {
          value: 3,
          label: "April",
        },
        {
          value: 4,
          label: "May",
        },
        {
          value: 5,
          label: "June",
        },
        {
          value: 6,
          label: "July",
        },
        {
          value: 7,
          label: "August",
        },
        {
          value: 8,
          label: "September",
        },
        {
          value: 9,
          label: "October",
        },
        {
          value: 10,
          label: "November",
        },
        {
          value: 11,
          label: "December",
        },
      ],
      years: [],
    };
  },
  methods: {
    ageSubmit() {
      if (this.age.years && this.age.months) {
        this.ageSubmitted = true;
        // When year is submitted, take years away, and then months
        this.dobYear = yearNow - this.age.years;
        this.dobMonth = getMonth(subMonths(new Date(), this.age.months));
      }
    },
    handleNext() {
      this.$emit("ageSubmit");
    },
    getLastYears() {
      this.years = Array(yearNow - (yearNow - 21))
        .fill("")
        .map((value, index) => yearNow - index);
    },
    dateChange() {
      if (this.dobDay && this.dobMonth && this.dobYear) {
        let ageMonths = differenceInMonths(
          new Date(),
          new Date(this.dobYear, this.dobMonth, this.dobDay)
        );
        this.age.years = Math.floor(ageMonths / 12);
        this.age.months = ageMonths % 12;
      }
      this.ageSubmit();
    },
  },
  mounted() {
    if (this.age.years && this.age.months) this.ageSubmitted = true;
  },
  beforeMount() {
    this.getLastYears();
  }
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

.dob-selects {
  display: flex;
  justify-content: space-evenly;
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
