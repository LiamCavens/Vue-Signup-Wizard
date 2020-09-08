<template>
  <div class="delivery">
    <p class="delivery-date-title">Your first delivery date:</p>
    <p class="delivery-date">{{delivery1 | moment("dddd Do MMM[.] YYYY")}}</p>
    <p class="delivery-date-title">Your second delivery date:</p>
    <p class="delivery-date">{{delivery2 | moment("dddd Do MMM[.] YYYY")}}</p>
    <button
      v-if="!datePicking"
      class="btn-green delivery-date-button"
      @click="pickDates"
    >Change first delivery</button>
    <button
      v-if="datePicking"
      class="btn-green delivery-date-button"
      @click="saveDates"
    >Save delivery date</button>

    <div class="delivery-calendar">
      <v-calendar v-if="!loading && !datePicking" :attributes="attributes" />
      <v-date-picker v-if="!loading && datePicking" v-model="delivery1" is-inline />
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  props: {},
  data: () => {
    return {
      loading: true,
      datePicking: false,
      delivery1: "",
      delivery2: "",
      attributes: [
        {
          highlight: {
            color: "green",
            class: "bella-duke-green",
          },
          dates: "",
          popover: {
            label: "First Delivery",
            visibility: "click",
          },
        },
      ],
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
    handlePrev() {
      this.$emit("handlePrev");
    },
  },
  mounted() {
    let today = new Date();
    this.delivery1 = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.attributes[0].dates = this.delivery1;

    this.loading = false;
  },
};
</script>

<style scoped>
.delivery {
  display: flex;
  flex-direction: column;
  align-items: center;
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
