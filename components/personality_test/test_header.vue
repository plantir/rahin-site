<style lang="scss" scoped>
header {
  background-color: #57ae8c;
  position: relative;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  h1 {
    font-size: 2.1em;
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
  padding: 20px 15px 15px;
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
    padding: 10px 0;
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
    height: 225px;
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
</style>
<template>
  <section>
    <header>
      <h1>{{title}}</h1>
      <div class="trademark">{{subtitle}}</div>
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
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    percentage: {
      required: true
    },
    title: {
      required: true
    },
    subtitle: {
      required: true
    }
  }
})
</script>