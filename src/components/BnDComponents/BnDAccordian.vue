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
        :icon="['fas', 'angle-down']"
      />
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="body" v-show="show">
        <div class="body-inner">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BnDAccordian",
  props: {
    theme: String,
    icon: String,
    show: Boolean,
  },
  data: () => {
    return {};
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
  display: flex;
  flex-direction: column;
  margin: auto 0;
  font-weight: 700;
  font-size: 14px;
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
  transform: rotate(180deg);
  transition-duration: 0.3s;
}

.accordion.purple {
  background-color: #8c618d;
}

.accordion.purple .body {
  border-color: #8c618d;
}
</style>
