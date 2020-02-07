<style lang="scss" scoped>
.route-wrapper {
  min-height: calc(100vh - 302px - 80px);
  padding-top: 80px;
}
</style>
<template>
  <v-app dark>
    <Header />
    <nuxt class="route-wrapper" />
    <Footer />
  </v-app>
</template>
<script lang="ts">
import Footer from '@/components/base/footer.desktop.vue'
import Header from '@/components/base/header.desktop.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    Footer,
    Header
  }
})
</script>
