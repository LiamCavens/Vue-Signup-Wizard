<template>
  <div class="pet-animal">
    <h2>{{ name }}, are you a...</h2>
    <div class="pet-animal-buttons">
      <div class="pet-animal-buttons-card">
        <button @click="handleAnimal('cat')">
          <img
            class="pet-animal-image"
            src="../assets/icon_cat_white.png"
            alt="Cat Image"
          />
        </button>
        <p class="pet-animal-text">Cat</p>
      </div>
      <div class="pet-animal-buttons-card">
        <button @click="handleAnimal('dog')">
          <img
            class="pet-animal-image"
            src="../assets/icon_dog_white.png"
            alt="Dog Image"
          />
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
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.pet-animal-buttons button:hover {
  /* color: #789904; */
  border: #789904 2px solid;
}

.pet-animal-buttons button:focus {
  outline: none;
}

.pet-animal-text {
  font-family: Montserrat;
  font-size: 16px;
  margin: auto;
}

.pet-animal-image {
  height: 120px;
}
</style>
