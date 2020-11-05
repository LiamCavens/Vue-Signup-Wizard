<template>
  <div class="accordion" v-bind:class="theme">
    <div class="header" v-on:click="toggle">
      <img class="header-image" :src="getIconUrl(icon)" alt="" />
      <div class="header-text">
        <slot name="header"></slot>
        <div class="header-desc">
          <slot name="header-desc"></slot>
        </div>
      </div>
      <font-awesome-icon
        class="header-icon"
        :class="{ rotate: show }"
        :icon="defaultIcon"
      />
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="body" v-show="show" ref="accordionDynamic">
        <div class="body-inner">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BnDAccordion",
  props: {
    theme: String,
    icon: String,
    showThis: Boolean,
    fasIcon: Array,
    heightProp: Number,
    accodionIndex: Number,
  },
  data: () => {
    return {
      show: false,
    };
  },
  methods: {
    getIconUrl(iconUrl) {
      if (!iconUrl) return;
      return require(`../../assets/${iconUrl}.png`);
    },
    toggle: function () {
      this.show = !this.show;
      this.$emit("opened");
    },
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function (el) {
      el.style.height = "0";
    },
  },
  mounted() {
    this.show = this.showThis;
  },
  computed: {
    defaultIcon() {
      if (!this.fasIcon) return ["fas", "angle-down"];
      return this.fasIcon;
    },
  },
  watch: {
    heightProp: function () {
      let el = this.$refs.accordionDynamic;
      this.enter(el);
    },
    showThis: function () {
      this.show = this.showThis;
    },
  },
};
</script>

<style scoped>
.accordion {
  max-width: 400px;
  font-family: Montserrat;
  margin-bottom: 20px;
  color: #00263a;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #00263a;
}

.accordion .header {
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
  color: #00263a;
  cursor: pointer;
}

.header-text {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  font-weight: 700;
  font-size: 14px;
}

.header-text:hover {
  color: #00263a;
}

.header-text::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #00263a;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.header-text:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.header-image {
  height: 60px;
  margin-right: 10px;
}

.header-desc {
  text-align: start;
  font-size: 12px;
  font-weight: normal;
}

.accordion .header-icon {
  margin: 0 20px 0 auto;
  transform: rotate(0deg);
  transition-duration: 0.3s;
}

.accordion .body {
  overflow: hidden;
  background-color: #fff;
  border-top: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: 0.3s ease-out;
}

.accordion .body-inner {
  padding: 8px;
  overflow-wrap: break-word;
}

.rotate {
  transform: rotate(180deg) !important;
  transition-duration: 0.3s;
}

.accordion.noBorder {
  border: none !important;
}

.accordion.noBorder .header {
  height: 25px;
  margin-top: 5px;
}

.accordion.bottomBorder {
  border-radius: 0;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;

  margin-bottom: 0;
}

.accordion.bottomBorder .header {
  height: 25px;
  padding: 10px 0;
  /* margin-bottom: 5px; */
}

.accordion.bottomBorder .header-image {
  display: none;
}
</style>
