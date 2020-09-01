<template>
  <div class="pic-chart" ref="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "BnDPictorialChart",
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.SlicedChart);
    chart.data = [
      {
        name: "Protein",
        value: 50,
      },
      {
        name: "Energy",
        value: 50,
      },
      {
        name: "Carbs",
        value: 50,
      },
      {
        name: "Fats",
        value: 50,
      },
      {
        name: "Haggis",
        value: 50,
      },
    ];

    let dog =
      "M424,375.53l-19.57,6.69-23-11.14-7.77,3.2-6.35,21.92v26.45L354,459.53l-2.94,53.19,2.16,8.22,8.84,10.2H326.48l-11-36.76-23.72,27,16.13-1.63,8.87,11.42H209.38l-36-17.32L172,466.48l41.73-39.31L187,469l1.4,33.48,19.48,8L260.17,413l44.62-38.59,45.84-45.15,46-17.79,24.74-1.59L407.32,322.2,414,336.44l-1.73,15.32Z";
    // var man =
    //     "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z";
    let series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    series.maskSprite.path = dog;
    series.colors.list = [
      am4core.color("#00263a"),
      am4core.color("#789904"),
      am4core.color("#e1251b"),
      am4core.color("#ee7623"),
      am4core.color("#e1b77e"),
    ];
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>
<style scoped>
.pic-chart {
  width: 350px;
  height: 185px;
}

@media screen and (max-width: 380px) {
  .pic-chart {
    width: 335px;
  }
}

@media screen and (max-width: 350px) {
  .pic-chart {
    width: 300px;
  }
}
</style>
