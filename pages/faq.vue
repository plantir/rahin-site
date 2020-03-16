<style lang="scss" >
#faq {
  background: #fff;
  header {
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 100px),
      calc(60% - 150px) 100%,
      0 calc(100% - 200px)
    );
    flex-direction: row-reverse;
    display: flex;
    background-color: $primary-color;
    justify-content: center;
    height: 280px;
    .scene {
      clip-path: polygon(0 0, 100% 0, calc(100% - 150px) 100%, 0 100%);
      flex: 0 0 60%;
      width: 100%;
      background-color: #eaeae9;
    }
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
      p {
        text-align: center;
      }
      a {
        display: inline-flex;
        margin: 0 4px 0 8px;
        color: #fff !important;
        border-bottom: 1px solid transparent;
        position: relative;
        &:after {
          content: '';
          transition: all 0.4s;
          height: 1px;
          width: 0;
          position: absolute;
          background: #fff;
          top: 100%;
        }
        &:hover {
          &:after {
            width: 100%;
          }
          opacity: 0.8;
        }
      }
    }
  }
  .image-wrapper {
    img {
      max-width: 100%;
    }
  }
  .content-wrapper {
    padding: 0 40px;
    .v-expansion-panel-header {
      font-weight: 600;
    }
    .v-expansion-panel {
      &--active {
        .v-icon {
          &::before {
            content: '';
          }
        }
      }
    }
    .form-title {
      font-size: 2.6rem;
      font-weight: 600;
      color: #576071;
      margin: 60px 0;
    }
    p {
      font-size: 1.4em;
      line-height: 2;
      margin-bottom: 25px;
    }
  }
}
</style>
<template>
  <div id="faq">
    <header>
      <div class="text">
        <h1>سوالات متداول</h1>
        <p>
          لیست سوال هایی که ممکن است سوال شما هم باشه
          <br />اگه سوالت تو این لیست نبود میتونی از طریق این
          <nuxt-link to="/contactus">لینک</nuxt-link>از ما بپرسی
        </p>
      </div>
    </header>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs3>
          <div class="image-wrapper">
            <img src="~assets/img/soreal_5.jpeg" alt />
          </div>
        </v-flex>
        <v-flex xs6>
          <div class="content-wrapper">
            <div class="form-title">
              <span>پرسش و پاسخ</span>

              <div class="headline">سوال خود را از لیست زیر جستجو کنید</div>
            </div>

            <v-expansion-panels flat>
              <v-expansion-panel v-for="(item,i) in questions" :key="i">
                <v-expansion-panel-header disable-icon-rotate>
                  <template v-slot:actions>
                    <v-icon color="primary">la-plus</v-icon>
                  </template>
                  {{item.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>{{item.answer}}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-flex>
        <v-flex xs3>
          <div class="image-wrapper">
            <img src="~assets/img/soreal_6.jpeg" alt />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: [
        { text: 'سوال', value: 'question' },
        { text: 'پیشنهاد', value: 'suggestion' },
        { text: 'انتقاد', value: 'criticism' }
      ],
      questions: [
        { title: 'سوال شماره ۱', answer: 'پاسخ سوال شماره ۱' },
        { title: 'سوال شماره ۱', answer: 'پاسخ سوال شماره ۱' },
        { title: 'سوال شماره ۱', answer: 'پاسخ سوال شماره ۱' },
        { title: 'سوال شماره ۱', answer: 'پاسخ سوال شماره ۱' },
        { title: 'سوال شماره ۱', answer: 'پاسخ سوال شماره ۱' },
        { title: 'سوال شماره ۱', answer: 'پاسخ سوال شماره ۱' }
      ],
      contact: {
        type: null
      },
      value: null
    }
  }
})
</script>