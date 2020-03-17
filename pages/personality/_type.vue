<style lang="scss" scoped>
header {
  position: relative;
  background-color: #fff;
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: calc(100% - 1px);
    width: auto;
  }
  .background {
    top: -2px;
    height: calc(100% + 2px);
    width: calc(100% + 1px);
    position: absolute;
    bottom: 0;
    left: -1px;
    right: 0;
    z-index: 1;
    .st0 {
      fill: #f9f9f9;
    }
  }
  .type-info {
    background-color: unset;
    color: unset;
    width: 800px;
    right: calc((46.84% - 800px) / 2);
    top: 0;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    text-align: center;
    h1 {
      font-size: 2em;
      margin: 0 0 15px;
      color: #fff;
      line-height: 1.3;
      font-weight: 600;
      span {
        display: block;
        font-size: 2em;
        margin-bottom: 3px;
      }
    }
    .code {
      color: #54455c;
      font-size: 2.6em;
      margin-bottom: 0;
      font-weight: 600;
      opacity: 0.95;
    }
    .difference {
      color: #675470 !important;
      margin-top: 5px;
      font-size: 0.65em;
      text-transform: uppercase;
      font-weight: 600;
      padding-bottom: 2px;
      text-decoration: none;
      transition: border-bottom-color 0s;
      &:hover {
        border-bottom: 1px solid #675470;
      }
    }
  }
}
nav {
  padding-top: 50px;
  .nav-title {
    margin-bottom: 45px;
    font-size: 2.5em;
    letter-spacing: unset;
    color: #576071;
    font-weight: 600;
    line-height: 1.5;
  }
  ul {
    padding: 0;
    margin-top: 20px;
    li {
      list-style: none;
      background: none;
      padding: 10px 25px 10px 0;
      border-right: 2px solid #f5f5f5;
      transition: border-color 0.2s ease-in-out;
      &.nuxt-link-active {
        border-color: $primary-color;
        font-weight: 600;
        a {
          color: $primary-color;
        }
      }

      a {
        color: #576071;
        text-decoration: none;
      }
    }
  }
}
article {
  h2 {
    margin: 50px 0 30px;
    font-size: 2.5em;
    letter-spacing: unset;
    color: #576071;
    font-weight: 600;
    line-height: 1.5;
  }
  p {
    font-size: 1.4em;
    line-height: 2;
    margin-bottom: 25px;
  }
  ul {
    padding-right: 40px;
    line-height: 1.8;
    margin-bottom: 17px;
    li {
      line-height: 2;
      margin-bottom: 25px;
      list-style: none;
      padding-right: 40px;
      background: url(~assets/svg/list-item.svg) no-repeat right 6px;
      background-size: 20px 20px;
    }
  }
  .scene {
    margin-top: 60px;
  }
}
.left-side {
  .box {
    background: #eee;
    box-shadow: 0 0px 4px 0px rgba(100, 100, 100, 0.2);
    border: 1px solid #eee;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 1.3rem;
    }
    caption {
      font-size: 1.1rem;
      opacity: 0.5;
      font-weight: 400;
      margin-top: 4px;
      margin-bottom: 16px;
    }
    .v-btn {
      margin-bottom: 20px;
      width: 100%;
      max-width: 300px;
      font-size: 16px;
    }
  }
  .insight-widget {
    display: flex;
    margin-top: 120px;
    padding-top: 30px;
    align-items: center;
    flex-direction: column;
    background-color: #576071;
    padding-top: 20px;
    border-radius: 10px;
    color: #fff;
    .avatar {
      margin: -80px 0 15px;
      position: relative;
      width: 90px;
      height: 90px;
      &:before {
        content: '';
        position: absolute;
        top: 10px;
        bottom: 0;
        left: 0;
        right: 0;
        clip-path: polygon(56% 0, 95% 25%, 96% 75%, 49% 97%, 0 69%, 10% 28%);
        background-color: #f9f9f9;
        z-index: 0;
      }
      &:after {
        content: '';
        position: absolute;
        top: 10px;
        bottom: -1px;
        left: 0;
        right: 0;
        clip-path: polygon(
          49% 100%,
          100% 100%,
          96% 75%,
          49% 97%,
          0 69%,
          0 100%
        );
        background-color: #576071;
        z-index: 2;
      }
      img {
        width: 105px;
        position: relative;
        margin: -15px 0 0 -15px;
        z-index: 1;
      }
    }
    .insight-title {
      font-size: 1.1em;
      font-weight: 600;
      margin-bottom: 15px;
      text-align: center;
      padding: 0 25px;
    }
    .insight {
      font-size: 1em;
      margin-bottom: 20px;
      padding: 0 25px;
      text-align: center;
      line-height: 1.7em;
      max-width: 100%;
    }
    .source {
      font-size: 1em;
      padding: 40px 25px 20px;
      width: 100%;
      text-align: center;
      color: #bcbfc5;
      line-height: 1.5;
      position: relative;
      z-index: 1;
      overflow: hidden;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      .background {
        position: absolute;
        top: 3px;
        bottom: 0;
        left: -1px;
        right: -3px;
        z-index: -3;
        width: calc(100% + 6px);
        height: 100%;
      }
    }
  }
}
</style>
<template>
  <section>
    <header class="type-header">
      <svg viewBox="0 0 1920 600" preserveAspectRatio="none" class="background">
        <path d="M400 598.9l1520-152.8v164.4H0v-288z" class="st0" />
        <path d="M923.4 546.3l996.6-97.4V1.5h-851z" :style="{fill:type.color}" />
      </svg>
      <img :src="type.header_image" class="scene" />
      <div class="type-info">
        <h1>
          <span>{{type.title}}</span>
        </h1>
      </div>
    </header>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex lg2 xs3 px-5>
          <nav>
            <div class="nav-title">شخصیت ها</div>
            <ul>
              <nuxt-link tag="li" to="type1">
                <a>مبارز و جنگجو</a>
              </nuxt-link>
              <nuxt-link tag="li" to="type2">
                <a>فعال و پیگیر</a>
              </nuxt-link>
              <nuxt-link tag="li" to="type3">
                <a>متفکر و طراح</a>
              </nuxt-link>
              <nuxt-link tag="li" to="type4">
                <a>آرام و با وقار</a>
              </nuxt-link>
            </ul>
          </nav>
        </v-flex>
        <v-flex lg7 xs6 px-5>
          <article>
            <h2>توضیحات</h2>
            <p>{{type.description}}</p>
            <h2>فعالیت های پیشنهادی</h2>
            <ul>
              <li v-for="(activity,i) in type.activities" :key="i">
                <strong>{{activity.title}}</strong>
                – {{activity.desctiption}}
              </li>
            </ul>
            <div class="scene">
              <img alt="Protagonist personality" :src="type.scene_image" />
            </div>
          </article>
          <div class="text-center mt-6">
            <h3
              class="my-6"
            >در صورتی که تمایل به ادامه مسیر مشاوره تحصیلی دارید از این طریق اقدام نمایید</h3>
            <v-btn
              v-if="user"
              color="primary"
              class="white--text"
              to="/profile/dashboard"
            >مشاوره تحصیلی</v-btn>
            <v-btn v-else color="primary" @click="login">مشاوره تحصیلی</v-btn>
          </div>
        </v-flex>
        <v-flex xs3 px-5>
          <aside class="left-side">
            <div class="box">
              <h3>دنبال هدایت تحصیلی میگردی؟</h3>
              <caption>میخوای بهترین رشته رو انتخاب کنی؟</caption>
              <v-btn color="primary" rounded>هدایت تحصیلی</v-btn>
            </div>
            <div class="insight-widget">
              <div class="avatar">
                <img src="https://static.neris-assets.com/images/academy/diplomats/resource.svg" />
              </div>
              <div class="insight-title">آیا میدانستید؟</div>
              <div class="insight">بیش از ۶۰ درصد از افراد از انتخاب رشته خود ناراضی هستن</div>
              <div class="source">
                منبع:
                از خودمون در آوردیم
                <svg
                  viewBox="0 0 350 100"
                  preserveAspectRatio="none"
                  class="background"
                >
                  <path
                    d="M350 100H0V21L58 0l187.66 21L275 7l75 20v73z"
                    style="fill: rgb(117, 126, 140);"
                  />
                </svg>
              </div>
            </div>
          </aside>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import LoginDialog from '@/components/auth/login.vue'

