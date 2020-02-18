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
        .v-icon {
          opacity: 0;
          transition: opacity 0.1s ease-in-out;
          &.show {
            opacity: 1;
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
      <h1>تست رقبت</h1>
      <div
        class="trademark"
      >انجام این تست کمک میکنه تا بفهمی چه شغلی به دردت میخوره و بهش علاقه داری</div>
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
            <div class="decision">
              <v-btn @click="set_answer(question,question.jobs[0].type)" color="primary">
                <v-icon
                  :class="{show:question.answer == question.jobs[0].type}"
                  size="40"
                  class="ml-4"
                >la-check-circle</v-icon>
                <span>{{question.jobs[0].title}}</span>
              </v-btn>
              <span>یا</span>
              <v-btn @click="set_answer(question,question.jobs[1].type)" color="primary">
                <v-icon
                  :class="{show:question.answer == question.jobs[1].type}"
                  size="40"
                  class="ml-4"
                >la-check-circle</v-icon>
                <span>{{question.jobs[1].title}}</span>
              </v-btn>
            </div>
          </div>
        </transition>
      </div>
      <!-- <v-btn v-if="Math.ceil(percentage) == 100" @click="finish" class="next-page" color="primary">
        <v-icon>la-arrow-right</v-icon>
        <span>تمام</span>
      </v-btn>
      <v-btn v-if="page > 1" @click="previousPage" class="previous-page" color="secondary">
        <span>قبلی</span>
        <v-icon>la-arrow-left</v-icon>
      </v-btn>-->
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
          id: 1,
          jobs: [
            { title: 'کار با یک ماشین چاپ', type: 'A' },
            { title: 'مطالعه درباره علل زمین‌لرزه', type: 'B' }
          ],
          answer: null
        },
        {
          id: 2,
          jobs: [
            { title: 'ساخت آیتم‌های سه‌بعدی', type: 'E' },
            { title: 'تحلیل یا آنالیز دست‌خط‌ها', type: 'D' }
          ],
          answer: null
        },
        {
          id: 3,
          jobs: [
            { title: 'ساخت کابینت آشپزخانه', type: 'L' },
            { title: 'تجدید یک رهن/یا گرو', type: 'N' }
          ],
          answer: null
        },
        {
          id: 4,
          jobs: [
            { title: 'کاشت و برداشت محصول', type: 'C' },
            { title: 'تعویض شیشه و سپر ماشین', type: 'R' }
          ],
          answer: null
        },
        {
          id: 5,
          jobs: [
            { title: 'طراحی سیستم اسپرینکلر داخلی', type: 'B' },
            { title: 'راه‌اندازی یک کارخانه ماشین دوزندگی', type: 'F' }
          ],
          answer: null
        },
        {
          id: 6,
          jobs: [
            { title: 'خوانندگی در یک کنسرت', type: 'A' },
            { title: 'هدایت تیک‌آف/لندینگ هواپیما', type: 'R' }
          ],
          answer: null
        },
        {
          id: 7,
          jobs: [
            { title: 'تحلیل گزاراشات و ثبت موارد', type: 'E' },
            { title: 'راه‌اندازی و کار با یک دستگاه', type: 'F' }
          ],
          answer: null
        },
        {
          id: 8,
          jobs: [
            { title: 'تدوین سیاست‌های کاری شخصی', type: 'G' },
            { title: 'تربیت معلمین', type: 'Q' }
          ],
          answer: null
        },
        {
          id: 9,
          jobs: [
            { title: 'کار با یک صندوق ثبت/شمارش پول', type: 'G' },
            { title: 'جمع‌آوری تکه‌سنگ', type: 'B' }
          ],
          answer: null
        },
        {
          id: 10,
          jobs: [
            { title: 'کار در یک اداره', type: 'G' },
            { title: 'پاسخگویی به سوالات مشتری', type: 'H' }
          ],
          answer: null
        },
        {
          id: 11,
          jobs: [
            { title: 'نگهبانی در یک ساختمان اداری', type: 'D' },
            { title: 'اداره یک فروشگاه بزرگ', type: 'H' }
          ],
          answer: null
        },
        {
          id: 12,
          jobs: [
            { title: 'شروع یک کسب و کار', type: 'G' },
            { title: 'طراحی یک نقشه پیش ساخته/اولیه', type: 'L' }
          ],
          answer: null
        },
        {
          id: 13,
          jobs: [
            { title: 'گزارش نویسی', type: 'D' },
            { title: 'کمک به زندانیان سابق برای پیدا کردن کار', type: 'J' }
          ],
          answer: null
        },
        {
          id: 14,
          jobs: [
            { title: 'نویسندگی برای یک روزنامه', type: 'A' },
            { title: 'کار با ماشین‌حساب', type: 'G' }
          ],
          answer: null
        },
        {
          id: 15,
          jobs: [
            { title: 'ارزیابی پیشرفت دانش‌آموزان', type: 'M' },
            { title: 'طراحی هواپیما', type: 'L' }
          ],
          answer: null
        },
        {
          id: 16,
          jobs: [
            { title: 'طراحی بزرگراه', type: 'L' },
            { title: 'طراحی دروس تحصیلی', type: 'M' }
          ],
          answer: null
        },
        {
          id: 17,
          jobs: [
            { title: 'تعمیر خانه‌های قدیمی', type: 'L' },
            { title: 'مراقبت از کودکان کم سال', type: 'M' }
          ],
          answer: null
        },
        {
          id: 18,
          jobs: [
            { title: 'مکان‌یابی یک فرد مفقودشده', type: 'D' },
            { title: 'راهنمایی یک تور بین‌المللی', type: 'I' }
          ],
          answer: null
        },
        {
          id: 19,
          jobs: [
            { title: 'حل و رفع مسائل فنی', type: 'P' },
            { title: 'راهنمایی معنوی دیگران', type: 'J' }
          ],
          answer: null
        },
        {
          id: 20,
          jobs: [
            { title: 'بررسی مانده چک بانکی', type: 'N' },
            { title: 'عکس‌برداری با اشعه ایکس', type: 'O' }
          ],
          answer: null
        },
        {
          id: 21,
          jobs: [
            { title: 'برنامه‌نویسی کامپیوتر', type: 'P' },
            { title: 'تربیت حیوانات', type: 'Q' }
          ],
          answer: null
        },
        {
          id: 22,
          jobs: [
            {
              title: 'تقبل مسئولیت بازسازی جنگل‌ها (کاشت مجدد گونه‌ها)',
              type: 'C'
            },
            { title: 'بازی در یک شو یا فیلم تلوزیونی', type: 'A' }
          ],
          answer: null
        },
        {
          id: 23,
          jobs: [
            { title: 'کشف علل یک مورد دزدی', type: 'D' },
            { title: 'کنترل کیفیت محصولات', type: 'F' }
          ],
          answer: null
        },
        {
          id: 24,
          jobs: [
            { title: 'ساخت یک فرودگاه', type: 'E' },
            { title: 'حفظ ثبت اسناد معاملاتی شرکت', type: 'G' }
          ],
          answer: null
        },
        {
          id: 25,
          jobs: [
            { title: 'مرتب کردن ابزاآلات ریز/کوچک', type: 'F' },
            { title: 'طراحی وب‌سایت', type: 'P' }
          ],
          answer: null
        },
        {
          id: 26,
          jobs: [
            { title: 'تدریس خصوصی به دانش آموزان', type: 'M' },
            { title: 'کار در باغ‌وحش', type: 'Q' }
          ],
          answer: null
        },
        {
          id: 27,
          jobs: [
            { title: 'مراقبت از کودکان کم', type: 'M' },
            { title: 'مکان‌یابی یک فرد مفقودشده', type: 'D' }
          ],
          answer: null
        },
        {
          id: 28,
          jobs: [
            { title: 'برنامه‌ریزی مخارج/اجاره‌های املاک', type: 'N' },
            { title: 'ورود داده‌ [به سیستم‌ها]', type: 'P' }
          ],
          answer: null
        },
        {
          id: 29,
          jobs: [
            { title: 'طراحی جلد کتاب', type: 'A' },
            {
              title: 'ساخت اسباب‌بازی با درج دستورالعمل‌های استفاده ازآن',
              type: 'E'
            }
          ],
          answer: null
        },
        {
          id: 30,
          jobs: [
            { title: 'پیدا کردن علت بیماری یک فرد', type: 'B' },
            { title: 'هدایت هواپیما (خلبانی)', type: 'R' }
          ],
          answer: null
        },
        {
          id: 31,
          jobs: [
            {
              title: 'کسب دانش در زمینه نحوه رشد و زنده ماندن چیزها',
              type: 'C'
            },
            { title: 'فروش ماشین', type: 'H' }
          ],
          answer: null
        },
        {
          id: 32,
          jobs: [
            { title: 'کار به عنوان میزبان رستوران', type: 'I' },
            { title: 'اطفاء حریق', type: 'D' }
          ],
          answer: null
        },
        {
          id: 33,
          jobs: [
            {
              title: 'حفظ ثبت پرداختی‌های حقوق کارکنان یک شرکت بزرگ',
              type: 'G'
            },
            { title: 'کار در آسایشگاه سالمندان', type: 'J' }
          ],
          answer: null
        },
        {
          id: 34,
          jobs: [
            { title: 'حل و رفع مسائل فنی', type: 'P' },
            { title: 'راهنمایی معنوی دیگران', type: 'J' }
          ],
          answer: null
        },
        {
          id: 35,
          jobs: [
            { title: 'مدیریت یک کلینیک دامپزشکی', type: 'Q' },
            { title: 'رهبری دیگران', type: 'K' }
          ],
          answer: null
        },
        {
          id: 36,
          jobs: [
            { title: 'کار با تجهیزات سنگین', type: 'E' },
            { title: 'مدیریت مرکز پرورش ماهی', type: 'Q' }
          ],
          answer: null
        },
        {
          id: 37,
          jobs: [
            { title: 'مونتاژ [قطعات] اتومبیل', type: 'F' },
            { title: 'حفاظت از مرزهای کشور', type: 'K' }
          ],
          answer: null
        },
        {
          id: 38,
          jobs: [
            { title: 'نواختن یک ساز', type: 'A' },
            {
              title:
                'برنامه‌ریزی فعالیت‌های مناسب مرکز نگهداری و توان‌بخشی سالمندان (روزانه)',
              type: 'J'
            }
          ],
          answer: null
        },
        {
          id: 39,
          jobs: [
            {
              title: 'تحقیق در مورد استفاده از دانه‌های سویا در رنگ',
              type: 'C'
            },
            { title: 'تامین اطلاعات مصرف‌کننده', type: 'J' }
          ],
          answer: null
        },
        {
          id: 40,
          jobs: [
            { title: 'حفاظت از پول در یک ماشین زرهی', type: 'D' },
            { title: 'مطالعه رفتارهای انسانی', type: 'B' }
          ],
          answer: null
        },
        {
          id: 41,
          jobs: [
            { title: 'مراقبت از کودکان', type: 'J' },
            { title: 'برنامه‌ریزی رژیم‌های غذایی خاص', type: 'O' }
          ],
          answer: null
        },
        {
          id: 42,
          jobs: [
            { title: 'طراحی حرکات موزون/رقص', type: 'A' },
            {
              title: 'اعمال نفوذ یا اعلام حمایت برای یک طرف یک دعوی',
              type: 'K'
            }
          ],
          answer: null
        },
        {
          id: 43,
          jobs: [
            { title: 'فروش لباس', type: 'H' },
            { title: 'کار دستی', type: 'E' }
          ],
          answer: null
        },
        {
          id: 44,
          jobs: [
            { title: 'کار در یک پارک شادی', type: 'I' },
            { title: 'فروش بیمه', type: 'N' }
          ],
          answer: null
        },
        {
          id: 45,
          jobs: [
            { title: 'مطالعه در مورد اقوام/نژادها', type: 'I' },
            { title: 'مدیریت یک سیستم اطلاعات', type: 'P' }
          ],
          answer: null
        },
        {
          id: 46,
          jobs: [
            { title: 'تعیین قیمت و ارزش یک خانه', type: 'N' },
            { title: 'رده‌بندی کتاب‌ها در کتابخانه', type: 'M' }
          ],
          answer: null
        },
        {
          id: 47,
          jobs: [
            { title: 'نمره دادن به اوراق امتحانی', type: 'M' },
            { title: 'راه‌اندازی و هدایت قطار', type: 'R' }
          ],
          answer: null
        },
        {
          id: 48,
          jobs: [
            { title: 'سفارش ملزومات ساخت‌وساز', type: 'L' },
            { title: 'رنگ کردن/رنگ‌پاشی موتورها', type: 'E' }
          ],
          answer: null
        },
        {
          id: 49,
          jobs: [
            { title: 'استخدام نیروی کار جدید', type: 'G' },
            { title: 'راه‌اندازی سیستم‌های تهویه/تنفسی', type: 'O' }
          ],
          answer: null
        },
        {
          id: 50,
          jobs: [
            { title: 'رانندگی تاکسی', type: 'R' },
            { title: 'پخش اخبار', type: 'A' }
          ],
          answer: null
        },
        {
          id: 51,
          jobs: [
            { title: 'ممیزی مالیات‌ها برای دولت', type: 'K' },
            { title: 'جورسازی و ثبت‌تاریخ استخوان‌های دایناسورها', type: 'B' }
          ],
          answer: null
        },
        {
          id: 52,
          jobs: [
            { title: 'تزریق آمپول/واکسن', type: 'O' },
            { title: 'طراحی و تزئینمناظر', type: 'C' }
          ],
          answer: null
        },
        {
          id: 53,
          jobs: [
            { title: 'پشتیبانی فنی از کاربران کامپیوتر', type: 'P' },
            { title: 'کار در دادگاه', type: 'D' }
          ],
          answer: null
        },
        {
          id: 54,
          jobs: [
            { title: 'مراقبت از حیوانات مصدوم', type: 'Q' },
            { title: 'سرو غذا برای مشتریان', type: 'I' }
          ],
          answer: null
        },
        {
          id: 55,
          jobs: [
            { title: 'نصب میخ پرچ', type: 'F' },
            { title: 'پرورش کرم خاکی', type: 'Q' }
          ],
          answer: null
        },
        {
          id: 56,
          jobs: [
            { title: 'تسویه حساب‌ها/اعتبارات', type: 'N' },
            { title: 'تدوین بازی‌های آموزشی', type: 'M' }
          ],
          answer: null
        },
        {
          id: 57,
          jobs: [
            { title: 'نصب/تعمیر یک دستگاه تلوزیون', type: 'E' },
            { title: 'اداره کردن یک مدرسه', type: 'M' }
          ],
          answer: null
        },
        {
          id: 58,
          jobs: [
            { title: 'نصب و تعمیر صفحه کنترل', type: 'F' },
            { title: 'کمک به دوستان برای حل مشکلات شخصی آنها', type: 'J' }
          ],
          answer: null
        },
        {
          id: 59,
          jobs: [
            { title: 'سرکشی به کارکنان چوب‌بری', type: 'C' },
            { title: 'مطالعه شرایط جوی (آب/هوا)', type: 'B' }
          ],
          answer: null
        },
        {
          id: 60,
          jobs: [
            { title: 'بسته‌بندی جعبه در یک انبار', type: 'R' },
            { title: 'آموزش رقص', type: 'A' }
          ],
          answer: null
        },
        {
          id: 61,
          jobs: [
            { title: 'استریل کردن تجهیزات اتاق جراحی', type: 'O' },
            { title: 'مطالعه شرایط خاک', type: 'B' }
          ],
          answer: null
        },
        {
          id: 62,
          jobs: [
            { title: 'کار بر مبنای قواعد بورس و سهام', type: 'N' },
            { title: 'حفاظت از محیط زیست', type: 'C' }
          ],
          answer: null
        },
        {
          id: 63,
          jobs: [
            { title: 'بازرسی کانتینرهای کالا', type: 'R' },
            { title: 'کار در کارخانه کنسروسازی', type: 'F' }
          ],
          answer: null
        },
        {
          id: 64,
          jobs: [
            { title: 'مربیگری تیم ورزشی یک مدرسه', type: 'I' },
            { title: 'به‌روزرسانی یک وب‌سایت', type: 'P' }
          ],
          answer: null
        },
        {
          id: 65,
          jobs: [
            { title: 'تدوین بازی‌های کامپیوتر   ی جدید', type: 'P' },
            { title: 'خرید کالا برای یک فروشگاه', type: 'H' }
          ],
          answer: null
        },
        {
          id: 66,
          jobs: [
            { title: 'کار در ستاد انتخاباتی یک فرد', type: 'K' },
            { title: 'شناسایی گونه‌های گیاهی یک جنگل', type: 'C' }
          ],
          answer: null
        },
        {
          id: 67,
          jobs: [
            { title: 'حفاظت از زندانی‌ها در زندان', type: 'D' },
            { title: 'خواندن نقشه‌/برنامه', type: 'L' }
          ],
          answer: null
        },
        {
          id: 68,
          jobs: [
            {
              title: 'برنامه‌ریزی و مدیریت برگزاری کنسرت‌های یک گروه موسیقی',
              type: 'H'
            },
            { title: 'پرسیدن سوالات نظرسنجی از مردم', type: 'K' }
          ],
          answer: null
        },
        {
          id: 69,
          jobs: [
            { title: 'مدیریت یک کارخانه', type: 'E' },
            { title: 'کار به عنوان پرستار در یک بیمارستان', type: 'O' }
          ],
          answer: null
        },
        {
          id: 70,
          jobs: [
            { title: 'نقاشی کردن یک پرتره', type: 'A' },
            { title: 'شهادت دادن در پیشگاه کنگره', type: 'K' }
          ],
          answer: null
        },
        {
          id: 71,
          jobs: [
            { title: 'کار با میکروسکوپ', type: 'B' },
            {
              title: 'زمان‌بندی قرار دادن توپ روی پایه "تی" در یک زمین گلف',
              type: 'I'
            }
          ],
          answer: null
        },
        {
          id: 72,
          jobs: [
            { title: 'کتابخوانی برای بیماران', type: 'J' },
            { title: 'تعمیر کامپیوتر', type: 'P' }
          ],
          answer: null
        },
        {
          id: 73,
          jobs: [
            { title: 'مقایسه اندازه و شکل اشیاء', type: 'F' },
            { title: 'ماهیگری', type: 'Q' }
          ],
          answer: null
        },
        {
          id: 74,
          jobs: [
            { title: 'تعمیرات دوچرخه', type: 'R' },
            { title: 'تحویل مراسلات/نامه‌ها', type: 'K' }
          ],
          answer: null
        },
        {
          id: 75,
          jobs: [
            { title: 'تدریس آموزش ویژه افرادخاص', type: 'M' },
            { title: 'نصب یک سیستم ردیاب', type: 'P' }
          ],
          answer: null
        },
        {
          id: 76,
          jobs: [
            { title: 'مدیریت یک فروشگاه', type: 'G' },
            { title: 'تبلیغات کالا و خدمات', type: 'H' }
          ],
          answer: null
        },
        {
          id: 77,
          jobs: [
            { title: 'توزیع مایحتاج دندانپزشکان به آنها', type: 'R' },
            { title: 'رقابت در یک رویداد ورزشی', type: 'I' }
          ],
          answer: null
        },
        {
          id: 78,
          jobs: [
            { title: 'کنترل آمد و رفت مهمانان هتل', type: 'I' },
            { title: 'تدریس خواندن به بزرگسالان', type: 'M' }
          ],
          answer: null
        },
        {
          id: 79,
          jobs: [
            { title: 'شکار', type: 'Q' },
            { title: 'سربازگیری در رسته‌ای از ارتش', type: 'K' }
          ],
          answer: null
        },
        {
          id: 80,
          jobs: [
            { title: 'فروش کالاهای ورزشی', type: 'H' },
            { title: 'کوتاهی و آرایش مو', type: 'J' }
          ],
          answer: null
        },
        {
          id: 81,
          jobs: [
            { title: 'آزمایش برای کشف فلزات جدید', type: 'B' },
            { title: 'کار در بانک', type: 'N' }
          ],
          answer: null
        },
        {
          id: 82,
          jobs: [
            { title: 'کار با برنامه‌های کامپیوتری', type: 'G' },
            { title: 'وام دادن پول', type: 'N' }
          ],
          answer: null
        },
        {
          id: 83,
          jobs: [
            { title: 'نصب کاغذدیواری', type: 'L' },
            { title: 'بازداشت کردن یک متهم', type: 'D' }
          ],
          answer: null
        },
        {
          id: 84,
          jobs: [
            { title: 'به دنیا آوردن یک کودک', type: 'O' },
            { title: 'مجاب کردن مردم برای خرید چیزی', type: 'H' }
          ],
          answer: null
        },
        {
          id: 85,
          jobs: [
            { title: 'بررسی موجودی قفسه‌های انبار', type: 'H' },
            { title: 'سرو نوشیدنی در دکه فروش', type: 'I' }
          ],
          answer: null
        },
        {
          id: 86,
          jobs: [
            { title: 'طبقه‌بندی گیاهان', type: 'C' },
            { title: 'رونویسی پرونده‌های پزشکی', type: 'O' }
          ],
          answer: null
        },
        {
          id: 87,
          jobs: [
            { title: 'پیروی از دستورات گام', type: 'L' },
            { title: 'وصول قبوض پرداخت‌نشده', type: 'N' }
          ],
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