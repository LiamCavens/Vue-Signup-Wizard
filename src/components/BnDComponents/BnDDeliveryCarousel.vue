<template>
  <div>
    <hooper id="hooper" :settings="hooperSettings">
      <slide
        :class="{ 'selected-delivery-item': delivery.chosen }"
        class="delivery-item"
        v-for="(delivery, index) in items"
        :key="index"
      >
        <img
          class="delivery-image"
          :src="delivery.hidden ? '' : require(`../../assets/${delivery.icon}`)"
          :alt="delivery.size + 'image'"
        />
        <p>{{ delivery.drawers }}</p>
        <p>{{ delivery.daysOfFood }} days of food</p>
        <p>£{{ delivery.price }}</p>
        <p>£{{ (delivery.price / delivery.daysOfFood).toFixed(2) }} per day</p>
        <button
          class="select-button"
          :class="{ 'selected-item': delivery.chosen }"
          @click="selectSize(delivery)"
        >
          {{ delivery.chosen ? "Selected" : "Select" }}
        </button>
      </slide>
    </hooper>
    <!-- <button class="btn-green select-button" @click="selectSize">
        Select Size
    </button> -->
  </div>
</template>
<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "BnDDeliveryCarousel",
  components: {
    Hooper,
    Slide,
  },
  props: {
    slideName: String,
    items: Array,
    startIndex: Number,
  },
  data: () => {
    return {
      hooperSettings: {
        itemsToShow: 2,
        // initialSlide: 1,
        centerMode: true,
      },
    };
  },
  methods: {
    selectSize(delivery) {
      this.$emit("chosenSize", delivery);
    },
  },
  mounted() {},
  beforeMount() {
    if (this.startIndex) this.hooperSettings.initialSlide = this.startIndex;
    console.log("Liam: this.startIndex");
    console.log(this.startIndex);
  },
};
</script>

<style scoped>
#hooper {
  height: 260px;
}

#hooper:focus,
.select-button:focus {
  outline: none;
}

.delivery-item {
  width: 170px !important;
  border: 2px solid #00263a;
  border-bottom: none;
  height: 255px;
  border-radius: 12px;
  margin: 5px;
  padding: 10px 0 0 0;
  opacity: 0.5;
}

.selected-delivery-item {
  border: 2px solid #789904 !important;
}

.delivery-item p {
  font-size: 12px;
  padding: 8px 0;
  margin: 0;
}

.delivery-item p:not(:last-child) {
  border-top: 1px solid rgb(120, 153, 4, 0.5);
}

.delivery-item p:first-of-type {
  border-top: none;
}

.delivery-item p:last-child {
  border: #00263a 2px solid;
  margin: -1px;
  border-radius: 8px;
}
.delivery-image {
  height: 72px;
  width: 72px;
}

.selected-item {
  background-color: #789904 !important;
  border-radius: 0 0 8px 8px !important;
  color: #fff;
  border: none !important;
  transition: all 0.3s;
}

.select-button {
  font-family: Montserrat-Bold;
  width: 169px;
  background-color: #fff;
  border: #00263a 2px solid;
  margin: -1px;
  border-radius: 8px;
  height: 40px;
  font-size: 12px;
  padding: 12px 0;
  cursor: pointer;
}
</style>

<style>
/* Hooper Styling */
.is-current {
  opacity: 1 !important;
}
</style>
