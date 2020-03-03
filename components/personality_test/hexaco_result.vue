<style lang="scss" scoped>
</style>
<template>
  <div>
    <div
      class="display-2 text-center my-12 fontwe font-weight-medium blue-grey--text text--darken-1"
    >نتیجه تست هکزاکو شما</div>
    <vr-chart :fullOption="chartData"></vr-chart>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    data: {
      required: true,
      type: Object as () => any
    }
  },
  data() {
    return {
      chartData: {
        chart: {
          polar: true,
          type: 'line'
        },
        title: {
          text: ''
        },
        pane: {
          size: '100%'
        },
        xAxis: {
          categories: [
            'تواضع و صداقت',
            'هیجانی پذیری',
            'برون گرایی',
            'سازگاری',
            'وظیفه شناسی',
            'گشودگی نسبت به تجربه'
          ],
          tickmarkPlacement: 'on',
          lineWidth: 0
        },
        yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0,
          max: 50
        },
        // legend: {
        //   align: 'right',
        //   verticalAlign: 'middle',
        //   layout: 'vertical'
        // },
        tooltip: {
          useHTML: true,
          formatter: function() {
            return (
              ' <b>' +
              (<any>this).x +
              '</b> شما <b>' +
              (<any>this).y +
              '</b> از 50'
            )
          }
        },
        series: [
          {
            showInLegend: false,
            type: 'area',
            data: [0, 0, 0, 0, 0, 0, 0, 0]
            // pointPlacement: 'on'
          }
        ]
      }
    }
  },
  beforeMount() {
    this.chartData.series[0].data = [
      this.data.honestyHumility,
      this.data.emotionality,
      this.data.extraversion,
      this.data.agreeableness,
      this.data.conscientiousness,
      this.data.opennessToRxperience
    ]
  }
})
</script>