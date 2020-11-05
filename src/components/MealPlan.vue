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
      v-for="(component, index) in mealPlanComponents"
      :key="index"
      :icon="component.icon"
      :showThis="currentAccordion === index"
      @opened="currentAccordion = index"
    >
      <div v-if="component.component != 'Nutrition'" slot="header">{{ component.header }}</div>
      <div v-if="component.component === 'Nutrition'" slot="header">{{name}}'s {{ component.header }}</div>
      <!-- <div slot="header-desc">All the good bits</div> -->
      <FlavourManage v-if="component.component === 'FlavourManage'" :flavours="flavours" />
      <Nutrition v-if="component.component === 'Nutrition'" :name="name" />
      <Reviews v-if="component.component === 'Reviews'" />
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
      mealPlanComponents: [
        {
          component: "FlavourManage",
          icon: "icon_meat_and_veg_white",
          header: "Manage flavours",
        },
        {
          component: "Nutrition",
          icon: "icon_healthy_heart_white",
          header: "nutrition",
        },
        {
          component: "Reviews",
          icon: "icon_dog_white",
          header: "What customers say",
        },
      ],
    };
  },
  methods: {
    handleNext() {
      this.$emit("handleNext");
    },
  }
};
</script>

<style scoped>
.next-button {
  margin: auto;
  width: 100%;
}
</style>
