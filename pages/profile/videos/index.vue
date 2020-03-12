<style lang="scss" scoped>
.item {
  @include box-shadow();
  display: flex;
  height: 50px;
  width: 100%;
  text-align: right;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  &:not([disabled]):hover {
    .title {
      color: $primary-color;
    }
  }
  .number {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background: $primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fff;
    font-weight: 500;
    margin-left: 16px;
  }
  .title {
    flex: 1;
  }
  + .item {
    margin-top: 16px;
  }
}
</style>
<template>
  <section>
    <div class="item-wrapper">
      <nuxt-link
        :to="`videos/${item.level}`"
        class="item"
        tag="button"
        :disabled="user.progress_level < item.level"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="number">{{item.level | persianDigit}}</div>
        <div class="title">{{item.label}}</div>
        <v-icon
          :color="user.progress_level >= item.level?'green':'red'"
        >la-{{user.progress_level >= item.level?'unlock':'lock'}}</v-icon>
      </nuxt-link>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    user: {
      type: Object as () => any
    }
  },
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    let { data } = await this.$service.video.all()
    this.items = data
  }
})
</script>