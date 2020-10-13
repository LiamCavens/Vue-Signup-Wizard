<template>
  <div class="payment-summary">
    <h2>Summary</h2>
    <div class="price-per-day">£1.15 per day | 40 days of food</div>
    <div class="pet-meal-plans">
      <BnDAccordion v-for="(pet, index) in pets" :key="index" theme="noBorder">
        <div slot="header">{{ pet.name }} meal plan</div>
        <!-- <div slot="header-desc">What people say</div> -->
        <div class="meal-plan-detail">
          <img
            class="meal-logo"
            alt="recommendation image"
            src="../assets/BeefShot.png"
          />
          <div class="meal-plan-text">
            <p>{{ pet.dailyFeed }} per day</p>
            <p>{{ pet.range }}</p>
          </div>
        </div>
      </BnDAccordion>
    </div>
    <div class="total-price"><span>Total Price</span> <span>£45.00*</span></div>

    <h4>Checkout using:</h4>
    <div>
      <ul class="payment-list">
        <li>
          <div class="payment-radio">
            <input
              type="radio"
              id="paypal"
              name="paymentRadio"
              value="paypal"
              v-model="payment"
            />
            <label for="paypal"
              ><img src="../assets/paypalpayment.png" alt="Paypal Payment"
            /></label>

            <div class="check"></div>
          </div>
        </li>
        <li>
          <div class="payment-radio">
            <input
              type="radio"
              id="cardPayment"
              name="paymentRadio"
              value="card"
              v-model="payment"
            />
            <label for="cardPayment"
              ><img src="../assets/cardpayments.png" alt="Card Payment"
            /></label>

            <div class="check"></div>
          </div>
        </li>
      </ul>
    </div>
    <button class="btn-green next-button" @click="handlePaymentMethod">
      Checkout
    </button>
  </div>
</template>

<script>
import BnDAccordion from "./BnDComponents/BnDAccordion";
export default {
  name: "Payment",
  props: {
    pets: Array,
    paymentMethod: String,
  },
  components: {
    BnDAccordion,
  },
  data: () => {
    return {
      payment: "",
    };
  },
  methods: {
    handlePaymentMethod() {
      this.$emit("submitPaymentMethod", this.payment);
    },
  },
  mounted() {
    if (this.paymentMethod) this.payment = this.paymentMethod;
  },
};
</script>

<style scoped>
.payment-summary {
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
  display: flex;
  font-size: 12px;
  font-weight: 700;
  justify-content: space-between;
  background-color: #00263a;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}

.payment-radios {
  border: none;
  display: flex;
  flex-direction: column;
}

.payment-radio input[type="radio"] {
  position: absolute;
  visibility: hidden;
}

.payment-radio label {
  display: flex;
  justify-content: start;
  position: relative;
  padding: 2px 0px 5px 70px;
  height: 30px;
  font-size: 14px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s linear;
}

.payment-radio label img {
  position: absolute;
  top: -10px;
}

.payment-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.payment-list li {
  padding: 10px;
  height: 40px;
}

.payment-radio {
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

.payment-radio:hover .check {
  border: 3px solid #789904;
}
</style>
