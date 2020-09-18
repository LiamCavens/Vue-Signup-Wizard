<template>
  <div class="pet-activity">
    <h2>How active is he?</h2>
    <div class="pet-activity-buttons">
      <button
        class="pet-activity-button"
        v-for="(level, index) in activeLevels"
        @click="handleActivityLevel(level.value, index)"
        :class="{active : activatedDiv === index}"
        :key="index"
      >{{level.label}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogActivity",
  props: {
    activity: String,
  },
  data: () => {
    return {
      activatedDiv: "",
      activeLevels: [
        { value: "couch", label: "Couch potato" },
        { value: "little", label: "Little exersize" },
        { value: "normal", label: "Normal" },
        { value: "active", label: "Active" },
        { value: "very", label: "Very active" },
        { value: "hyper", label: "Hyper active" },
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
</style>
