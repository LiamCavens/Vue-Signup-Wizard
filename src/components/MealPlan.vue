<template>
  <div>
    <h2>The plan for {{ name }}</h2>
    <!-- <BnDAccordion
      icon="icon_bowl_white"
      :show="showAccordion1"
      @opened="handleOpen(1)"
    >
      <div slot="header">The plan for {{ name }}</div> -->
    <Recommendation :name="name" key="recommendation" />
    <!-- </BnDAccordion> -->
    <BnDAccordion
      icon="icon_meat_and_veg_white"
      :showThis="showAccordion2"
      @opened="handleOpen(2)"
    >
      <div slot="header">Manage flavours</div>
      <!-- <div slot="header-desc">All the good bits</div> -->
      <FlavourManage :flavours="flavours" />
    </BnDAccordion>
    <BnDAccordion
      icon="icon_healthy_heart_white"
      :showThis="showAccordion3"
      @opened="handleOpen(3)"
    >
      <div slot="header">{{ name }}'s nutrition</div>
      <!-- <div slot="header-desc">All the good bits</div> -->
      <Nutrition :name="name" />
    </BnDAccordion>
    <BnDAccordion
      icon="icon_dog_white"
      :showThis="showAccordion4"
      @opened="handleOpen(4)"
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
    openAccordion: String,
    flavours: Array,
  },
  data: () => {
    return {
      showAccordion1: false,
      showAccordion2: false,
      showAccordion3: false,
      showAccordion4: false,
    };
  },
  methods: {
    handleNext() {
      this.$emit("handleNext");
    },
    handleOpen(accordionNum) {
      switch (accordionNum) {
        case 1:
          this.showAccordion1 = true;
          this.showAccordion2 = false;
          this.showAccordion3 = false;
          this.showAccordion4 = false;
          break;
        case 2:
          this.showAccordion1 = false;
          this.showAccordion2 = true;
          this.showAccordion3 = false;
          this.showAccordion4 = false;
          break;
        case 3:
          this.showAccordion1 = false;
          this.showAccordion2 = false;
          this.showAccordion3 = true;
          this.showAccordion4 = false;
          break;
        case 4:
          this.showAccordion1 = false;
          this.showAccordion2 = false;
          this.showAccordion3 = false;
          this.showAccordion4 = true;
          break;
        default:
          break;
      }
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
