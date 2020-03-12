<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  > div {
    padding: 16px;
    flex: 0 0 50%;
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
      <!-- <div>
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
      </div>-->
      <div v-for="item in tests" :key="item.level">
        <v-card>
          <v-list-item>
            <v-list-item-avatar :color="find_color(item.level)">
              <span v-if="user.progress_level > item.level">
                <v-icon>la-check</v-icon>
              </span>
              <span v-else>{{item.level | persianDigit}}</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
              <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>{{item.description}}</v-card-text>
          <v-card-actions>
            <v-btn
              v-if="user.progress_level >= item.level"
              :to="user.progress_level > item.level?`result/${item.name}`:`/${item.name}-test`"
              text
              color="deep-purple accent-4"
            >
              <span v-if="user.progress_level > item.level">مشاهده نتیجه</span>
              <span v-else>انجام تست</span>
            </v-btn>
            <span v-else>در انتظار انجام مراحل قبلی</span>
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
  data() {
    return {
      tests: [
        {
          level: 1,
          title: 'تست استعداد های من',
          subtitle: 'تست استعداد های من',
          description:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          name: 'gardner'
        },
        {
          level: 2,
          title: 'تست شخصیت من',
          subtitle: 'تست شخصیت من',
          description:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          name: 'hexaco'
        },
        {
          level: 3,
          title: 'تست علایق من',
          subtitle: 'تست علایق من',
          description:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          name: 'chinese'
        },
        {
          level: 4,
          title: 'تست شغل سازگار با من',
          subtitle: 'تست شغل سازگار با من',
          description:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          name: 'competition'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    find_color(test_level) {
      let progress_level = (<any>this).user.progress_level
      if (progress_level == test_level) {
        return 'cyan'
      }
      if (progress_level < test_level) {
        return 'red'
      }
      if (progress_level > test_level) {
        return 'green'
      }
    }
  },
  computed: {
    free() {
      return this.user.personality_tests.find(item => item.test_name == 'free')
    }
    // gardner() {
    //   return this.user.personality_tests.find(
    //     item => item.test_name == 'gardner'
    //   )
    // },
    // hexaco() {
    //   return this.user.personality_tests.find(
    //     item => item.test_name == 'hexaco'
    //   )
    // },
    // chinese() {
    //   return this.user.personality_tests.find(
    //     item => item.test_name == 'chinese'
    //   )
    // },
    // competition() {
    //   return this.user.personality_tests.find(
    //     item => item.test_name == 'competition'
    //   )
    // }
  }
})
</script>