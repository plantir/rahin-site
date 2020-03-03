<style lang="scss" scoped>
.item {
  margin-bottom: 20px;
  .item-title {
    color: $primary-color;
    font-size: 26px !important;
    font-weight: 600;
  }
}
</style>
<template>
  <div>
    <div
      class="display-2 text-center my-12 fontwe font-weight-medium blue-grey--text text--darken-1"
    >نتیجه تست چینی شما</div>
    <div class="item" v-for="(item, index) in result" :key="index">
      <div class="item-title">
        <span>{{index+1 | persianDigit}} -</span>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
const map_value = {
  A: 'هنری',
  B: 'حیاتی',
  C: 'قراردادی',
  X: 'بیانگر',
  I: 'جستجوگرانه',
  O: 'عملیاتی',
  S: 'اجتماعی',
  E: 'متهورانه',
  V: 'ماجراجویانه'
}
export default Vue.extend({
  props: {
    data: {
      required: true,
      type: Array as () => any
    }
  },
  computed: {
    result() {
      return this.data.splice(0, 3).map(item => {
        item.title = map_value[item.param]
        return item
      })
    }
  }
})
</script>