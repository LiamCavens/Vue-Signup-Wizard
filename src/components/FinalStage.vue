<template>
  <div>
    <h2>Wizard Complete</h2>
    <div class="fireworks">
      <Firework :boxHeight="'100%'" :boxWidth="'100%'" />
    </div>
  </div>
</template>

<script>
import Firework from "./BnDComponents/Firework";
export default {
  name: "FinalStage",
  components: {
    Firework,
  },
  props: {},
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style>
.fireworks {
    width: 300px;
}
</style>
