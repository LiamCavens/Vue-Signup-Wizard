<template>
  <div>
    <h2>Some super nice accordions</h2>
    <BnDAccordian
      icon="icon_bowl_white"
      :show="showAccordian1"
      @opened="handleOpen(1)"
    >
      <div slot="header">The plan for {{ name }}</div>
      <!-- <div slot="header-desc">Cheese & Beans</div> -->
      <Recommendation :name="name" key="recommendation" />
    </BnDAccordian>
    <BnDAccordian
      icon="icon_meat_and_veg_white"
      :show="showAccordian2"
      @opened="handleOpen(2)"
    >
      <div slot="header">Manage flavours</div>
      <!-- <div slot="header-desc">All the good bits</div> -->
      <FlavourManage :flavours="flavours" />
    </BnDAccordian>
    <BnDAccordian
      icon="icon_healthy_heart_white"
      :show="showAccordian3"
      @opened="handleOpen(3)"
    >
      <div slot="header">{{ name }}'s nutrition</div>
      <!-- <div slot="header-desc">All the good bits</div> -->
      <Nutrition :name="name" />
    </BnDAccordian>
    <BnDAccordian
      icon="icon_dog_white"
      :show="showAccordian4"
      @opened="handleOpen(4)"
    >
      <div slot="header">Customer experiences</div>
      <!-- <div slot="header-desc">What people say</div> -->
      <Reviews />
    </BnDAccordian>
    <button class="btn-green next-button" @click="handleNext">Next</button>
  </div>
</template>

<script>
import BnDAccordian from "./BnDComponents/BnDAccordian";

import Reviews from "./Reviews";
import Nutrition from "./Nutrition";
import FlavourManage from "./FlavourManage";
import Recommendation from "./Recommendation";

export default {
  name: "MealPlanNutrtionReviews",
  components: {
    BnDAccordian,
    Reviews,
    Nutrition,
    FlavourManage,
    Recommendation,
  },
  props: {
    name: String,
    openAccordian: String,
    flavours: Array,
  },
  data: () => {
    return {
      showAccordian1: false,
      showAccordian2: true,
      showAccordian3: false,
      showAccordian4: false,
    };
  },
  methods: {
    handleNext() {
      this.$emit("handleNext");
    },
    handleOpen(accordianNum) {
      switch (accordianNum) {
        case 1:
          this.showAccordian1 = true;
          this.showAccordian2 = false;
          this.showAccordian3 = false;
          break;
        case 2:
          this.showAccordian1 = false;
          this.showAccordian2 = true;
          this.showAccordian3 = false;
          break;
        case 3:
          this.showAccordian1 = false;
          this.showAccordian2 = false;
          this.showAccordian3 = true;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    // if (this.openAccordian === "nutrition") this.showAccordian1 = true;
    if (this.openAccordian === "reviews") this.showAccordian4 = true;
  },
};
</script>

<style scoped>
.next-button {
  margin: auto;
  width: 100%;
}
</style>
