<template>
  <div class="pet-activity">
    <h2>How active are you?</h2>
    <p class="honest-text">(and be honest!)</p>
    <div class="pet-activity-buttons">
      <button
        class="pet-activity-button"
        v-for="(level, index) in activeLevels"
        @click="handleActivityLevel(level.value, index)"
        :class="{ active: activatedDiv === index }"
        :key="index"
      >
        {{ level.label }}
      </button>
    </div>
  </div>
</template>

<script>
// import _ from "lodash";
export default {
  name: "DogActivity",
  props: {
    activity: Number,
  },
  data: () => {
    return {
      activatedDiv: "",
      activeLevels: [
        { value: 1, label: "Couch potato" },
        { value: 2, label: "Little exersize" },
        { value: 3, label: "Normal" },
        { value: 4, label: "Active" },
        { value: 5, label: "Very active" },
        { value: 6, label: "Hyper active" },
      ],
    };
  },
  methods: {
    handleActivityLevel(level, index) {
      this.activatedDiv = index;
      this.$emit("activitySubmit", level);
    },
  },
};
</script>

<style scoped>
.pet-activity {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-activity-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
}

.pet-activity-button {
  margin: 10px 20px;
  padding: 10px;
  width: 100%;
  height: 38px;
  border: 1px solid #00263a;
  color: #00263a;
  background-color: #fff;
  border-radius: 500px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.pet-activity-button:hover {
  border: solid 2px #789904;
  background-color: #789904;
  color: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}

.pet-activity-button:focus {
  outline: none;
}

h2 {
  margin-bottom: 0;
}

.honest-text {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 20px;
}
</style>
