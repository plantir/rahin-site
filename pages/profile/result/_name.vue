<style lang="scss" scoped>
</style>
<template>
  <div>
    <div class="d-flex">
      <v-spacer></v-spacer>
      <v-btn to="/profile/result" color="primary" text>
        <span class="ml-4">بازگشت</span>
        <v-icon>la-arrow-left</v-icon>
      </v-btn>
    </div>
    <component :is="componentId" :data="answer"></component>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import GardnerResult from '@/components/personality_test/gardner_result.vue'
import HexacoResult from '@/components/personality_test/hexaco_result.vue'
export default Vue.extend({
  components: {
    GardnerResult,
    HexacoResult
  },
  props: {
    user: {
      type: Object as () => any
    }
  },
  computed: {
    answer() {
      let test = this.user.personality_tests.find(
        item => item.test_name == this.$route.params.name
      )
      return test.answer
    },
    componentId() {
      switch (this.$route.params.name) {
        case 'gardner':
          return 'GardnerResult'
          break
        case 'hexaco':
          return 'HexacoResult'
          break
      }
    }
  }
})
</script>