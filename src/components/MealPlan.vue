<template>
  <div>
    <h2>The plan for {{ name }}</h2>
    <!-- <BnDAccordion
      icon="icon_bowl_white"
      :showThis="currentAccordion === index"
      @opened="currentAccordion = index"
    >
      <div slot="header">The plan for {{ name }}</div> -->
    <Recommendation :name="name" :gender="gender" key="recommendation" />
    <!-- </BnDAccordion> -->
    <BnDAccordion
      icon="icon_meat_and_veg_white"
      :showThis="currentAccordion === index"
      @opened="currentAccordion = index"
    >
      <div slot="header">Manage flavours</div>
      <!-- <div slot="header-desc">All the good bits</div> -->
      <FlavourManage :flavours="flavours" />
    </BnDAccordion>
    <BnDAccordion
      icon="icon_healthy_heart_white"
      :showThis="currentAccordion === index"
      @opened="currentAccordion = index"
    >
      <div slot="header">{{ name }}'s nutrition</div>
      <!-- <div slot="header-desc">All the good bits</div> -->
      <Nutrition :name="name" />
    </BnDAccordion>
    <BnDAccordion
      icon="icon_dog_white"
      :showThis="currentAccordion === index"
      @opened="currentAccordion = index"
    >
      <div slot="header">What customers say</div>
      <!-- <div slot="header-desc">What people say</div> -->
      <Reviews />
    </BnDAccordion>
    <button class="btn-green next-button" @click="handleNext">Next</button>
  </div>
</template>

<script>
import BnDAccordion from "./BnDComponents/BnDAccordion";

import Reviews from "./Reviews";
import Nutrition from "./Nutrition";
import FlavourManage from "./FlavourManage";
import Recommendation from "./Recommendation";

export default {
  name: "MealPlan",
  components: {
    BnDAccordion,
    Reviews,
    Nutrition,
    FlavourManage,
    Recommendation,
  },
  props: {
    name: String,
    gender: String,
    openAccordion: String,
    flavours: Array,
  },
  data: () => {
    return {
      currentAccordion: -1,
    };
  },
  methods: {
    handleNext() {
      this.$emit("handleNext");
    },
  },
  mounted() {
    // if (this.openAccordion === "nutrition") this.showAccordion1 = true;
    if (this.openAccordion === "reviews") this.showAccordion4 = true;
  },
};
</script>

<style scoped>
.next-button {
  margin: auto;
  width: 100%;
}
</style>
