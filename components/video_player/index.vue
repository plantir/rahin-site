<style lang="scss" >
.dialog-wrapper.viedo-player {
  background: #000;
  min-width: 600px;
  .header {
    display: flex;
    padding: 0 16px;
    align-items: center;
    height: 60px;
    h3 {
      color: #fff;
    }
  }
  .video-player-box {
    display: flex;
    justify-content: center;
  }
  .video-js .vjs-big-play-button {
    transform: scale(1.7);
  }
}
</style>
<template>
  <section class="video-wrapper">
    <div class="header">
      <h3 class="title">{{scope.video.name}}</h3>
      <v-spacer></v-spacer>
      <v-icon size="40" dark @click="$emit('hide')">la-times-circle</v-icon>
    </div>
    <div
      class="video-player-box vjs-big-play-centered"
      @ended="onEnd($event)"
      v-video-player:myVideoPlayer="playerOptions"
    ></div>
    <div class="text-center my-5">
      <v-btn @click="$emit('hide',true)" dark color="indigo" width="320px" large>قبلا دیدم</v-btn>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    scope: {
      type: Object as () => any
    }
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        // autoplay: true,
        sources: [
          {
            type: 'video/mp4',
            src: this.scope.video.src
          }
        ]
        // poster: '/static/images/author.jpg'
      }
    }
  },
  methods: {
    onEnd(player) {
      this.$emit('hide', true)
    }
  }
})
</script>