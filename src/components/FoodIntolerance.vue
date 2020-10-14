<template>
  <div>
    <h2>Food Intolerance</h2>
    <p class="intolerance-text">
      If your dog has a protein sensitivity, you can exclude these proteins from
      the diet. Our system will automatically exclude any flavours that include
      them.
    </p>
    <p class="intolerance-text">
      If you have any questions about sensitivies/allergies, you can live chat
      with our customer team for help on your best option.
      <span>Click here</span> to open a live chat
    </p>
    <div class="intolerances">
      <ul class="intolerances-list">
        <li
          class="intolerances-item"
          v-bind:class="{ active: intolerance.active }"
          v-for="(intolerance, index) in interanceChoices"
          :key="index"
          @click="handleIntolerance(intolerance)"
        >
          <span>
            <span class="list-span">{{ intolerance.value }}</span>
            <font-awesome-icon
              v-if="!intolerance.active"
              :icon="['fas', 'plus']"
            />
            <font-awesome-icon
              v-if="intolerance.active"
              :icon="['fas', 'minus']"
            />
          </span>
        </li>
      </ul>
    </div>
    <button class="btn-green next-button" @click="handleIntolerances">
      Next
    </button>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "FoodIntolerance",
  props: {
    foodIntolerances: Array,
  },
  data: () => {
    return {
      interanceChoices: [
        { value: "Chicken", active: false },
        { value: "Beef", active: false },
        { value: "Lamb", active: false },
      ],
    };
  },
  methods: {
    handleIntolerance(intolerance) {
      if (!intolerance.active) {
        intolerance.active = true;
        this.foodIntolerances.push(intolerance.value);
      } else {
        intolerance.active = false;
        _.remove(this.foodIntolerances, (i) => {
          return i === intolerance.value;
        });
      }
    },
    handleIntolerances() {
      this.$emit("intoleranceSubmit");
    },
  },
  mounted() {
    _.forEach(this.foodIntolerances, (intolerance) => {
      let intoleranceToFind = _.find(
        this.interanceChoices,
        (interanceChoice) => {
          return intolerance === interanceChoice.value;
        }
      );
      intoleranceToFind.active = true;
    });
  },
};
</script>
<style scoped>
.intolerance-text {
  font-size: 12px;
}

.intolerance-text span {
  cursor: pointer;
  text-decoration-line: underline;
}

.intolerances-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.intolerances-item {
  border: 1px solid #00263a;
  font-size: 10px;
  padding: 14px 6px;
  margin: 5px;
  flex: 1 1 auto;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.list-span {
  padding-right: 5px;
}

.active {
  background-color: #789904;
  color: #fff;
  border: 1px solid #789904;
  transition: all 0.2s ease;
}

.next-button {
  margin: auto;
  width: 100%;
}
</style>
