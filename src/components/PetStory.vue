<template>
  <div class="pet-story">
    <transition-group name="slide-down">
      <p v-if="pet.name && stage === 2" key="onlyname">
        My name is
        <b>{{pet.name}}</b>
      </p>
      <p v-if="pet.name && stage >= 3 && pet.animal" key="name">
        I'm a
        <transition name="slide-in">
          <span v-if="pet.gender && stage >= 3">
            <b>{{ pet.gender }}</b>
          </span>
        </transition>&nbsp;
        <b>{{pet.animal}}</b> named
        <b>{{ pet.name }}</b>.
      </p>

      <p v-if="pet.age && stage >= 5" key="age">
        I am
        <b>{{ pet.age.years }} years</b>
        <span v-if="pet.age.months > 0">
          and
          <b>{{pet.age.months}} months</b>
        </span>
        old.
      </p>

      <p v-if="pet.breed && stage >= 6" key="breed">
        <span v-if="pet.breed.type === 'pure'">
          I'm a
          <b>
            pure
            {{pet.breed.parent1}}.
          </b>
        </span>
        <span v-if="pet.breed.type === 'cross'">
          My mother is {{pet.breed.parent1.match(vowelRegex) ? 'an' : 'a'}}
          <b>{{pet.breed.parent1}}</b>
          and my father is {{pet.breed.parent2.match(vowelRegex) ? 'an' : 'a'}}
          <b>{{pet.breed.parent2}}</b>.
        </span>
        <span v-if="pet.breed.type === 'dontknow'">
          I'm not quite sure what
          <b>breed</b> I am.
        </span>
      </p>
      <p v-if="pet.weight && stage >= 7" key="weight">
        I weigh
        <b>{{pet.weight.amount}}{{pet.weight.unit}}</b>
        <span v-if="pet.body && stage >= 8" key="bodyComp">
          <span v-if="pet.body <= 2">
            and I could
            <b>gain a few pounds</b>
          </span>
          <span v-if="pet.body === 3">
            and I would like to
            <b>maintain my weight</b>
          </span>
          <span v-if="pet.body >= 4">
            and I could
            <b>lose a few pounds</b>
          </span>
        </span>
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
  methods: {},
};
</script>

<style scoped>
.pet-story p {
  margin: 5px 0;
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
