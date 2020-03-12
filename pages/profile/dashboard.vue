<style lang="scss" scoped>
</style>
<template>
  <section>
    <!-- <img :src="img" alt /> -->
    <Level :level="level" :continue_url="user.next_step_url" />
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
    return {}
  },
  computed: {
    level() {
      let level = this.user.progress_level || 1
      return level
    }
  }
})
</script>