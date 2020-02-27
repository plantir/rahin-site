<style lang="scss" scoped>
section {
  header {
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 130px),
      calc(60% - 150px) 100%,
      0 calc(100% - 150px)
    );
    flex-direction: row-reverse;
    display: flex;
    background-color: $primary-color;
    justify-content: center;
    height: 180px;
    margin-bottom: 20px;
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
    }
  }

  .right-side {
    .user-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      padding: 25px;
      @include box-shadow;
      .profile-wrapper {
        clip-path: polygon(56% 0, 95% 25%, 100% 75%, 49% 91%, 0 69%, 10% 26%);
        background-color: #e5e6e7;
        width: 200px;
        margin-bottom: -5px;
        img {
          width: 200px;
          height: 200px;
        }
      }
      .text {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
    .mastery {
      position: relative;
      z-index: 1;
      border-bottom: 1px solid #ebedf2;
      background: #fff;
      margin: 30px 0;
      .background {
        position: absolute;
        height: 110px;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 74% 88%, 20% 100%, 0 83%);
        background-color: #8f749c;
      }
      .title {
        font-size: 1.6em;

        color: #fff;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 45px 35px 35px;
        .wrapper {
          margin-right: 16px;
          display: flex;
          flex-direction: column;
          label {
            font-size: 1.2rem;
            margin-bottom: 8px;
            font-weight: 500;
          }
          a {
            font-size: 1.1rem;
          }
        }
      }
      .percentage {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
  .main-content {
    .wrapper {
      background: #fff;
      padding: 36px;
    }
  }
}
</style>
<template>
  <section>
    <header>
      <div class="text">
        <h1>ناحیه کاربری</h1>
      </div>
    </header>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs3 px-3>
          <div class="right-side">
            <div class="user-section">
              <div class="profile-wrapper">
                <img src="/face/male.svg" />
              </div>
              <div class="text">سلام {{user.name}}!</div>
            </div>
            <div class="card mastery">
              <div class="background"></div>
              <div class="title">تکمیل مراحل</div>
              <div class="content">
                <v-progress-circular :size="98" :value="value" :width="4" color="light-blue">
                  <span class="percentage">{{ value | persianDigit}}%</span>
                </v-progress-circular>
                <div class="wrapper">
                  <label>مرحله بعدی: انجام تست گاردنر</label>
                  <nuxt-link to="gardner-test">
                    تست گاردنر
                    <v-icon>la-hand-point-right</v-icon>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs7 px-3>
          <div class="main-content">
            <vr-navbar :items="navigation"></vr-navbar>
            <div class="wrapper">
              <nuxt-child></nuxt-child>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      navigation: [
        {
          icon: 'la-user',
          title: 'پروفایل',
          to: 'profile',
          exact: true,
          base: `/`
        },

        {
          icon: 'la-poll',
          title: 'نتیایج',
          to: 'result',
          base: `/profile/`
        },
        {
          icon: 'la-cog',
          title: 'تنظیمات',
          to: 'setting',
          base: `/profile/`
        }
      ],
      value: 20
    }
  },
  computed: {
    user() {
      debugger
      let user = this.$store.state.auth.user
      return user
    }
  }
})
</script>