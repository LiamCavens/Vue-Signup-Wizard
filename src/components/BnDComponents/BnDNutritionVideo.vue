<template>
  <div>
    <div
      class="wistia_responsive_padding"
      style="padding: 56.25% 0 0 0; position: relative"
    >
      <div
        class="wistia_responsive_wrapper"
        style="height: 100%; left: 0; position: absolute; top: 0; width: 100%"
      >
        <div
          class="wistia_embed wistia_async_6r13jxpt46 videoFoam=true"
          style="height: 100%; position: relative; width: 100%"
        >
          <div
            class="wistia_swatch"
            style="
              height: 100%;
              left: 0;
              opacity: 0;
              overflow: hidden;
              position: absolute;
              top: 0;
              transition: opacity 200ms;
              width: 100%;
            "
          >
            <img
              src="https://fast.wistia.com/embed/medias/6r13jxpt46/swatch"
              style="
                filter: blur(5px);
                height: 100%;
                object-fit: contain;
                width: 100%;
              "
              alt=""
              aria-hidden="true"
              onload="this.parentNode.style.opacity=1;"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div className="wistia_embed wistia_async_videolink videoFoam=true" /> -->
  </div>
</template>

<script>
export default {
  name: "BnDNutritionVideo",
  props: {},
  data: () => {
    return {};
  },
  methods: {},
  beforeMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/6r13jxpt46.jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  },
};
</script>

<style>
</style>
