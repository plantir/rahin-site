<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  > div {
    padding: 16px;
    flex: 0 0 33.333%;
  }
  .v-avatar {
    span,
    .v-icon {
      color: #fff;
      font-size: 1.675rem;
    }
  }
}
</style>
<template>
  <section>
    <div class="wrapper">
      <div>
        <v-card>
          <v-list-item>
            <v-list-item-avatar :color="free?'green':'cyan'">
              <span v-if="free">
                <v-icon>la-check</v-icon>
              </span>
              <span v-else>۱</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">تست تعین شخصیت</v-list-item-title>
              <v-list-item-subtitle>شخصیت خود را پیدا کن</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</v-card-text>
          <v-card-actions>
            <v-btn
              v-if="free"
              text
              color="deep-purple accent-4"
              :to="`/personality/type${free.answer.type}`"
            >مشاهده نتیجه تست</v-btn>
            <v-btn v-else text color="deep-purple accent-4" to="/free-test">انجام تست</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div>
        <v-card>
          <v-list-item>
            <v-list-item-avatar :color="free?gardner?'green':'cyan':'red'">
              <span v-if="gardner">
                <v-icon>la-check</v-icon>
              </span>
              <span v-else>۲</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">تست رقبت شغلی</v-list-item-title>
              <v-list-item-subtitle>شغل خود را پیدا کن</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</v-card-text>
          <v-card-actions>
            <v-btn v-if="gardner" text color="deep-purple accent-4">مشاهده نتیجه</v-btn>
            <v-btn v-else text to="/gardner-test" color="deep-purple accent-4">انجام تست</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div>
        <v-card>
          <v-list-item>
            <v-list-item-avatar :color="gardner?hexaco?'green':'cyan':'red'">
              <span v-if="hexaco">
                <v-icon>la-check</v-icon>
              </span>
              <span v-else>۳</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">تست ۳</v-list-item-title>
              <v-list-item-subtitle>شخصیت خود را پیدا کن</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</v-card-text>
          <v-card-actions>
            <v-btn v-if="hexaco" text color="deep-purple accent-4">مشاهده نتیجه</v-btn>
            <v-btn v-else text color="deep-purple accent-4">انجام تست</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div>
        <v-card>
          <v-list-item>
            <v-list-item-avatar :color="hexaco?chinese?'green':'cyan':'red'">
              <span v-if="chinese">
                <v-icon>la-check</v-icon>
              </span>
              <span v-else>۴</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">تست ۴</v-list-item-title>
              <v-list-item-subtitle>شخصیت خود را پیدا کن</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</v-card-text>
          <v-card-actions>
            <v-btn v-if="chinese" text color="deep-purple accent-4">مشاهده نتیجه</v-btn>
            <v-btn v-else text color="deep-purple accent-4">انجام تست</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div>
        <v-card>
          <v-list-item>
            <v-list-item-avatar :color="chinese?competition?'green':'cyan':'red'">
              <span v-if="competition">
                <v-icon>la-check</v-icon>
              </span>
              <span v-else>۳</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">تست ۵</v-list-item-title>
              <v-list-item-subtitle>شخصیت خود را پیدا کن</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</v-card-text>
          <v-card-actions>
            <v-btn v-if="competition" text color="deep-purple accent-4">مشاهده نتیجه</v-btn>
            <v-btn v-else text color="deep-purple accent-4">انجام تست</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    user: {
      default: {},
      type: Object as () => any
    }
  },
  mounted() {},
  computed: {
    free() {
      return this.user.personality_tests.find(item => item.test_name == 'free')
    },
    gardner() {
      return this.user.personality_tests.find(
        item => item.test_name == 'gardner'
      )
    },
    hexaco() {
      return this.user.personality_tests.find(
        item => item.test_name == 'hexaco'
      )
    },
    chinese() {
      return this.user.personality_tests.find(
        item => item.test_name == 'chinese'
      )
    },
    competition() {
      return this.user.personality_tests.find(
        item => item.test_name == 'competition'
      )
    }
  }
})
</script>