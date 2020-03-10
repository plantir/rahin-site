<style lang="scss" scoped>
</style>
<template>
  <section>
    <!-- <img :src="img" alt /> -->
    <Level :level="level+1" />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Level from '@/components/roadmap/roadmap.desktop.vue'
export default Vue.extend({
  components: {
    Level
  },
  props: {
    user: {
      type: Object as () => any
    }
  },
  data() {
    return {
      level: 5
    }
  }
})
</script>