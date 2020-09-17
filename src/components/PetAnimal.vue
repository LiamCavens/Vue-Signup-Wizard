<template>
  <div class="pet-animal">
    <p class="pet-animal-label">Is {{name}} a...</p>
    <div class="pet-animal-buttons">
      <div class="pet-animal-buttons-card">
        <button @click="handleAnimal('cat')">
          <img class="pet-animal-image" src="../assets/icon_cat_white.png" alt="Cat Image" />
        </button>
        <p class="pet-animal-text">Cat</p>
      </div>
      <div class="pet-animal-buttons-card">
        <button @click="handleAnimal('dog')">
          <img class="pet-animal-image" src="../assets/icon_dog_white.png" alt="Dog Image" />
        </button>
        <p class="pet-animal-text">Dog</p>
      </div>
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

.pet-animal-label {
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 8px;
}

.pet-animal-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.pet-animal-buttons button {
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  margin: 3px;
  padding: 3px;
  border: 2px solid #00263a;
  background-color: white;
  border-radius: 50%;
}

.pet-animal-buttons button:hover {
  color: #789904;
  border: #789904 2px solid;
}

.pet-animal-buttons button:focus {
  outline: none;
}

.pet-animal-text {
  font-family: Montserrat;
  font-size: 22px;
  margin: auto;
}

.pet-animal-image {
  height: 120px;
}
</style>
