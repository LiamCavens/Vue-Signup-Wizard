<template>
  <div class="pet-animal">
    <p class="pet-animal-label">Is {{name}} a Cat or Dog?</p>
    <div class="pet-animal-buttons">
      <button @click="handleAnimal('cat')">
        <p class="pet-animal-text">Cat</p>
        <img
          class="pet-animal-image cat-image"
          src="../assets/icon_cat_white.png"
          alt="Dob Body Image"
        />
      </button>
      <button @click="handleAnimal('dog')">
        <img
          class="pet-animal-image dog-image"
          src="../assets/icon_dog_white.png"
          alt="Dob Body Image"
        />
        <p class="pet-animal-text">Dog</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "petAnimal",
  props: {
    name: String,
    animal: String,
  },
  data: () => {
    return {};
  },
  methods: {
    handleAnimal(animal) {
      this.$emit("animalSubmit", animal);
    },
  },
  computed: {},
};
</script>

<style scoped>
.pet-animal {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-animal-buttons {
  display: flex;
  flex-direction: column;
}

.pet-animal-buttons button {
  font-family: Montserrat;
  display: flex;
  margin: 3px;
  padding: 3px 3px 3px 12px;
  border: 1px solid #00263a;
  background-color: white;
  border-radius: 5px;
}

.pet-animal-buttons button:hover {
  color: #789904;
  border: #789904 1px solid;
}

.pet-animal-text {
  font-family: Montserrat;
  font-size: 34px;
  margin: auto;
}

.pet-animal-image {
  height: 75px;
}

.cat-image {
  margin: auto;
}
.dog-image {
  margin: auto;
}
</style>
