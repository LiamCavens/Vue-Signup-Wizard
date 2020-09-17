<template>
  <div class="pet-breed">
    <p class="pet-breed-label">What breed is {{ name }}?</p>
    <div class="pet-breed-radios">
      <div class="pet-breed-radio">
        <input
          type="radio"
          id="purebreed"
          name="breedradio"
          value="purebreed"
          v-model="breed.type"
          @input="checkForNext('pure')"
        />
        <label for="purebreed">Pure</label>
        <div class="check"></div>
      </div>

      <div v-if="animal === 'dog'" class="pet-breed-radio">
        <input
          type="radio"
          id="crossbreed"
          name="breedradio"
          value="crossbreed"
          v-model="breed.type"
          @input="checkForNext('cross')"
        />
        <label for="crossbreed">Cross Breed</label>
        <div class="check"></div>
      </div>

      <div class="pet-breed-radio">
        <input
          type="radio"
          id="dontknow"
          name="breedradio"
          value="none"
          v-model="breed.type"
          @input="checkForNext('none')"
        />
        <label for="dontknow">Dont Know</label>
        <div class="check"></div>
      </div>
    </div>
    <transition-group name="slide-fade">
      <div class="breed-select" v-if="breed.type === 'purebreed'" key="purebreed-select">
        <v-select
          class="breed-chooser"
          placeholder="Choose Breed"
          :options="breeds"
          v-model="breed.parent1"
          @input="breedSubmit('pure')"
        />
      </div>

      <div class="breed-parents" v-if="breed.type === 'crossbreed'" key="crossbreed-select">
        <p class="pet-breed-label">Mother's Breed</p>
        <v-select
          class="parent-chooser"
          placeholder="Choose Breed"
          :options="breeds"
          v-model="breed.parent1"
          @input="breedSubmit('cross')"
        />
        <p class="pet-breed-label">Fathers's Breed</p>
        <v-select
          class="parent-chooser"
          placeholder="Choose Breed"
          :options="breeds"
          v-model="breed.parent2"
          @input="breedSubmit('cross')"
        />
      </div>
    </transition-group>
    <transition name="fade">
      <button class="next-button" v-if="genderSubmitted" @click="handleNext" key="next-button">Next</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PetBreed",
  props: {
    name: String,
    breed: Object,
    animal: String,
  },
  data: () => {
    return {
      breeds: [],
      dogBreeds: [
        "Affenpinscher",
        "Afghan Hound",
        "Aidi",
        "Airedale Terrier",
        "Akbash",
        "Akita",
        "Alano Español",
        "Alaskan husky",
        "Alaskan Klee Kai",
        "Alaskan Malamute",
        "Alopekis",
        "Alpine Dachsbracke",
        "American Bulldog",
        "American Bully",
        "Hierran Wolfdog",
        "Hokkaido",
        "Hortaya borzaya",
        "Hovawart",
        "Huntaway",
        "Hygen Hound",
        "Ibizan Hound",
        "Icelandic Sheepdog",
        "Saint-Usuge Spaniel",
        "Saluki",
        "Samoyed",
        "Sapsali",
        "Sarabi dog",
        "Šarplaninac",
        "Schapendoes",
        "Schillerstövare",
        "Schipperke",
      ],
      catBreeds: [
        "Abyssinian",
        "American Bobtail",
        "Balinese",
        "Bengal",
        "Birman",
        "British Shorthair",
        "Burmese",
        "Chartreux",
        "Colorpoint Shorthair",
        "Cornish Rex",
        "Devon Rex",
        "Egyptian Mau",
        "Exotic",
        "Havana Brown",
        "Japanese Bobtail",
        "Korat",
        "Lykoi",
        "Maine Coon",
        "Ocicat",
        "Persian",
        "RagaMuffin",
        "Russian Blue",
        "Scottish Fold",
        "Siamese",
        "Tabby",
      ],
      genderSubmitted: false,
    };
  },
  methods: {
    breedSubmit(type) {
      this.checkForNext(type);
    },
    handleNext() {
      if (this.breed.type === "none") {
        this.breed.parent1 = this.breed.parent2 = "";
      }
      this.$emit("breedSubmit");
    },
    checkForNext(type) {
      if (type === "pure" && this.breed.parent1) {
        this.genderSubmitted = true;
        this.breed.parent2 = this.breed.parent1;
      } else if (type === "cross" && this.breed.parent1 && this.breed.parent2) {
        this.genderSubmitted = true;
      } else if (type === "none") {
        this.genderSubmitted = true;
      } else {
        this.genderSubmitted = false;
      }
    },
  },
  mounted() {
    this.breeds = this.animal === "dog" ? this.dogBreeds : this.catBreeds;
    if (!this._.includes(this.breeds, this.breed.parent1)) {
      this.breed.parent1 = "";
    }
    if (this.breed.parent1) {
      this.genderSubmitted = true;
    }
  },
};
</script>

