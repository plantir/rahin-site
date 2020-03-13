<style lang="scss" scoped>
// #free-test {
//   background: #fff;
// }
header {
  background-color: #57ae8c;
  position: relative;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  h1 {
    font-size: 4.1em;
    font-weight: 600;
  }
  .trademark {
    font-size: 1.1em;
    sup {
      margin-left: 4px;
    }
  }
}
.tips {
  display: flex;
  align-items: center;
  position: relative;
  padding: 70px 15px 15px;
  padding-bottom: 30px;
  justify-content: center;
  .tip {
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 450px;
    margin: 0 15px;
    padding: 30px 0;

    border-bottom: 6px solid;
    border-radius: 10px;
    position: relative;
    z-index: 4;
    &.first {
      background-color: rgba(#f4e3ec, 0.8);
      border-color: #b8a8b0;
    }
    &.second {
      background-color: rgba(#ddeeee, 0.8);
      border-color: #b0d6d7;
    }
    &.third {
      background-color: rgba(#eceadb, 0.8);
      border-color: #eee191;
    }
    .text {
      .title {
        font-weight: 600;
        font-size: 1.2em;
        text-align: center;
        color: #576071;
        margin-bottom: 10px;
      }
      .subtitle {
        text-align: center;
        line-height: 1.5;
        font-size: 0.9em;
        color: #7c7e83;
      }
    }
    img {
      width: 90px;
      margin-bottom: 25px;
    }
  }
  .shape {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 325px;
    .c1 {
      fill: #57ae8c;
    }
  }
}
.progress-wrapper {
  background-color: #f5f5f5;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .percentage {
    color: #9b9faa;
    font-size: 1.3rem;
    margin-left: 8px;
  }
  .progress-bar {
    flex: 0 0 60%;
  }
}
.quiz-chunk {
  background: #fff;
  text-align: center;
  .next-page,
  .previous-page {
    display: inline-flex;
    width: 350px;
    height: 70px;
    border-radius: 60px;
    font-size: 24px;
    margin: 40px 0;
    .v-icon {
      position: absolute;
      right: 8px;
      font-size: 35px;
    }
  }
  .previous-page .v-icon {
    left: 8px;
    right: auto;
  }
}
.questions {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  position: relative;
  .back {
    position: absolute;
    top: 26px;
    left: 0;
  }
  .question {
    padding: 35px 0 20px;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    .statement {
      font-size: 1.75rem;
      font-weight: 600;
      margin: 16px 0;
    }
    .decision {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 30px 0 15px;
      > span {
        font-size: 2rem;
        font-weight: 600;
        color: #9b9faa;
        opacity: 0.8;
      }
      .v-btn {
        flex: 0 0 46%;
        height: 80px;
        span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        // .v-icon {
        //   opacity: 0;
        //   transition: opacity 0.1s ease-in-out;
        //   &.show {
        //     opacity: 1;
        //   }
        // }
      }
    }
  }
  .result {
    padding: 10px 40px;
  }
}
</style>
<template>
  <div id="free-test">
    <header>
      <h1>تست رغبت های شغلی</h1>
      <div class="trademark">انجام این تست کمک میکنه تا بفهمی تو چه شغلی پیشرفت میکنی</div>
    </header>
    <section class="tips">
      <div class="tip first">
        <img src="https://static.neris-assets.com/images/test-header-3.svg" />
        <div class="text">
          <div class="title">همرو کامل کن</div>
          <div class="subtitle">سعی کن هیچ پاسخ "بی‌طرفانه‌ای" باقی نگذاری</div>
        </div>
      </div>
      <div class="tip second">
        <img src="https://static.neris-assets.com/images/test-header-2.svg" />
        <div class="text">
          <div class="title">خودت باش</div>
          <div class="subtitle">صادقانه پاسخ بده حتی اگر از پاسخ خوشت نمیاد</div>
        </div>
      </div>
      <div class="tip third">
        <img src="https://static.neris-assets.com/images/test-header-1.svg" />
        <div class="text">
          <div class="title">سریع و آسون</div>
          <div class="subtitle">کمتر از 12 دقیقه طول میکشه.</div>
        </div>
      </div>
      <svg viewBox="0 0 600 105" preserveAspectRatio="none" class="shape">
        <polygon
          points="600 61.82 476.72 105 351 74.68 157 105 0 55.39 0 -87 600 -87 600 61.82"
          class="c1"
        />
      </svg>
      <div class="shadow"></div>
    </section>
    <div v-if="!result" class="progress-wrapper">
      <strong class="percentage">{{ Math.ceil(percentage) | persianDigit }}٪</strong>
      <v-progress-linear class="progress-bar" v-model="percentage" height="5" reactive></v-progress-linear>
    </div>

    <div v-if="!result" class="quiz-chunk">
      <div class="questions">
        <v-btn @click="previousPage" color="grey" class="back" text>
          <span>سوال قبلی</span>
          <v-icon class="mr-3">la-arrow-left</v-icon>
        </v-btn>
        <transition
          mode="out-in"
          appear
          enter-active-class="animated flipInX"
          leave-active-class="animated fadeOut"
          tag="div"
        >
          <div :key="page" class="question">
            <div class="statement">{{question.title}}</div>
            <div class="decision">
              <v-btn
                @click="set_answer(question,1)"
                dark
                color="green"
                :outlined="question.answer != 1"
              >
                <v-icon size="30" class="ml-4">la-check</v-icon>
                <span>دوست دارم</span>
              </v-btn>
              <v-btn
                @click="set_answer(question,0)"
                dark
                color="red"
                :outlined="question.answer != 0"
              >
                <v-icon size="30" class="ml-4">la-times</v-icon>
                <span>دوست ندارم</span>
              </v-btn>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <v-container v-if="result">
      <v-layout row wrap>
        <v-flex xs3></v-flex>
        <v-flex xs6>
          <v-card>
            <div class="result">
              <ChineseResult :data="result.answer" />
            </div>
          </v-card>
        </v-flex>
        <v-flex xs4></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ChineseResult from '@/components/personality_test/chinese_result.vue'
export default Vue.extend({
  components: { ChineseResult },
  data() {
    return {
      percentage: 0,
      page: 50,
      perPage: 1,
      result: <any>null,
      allQuestions: [
        {
          id: 1,
          title: 'طراحی بسته‌بندی یک محصول جدید',
          answer: null,
          type: 'A'
        },
        {
          id: 2,
          title: 'طراحی آرم یک شرکت یا یک سازمان',
          answer: null,
          type: 'A'
        },
        { id: 3, title: 'ساخت پرتره یا عکس', answer: null, type: 'A' },
        {
          id: 4,
          title: 'ترانه‌سرایی یا تنظیم هر نوع موسیقی',
          answer: null,
          type: 'A'
        },
        {
          id: 5,
          title: 'طراحی مبلمان، لباس، یا پوستر',
          answer: null,
          type: 'A'
        },
        {
          id: 6,
          title: 'طراحی صحنه برای یک نمایشنامه',
          answer: null,
          type: 'A'
        },
        {
          id: 7,
          title:
            'تماشای فیلم‌های مستند یا برنامه‌های تلوزیون درباره حیوانات یا دیگر مخلوقات',
          answer: null,
          type: 'B'
        },
        {
          id: 8,
          title: 'مشاهده یا ثبت روند رشد گیاهان',
          answer: null,
          type: 'B'
        },
        {
          id: 9,
          title: 'گردآوری یا ساخت نمونه‌های زیستی',
          answer: null,
          type: 'B'
        },
        {
          id: 10,
          title: 'ردیابی یا رصد کردن حیوانات وحشی',
          answer: null,
          type: 'B'
        },
        {
          id: 11,
          title: 'پرورش انواع گوناگون حیوانات یا گیاهان',
          answer: null,
          type: 'B'
        },
        {
          id: 12,
          title: 'مشاهده یا ثبت عادات حیوانات کوچک مثل مورچه',
          answer: null,
          type: 'B'
        },
        {
          id: 13,
          title: 'مرتب نگه داشتن یا به‌ روز کردن یک دفترچه تلفن',
          answer: null,
          type: 'C'
        },
        {
          id: 14,
          title: 'تهیه موجودی تدارکات یا محصولات',
          answer: null,
          type: 'C'
        },
        {
          id: 15,
          title: 'چک کردن اوراق یا محصولات برای رفع خطاها یا نقایص',
          answer: null,
          type: 'C'
        },
        {
          id: 16,
          title: 'حفظ سوابق مشروح هزینه‌ها',
          answer: null,
          type: 'C'
        },
        {
          id: 17,
          title: 'مدیریت امور روزانه در اداره',
          answer: null,
          type: 'C'
        },
        {
          id: 18,
          title: 'طبقه‌بندی آیتم‌ها یا مرتب کردن انواع مختلف آیتم‌ها',
          answer: null,
          type: 'C'
        },
        {
          id: 19,
          title: 'اجرای رقص یا اپرای سنتی چینی برای دیگران',
          answer: null,
          type: 'X'
        },
        {
          id: 20,
          title: 'تبدیل شدن به یک چهره عمومی (مردمی)',
          answer: null,
          type: 'X'
        },
        {
          id: 21,
          title: 'رئیس تشریفات یا محری یک شو یا برنامه تلوزیونی بودن',
          answer: null,
          type: 'X'
        },
        {
          id: 22,
          title: 'لباس پوشیدن بر خلاف عرف جامعه',
          answer: null,
          type: 'X'
        },
        {
          id: 23,
          title: 'استفاده از عکس و تصویر خود برای تبلیغ یک محصول یا شرکت',
          answer: null,
          type: 'X'
        },
        {
          id: 24,
          title: 'حضور در یک رویداد به عنوان اعطاکننده جایزه',
          answer: null,
          type: 'X'
        },
        {
          id: 25,
          title: 'کشف علل یک پدیده یا یک حادثه (تصادف)',
          answer: null,
          type: 'I'
        },
        {
          id: 26,
          title: 'تایید یک نظریه علمی با عمل',
          answer: null,
          type: 'I'
        },
        {
          id: 27,
          title: 'تفکر در باب اصول نحوه تدوین یا تغییر چیزها',
          answer: null,
          type: 'I'
        },
        {
          id: 28,
          title:
            'آگاهی از نظریه‌های علمی متفاوت از طریق مطالعه کتاب یا سخنرانی',
          answer: null,
          type: 'I'
        },
        {
          id: 29,
          title:
            'مطالعه عمقی یک نظریه معین از طریق مجموعه‌ای از منابع یا داده‌ها',
          answer: null,
          type: 'I'
        },
        {
          id: 30,
          title: 'به کارگیری علم برای حل مسائل عملی',
          answer: null,
          type: 'I'
        },
        { id: 31, title: 'حفظ یک شبکه کامپیوتری', answer: null, type: 'O' },
        {
          id: 32,
          title: 'شکل‌دهی فلز یا پلاستیک با ابزارها',
          answer: null,
          type: 'O'
        },
        {
          id: 33,
          title: 'تعمیرات پوشاک یا تجهیزات الکترونیکی',
          answer: null,
          type: 'O'
        },
        {
          id: 34,
          title: 'راه‌اندازی ماشین‌آلات و دستگاه‌ها',
          answer: null,
          type: 'O'
        },
        {
          id: 35,
          title: 'مونتاژ ابزارها یا وسایل اندازه‌گیری دقیق',
          answer: null,
          type: 'O'
        },
        {
          id: 36,
          title:
            'تعمیر کامپیوتر یا دیگر تجهیزات به منظور ارتقاء سطح کارآمدی آنها',
          answer: null,
          type: 'O'
        },
        {
          id: 37,
          title: 'صحبت با دیگران برای کمک به شاد شدن آنها',
          answer: null,
          type: 'S'
        },
        {
          id: 38,
          title: 'کمک به درس‌های بچه‌های همسایه',
          answer: null,
          type: 'S'
        },
        {
          id: 39,
          title: 'مراقبت از افراد ضعیف، بیمار، یا تنها',
          answer: null,
          type: 'S'
        },
        { id: 40, title: 'کار برای یک خیریه', answer: null, type: 'S' },
        {
          id: 41,
          title: 'همراهی کردن با سالخورده‌های همسایه',
          answer: null,
          type: 'S'
        },
        {
          id: 42,
          title:
            'تشیوق همکاران زمانی که احساس سرخوردگی می‌کنند یا با مشکلاتی مواجه می‌شوند',
          answer: null,
          type: 'S'
        },
        {
          id: 43,
          title: 'برنامه‌ریزی برای تعیین مسیر رشد یک تیم یا شرکت',
          answer: null,
          type: 'E'
        },
        {
          id: 44,
          title: 'پیاده‌سازی تحلیل سرمایه‌گذاری برای یک شرکت',
          answer: null,
          type: 'E'
        },
        {
          id: 45,
          title: 'کمک به بازاریابی فعالیت‌های اجتماعی',
          answer: null,
          type: 'E'
        },
        {
          id: 46,
          title: 'تخصیص منابع انسانی، مادی، یا مالی یک سازمان',
          answer: null,
          type: 'E'
        },
        {
          id: 47,
          title: 'ملاقات با مجریان یا رهبران مهم',
          answer: null,
          type: 'E'
        },
        {
          id: 48,
          title: ' توجه به حراجی‌های شرکت‌های فهرست‌شده',
          answer: null,
          type: 'E'
        },
        {
          id: 49,
          title:
            'انجام ورزش‌های متهورانه مثل اسکیت با کفش بلبرینگ‌دار یا حرکات محیرالعقول با دوچرخه',
          answer: null,
          type: 'V'
        },
        { id: 50, title: 'کشف مناطق غیرقابل‌سکونت', answer: null, type: 'V' },
        {
          id: 51,
          title: 'بالا رفتن از یک قله خطرناک',
          answer: null,
          type: 'V'
        },
        {
          id: 52,
          title: 'مشارکت در عملیات نجات مخاطره‌آمیز مثل اطفاء حریق',
          answer: null,
          type: 'V'
        },
        {
          id: 53,
          title: 'تبدیل شدن به راننده مسابقه حرفه‌ای',
          answer: null,
          type: 'V'
        },
        { id: 54, title: 'انجام تجسس‌های جنایی', answer: null, type: 'V' }
      ]
    }
  },
  methods: {
    set_answer(question, value) {
      question.answer = value
      if (this.page == this.allQuestions.length) {
        this.finish()
      }
      setTimeout(() => {
        this.percentage = (this.page / this.allQuestions.length) * 100
        if (this.page < this.allQuestions.length) {
          this.page += 1
        }
      }, 100)
    },
    async finish() {
      let loader = this.$loader.show('#app')
      try {
        let { data } = await this.$service.personalityTest.answer({
          questions: this.allQuestions,
          test_name: 'chinese'
        })
        this.result = data
      } catch (error) {
        this.$toast.error().showSimple('خطایی رخ داده است')
      }
      loader.hide()
    },
    nextPage() {
      this.page += 1
    },
    previousPage() {
      this.page -= 1
    }
  },
  computed: {
    question(): any {
      let startIndex = (this.page - 1) * this.perPage
      let endIndex = startIndex + this.perPage
      return this.allQuestions[this.page - 1]
    },
    questions(): any[] {
      let startIndex = (this.page - 1) * this.perPage
      let endIndex = startIndex + this.perPage
      return this.allQuestions.slice(startIndex, endIndex)
    }
  }
})
</script>