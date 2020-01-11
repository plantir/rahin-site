<template>
  <v-app dark>
    <section v-if="$device.isDesktop">
      <DesktopHeader />
      <nuxt />
      <DesktopFooter />
    </section>
    <section v-else>
      <MobileHeader />
    </section>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import DesktopHeader from '@/components/base/header.desktop.vue'
import DesktopFooter from '@/components/base/footer.desktop.vue'
import MobileHeader from '@/components/base/header.mobile.vue'
export default Vue.extend({
  components: {
    DesktopHeader,
    MobileHeader,
    DesktopFooter
  }
})
</script>
