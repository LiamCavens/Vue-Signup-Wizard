<template>
  <div class="plan-summary">
    <h2>Your price</h2>
    <div class="price-per-day">
      {{ (chosenDelivery.price / chosenDelivery.daysOfFood).toFixed(2) }} per
      day | 40 days of food
    </div>
    <div class="pet-meal-plans">
      <BnDAccordion v-for="(pet, index) in pets" :key="index" theme="noBorder">
        <div slot="header">{{ pet.name }}'s meal plan</div>
        <!-- <div slot="header-desc">What people say</div> -->
        <div class="meal-plan-detail">
          <img
            class="meal-logo"
            alt="recommendation image"
            src="../assets/BeefShot.jpg"
          />
          <div class="meal-plan-text">
            <p>{{ pet.dailyFeed }} per day</p>
            <p>{{ pet.range }}</p>
          </div>
        </div>
      </BnDAccordion>
    </div>
    <div class="total-price">
      <p><span>Standard XXkg Price</span> <span>£XXX</span></p>
      <p><span>Your Special 1st Box Saving (50%)</span> <span>£YYY</span></p>
      <p><span>Your First Delivery Price</span> <span>£ZZZ</span></p>
    </div>
    <p class="payment-readmore">
      <a class="link" href="#" @click="readMore = !readMore">
        read {{ readMore ? "less" : "more" }}
      </a>
    </p>
    <h3>Change Delivery size</h3>
    <div class="relative-container">
      <div class="delivery-carousel">
        <div
          class="delivery-item"
          :class="{ chosen: delivery.chosen, hidden: delivery.hidden }"
          v-for="(delivery, index) in deliverySizes"
          :key="index"
          @click="chooseDelivery(delivery)"
          :v-show="!delivery.hidden"
        >
          <img
            class="delivery-image"
            :src="delivery.hidden ? '' : require(`../assets/${delivery.icon}`)"
            :alt="delivery.size + 'image'"
          />
          <p>{{ delivery.drawers }}</p>
          <p>{{ delivery.daysOfFood }} days of food</p>
          <p>£{{ delivery.price }}</p>
          <p>
            £{{ (delivery.price / delivery.daysOfFood).toFixed(2) }} per day
          </p>
          <div :class="{ 'selected-item': delivery.chosen }">
            <p>{{ delivery.chosen ? "Selected" : "Select" }}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="coupon-text" @click="openCoupon = true">
      We have applied <b>{{ coupon }}</b> code.
      <span class="referral-link">Click here</span> to use a customer referral
      code instead.
    </p>
    <div v-if="openCoupon">
      <input
        placeholder="Referral code"
        class="coupon-input"
        type="text"
        v-model="newCouponCode"
        required
        autofocus
      />
      <button class="apply-button" @click="applyCoupon">Apply</button>
    </div>
    <div class="add-pet-button" @click="addNewPet">
      <img
        src="../assets/icon_cat_dog_transparent.png"
        alt="cat and dog add button"
        height="80px"
      />
      <div class="add-pet-text">
        <p class="add-pet-big">Add another pet</p>
        <p class="add-pet-small">More pets, more discount</p>
      </div>
    </div>
    <button class="btn-green next-button" @click="handleDeliverySize">
      Next
    </button>
  </div>
</template>

