<template>
  <div class="dog-body">
    <h2>His body composition</h2>
    <button
      class="dog-body-item"
      v-for="(bodyType, index) in bodyTypes"
      :key="index"
      @click="handleBodySub(bodyType, index)"
      :class="{active : activatedDiv === index}"
    >
      <img class="dog-body-image" src="../assets/icon_dog_white.png" alt="Dob Body Image" />
      <div class="dog-body-item-text">
        <p class="dog-body-item-label">{{bodyType.label}}</p>
        <p class="dog-body-item-desc">{{bodyType.description}}</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "DogBodyType",
  props: {
    name: String,
    body: Number,
  },
  data: () => {
    return {
      activatedDiv: "",
      bodyTypes: [
        {
          value: 1,
          label: "Very Underweight",
          description: "Very underweight description",
        },
        {
          value: 2,
          label: "Mildy Underweight",
          description: "Mildly underweight description with longer description",
        },
        {
          value: 3,
          label: "Normal",
          description: "Normal description",
        },
        {
          value: 4,
          label: "Very Overweight",
          description: "Mildly overweight description",
        },
        {
          value: 5,
          label: "Very Overweight",
          description: "Very overweight description",
        },
      ],
    };
  },
  methods: {
    handleBodySub(bodyType, index) {
      this.activatedDiv = index;
      this.$emit("bodySubmit", bodyType.value);
    },
  },
};
</script>

<style scoped>
.dog-body {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.dog-body-item {
  font-family: Montserrat;
  display: flex;
  margin: 3px;
  padding: 3px 3px 3px 12px;
  border: 1px solid #00263a;
  background-color: white;
  border-radius: 5px;
}

.dog-body-item:hover,
.active {
  cursor: pointer;
  border: 2px solid #789904;
  color: #789904;
  margin: 2px 3px;
  transition: all 0.3s ease;
}

.dog-body-item:hover .dog-body-image,
.active .dog-body-image {
  border: 2px solid #789904;
  transition: all 0.3s ease;
}

.dog-body-item-text {
  text-align: left;
  padding-left: 20px;
  max-width: 228px;
}

.dog-body-item:focus {
  outline: 1px #789904 auto;
}

.dog-body-item-label {
  margin: 15px 0 0 0;
  font-weight: 700;
}

.dog-body-item-desc {
  margin: 2px 0 0 0;
  font-size: 12px;
}

.dog-body-image {
  height: 75px;
  width: 75px;
  border: 2px #00263a solid;
  border-radius: 50%;
}

@media screen and (max-height: 700px) {
  .dog-body-item-text {
    padding-left: 5px;
  }
  .dog-body-item-label {
    margin: 5px 0 0 0;
    font-weight: 700;
  }

  .dog-body-item-desc {
    margin: 2px 0 0 0;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dog-body-image {
    height: 50px;
    width: 50px;
    border: 2px #00263a solid;
    border-radius: 50%;
  }
  .dog-body-next {
    height: 54px;
    width: 54px;
  }
}
</style>
