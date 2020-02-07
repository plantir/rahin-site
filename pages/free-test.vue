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
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  .question {
    padding: 35px 0 20px;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
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
          max-width: 240px;
        }
      }
      .options {
        flex: 0 0 500px;
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
</style>
<template>
  <div id="free-test">
    <header>
      <h1>تست شخصیت رایگان</h1>
      <div class="trademark">
        <sup>®</sup>
        قلم چی
      </div>
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
    <div class="progress-wrapper">
      <strong class="percentage">{{ Math.ceil(percentage) | persianDigit }}٪</strong>
      <v-progress-linear class="progress-bar" v-model="percentage" height="5" reactive></v-progress-linear>
    </div>
    <div class="quiz-chunk">
      <div class="questions">
        <div class="question" v-for="(question,i) in questions" :key="i">
          <div class="statement"></div>
          <div class="decision">
            <div class="question-caption agree">
              <img :src="question.captions.agreeIcon" alt />
              <span>{{question.captions.agreeText}}</span>
            </div>
            <div class="options">
              <div
                @click="set_answer(question,7)"
                :class="{active:question.answer == 7}"
                class="option agree max"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer(question,6)"
                :class="{active:question.answer == 6}"
                class="option agree med"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer(question,5)"
                :class="{active:question.answer == 5}"
                class="option agree min"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer(question,4)"
                :class="{active:question.answer == 4}"
                class="option neutral"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer(question,3)"
                :class="{active:question.answer == 3}"
                class="option disagree min"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer(question,2)"
                :class="{active:question.answer == 2}"
                class="option disagree med"
              >
                <v-icon>la-check</v-icon>
              </div>
              <div
                @click="set_answer(question,1)"
                :class="{active:question.answer == 1}"
                class="option disagree max"
              >
                <v-icon>la-check</v-icon>
              </div>
            </div>
            <div class="question-caption disagree">
              <img :src="question.captions.disagreeIcon" alt />
              <span>{{question.captions.disagreeText}}</span>
            </div>
          </div>
        </div>
      </div>
      <v-btn v-if="Math.ceil(percentage) == 100" @click="finish" class="next-page" color="primary">
        <v-icon>la-arrow-right</v-icon>
        <span>تمام</span>
      </v-btn>
      <v-btn v-if="page > 1" @click="previousPage" class="previous-page" color="secondary">
        <span>قبلی</span>
        <v-icon>la-arrow-left</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      percentage: 0,
      page: 1,
      perPage: 1,
      allQuestions: [
        {
          captions: {
            agreeText: 'هیچگاه دیر سر قرار حاضر نمی شوم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'در قرار ملاقات ها چندان مقید نیستم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'بسیار رقابتگر هستم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'علاقمند به رقابت با دیگران نیستم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'در صحبت با دیگران به آنها مجال حرف زدن میدهم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'در صحبت با دیگران شونده خوبی هستم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'همیشه عجله میکنم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'هیچگاه عجله ندارم حتی تحت فشار',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'وقتی در انتظار به سر میبرم بی صبری میکنم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'می توانم صبورانه در انتظار باشم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'در کارها تمام انرژی ام را صرف میکنم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'در کارها چندان جدی نیستم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'سعی میکنم چندین کار هم زمان انجام بدهم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'کارها را به نوبت انجام میدهم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'با تاکید صحبت میکنم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'با تامل و آرام صحبت میکنم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'میخواهم در هر کاری که انجام میدهم دیگران با خبر شوند',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'در انجام هر کاری به فکر رضایت خود هستم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'در غذا خوردن و راه رفتن و ... سریع هستم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'کارها را آرام و آهسته انجام میدهم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'فردی جوشی و پرتنش هستم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'فردی صبور و آرام هستم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'احساساتم را برای دیگران بیان نمیکنم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'احساساتم را به سادگی بیان میکنم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'به غیر از شغلم سرگرمی دیگری ندارم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'سرگرمی های بسیاری دارم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        },
        {
          captions: {
            agreeText: 'بلند پرواز بوده و به دنبال مقام هستم',
            agreeIcon: '/personality/free-test/time+.jpeg',
            disagreeText: 'به همین شغل فعلی راضیم',
            disagreeIcon: '/personality/free-test/time-.jpeg'
          },
          answer: null
        }
      ]
    }
  },
  methods: {
    set_answer(question, value) {
      question.answer = value
      this.percentage = (this.page / this.allQuestions.length) * 100
      if (this.page < this.allQuestions.length) {
        this.page += 1
      }
    },
    finish() {
      alert('با موفقیت ثبت شد')
    },
    nextPage() {
      this.page += 1
    },
    previousPage() {
      this.page -= 1
    }
  },
  computed: {
    questions(): any[] {
      let startIndex = (this.page - 1) * this.perPage
      let endIndex = startIndex + this.perPage
      return this.allQuestions.slice(startIndex, endIndex)
    }
  }
})
</script>