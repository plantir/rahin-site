<style lang="scss" scoped>
.under_menu_background {
  height: calc(100vh - 80px);
  background-image: url(~assets/img/index_background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .wrapper {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      padding: 0.5rem;
      margin: 16px 0;
      color: #fff;
      width: 100%;
      text-align: center;
      @include respond-to(lg) {
        width: 80%;
      }
      @include respond-to(xl) {
        width: 50%;
      }
      h1 {
        font-size: 18px;
        font-weight: 600;
        @include respond-to(sm) {
          font-size: 25px;
        }
        @include respond-to(md) {
          font-size: 35px;
        }
      }
    }
    .text {
      width: 100%;
      @include respond-to(lg) {
        width: 50%;
      }
      p {
        text-align: center;
        color: #fff;
        font-size: 16px;
        @include respond-to(sm) {
          font-size: 25px;
        }
        @include respond-to(md) {
          font-size: 25px;
        }
      }
    }
    a.start {
      margin: 1rem auto;
      padding: 1rem;
      color: #fff !important;
      width: 200px;
      border-radius: 50px;
      @include orange-gradient;
      display: flex;
      align-items: center;
      span:first-child {
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        width: 80%;
      }
      span:last-child {
        background-color: #fe4445;
        border-radius: 50%;
        padding: 0.5rem;
        .v-icon {
          color: #fff;
          font-size: 25px;
        }
      }
    }
  }
}
</style>
<template>
  <div>
    <!-- <div>
      <desktopMenu />
    </div>-->
    <div class="under_menu_background">
      <div class="wrapper">
        <div class="space"></div>
        <div class="title">
          <h1>اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده</h1>
        </div>
        <div class="text">
          <p>
            اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده
            <br />اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده
            <br />سوالات جواب بده
          </p>
        </div>
        <nuxt-link class="start" to="/free-test">
          <span>شروع</span>
          <span>
            <v-icon>keyboard_arrow_left</v-icon>
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import desktopMenu from './menu.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    // desktopMenu
  }
})
</script>
