<style lang="scss" scoped>
// #free-test {
//   background: #fff;
// }

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
    margin: 10px 0 20px;
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
  padding: 15px;
  .question {
    padding: 0 0 20px;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    min-height: 500px;
    .decision {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      margin: 30px 0 15px;
      .question-caption {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 0 0 calc(50% - 250px - 15px);
        font-size: 2rem;
        font-weight: 600;
        color: #666;
        img {
          width: 400px;
          max-width: 100%;
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
    <testHeader
      title="تست شخصیت رایگان"
      subtitle="انجام این تست کمک میکنه تا بفهمی چجور شخصیتی داری"
      :percentage="percentage"
    />

    <div class="quiz-chunk">
      <div class="questions">
        <transition
          mode="out-in"
          appear
          enter-active-class="animated flipInX"
          leave-active-class="animated fadeOut"
          tag="div"
        >
          <div :key="page" class="question">
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
        </transition>
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
import testHeader from '@/components/personality_test/test_header.vue'
export default Vue.extend({
  components: { testHeader },
  data() {
    return {
      percentage: 0,
      page: 1,
      perPage: 1,
      allQuestions: [
        {
          id: 1,
          captions: {
            agreeText: 'هیچگاه دیر سر قرار حاضر نمی شوم',
            agreeIcon: '/personality/free-test/time+.png',
            disagreeText: 'در قرار ملاقات ها چندان مقید نیستم',
            disagreeIcon: '/personality/free-test/time-.png'
          },
          answer: null
        },
        {
          id: 2,
          captions: {
            agreeText: 'بسیار رقابتگر هستم',
            agreeIcon: '/personality/free-test/reghabat-.png',
            disagreeText: 'علاقمند به رقابت با دیگران نیستم',
            disagreeIcon: '/personality/free-test/reghabat+.png'
          },
          answer: null
        },
        {
          id: 3,
          captions: {
            agreeText: 'در صحبت با دیگران به آنها مجال حرف زدن نمیدهم',
            agreeIcon: '/personality/free-test/shenava-.png',
            disagreeText: 'در صحبت با دیگران شونده خوبی هستم',
            disagreeIcon: '/personality/free-test/shenava+.png'
          },
          answer: null
        },
        {
          id: 4,
          captions: {
            agreeText: 'همیشه عجله میکنم',
            agreeIcon: '/personality/free-test/ajale+.png',
            disagreeText: 'هیچگاه عجله ندارم حتی تحت فشار',
            disagreeIcon: '/personality/free-test/ajale-.png'
          },
          answer: null
        },
        {
          id: 5,
          captions: {
            agreeText: 'وقتی در انتظار به سر میبرم بی صبری میکنم',
            agreeIcon: '/personality/free-test/relax+.png',
            disagreeText: 'می توانم صبورانه در انتظار باشم',
            disagreeIcon: '/personality/free-test/relax-.png'
          },
          answer: null
        },
        {
          id: 6,
          captions: {
            agreeText: 'در کارها تمام انرژی ام را صرف میکنم',
            agreeIcon: '/personality/free-test/energy+.png',
            disagreeText: 'در کارها چندان جدی نیستم',
            disagreeIcon: '/personality/free-test/energy-.png'
          },
          answer: null
        },
        {
          id: 7,
          captions: {
            agreeText: 'سعی میکنم چندین کار هم زمان انجام بدهم',
            agreeIcon: '/personality/free-test/hamzaman+.png',
            disagreeText: 'کارها را به نوبت انجام میدهم',
            disagreeIcon: '/personality/free-test/hamzaman-.png'
          },
          answer: null
        },
        {
          id: 8,
          captions: {
            agreeText: 'با تاکید صحبت میکنم',
            agreeIcon: '/personality/free-test/takid-.png',
            disagreeText: 'با تامل و آرام صحبت میکنم',
            disagreeIcon: '/personality/free-test/takid+.png'
          },
          answer: null
        },
        {
          id: 9,
          captions: {
            agreeText: 'میخواهم در هر کاری که انجام میدهم دیگران با خبر شوند',
            agreeIcon: '/personality/free-test/digaran+.png',
            disagreeText: 'در انجام هر کاری به فکر رضایت خود هستم',
            disagreeIcon: '/personality/free-test/digaran-.png'
          },
          answer: null
        },
        {
          id: 10,
          captions: {
            agreeText: 'در غذا خوردن و راه رفتن و ... سریع هستم',
            agreeIcon: '/personality/free-test/sari+.png',
            disagreeText: 'کارها را آرام و آهسته انجام میدهم',
            disagreeIcon: '/personality/free-test/sari-.png'
          },
          answer: null
        },
        {
          id: 11,
          captions: {
            agreeText: 'فردی جوشی و پرتنش هستم',
            agreeIcon: '/personality/free-test/jushi-.png',
            disagreeText: 'فردی صبور و آرام هستم',
            disagreeIcon: '/personality/free-test/jushi+.png'
          },
          answer: null
        },
        {
          id: 12,
          captions: {
            agreeText: 'احساساتم را برای دیگران بیان نمیکنم',
            agreeIcon: '/personality/free-test/ehsasat+.png',
            disagreeText: 'احساساتم را به سادگی بیان میکنم',
            disagreeIcon: '/personality/free-test/ehsasat-.png'
          },
          answer: null
        },
        {
          id: 13,
          captions: {
            agreeText: 'به غیر از شغلم سرگرمی دیگری ندارم',
            agreeIcon: '/personality/free-test/shoql-.png',
            disagreeText: 'سرگرمی های بسیاری دارم',
            disagreeIcon: '/personality/free-test/shoql+.png'
          },
          answer: null
        },
        {
          id: 14,
          captions: {
            agreeText: 'بلند پرواز بوده و به دنبال مقام هستم',
            agreeIcon: '/personality/free-test/bolandparvaz+.png',
            disagreeText: 'به همین شغل فعلی راضیم',
            disagreeIcon: '/personality/free-test/bolandparvaz-.png'
          },
          answer: null
        }
      ]
    }
  },
  methods: {
    set_answer(question, value) {
      question.answer = value
      setTimeout(() => {
        this.percentage = (this.page / this.allQuestions.length) * 100
        if (this.page < this.allQuestions.length) {
          this.page += 1
        }
      }, 100)
    },
    async finish() {
      let { data } = await this.$service.personalityTest.answer({
        questions: this.allQuestions,
        test_name: 'free'
      })
      this.$router.push(`personality/type${data.answer.type}`)
      console.log(data)
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