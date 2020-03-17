<style lang="scss" >
#videoLevel {
  header {
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 130px),
      calc(60% - 150px) 100%,
      0 calc(100% - 150px)
    );
    flex-direction: row-reverse;
    display: flex;
    background-color: $primary-color;
    justify-content: center;
    height: 180px;
    margin-bottom: 20px;
    .text {
      color: #fff;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      h1 {
        color: #fff;
        margin-top: 0;
      }
    }
  }
  .video-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .expansion-wrapper {
    padding: 32px;
  }
  .v-expansion-panel-content {
    &__wrap {
      padding: 16px 24px;
    }
  }
}
</style>
<template>
  <section id="videoLevel">
    <header>
      <div class="text">
        <h1>فیلم های آموزشی مرحله {{$route.params.id | persianDigit}}</h1>
      </div>
    </header>

    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs2></v-flex>
        <v-flex xs8>
          <div class="d-flex flex-column align-center justify-center">
            <h3 class="title primary--text">{{data.label}}</h3>
            <div>
              <p
                class="cpation"
              >اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.</p>
            </div>
            <!-- <v-spacer></v-spacer>
            <v-btn to="/profile/videos" color="primary" text>
              <span class="ml-4">بازگشت</span>
              <v-icon>la-arrow-left</v-icon>
            </v-btn>-->
          </div>
          <div class="expansion-wrapper">
            <v-expansion-panels :multiple="true" focusable>
              <v-expansion-panel v-for="(field,i) in data.fields" :key="i">
                <v-expansion-panel-header>{{field.name}}</v-expansion-panel-header>
                <v-expansion-panel-content class="test" pa-4>
                  <template v-for="(video, index) in field.videos">
                    <div :key="index">
                      <v-list-item>
                        <v-list-item-content>
                          <div class="video-item">
                            <div>
                              <span>{{index+1 | persianDigit}}-</span>
                              <span>{{video.name}}</span>
                            </div>
                            <div>
                              <v-icon @click="play(field,video)" color="primary">la-play-circle</v-icon>
                              <span class="subtitle-2" v-if="video.is_seen">دیده شده</span>
                            </div>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider v-if="index  < field.videos.length - 1"></v-divider>
                    </div>
                  </template>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-flex>
        <v-flex xs2></v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import videoPlayer from '@/components/video_player/index.vue'
export default Vue.extend({
  props: {
    user: {
      type: Object as () => any
    }
  },
  data() {
    return {
      data: {}
    }
  },
  async mounted() {
    let { data } = await this.$service.video.get(this.$route.params.id)
    this.data = data
  },
  methods: {
    onEnd(player) {
      console.log(player)
    },
    async play(field, video) {
      try {
        let result = await this.$dialog.show({
          component: videoPlayer,
          scope: { video },
          dialog_wrapper_custom_class: 'viedo-player'
        })
        if (result) {
          let { data } = await this.$service.user.seeVideo({
            level: this.$route.params.id,
            field_name: field.name,
            video_name: video.name
          })
          if (this.user.progress_level != data.progress_level) {
            this.$dialog
              .success()
              .message('مرحله با موفقیت تکمیل شد')
              .alert()
            this.$emit('change', data)
          }
          video.is_seen = true
        }
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>