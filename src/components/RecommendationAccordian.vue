<template>
  <div>
    <h2>Recommendation</h2>
    <BnDAccordian icon="icon_bowl_white">
      <div slot="header">Jimmy's meal plan</div>
      <div slot="header-desc">Cheese & Beans</div>
      <Recommendation name="Jimmy" key="recommendation" />
    </BnDAccordian>
    <BnDAccordian icon="icon_healthy_heart_white">
      <div slot="header">Jimmy's nutrition</div>
      <div slot="header-desc">All the good bits</div>
      <Nutrition name="Jimmy" />
    </BnDAccordian>
    <BnDAccordian icon="icon_dog_white">
      <div slot="header">Customer Testimonials</div>
      <div slot="header-desc">What people say</div>
      <Reviews />
    </BnDAccordian>
  </div>
</template>

<script>
import BnDAccordian from "./BnDComponents/BnDAccordian";

import Reviews from "./Reviews";
import Nutrition from "./Nutrition";
import Recommendation from "./Recommendation";

export default {
  name: "RecommendationAccordian",
  components: {
    BnDAccordian,
    Reviews,
    Nutrition,
    Recommendation,
  },
  props: {
    name: String,
  },
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
