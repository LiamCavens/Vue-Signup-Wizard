<template>
  <div class="nutrition">
    <!-- <div class="nutrition-meal-statement">
      <p class="nutrition-meal">{{ name }}'s nutritional plan</p>
      <p class="nutrition-statement">100% natural & nutritious</p>
    </div> -->
    <BnDPictorialChart />
    <transition name="slide-down-read">
      <div class="nutrition-read" v-if="readMore">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </transition>
    <!-- <a class="link nutrition-read-more" href="#" @click="readMore = !readMore">
      Tell me {{ readMore ? "less" : "more" }}
      <font-awesome-icon v-if="!readMore" :icon="['fas', 'chevron-down']" />
      <font-awesome-icon v-if="readMore" :icon="['fas', 'chevron-up']" />
    </a> -->
  </div>
</template>

<script>
import BnDPictorialChart from "./BnDComponents/BnDPictorialChart";

export default {
  name: "Nutrition",
  components: {
    BnDPictorialChart,
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

.nutrition-next-statement {
  display: flex;
}

.nutrition-meal-statement {
  display: flex;
  flex-direction: column;
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
