<template>
  <div class="delivery">
    <p class="delivery-date-title">Your first delivery date:</p>
    <p class="delivery-date" v-if="delivery1">{{ format(delivery1, "eeee do MMM'.' yyyy") }}</p>
    <p class="delivery-date-title">Your second delivery date:</p>
    <p class="delivery-date" v-if="delivery2">{{ format(delivery2, "eeee do MMM'.' yyyy") }}</p>

    <!-- <button
      v-if="!datePicking"
      class="btn-green delivery-date-button"
      @click="pickDates"
    >Change first delivery</button>
    <button
      v-if="datePicking"
      class="btn-green delivery-date-button"
      @click="saveDates"
    >Save delivery date</button>-->

    <p>Change first delivery below</p>

    <div class="delivery-calendar">
      <!-- <v-calendar v-if="!loading && !datePicking" :attributes="attributes" /> -->
      <!-- <v-date-picker v-if="!loading && datePicking" v-model="delivery1" is-inline /> -->
      <v-date-picker
        id="date-picker"
        v-model="delivery1"
        :select-attribute="selectAttribute"
        :disabled-dates="[{ weekdays: [1, 7] }, { start: null, end:  new Date()}]"
        is-inline
      />
    </div>
  </div>
</template>

<script>
import { format, add } from "date-fns";

export default {
  name: "Delivery",
  props: {},
  data: () => {
    return {
      format,
      loading: true,
      datePicking: false,
      delivery1: "",
      delivery2: "",
      selectAttribute: {
        highlight: {
          color: "green",
          class: "bella-duke-green",
        },
        popover: {
          label: "First Delivery",
        },
      },
      // BELOW: IF WE USE THE V-CALENDAR THEN THESE ARE THE SETTINGS
      //   attributes: [
      //     {
      //       highlight: {
      //         color: "green",
      //         class: "bella-duke-green",
      //       },
      //       dates: "",
      //       popover: {
      //         label: "First Delivery",
      //         visibility: "click",
      //       },
      //     },
      //   ],
    };
  },
  methods: {
    pickDates() {
      this.datePicking = true;
    },
    saveDates() {
      this.loading = true;
      this.datePicking = false;
      this.attributes[0].dates = this.delivery1;
      this.loading = false;
    },
  },
  beforeMount() {},
  mounted() {
    let calendarFix = document.querySelector("#date-picker");
    calendarFix.style.height = "230px";
    this.delivery1 = add(new Date(), { weeks: 1 });
    this.delivery2 = add(new Date(), {
      days: Math.floor(Math.random() * (31 - 14) + 14),
    });
    // If we want to show the dates on v-calander
    // this.attributes[0].dates = this.delivery1;
    // this.attributes[1].dates = this.delivery2;

    this.loading = false;
    setTimeout(() => {
      calendarFix.style.height = "270px";
    }, 500);
  },
  watch: {
    delivery1: function (val) {
      this.delivery2 = add(val, { days: 7 });
    },
  },
  beforeDestroy() {
    let calendarFix = document.querySelector("#date-picker");
    calendarFix.style.height = "230px";
  },
};
</script>

<style scoped>
.delivery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
}

.delivery-date-title {
  font-size: 20px;
  margin: 2px;
}
.delivery-date {
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin: 5px 5px 15px;
}

.delivery-date-button {
  width: 210px;
}

.delivery-button-group {
  display: flex;
  width: 350px;
}
</style>
<style>
.bella-duke-green {
  background-color: #789904 !important;
}

.bella-duke-orange {
  background-color: #ee7623 !important;
}
</style>
