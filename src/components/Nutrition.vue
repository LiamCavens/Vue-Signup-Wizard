<template>
  <div class="nutrition">
    <p class="nutrition-text">
      Our nutrition team are constantly working to improve the nutritional
      characteristics of our food. We never add ingredients to our food that are
      unnecessary and bring no benefit.
      <br />
      <br />
      We exclude all the typical dog food ingredients that can give rise to
      insensitivities or damage the gut. We source all our ingredients locally
      from the human food-chain suppliers.
    </p>
    <h5>{{ name }}'s healthy energy sources</h5>
    <BnDPictorialChart />
    <p class="rowan-text">Our Nutritionist, Rowan, explains</p>
    <BnDNutritionalVideo />
  </div>
</template>

<script>
import BnDPictorialChart from "./BnDComponents/BnDPictorialChart";
import BnDNutritionalVideo from "./BnDComponents/BnDNutritionVideo";

export default {
  name: "Nutrition",
  components: {
    BnDPictorialChart,
    BnDNutritionalVideo,
  },
  props: {
    name: String,
  },
  data: () => {
    return {
      readMore: false,
    };
  },
  methods: {
    handleNext() {
      this.$emit("handleNext");
    },
    handlePrev() {
      this.$emit("handlePrev");
    },
  },
  mounted() {},
};
</script>
<style scoped>
.nutrition {
  display: flex;
  flex-direction: column;
}

.nutrition-text {
  font-size: 12px;
}

.rowan-text {
  font-size: 14px;
  margin: 0 0 10px;
}

.nutrition-meal {
  font-family: Montserrat-Bold;
  font-size: 26px;
  margin: 0px;
}

.nutrition-statement {
  margin: 2px;
}

.nutrition-read {
  width: 250px;
  align-self: center;
}

.nutrition-read-more {
  margin: 10px 0 20px;
  align-self: center;
}
</style>