<style scoped>
.pet-breed {
  color: #00263a;
  display: flex;
  flex-direction: column;
}

.pet-breed-label {
  font-family: Montserrat-Bold;
  font-size: 22px;
  margin-bottom: 10px;
}

.pet-breed-radios {
  border: none;
  display: flex;
  justify-content: space-evenly;
}

.pet-breed-radio input[type="radio"] {
  position: absolute;
  visibility: hidden;
}

.pet-breed-radio label {
  cursor: pointer;
  display: block;
  position: relative;
  padding: 2px 0px 5px 25px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s linear;
}

.pet-breed-radio label:hover {
  color: #789904;
}

.pet-breed-radio {
  position: relative;
}

.check {
  display: block;
  position: absolute;
  border: 3px solid #aaaaaa;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 1px;
  left: 1px;
  z-index: 5;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
}

.check::before {
  display: block;
  position: absolute;
  content: "";
  border-radius: 100%;
  height: 11px;
  width: 11px;
  top: 2px;
  left: 2px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}

input[type="radio"]:checked ~ .check {
  border: 3px solid #789904;
}

input[type="radio"]:checked ~ .check::before {
  background: #789904;
}

input[type="radio"]:checked ~ label {
  color: #789904;
}

.pet-breed-radio:hover .check {
  border: 3px solid #789904;
}

.breed-select {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.breed-parents {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.breed-parents p {
  font-size: 20px;
  text-align: left;
  margin-right: auto;
  margin-left: 25px;
}

.next-button {
  font-family: Montserrat;
  background-color: #789904;
  margin: 10px auto;
  padding: 5px 0;
  box-sizing: border-box;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  outline: none;
  height: 32px;
  transition: 0.3s ease;
  width: 300px;
}

.next-button:hover {
  cursor: pointer;
  background-color: #617a04;
  transition: 0.3s ease;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
  transition-delay: 0.5s;
}
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter {
  opacity: 0;
}

@media screen and (max-width: 340px) {
  .pet-breed-radio label {
    font-size: 14px;
  }
  .next-button {
    width: 280px;
  }

  .check {
    height: 13px;
    width: 13px;
    top: 1px;
    left: 4px;
  }

  .check::before {
    height: 9px;
    width: 9px;
    top: 2px;
    left: 2px;
  }
}
</style>

<style>
.parent-chooser .vs__search::placeholder,
.parent-chooser .vs__dropdown-toggle,
.parent-chooser .vs__dropdown-menu,
.breed-chooser .vs__search::placeholder,
.breed-chooser .vs__dropdown-toggle,
.breed-chooser .vs__dropdown-menu {
  width: 300px;
  background: #ffffff;
  color: #00263a;
  text-transform: lowercase;
  font-variant: small-caps;
}

.breed-chooser .vs__dropdown-toggle,
.breed-chooser .vs__dropdown-menu,
.parent-chooser .vs__dropdown-toggle,
.parent-chooser .vs__dropdown-menu {
  border: #00263a 1px solid;
}

.parent-chooser .vs__clear,
.parent-chooser .vs__open-indicator,
.breed-chooser .vs__clear,
.breed-chooser .vs__open-indicator {
  cursor: pointer;
  fill: #00263a;
}

@media screen and (max-width: 340px) {
  .parent-chooser .vs__search::placeholder,
  .parent-chooser .vs__dropdown-toggle,
  .parent-chooser .vs__dropdown-menu,
  .breed-chooser .vs__search::placeholder,
  .breed-chooser .vs__dropdown-toggle,
  .breed-chooser .vs__dropdown-menu {
    width: 280px;
  }
}
</style>
