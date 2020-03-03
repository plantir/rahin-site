<style lang="scss" scoped>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  padding: 15px;
  .question {
    padding: 35px 0 20px;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    .statement {
      font-weight: 500;
      font-size: 1.6rem;
    }
    .decision {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 30px 0 15px;
      .question-caption {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        img {
          max-width: 400px;
        }
      }
      .options {
        flex: 0 0 300px;
        margin: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .option {
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.1s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          .v-icon {
            color: transparent;
          }
          &.max {
            flex: 0 0 55px;
            max-width: 55px;
            height: 55px;
            .v-icon {
              font-size: 25px;
            }
          }
          &.med {
            flex: 0 0 45px;
            max-width: 45px;
            height: 45px;
            .v-icon {
              font-size: 21px;
            }
          }
          &.min {
            flex: 0 0 35px;
            max-width: 35px;
            height: 35px;
            .v-icon {
              font-size: 17px;
            }
          }
          &.agree {
            border: 2px solid #56ac8a;
          }
          &.disagree {
            border: 2px solid #5f394d;
          }
          &.active {
            .v-icon {
              color: #fff;
            }
          }
          &.agree.active,
          &.agree:hover {
            background-color: #56ac8a;
          }
          &.disagree.active,
          &.disagree:hover {
            background-color: #5f394d;
          }

          &.neutral {
            border: 2px solid #9b9faa;
            flex: 0 0 25px;
            max-width: 25px;
            height: 25px;
            &:hover,
            &.active {
              background-color: #9b9faa;
            }
            .v-icon {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
.result {
  padding: 40px 0;
  background: #fff;
}
</style>
<template>
  <div id="free-test">
    <header>
      <h1>تست شخصیت HEXACO</h1>
      <div class="trademark">انجام این تست کمک میکنه تا بفهمی به چه کارایی علاقه داری</div>
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
    <div v-if="!result" class="quiz-chunk" ref="questions">
      <div class="questions">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <div class="statement">{{question.title}}</div>
          <div class="decision">
            <div class="question-caption agree">
              <img v-if="question.caption" :src="question.captions.agreeIcon" alt />
              <span
                v-if="question.caption && question.captions.agreeText"
              >{{question.captions.agreeText }}</span>
              <span>کاملا موافقم</span>
            </div>
            <div class="options">
              <div
                @click="set_answer($event,question,5)"
                :class="{active:question.answer == 5}"
                class="option agree med"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer($event,question,4)"
                :class="{active:question.answer == 4}"
                class="option agree min"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer($event,question,3)"
                :class="{active:question.answer == 3}"
                class="option neutral"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer($event,question,2)"
                :class="{active:question.answer == 2}"
                class="option disagree min"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer($event,question,1)"
                :class="{active:question.answer == 1}"
                class="option disagree med"
              >
                <v-icon>la-check</v-icon>
              </div>
            </div>
            <div class="question-caption disagree">
              <img v-if="question.caption" :src="question.captions.disagreeIcon" alt />

              <span
                v-if="question.captions && question.captions.disagreeText"
              >{{question.captions.disagreeText }}</span>
              <span v-else>کاملا مخالفم</span>
            </div>
          </div>
        </div>
      </div>
      <v-btn v-if="page == lastPage" @click="finish" class="next-page" color="primary">
        <v-icon>la-arrow-right</v-icon>
        <span>تمام</span>
      </v-btn>
      <v-btn v-if="page < lastPage" @click="nextPage" class="next-page" color="primary">
        <v-icon>la-arrow-right</v-icon>
        <span>بعدی</span>
      </v-btn>
      <v-btn v-if="page > 1" @click="previousPage" class="previous-page" color="secondary">
        <span>قبلی</span>
        <v-icon>la-arrow-left</v-icon>
      </v-btn>
    </div>
    <div v-if="result" class="result">
      <HexacoResult :data="result.answer" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import HexacoResult from '@/components/personality_test/hexaco_result.vue'
export default Vue.extend({
  components: { HexacoResult },
  data() {
    return {
      page: 12,
      perPage: 5,
      result: <any>null,
      allQuestions: [
        {
          id: 1,
          title:
            'اگر من از یک نمایشگاه هنری دیدن کنم، به صورت کلی حوصله ام سر می رود.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: true
        },
        {
          id: 2,
          title:
            'از قبل برنامه ریزی می کنم و چیزها را سازماندهی می کنم تا در آخرین لحظه به دست و پا زدن نیفتم.',
          answer: null,
          type: 'conscientiousness',
          reverse: false
        },
        {
          id: 3,
          title:
            'خیلی به ندرت از کسی کینه به دل می گیرم، حتی در مورد کسانی که به من خیلی بد کرده اند.',
          answer: null,
          type: 'agreeableness',
          reverse: false
        },
        {
          id: 4,
          title: 'براساس منطق و دلیل به صورت کلی از خودم راضی هستم.',
          answer: null,
          type: 'extraversion',
          reverse: false
        },
        {
          id: 5,
          title:
            'اگر مجبور به سفر در شرایط بد آب و هوایی بشوم، دچار بیم و هراس می شوم.',
          answer: null,
          type: 'emotionality',
          reverse: false
        },
        {
          id: 6,
          title:
            'برای ترفیع گرفتن یا جلو افتادن در کارم چاپلوسی نمی کنم، حتی اگر فکر کنم که تملق و چاپلوسی در آن شرایط موثر است.',
          answer: null,
          type: 'honestyHumility',
          reverse: false
        },
        {
          id: 7,
          title:
            'علاقه مند به آموختن در مورد تاریخ و مسایل سیاسی کشورهای دیگر هستم.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: false
        },
        {
          id: 8,
          title:
            'وقتی روی دست یابی به هدفی کار می کنم، اغلب خیلی سخت تلاش می کنم.',
          answer: null,
          type: 'conscientiousness',
          reverse: false
        },
        {
          id: 9,
          title:
            'گاهی وقت ها مردم به من می گویند که خیلی از دیگران ایراد می گیرم.',
          answer: null,
          type: 'agreeableness',
          reverse: false
        },
        {
          id: 10,
          title: 'در جلسات گروهی به ندرت نظر خودم را بیان می کنم.',
          answer: null,
          type: 'extraversion',
          reverse: true
        },
        {
          id: 11,
          title: 'گاهی وقت ها نمی توانم جلوی نگرانیم برای مسایل کوچک را بگیرم.',
          answer: null,
          type: 'emotionality',
          reverse: false
        },
        {
          id: 12,
          title:
            'اگر بدانم که احتمالا هیچ وقت گیر نمی افتم، ممکن است بخواهم یک میلیون دلار یا یورو بدزدم.',
          answer: null,
          type: 'honestyHumility',
          reverse: true
        },
        {
          id: 13,
          title:
            'اگر بتوانم یک اثر هنری مثل یک رمان داستانی یا یک آهنگ یا یک نقاشی خلق کنم، از آن کار لذت خواهم برد.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: false
        },
        {
          id: 14,
          title:
            'وقتی روی چیزی کار می کنم، خیلی به جزییات و مسایل ریز دقت نمی کنم.',
          answer: null,
          type: 'conscientiousness',
          reverse: true
        },
        {
          id: 15,
          title: 'گاهی وقت ها مردم به من می گویند که خیلی یکدنده هستم.',
          answer: null,
          type: 'agreeableness',
          reverse: true
        },
        {
          id: 16,
          title:
            'من کارهایی را که همراه با تعاملات اجتماعی باشد را به کارهایی که تنهایی باید انجام داد، ترجیح می دهم.',
          answer: null,
          type: 'extraversion',
          reverse: false
        },
        {
          id: 17,
          title:
            'هرگاه از تجربه دردناکی رنج ببرم به کسی احتیاج دارم که به من احساس آرامش بدهد.',
          answer: null,
          type: 'emotionality',
          reverse: false
        },
        {
          id: 18,
          title: 'داشتن یک عالمه پول برای من اهمیت خاصی ندارد.',
          answer: null,
          type: 'honestyHumility',
          reverse: false
        },
        {
          id: 19,
          title: 'به نظرم توجه به افکار افراطی وقت تلف کردن است.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: true
        },
        {
          id: 20,
          title:
            'صمیم های من بیشتر نتیجه احساسی است که در آن لحظه دارم، شکل می گیرند و نه براساس فکر کردن دقیق.',
          answer: null,
          type: 'conscientiousness',
          reverse: true
        },
        {
          id: 21,
          title: 'دیگران فکر می کنند، من آدمی هستم که زود جوش می آورد.',
          answer: null,
          type: 'agreeableness',
          reverse: true
        },
        {
          id: 22,
          title: 'اغلب روزها احساس سرزندگی و خوش بینی می کنم.',
          answer: null,
          type: 'extraversion',
          reverse: false
        },
        {
          id: 23,
          title: 'وقتی دیگرانی را در حال گریه می بینم، من هم گریه ام می گیرد.',
          answer: null,
          type: 'emotionality',
          reverse: false
        },
        {
          id: 24,
          title: 'فکر می کنم نسبت به متوسط مردم، از احترام بیشتری برخوردارم.',
          answer: null,
          type: 'honestyHumility',
          reverse: true
        },
        {
          id: 25,
          title:
            'اگر فرصت داشته باشیم، در یک کنسرت موسیقی سنتی و کلاسیک شرکت خواهم کرد.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: false
        },
        {
          id: 26,
          title:
            'موقع کار، گاهی در کنار آمدن با بی برنامگی و بی نظمی مشکل دارم.',
          answer: null,
          type: 'conscientiousness',
          reverse: true
        },
        {
          id: 27,
          title:
            'رویکرد من نسبت به افرادی که به من بدی کرده اند این است که «ببخش و فراموش کن».',
          answer: null,
          type: 'agreeableness',
          reverse: false
        },
        {
          id: 28,
          title: 'احساس می کنم آدم محبوبی نیستم.',
          answer: null,
          type: 'extraversion',
          reverse: true
        },
        {
          id: 29,
          title:
            'وقتی پای خطرهای جسمانی به میان می آید، خیلی دچار هراس می شوم.',
          answer: null,
          type: 'emotionality',
          reverse: false
        },
        {
          id: 30,
          title:
            'اگر کارم گیر کسی باشد حتی به بی‌مزه‌ترین جوک هایش هم می خندم.',
          answer: null,
          type: 'honestyHumility',
          reverse: true
        },
        {
          id: 31,
          title:
            'هیچ وقت از گشتن به دنبال مطلبی در فرهنگ ها و دانشنامه ها لذت نبرده ام.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: true
        },
        {
          id: 32,
          title:
            'من فقط حداقل حجم کاری را که برای گذران امور لازم است، انجام می دهم.',
          answer: null,
          type: 'conscientiousness',
          reverse: true
        },
        {
          id: 33,
          title: 'در قضاوت هایم در مورد مردم، مایل به آسان گیری و مدارا هستم.',
          answer: null,
          type: 'agreeableness',
          reverse: false
        },
        {
          id: 34,
          title:
            'در موقعیت های اجتماعی، معمولا اولین کسی هستم که پا پیش می گذارد و اولین حرکت را انجام می دهد.',
          answer: null,
          type: 'extraversion',
          reverse: false
        },
        {
          id: 35,
          title: 'من نسبت به اغلب مردم کمتر نگران هستم.',
          answer: null,
          type: 'emotionality',
          reverse: true
        },
        {
          id: 36,
          title: 'هیچ وقت رشوه قبول نمی کنم حتی اگر خیلی زیاد باشد.',
          answer: null,
          type: 'honestyHumility',
          reverse: false
        },
        {
          id: 37,
          title:
            'مردم اغلبه به من می گویند که من تصویر سازی و تخیل قوی ای دارم.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: false
        },
        {
          id: 38,
          title:
            'من سعی می کنم همیشه در کارم دقیق باشم، حتی وقتی که تحت فشار زمانی هستم.',
          answer: null,
          type: 'conscientiousness',
          reverse: false
        },
        {
          id: 39,
          title:
            'من بیشتر اوقات وقتی دیگران با نظر من مخالفت می کنند در مورد نظرم انعطاف پذیر هستم.',
          answer: null,
          type: 'agreeableness',
          reverse: false
        },
        {
          id: 40,
          title:
            'اولین کاری که در موقعیت های جدید انجام می دهم دوست شدن با افراد است.',
          answer: null,
          type: 'extraversion',
          reverse: false
        },
        {
          id: 41,
          title:
            'بدون نیاز به حمایت عاطفی دیگران، می توانم از عهده موقعیت های سخت بر بیایم.',
          answer: null,
          type: 'emotionality',
          reverse: true
        },
        {
          id: 42,
          title:
            'اگر ممکن باشد، از داشتن اجناس لوکس گران قیمت خیلی لذت می برم.',
          answer: null,
          type: 'honestyHumility',
          reverse: true
        },
        {
          id: 43,
          title: 'از افرادی که دیدگاه های غیر معمول دارند خوشم می آید.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: false
        },
        {
          id: 44,
          title: 'من خیلی اشتباه می کنم چون قبل از عمل، فکر نمی کنم.',
          answer: null,
          type: 'conscientiousness',
          reverse: true
        },
        {
          id: 45,
          title: 'اغلب مردم سریعتر از من عصبانی می شوند.',
          answer: null,
          type: 'agreeableness',
          reverse: false
        },
        {
          id: 46,
          title: 'اغلب مردم سرحال تر و پویا تر از حالت معمول من هستند.',
          answer: null,
          type: 'extraversion',
          reverse: true
        },
        {
          id: 47,
          title:
            'وقتی افراد نزدیک به من برای مدت طولانی از من دور می شوند، سخت احساساتی می شوم.',
          answer: null,
          type: 'emotionality',
          reverse: false
        },
        {
          id: 48,
          title:
            'می خواهم دیگران بدانند که من فردی مهم و و صاحب جایگاه و شان هستم.',
          answer: null,
          type: 'honestyHumility',
          reverse: true
        },
        {
          id: 49,
          title: 'خودم را جزیی از گروه افراد هنرمند و خلاق نمی دانم.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: true
        },
        {
          id: 50,
          title: 'دیگران اغلب به من «کمالگرا» می گویند.',
          answer: null,
          type: 'conscientiousness',
          reverse: false
        },
        {
          id: 51,
          title:
            'حتی وقتی دیگران خیلی اشتباه می کنند، به ندرت چیزی منفی به زبان می آورم.',
          answer: null,
          type: 'agreeableness',
          reverse: false
        },
        {
          id: 52,
          title: 'گاهی وقت ها احساس بی ارزشی می کنم.',
          answer: null,
          type: 'extraversion',
          reverse: true
        },
        {
          id: 53,
          title: 'حتی در شرایط اضطراری، احساس وحشت زدگی نمی کنم.',
          answer: null,
          type: 'emotionality',
          reverse: true
        },
        {
          id: 54,
          title:
            'فقط برای این که کسی کاری برایم انجام بدهد، وانمود نمی کنم که از او خوشم می آید.',
          answer: null,
          type: 'honestyHumility',
          reverse: false
        },
        {
          id: 55,
          title: 'بحث فلسفی به نظرم حوصله سربر است.',
          answer: null,
          type: 'opennessToRxperience',
          reverse: true
        },
        {
          id: 56,
          title:
            'ترجیح می دهم کاری را که به ذهنم می رسد انجام بدهم تا این که به اجرای یک برنامه از قبل ریخته شده بچسبم.',
          answer: null,
          type: 'conscientiousness',
          reverse: true
        },
        {
          id: 57,
          title:
            'وقتی دیگران به من می گویند که اشتباه می کنم، اولین واکنش من جدل کردن با آن ها است.',
          answer: null,
          type: 'agreeableness',
          reverse: true
        },
        {
          id: 58,
          title:
            'وقتی در گروهی هستم، اغلب این من هستم که از طرف گروه صحبت می کنم.',
          answer: null,
          type: 'extraversion',
          reverse: false
        },
        {
          id: 59,
          title:
            'حتی در موقعیت هایی که بیشتر مردم احساساتی می شوند، من غیر احساساتی می مانم.',
          answer: null,
          type: 'emotionality',
          reverse: true
        },
        {
          id: 60,
          title:
            'اگر بدانم که گیر نمی افتم ممکن است که برای جعل پول وسوسه بشوم.',
          answer: null,
          type: 'honestyHumility',
          reverse: false
        }
      ]
    }
  },
  watch: {
    page: {
      handler() {
        this.$scrollTo(this.$refs.questions, 1000, { offset: -150 })
      }
    }
  },
  methods: {
    set_answer(e, question, value) {
      console.log(e)
      let next = e.target.closest('.question').nextElementSibling
      question.answer = value
      this.$scrollTo(next, 1000, { offset: -150 })
      this.$axios
    },
    async finish() {
      let loader = this.$loader.show('#app')
      try {
        let { data } = await this.$service.personalityTest.answer({
          questions: this.allQuestions,
          test_name: 'hexaco'
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
    },
    lastPage(): number {
      return Math.ceil(this.allQuestions.length / this.perPage)
    },
    percentage(): number {
      return (((this.page - 1) * this.perPage) / this.allQuestions.length) * 100
    }
  }
})
</script>