<script>
import BnDAccordion from "./BnDComponents/BnDAccordion";
export default {
  name: "PlanSummary",
  props: {
    pets: Array,
    coupon: String,
    deliverySize: Object,
  },
  components: {
    BnDAccordion,
  },
  data: () => {
    return {
      showMealPlans: false,
      readMore: false,
      chosenDelivery: {},
      openCoupon: false,
      newCouponCode: "",
      deliverySizes: [
        {
          icon: "icon_freezer_4kg.png",
          size: "4kg",
          drawers: "1/2 freezer drawer",
          daysOfFood: 8,
          price: 15.99,
          chosen: false,
        },
        {
          icon: "icon_freezer_8kg.png",
          size: "8kg",
          drawers: "1 freezer drawer",
          daysOfFood: 16,
          price: 29.99,
          chosen: true,
        },
        {
          icon: "icon_freezer_12kg.png",
          size: "12kg",
          drawers: "1 1/2 freezer drawer",
          daysOfFood: 24,
          price: 41.99,
          chosen: false,
        },
      ],
    };
  },
  methods: {
    handleDeliverySize() {
      this.$emit("deliverySizeSubmit", this.chosenDelivery);
    },
    addNewPet() {
      this.$emit("addNewPet");
    },
    applyCoupon() {
      if (this.newCouponCode.length > 0) {
        this.$emit("newCouponCode", this.newCouponCode);
      }
    },
    chooseDelivery(delivery) {
      this.chosenDelivery = delivery;
      if (delivery.chosen) return;
      switch (delivery.size) {
        case "4kg":
          this.deliverySizes = [
            {
              hidden: true,
            },
            {
              icon: "icon_freezer_4kg.png",
              size: "4kg",
              drawers: "1/2 freezer drawer",
              daysOfFood: 8,
              price: 15.99,
              chosen: true,
            },
            {
              icon: "icon_freezer_8kg.png",
              size: "8kg",
              drawers: "1 freezer drawer",
              daysOfFood: 16,
              price: 29.99,
              chosen: false,
            },
          ];
          break;
        case "8kg":
          this.deliverySizes = [
            {
              icon: "icon_freezer_4kg.png",
              size: "4kg",
              drawers: "1/2 freezer drawer",
              daysOfFood: 8,
              price: 15.99,
              chosen: false,
            },
            {
              icon: "icon_freezer_8kg.png",
              size: "8kg",
              drawers: "1 freezer drawer",
              daysOfFood: 16,
              price: 29.99,
              chosen: true,
            },
            {
              icon: "icon_freezer_12kg.png",
              size: "12kg",
              drawers: "1 1/2 freezer drawer",
              daysOfFood: 24,
              price: 41.99,
              chosen: false,
            },
          ];
          break;
        case "12kg":
          this.deliverySizes = [
            {
              icon: "icon_freezer_8kg.png",
              size: "8kg",
              drawers: "1 freezer drawer",
              daysOfFood: 16,
              price: 29.99,
              chosen: false,
            },
            {
              icon: "icon_freezer_12kg.png",
              size: "12kg",
              drawers: "1 1/2 freezer drawer",
              daysOfFood: 24,
              price: 41.99,
              chosen: true,
            },
            {
              icon: "icon_freezer_16kg.png",
              size: "16kg",
              drawers: "2 freezer drawer",
              daysOfFood: 32,
              price: 48.99,
              chosen: false,
            },
          ];
          break;
        case "16kg":
          this.deliverySizes = [
            {
              icon: "icon_freezer_12kg.png",
              size: "12kg",
              drawers: "1 1/2 freezer drawer",
              daysOfFood: 24,
              price: 41.99,
              chosen: false,
            },
            {
              icon: "icon_freezer_16kg.png",
              size: "16kg",
              drawers: "2 freezer drawer",
              daysOfFood: 32,
              price: 48.99,
              chosen: true,
            },
            {
              icon: "icon_freezer_20kg.png",
              size: "20kg",
              drawers: "3 freezer drawer",
              daysOfFood: 40,
              price: 52.99,
              chosen: false,
            },
          ];
          break;
        case "20kg":
          this.deliverySizes = [
            {
              icon: "icon_freezer_16kg.png",
              size: "16kg",
              drawers: "2 freezer drawer",
              daysOfFood: 32,
              price: 48.99,
              chosen: false,
            },
            {
              icon: "icon_freezer_20kg.png",
              size: "20kg",
              drawers: "3 freezer drawer",
              daysOfFood: 40,
              price: 52.99,
              chosen: true,
            },
            {
              icon: "icon_freezer_40kg.png",
              size: "40kg",
              drawers: "No space issue",
              daysOfFood: 80,
              price: 82.99,
              chosen: false,
            },
          ];
          break;
        case "40kg":
          this.deliverySizes = [
            {
              icon: "icon_freezer_20kg.png",
              size: "20kg",
              drawers: "3 freezer drawer",
              daysOfFood: 24,
              price: 52.99,
              chosen: false,
            },
            {
              icon: "icon_freezer_40kg.png",
              size: "40kg",
              drawers: "No space issue",
              daysOfFood: 80,
              price: 82.99,
              chosen: true,
            },
            {
              hidden: true,
            },
          ];
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    if (this.deliverySize.size) this.chooseDelivery(this.deliverySize);
  },
};
</script>

<style scoped>
.plan-summary {
  display: flex;
  flex-direction: column;
}

.price-per-day {
  background-color: #00263a;
  color: #fff;
  padding: 10px 0;
  font-size: 12px;
  border-radius: 5px;
}

.pet-meal-plans {
  margin: 10px 0 0;
}
.meal-plan-detail {
  display: flex;
}
.meal-plan-text {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.meal-plan-text p {
  margin: 2px 10px;
  font-size: 10px;
}
.meal-logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.total-price {
  border-top: 1px solid #00263a;
  padding-top: 10px;
}
.total-price p {
  margin: 0;
  display: flex;
  font-size: 12px;
  font-weight: 700;
  justify-content: space-between;
  padding: 5px;
}

.payment-readmore {
  align-self: flex-start;
  font-size: 10px;
  margin: 1px;
}

.relative-container {
  position: relative;
  width: 360px;
  align-self: center;
  overflow: hidden;
}

.delivery-carousel {
  display: flex;
  justify-content: center;
}

.chosen {
  opacity: 1 !important;
  cursor: default !important;
  justify-self: center !important;
}

.delivery-item {
  height: 235px;
  flex: 0 0 155px;
  /* width: 155px; */
  border: 2px solid #789904;
  border-radius: 12px;
  margin: 5px;
  padding: 10px 0 0 0;
  opacity: 0.5;
  cursor: pointer;
}

.delivery-item p {
  font-size: 12px;
  padding: 8px 0;
  margin: 0;
}

.delivery-item p:not(:first-child) {
  border-bottom: 1px solid rgb(120, 153, 4, 0.5);
}

.delivery-image {
  height: 72px;
  width: 72px;
}

.coupon-text {
  font-size: 12px;
  padding: 10px 5px;
}

.referral-link {
  text-decoration-line: underline;
  cursor: pointer;
}

.add-pet-button {
  display: flex;
  align-items: center;
  border: solid 1px #00263a;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.add-pet-button:hover {
  border: solid 1px #789904;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}

.add-pet-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 10px;
}

.add-pet-text p {
  margin: 0;
}

.add-pet-big {
  font-family: Montserrat-Bold;
}

.add-pet-small {
  font-size: 10px;
}

.selected-item {
  background-color: #789904;
  border-radius: 0 0 8px 8px;
  color: #fff;
}

.coupon-input {
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  transition: 0.2s linear;
}

.coupon-input:focus {
  border: 1px solid #00263a;
  transition: 0.2s linear;
}

.apply-button {
  background-color: #789904;
  border-radius: 500px;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 0 0 20px 10px;
}

.hidden {
  visibility: hidden;
}
</style>