export default Vue.extend({
  data() {
    return {
      types: {
        type1: {
          header_image:
            'https://static.neris-assets.com/images/personality-types/headers/diplomats_Protagonist_ENFJ_personality_header.svg',
          scene_image:
            'https://static.neris-assets.com/images/personality-types/scenes/diplomats_Protagonist_ENFJ_introduction.svg',
          title: 'مبارز و جنگجو',
          description:
            'شما فردی بسیار فعال هستید که همیشه با تلاش بسیار و با تمام توان به سمت اهداف خود حرکت می‌کنید. شما جزو افراد پيچيده احساساتي محسوب می‌شوید که مي توان مشاهده نمود که شما معمولا در يک حالت تهاجمي در کشمکش هستید و براي رسيدن به هدف با افراد و عوامل ديگر مقابله مي کنید.',
          activities: [
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            }
          ],
          color: '#59aa8b'
        },
        type2: {
          header_image:
            'https://static.neris-assets.com/images/personality-types/headers/analysts_Logician_INTP_personality_header.svg',
          scene_image:
            'https://static.neris-assets.com/images/personality-types/scenes/analysts_Logician_INTP_introduction.svg',
          title: 'فعال و پیگیر',
          description:
            'شما فردی پرتلاش هستید و حاضر نیستید از اهداف خود دست بکشید و در بعضی اوقات برای رسیدن به اهداف خود با دیگران درگیر می‌شوید. زمان نسبتا زیادی برای کار یا درس خود اختصاص می‌دهید و در این مسیر بسیار جدی و مصمم هستید به نحوی که در برخی اوقات فشار زیادی را در این راه بر روی خود حس می کنید. ',
          activities: [
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            }
          ],
          color: '#897295'
        },
        type3: {
          header_image:
            'https://static.neris-assets.com/images/personality-types/headers/explorers_Adventurer_ISFP_personality_header.svg',
          scene_image:
            'https://static.neris-assets.com/images/personality-types/scenes/explorers_Adventurer_ISFP_introduction.svg',
          title: 'متفکر و طراح',
          description:
            'ارام ، صبور و ميانه رو هستید به نحوی که از شما به عنوان یک فرد متفکر، قابل اطمینان و مشورت دهنده خوب می‌توان نام برد. تبسم همراه با آرامش شما حس خوبی را به دیگران منتقل می‌کند. سرگرمی ‌های گوناگون و علاقه به فعالیت های هنری از دیگر ویژگیهای شخصیتی شماست.',
          activities: [
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            }
          ],
          color: '#e2a942'
        },
        type4: {
          header_image:
            'https://static.neris-assets.com/images/personality-types/headers/sentinels_Executive_ESTJ_personality_header.svg',
          scene_image:
            'https://static.neris-assets.com/images/personality-types/scenes/sentinels_Executive_ESTJ_strengths.svg',
          title: 'آرام و با وقار',
          description:
            'شما فردی با ارامش و آسان‌گير هستید  و کیفیت زندگی برایتان از کمیت آن مهم‌تر است. تفکرشخصی و انجام کارها در خلوت برای شما جذاب و آرامبخش است. شما به احتمال خیلی کمتری در معرض بیماری‌های قلبی قرار دارید چرا که رفتار توام با آرامش و صبر شما از ویژگی های مهمی است که شما را فشارهای روانی و اضطراب های شدید دور نگه می دارد.',
          activities: [
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            },
            {
              title: 'تنیس',
              desctiption: `ورزشی راکتی است که بین دو نفر (سینگل) یا بین دو تیم دونفره (دوبل) بازی می‌شود. هر بازیکن با یک راکت، توپ تنیس ( توپی لاستیکی با پوشش نمدی) را به زمین حریف پرتاب می‌کند. بازیکنی (یا تیمی) که زودتر امتیاز نهائی را به دست آورد برنده‌است.
                این ورزش نخست در بریتانیا و بیشتر میان اشراف‌زادگان رایج شد و سپس به سایر کشورهای انگلیسی راه یافت و اکنون در همه کشورها بازی می‌شود. به دلیل تجهیزات گران‌قیمت و زمین مناسب برای انجام این ورزش، هنوز هم تنیس به عنوان یکی از ورزش‌های گران‌قیمت شناخته می‌شود.`
            }
          ],
          color: '#51a9ab'
        }
      }
    }
  },
  methods: {
    login() {
      this.$dialog.show({
        component: LoginDialog,
        dialog_wrapper_custom_class: 'login-dialog'
      })
    }
  },
  computed: {
    type(): any {
      return this.types[this.$route.params.type]
    },
    user() {
      return this.$store.state.auth.user
    }
  }
})
</script>