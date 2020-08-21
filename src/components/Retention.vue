<template>
  <div>
    <h2>Subscription</h2>
    <p>{{ subActive }}</p>
    <p>{{ memberSince }}</p>

    <h4>Next Delivery</h4>
    <p>{{ nextDeliveryDate }}</p>

    <div class="manageButtons">
      <button>Manage subscription</button>
      <button>Cancel subscription</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Retention",
  props: {
    subActive: String,
    memberSince: String,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
