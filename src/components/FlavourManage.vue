<template>
  <div>
    <p class="flavour-text">
      If you want to exclude some flavours from the range, simply deselect them
      from below.
    </p>

    <div class="flavours">
      <ul class="flavours-list">
        <li
          class="flavours-item"
          v-bind:class="{ active: flavour.active }"
          v-for="(flavour, index) in flavourRange"
          :key="index"
          @click="handleFlavour(flavour)"
        >
          <span>
            <span class="list-span">{{ flavour.value }}</span>
            <font-awesome-icon v-if="!flavour.active" :icon="['fas', 'plus']" />
            <font-awesome-icon v-if="flavour.active" :icon="['fas', 'minus']" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "FlavourManage",
  props: {
    flavours: Array,
  },
  data: () => {
    return {
      flavourRange: [
        { value: "Chicken", active: false },
        { value: "Beef", active: false },
        { value: "Lamb", active: false },
        { value: "White Fish", active: false },
        { value: "Duck", active: false },
        { value: "Turkey", active: false },
        { value: "Salmon", active: false },
      ],
    };
  },
  methods: {
    handleFlavour(flavour) {
      if (!flavour.active) {
        flavour.active = true;
        this.flavours.push(flavour.value);
      } else {
        flavour.active = false;
        _.remove(this.flavours, (i) => {
          return i === flavour.value;
        });
      }
      console.log(this.flavours);
    },
  },
  mounted() {
    _.forEach(this.flavours, (flavour) => {
      let flavourToFind = _.find(this.flavourRange, (flavourInRange) => {
        return flavour === flavourInRange.value;
      });
      flavourToFind.active = true;
    });
  },
};
</script>

<style scoped>
.flavour-text {
  font-size: 12px;
}

.flavours-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.flavours-item {
  border: 1px solid #00263a;
  font-size: 10px;
  padding: 14px 6px;
  margin: 5px;
  flex: 1 1 auto;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.list-span {
  padding-right: 5px;
}

.active {
  background-color: #789904;
  color: #fff;
  border: 1px solid #789904;
  transition: all 0.2s ease;
}
</style>
