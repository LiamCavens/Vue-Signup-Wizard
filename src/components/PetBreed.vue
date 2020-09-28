<template>
  <div class="pet-breed">
    <h2>{{ name }}, What is your breed?</h2>
    <div class="pet-breed-buttons">
      <button
        class="pet-breed-button"
        v-bind:class="{ active: breed.type === 'pure' }"
        @click="checkForNext('pure')"
      >
        Pure breed
      </button>
      <button
        v-if="animal === 'dog'"
        class="pet-breed-button"
        v-bind:class="{ active: breed.type === 'cross' }"
        @click="checkForNext('cross')"
      >
        Cross breed
      </button>
      <button
        class="pet-breed-button"
        v-bind:class="{ active: breed.type === 'dontknow' }"
        @click="checkForNext('dontknow')"
      >
        Don't know {{ breed.type === "dontknow" ? "& proud" : "" }}
      </button>
    </div>
    <transition-group name="slide-fade">
      <div
        class="breed-select"
        v-if="breed.type === 'pure'"
        key="purebreed-select"
      >
        <v-select
          class="breed-chooser"
          placeholder="Choose breed"
          :options="breeds"
          v-model="breed.parent1"
          @input="breedSubmit('pure')"
          append-to-body
          :calculate-position="withPopper"
        />
      </div>

      <div
        class="breed-parents"
        v-if="breed.type === 'cross'"
        key="crossbreed-select"
      >
        <p class="pet-breed-label">Mother's Breed</p>
        <v-select
          class="parent-chooser"
          placeholder="Choose breed"
          :options="breeds"
          v-model="breed.parent1"
          @input="breedSubmit('cross')"
          append-to-body
          :calculate-position="withPopper"
        />
        <p class="pet-breed-label">Father's Breed</p>
        <v-select
          class="parent-chooser"
          placeholder="Choose breed"
          :options="breeds"
          v-model="breed.parent2"
          @input="breedSubmit('cross')"
          append-to-body
          :calculate-position="withPopper"
        />
      </div>
    </transition-group>
    <transition name="fade">
      <button
        class="btn-green next-button"
        v-if="genderSubmitted"
        @click="handleNext"
        key="next-button"
      >
        Next
      </button>
    </transition>
  </div>
</template>

<script>
import _ from "lodash";
import { createPopper } from "@popperjs/core";
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
      placement: "bottom",
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
      if (this.breed.type === "dontknow") {
        this.breed.parent1 = this.breed.parent2 = "";
      }
      this.$emit("breedSubmit");
    },
    checkForNext(type) {
      this.breed.type = type;
      if (type === "pure" && this.breed.parent1) {
        this.genderSubmitted = true;
        this.breed.parent2 = this.breed.parent1;
      } else if (type === "cross" && this.breed.parent1 && this.breed.parent2) {
        this.genderSubmitted = true;
      } else if (type === "dontknow") {
        this.genderSubmitted = true;
      } else {
        this.genderSubmitted = false;
      }
    },
    withPopper(dropdownList, component, { width }) {
      /**
       * We need to explicitly define the dropdown width since
       * it is usually inherited from the parent with CSS.
       */
      dropdownList.style.width = width;
      /**
       * Here we position the dropdownList relative to the $refs.toggle Element.
       *
       * The 'offset' modifier aligns the dropdown so that the $refs.toggle and
       * the dropdownList overlap by 1 pixel.
       *
       * The 'toggleClass' modifier adds a 'drop-up' class to the Vue Select
       * wrapper so that we can set some styles for when the dropdown is placed
       * above.
       */
      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: this.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -1],
            },
          },
          {
            name: "toggleClass",
            enabled: true,
            phase: "write",
            fn({ state }) {
              component.$el.classList.toggle(
                "drop-up",
                state.placement === "top"
              );
            },
          },
        ],
      });
      /**
       * To prevent memory leaks Popper needs to be destroyed.
       * If you return function, it will be called just before dropdown is removed from DOM.
       */
      return () => popper.destroy();
    },
  },
  mounted() {
    this.breeds = this.animal === "dog" ? this.dogBreeds : this.catBreeds;
    if (!_.includes(this.breeds, this.breed.parent1)) {
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

.pet-breed-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
}

.pet-breed-button {
  margin: 10px 20px;
  padding: 10px;
  width: 100%;
  height: 42px;
  border: 1px solid #00263a;
  color: #00263a;
  background-color: #fff;
  border-radius: 500px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  cursor: pointer;
}

.pet-breed-button:hover {
  border: 1px solid #789904;
  /* color: #789904; */
}

.pet-breed-button:focus {
  outline: none;
}

.active {
  transition: all 0.4s ease;
  background-color: #789904;
  border: 1px solid #789904;
  color: #fff;
}

.active:hover {
  color: #00263a;
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
  margin: 20px auto;
  width: 300px;
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
.vs__dropdown-toggle,
.vs__search::placeholder,
.vs__dropdown-menu {
  width: 289px;
  background: #ffffff;
  color: #00263a;
  /* text-transform: lowercase;
  font-variant: small-caps; */
  font-family: Montserrat;
}

.breed-chooser .vs__dropdown-toggle,
.breed-chooser .vs__dropdown-menu,
.parent-chooser .vs__dropdown-toggle,
.parent-chooser .vs__dropdown-menu .vs__dropdown-toggle,
.vs__dropdown-menu {
  border: #00263a 1px solid !important;
}

.parent-chooser .vs__clear,
.parent-chooser .vs__open-indicator,
.breed-chooser .vs__clear,
.breed-chooser .vs__open-indicator {
  cursor: pointer;
  fill: #00263a;
}

[data-popper-placement="top"] {
  border-radius: 4px 4px 0 0;
  border-top-style: solid;
  border-bottom-style: solid;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15);
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
