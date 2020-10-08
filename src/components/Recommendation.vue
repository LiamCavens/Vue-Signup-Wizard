<template>
  <div class="recommendation">
    <div class="recommendation-logo-next">
      <img
        class="recommendation-logo"
        alt="recommendation image"
        src="../assets/BeefShot.png"
      />
    </div>
    <p class="recommendation-meal">Premium Complete</p>
    <p class="recommendation-amount">
      Based on everything you have told us about <b>{{ name }}</b
      >, we recommend a daily diet of <b>{{ numberGrams }}g</b> per day of
      <b>Premium Complete</b>.
      <br />
      <br />
      Our Premium range is designed to give <b>{{ name }}</b> all the nutrition
      <b>{{ gender === "male" ? "he" : "she" }}</b> needs. You don’t need to add
      anything else to the diet. We took our standard range and upgraded to
      provide an excellent balance of proteins, carbs, fibre with all the
      minerals and fats <b>{{ name }}</b> needs and however hard you search you
      won’t find any fillers, grains or nasty extras in our food.
      <br />
      <br />
      Quite literally, 100% nutrition. You can read all about the nutrition
      characteristics of the food below and what other customers think.
    </p>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  props: {
    name: String,
    gender: String,
  },
  data: () => {
    return {
      numberGrams: 0,
      readMore: false,
    };
  },
  methods: {
    handleNext() {
      this.$emit("handleNext");
    },
  },
  mounted() {
    this.numberGrams = Math.floor(Math.random() * (1000 - 20) + 20);
  },
};
</script>

<style scoped>
.recommendation {
  display: flex;
  flex-direction: column;
}

.recommendation-logo-next {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.recommendation-logo {
  margin: 10px;
  align-self: center;
  width: 106px;
  height: 106px;
  border-radius: 50%;
}
.recommendation-meal {
  font-family: Montserrat-Bold;
  font-size: 16px;
  margin: 0px;
}

.recommendation-amount {
  font-size: 12px;
  margin: 15px;
}
</style>

<style>
.slide-down-read-enter-active {
  transition: all 0.8s ease;
}
.slide-down-read-leave-active {
  transition: all 0.3s ease;
}
.slide-down-read-enter,
.slide-down-read-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
