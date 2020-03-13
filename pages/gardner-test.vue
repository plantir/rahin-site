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
      <h1>تست هوش چندگانه گاردنر</h1>
      <div class="trademark">انجام این تست کمک میکنه تا بفهمی چه قابلیت هایی داری</div>
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
      <GarnderResult :data="result.answer" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import GarnderResult from '@/components/personality_test/gardner_result.vue'
export default Vue.extend({
  components: {
    GarnderResult
  },
  data() {
    return {
      page: 15,
      perPage: 5,
      result: <any>null,
      allQuestions: [
        {
          id: 1,
          title: ' به کتاب و کتابخوانی علاقه ی فراوانی دارم.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 2,
          title: 'می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 3,
          title: 'وقتی چشمانم را می بندم می توان تصاویر واضحی را ببینم.',
          answer: null,
          type: 'visual'
        },
        {
          id: 4,
          title:
            'من به طور منظم حداقل در یک ورزش با فعالیت های بدنی شرکت دارم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 5,
          title: 'افراد اغلب برای مشورت یا راهنمایی گرفتن نزد من می آیند.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 6,
          title:
            'من معمولا زمانی را در تنهایی صرف تفکر، مراقبه و اندیشیدن در مورد سوالات مهم زندگی می کنم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 7,
          title: 'من از صدای دلنشینی برای خواندن برخوردارم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 8,
          title: 'من همه ی انواع حیوانات را دوست دارم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 9,
          title:
            'قبل از نوشتن یا گفتن یا خواندن کلمات، آن ها را در ذهنم می شنوم.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 10,
          title: 'در مدرسه از درس هایی چون ریاضیات و علوم لذت می برم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 11,
          title: 'من نسبت به رنگ هاعلاقمند و حساسم.',
          answer: null,
          type: 'visual'
        },
        {
          id: 12,
          title: 'خیلی مشکل است که برای مدت طولانی آرام در جایی بنشینم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 13,
          title: 'ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 14,
          title:
            'در جلساتی که با رشد و آگاهی¬های فردی افزوده می شود شرکت می¬کنم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 15,
          title: 'آهنگ های ناموزون و سازمان های خارج از ریتم را تشخیص می دهم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 16,
          title: 'دوست دارم چیزهایی را سازمان بندی یا مرتب کنم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 17,
          title:
            'گوش کردن به رادیو و نوار صوتی بیشتر از تلویزیون یا فیلم به من آموزش می دهد.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 18,
          title:
            'از بازی های منطقی معما ها وسایر بازی های فکری (از قبیل شطرنج) لذت می برم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 19,
          title:
            'اغلب برای ضبط محیط اطرافم (در صورت امکان) از دوربین فیلمبرداری استفاده می کنم.',
          answer: null,
          type: 'visual'
        },
        {
          id: 20,
          title:
            'به کارهایی که با دست انجام می شود مانند دوختن، بافتن، نجاری ، مدل سازی، حکاکی علاقمندم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 21,
          title:
            'وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 22,
          title: 'قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیرمواجه شوم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 23,
          title:
            'اغلب به موزیک هایی از رادیو یا ضبط صوت یا سی دی و غیره گوش می¬دهم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 24,
          title: 'من از طبیعت لذت می برم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 25,
          title:
            'من از بازی با کلمات مانند جدول کلمات متقاطع، ، جملات درهم ریخته یا اسم رمز ها لذت می برم.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 26,
          title:
            'دوست دارم آزمایش هایی (اگر...آنگاه) ترتیب دهم، (مثلا اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد)؟',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 27,
          title:
            'من از معما های دیداری مانند پازل ها و تصاویر سه بعدی لذت می برم.',
          answer: null,
          type: 'visual'
        },
        {
          id: 28,
          title:
            'بهترین افکار وقتی به سراغ من می آیند که مشغول یک فعالیت جسمی (از قبیل پیاده روی، دو، شنا و...) هستم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 29,
          title: 'من حداقل سه دوست نزدیک دارم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 30,
          title:
            'یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام می¬دهم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 31,
          title: 'یکی از آلات موسیقی را می نوازم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 32,
          title:
            'من کلکسیونی از قبیل سنگ ها، صدف ها، برگ ها، حشرات، تمبر ، کارت های ورزشی... را جمع می کنم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 33,
          title:
            'من اغراق های زبانی ، ایهام، آهنگ های بی معنی و کلمات دو پهلو را دوست دارم.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 34,
          title: 'من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 35,
          title: 'در خواب رویاهای روشنی می بینم.',
          answer: null,
          type: 'visual'
        },
        {
          id: 36,
          title: 'اغلب دوست دارم اوقات فراغت خود را بیرون خانه سپری کنم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 37,
          title:
            'من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 38,
          title: 'اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 39,
          title: 'زندگی من بدون موسیقی بسیار یکنواخت و بی هیجان خواهد بود.',
          answer: null,
          type: 'musical'
        },
        {
          id: 40,
          title: 'من مرتبا گزارش تغییرات هوایی را کنترل می کنم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 41,
          title: 'دروس ادبیات و اجتماعی از ریاضی و علوم برایم آسان تر هستند.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 42,
          title:
            'درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 43,
          title: 'معمولا قادرم مسیر در یک محل نا آشنا پیدا کنم.',
          answer: null,
          type: 'visual'
        },
        {
          id: 44,
          title:
            'هنگام صحبت تمایل دارم دست های خود را تکان دهم و از ژست ها (مانند تغییر چهره) استفاده کنم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 45,
          title: 'از آموزش دادن دانسته هایم به دیگران لذت می برم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 46,
          title:
            'من از طریق عکس العمل دیگران، دیگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 47,
          title: 'اغلب در طی روز مدام یک آهنگ در ذهنم اجرا می شود.',
          answer: null,
          type: 'musical'
        },
        {
          id: 48,
          title:
            'تفاوت های موجود میان انواع درختان، سنگ ها، پرندگان یا سایر گیاهان و جانوران را به خوبی بیان می کنم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 49,
          title:
            'وقتی در ماشین هستم دوست دارم علایم و تابلوهای تبلیغاتی را بخوانم و به آنها بیشتر از مناظر اطراف توجه کنم.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 50,
          title: 'باور دارم تقریبا برای هر چیزی یک تفسیر منطقی وجود دارد.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 51,
          title: 'من اغلب طراحی می کنم.',
          answer: null,
          type: 'visual'
        },
        {
          id: 52,
          title:
            'من نیاز دارم چیزها را لمس کرده یا نگه دارم تا بتوانم بیشتر درباره آنها یاد بگیرم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 53,
          title: 'من رهبر نامیده می شوم و خودم را چنان تصور می کنم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 54,
          title:
            'من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 55,
          title:
            'با استفاده از یک ابزار موسیقی ساده و یا نواهای مذهبی به راحتی می توانم اوقات فراغت خود را سپری کنم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 56,
          title: 'من از ماهیگیری ، باغبانی، کاشتن گیاهان و آشپزی لذت می برم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 57,
          title:
            'اغلب در مکالماتم به چیزهایی اشاره می کنم که قبلا خوانده یا شنیده ام.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 58,
          title:
            'من می توانم به صورت واضح به مفاهیم غیر ملموس و خیالی فکر کنم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 59,
          title: 'جغرافیا از ریاضی برایم آسان تر است.',
          answer: null,
          type: 'visual'
        },
        {
          id: 60,
          title:
            'من از بازی های پرهیجان (از قبیل پینت بال و رانندگی پر هیجان) لذت می برم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 61,
          title: 'من در میان جمع احساس راحتی می کنم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 62,
          title: 'من با اراده و مستقل هستم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 63,
          title: 'آهنگ های بسیاری از آوازها یا قطعات موسیقی را می دانم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 64,
          title:
            'از مشاهده رویدادهای طبیعی ( مانند ستاره ها، ماه، جزر و مد ) لذت برده و دوست دارم جزییات اطلاعات درباره آنها را بدست آورم.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 65,
          title: 'اغلب افراد معنی کلمات را از من می پرسند.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 66,
          title:
            'به کشف عیوب منطقی کارهایی که به مردم در خانه و محل کار خود انجام می دهند یا در مورد آنها صحبت می کنند، علاقه دارم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 67,
          title:
            'می توانم تصور کنم، (ازنگاه یک پرنده) اجسام از بالا چگونه به نظر می¬رسند.',
          answer: null,
          type: 'visual'
        },
        {
          id: 68,
          title: 'من از نظر جسمی و اندازه اندام های بدنی کاملا متناسبم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 69,
          title:
            'من در فعالیت های مدرسه، مسجد، همسایگان و فعالیت های اجتماعی درگیر می شوم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 70,
          title:
            'من یک دفتر خاطرات روزانه دارم تا اتفاقات زندگی ام را یادداشت کنم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 71,
          title:
            'اگر یک قطعه موزیک را یک یا دوبار بشنوم می توانم به آسانی آن را تکرار کنم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 72,
          title:
            'دوست دارم کتاب ها یا محلاتی را بخوانم یا برنامه های تلویزیونی را ببینم که به طبیعت مربوط می شود.',
          answer: null,
          type: 'naturalistic'
        },
        {
          id: 73,
          title: 'اخیرا چیزی نوشته ام که به آن افتخار می کنم.',
          answer: null,
          type: 'linguistic'
        },
        {
          id: 74,
          title:
            'وقتی چیزی به روش خاصی اندازه گیری ، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.',
          answer: null,
          type: 'mathematical'
        },
        {
          id: 75,
          title:
            'من ترجیح می دهم کتاب، مجلات، روزنامه هایی را بخوانم که تصاویر زیادی دارد.',
          answer: null,
          type: 'visual'
        },
        {
          id: 76,
          title:
            'برای یادگیری مهارت های جدید نیاز دارم تا تمرین انجام دهم، به جای اینکه درباره آن بخوانم یا فیلمی را تماشا کنم.',
          answer: null,
          type: 'kinesthetic'
        },
        {
          id: 77,
          title:
            'من ترجیح می دهم شب تعطیل را در یک میهمانی تا تنها در خانه بمانم.',
          answer: null,
          type: 'interpersonal'
        },
        {
          id: 78,
          title:
            'من ترجیح می دهم یک شغل مستقل داشته باشم تا برای دیگران کار کنم.',
          answer: null,
          type: 'intrapersonal'
        },
        {
          id: 79,
          title:
            'اغلب هنگام کار کردن آواز می خوانم یا زمزمه می کنم یا ضربه می زنم.',
          answer: null,
          type: 'musical'
        },
        {
          id: 80,
          title:
            'در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلل و پر از رفت وآمد.',
          answer: null,
          type: 'naturalistic'
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
          test_name: 'gardner'
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