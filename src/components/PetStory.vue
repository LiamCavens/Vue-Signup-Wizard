<template>
  <div class="pet-story">
    <transition-group name="slide-down">
      <p v-if="pet.name && stage === 2" key="onlyname">
        My name is
        <span class="edit-link" @click="editStage(1)">{{ pet.name }}</span>
      </p>
      <p v-if="pet.name && stage >= 3 && pet.animal" key="name">
        I'm a
        <transition name="slide-in">
          <span v-if="pet.gender && stage >= 3">
            <span class="edit-link" @click="editStage(3)">{{
              pet.gender
            }}</span>
          </span> </transition
        >&nbsp;
        <span class="edit-link" @click="editStage(2)">{{ pet.animal }}</span>
        named <span class="edit-link" @click="editStage(1)">{{ pet.name }}</span
        >.
      </p>

      <p v-if="pet.age && stage >= 5" key="age">
        I am
        <span class="edit-link" @click="editStage(4)"
          >{{ pet.age.years }} years</span
        >
        <span v-if="pet.age.months > 0">
          and
          <span class="edit-link" @click="editStage(4)"
            >{{ pet.age.months }} months</span
          >
        </span>
        old.
      </p>

      <p v-if="pet.breed && stage >= 6" key="breed">
        <span v-if="pet.breed.type === 'pure'">
          I'm a
          <span class="edit-link" @click="editStage(5)">
            pure
            {{ pet.breed.parent1 }}.
          </span>
        </span>
        <span v-if="pet.breed.type === 'cross'">
          My mother is {{ pet.breed.parent1.match(vowelRegex) ? "an" : "a" }}
          <span class="edit-link" @click="editStage(5)">{{
            pet.breed.parent1
          }}</span>
          and my father is
          {{ pet.breed.parent2.match(vowelRegex) ? "an" : "a" }}
          <span class="edit-link" @click="editStage(5)">{{
            pet.breed.parent2
          }}</span
          >.
        </span>
        <span v-if="pet.breed.type === 'dontknow'">
          I'm not quite sure what
          <span class="edit-link" @click="editStage(5)">breed</span> I am.
        </span>
      </p>
      <p v-if="pet.weight && stage >= 7" key="weight">
        I weigh
        <span class="edit-link" @click="editStage(6)"
          >{{ pet.weight.amount }}{{ pet.weight.unit }}</span
        >
        <span v-if="pet.body && stage >= 8" key="bodyComp">
          <span v-if="pet.body <= 2">
            and I could
            <span class="edit-link" @click="editStage(7)"
              >gain a few pounds</span
            >
          </span>
          <span v-if="pet.body === 3">
            and I would like to
            <span class="edit-link" @click="editStage(7)"
              >maintain my weight</span
            >
          </span>
          <span v-if="pet.body >= 4">
            and I could
            <span class="edit-link" @click="editStage(7)"
              >lose a few pounds</span
            >
          </span>
        </span>
      </p>

      <p v-if="stage >= 10 && pet.animal === 'dog'">
        I am
        <span class="edit-link" @click="editStage(9)"
          >{{ pet.working ? "" : "not" }} a working dog</span
        >
      </p>

      <p v-if="stage >= 11 && pet.animal === 'dog'" key="health">
        I have
        <span
          v-if="pet.health.length === 0"
          class="edit-link"
          @click="editStage(10)"
          >no health issues</span
        >
        <span
          v-if="pet.health.length > 0 && pet.health.length < 4"
          class="edit-link"
          @click="editStage(10)"
          >some health issues</span
        >
        <span
          v-if="pet.health.length > 3"
          class="edit-link"
          @click="editStage(10)"
          >a lot of health issues</span
        >
      </p>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "PetStory",
  props: {
    pet: Object,
    stage: Number,
  },
  data: () => {
    return {
      vowelRegex: "^[aieouAIEOU].*",
    };
  },
  methods: {
    editStage(stageToGo) {
      this.$emit("changeStage", stageToGo);
    },
  },
};
</script>

<style scoped>
.pet-story p {
  margin: 5px 0;
}

.edit-link {
  font-weight: 700;
  /* border-bottom: 1px dashed #00263a; */
  cursor: pointer;

  background-image: linear-gradient(to right, #00263a 75%, transparent 75%);
  background-position: 0 1.04em;
  background-repeat: repeat-x;
  background-size: 6px 2px;
}

.slide-down-enter-active {
  transition: all 0.8s ease;
  transition-delay: 0.4s;
}
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-in-enter-active {
  transition: all 0.3s ease;
}
.slide-in-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
