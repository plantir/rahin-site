<style lang="scss" scoped>
section {
  background-color: #f2f8f8;
  position: relative;
  width: 100%;
}
</style>
<template>
  <section>
    <homeHeader />
    <card />
    <homeMiddle />
    <homeFooter />
    {{data}}
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import homeHeader from '~/components/home/header.vue'
import card from '~/components/home/card.vue'
import homeFooter from '~/components/home/footer.vue'
import homeMiddle from '~/components/home/home-middle.vue'
export default Vue.extend({
  components: {
    homeHeader,
    card,
    homeFooter,
    homeMiddle
  },
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $service
  }) {
    let { data } = await $service.user.test()
    return {
      data
    }
  },
  mounted() {}
})
</script>
