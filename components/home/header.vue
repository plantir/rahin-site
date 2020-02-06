<style lang="scss">
.under_menu_background {
  height: 959px;
  background-image: url(~assets/img/index_background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @include respond-to(md) {
    margin-top: 80px;
  }
  .wrapper {
    height: 55%;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      padding: 0.5rem;
      color: #fff;
      width: 100%;
      @include respond-to(lg) {
        width: 80%;
      }
      @include respond-to(xl) {
        width: 50%;
      }
      h1 {
        padding-top: 7rem;
        font-size: 18px;
        font-weight: 600;
        @include respond-to(sm) {
          font-size: 25px;
          padding-right: 3rem;
        }
        @include respond-to(md) {
          font-size: 35px;
        }
        @include respond-to(1150) {
          padding-right: 8rem;
        }
        @include respond-to(lg) {
          padding-right: 10rem;
        }
        @include respond-to(xl) {
          padding-right: 0;
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
    .start {
      padding: 1rem;
      color: #fff;
      width: 200px;
      border-radius: 50px;
      background-image: linear-gradient(to left, #fe7966, #ffda71);
      display: flex;
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
          font-weight: bold;
        }
      }
    }
  }
}
</style>
<template>
  <div>
    <div>
      <desktopMenu />
    </div>
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
        <div class="start">
          <span>شروع</span>
          <span>
            <v-icon>keyboard_arrow_left</v-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import desktopMenu from './menu.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    desktopMenu
  }
})
</script>
