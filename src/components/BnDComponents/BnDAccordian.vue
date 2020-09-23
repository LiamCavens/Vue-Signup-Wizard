<template>
  <div class="accordion" v-bind:class="theme">
    <div class="header" v-on:click="toggle">
      <slot name="header"></slot>
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
  },
  data: () => {
    return {
      show: false,
    };
  },
  methods: {
    toggle: function () {
      this.show = !this.show;
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
  height: 40px;
  line-height: 40px;
  position: relative;
  color: #00263a;
  cursor: pointer;
}

.accordion .header-icon {
  position: absolute;
  top: 12px;
  right: 15px;
  transform: rotate(0deg);
  transition-duration: 0.3s;
}

.accordion .body {
  overflow: hidden;
  background-color: #fff;
  border-top: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: 150ms ease-out;
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
