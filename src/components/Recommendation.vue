<template>
  <div class="recommendation">
    <div class="recommendation-logo-next">
      <img
        class="recommendation-logo"
        alt="recommendation image"
        src="../assets/BeefShot.png"
      />
    </div>
    <p class="recommendation-meal">{{ name }}'s meal plan</p>
    <p class="recommendation-meal">Premium Complete</p>
    <p class="recommendation-amount">{{ numberGrams }}g of food per day</p>
    <transition name="slide-down-read">
      <div class="recommendation-read" v-if="readMore">
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
    <!-- <a class="link recommendation-read-more" href="#" @click="readMore = !readMore">
      Tell me {{ readMore ? "less" : "more" }}
      <font-awesome-icon v-if="!readMore" :icon="['fas', 'chevron-down']" />
      <font-awesome-icon v-if="readMore" :icon="['fas', 'chevron-up']" />
    </a> -->
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  props: {
    name: String,
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
  margin: 20px 10px 10px;
  align-self: center;
  width: 225px;
  height: 225px;
  border-radius: 50%;
}
.recommendation-meal {
  font-family: Montserrat-Bold;
  font-size: 26px;
  margin: 0px;
}

.recommendation-amount {
  margin: 2px;
}

.recommendation-read {
  width: 250px;
  align-self: center;
}

.recommendation-read-more {
  margin: 10px 0 20px;
  align-self: center;
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
