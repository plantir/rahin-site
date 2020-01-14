<style lang="scss" scoped>
section {
  background-color: #f2f8f8;
  position: relative;
  width: 100%;
}
.menu {
  background-color: #fff;
  width: 80%;
  border-radius: 50px;
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 10%;
  display: none;
  @include respond-to(md) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @include respond-to(lg) {
    width: 65%;
    right: 20%;
  }
  .logo {
    display: none;
    @include respond-to(lg) {
      display: block;
      margin-right: 5%;
    }
    @include respond-to(xl) {
      display: block;
      margin-right: 8%;
    }
  }
  .menuItems {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        display: inline;
        padding: 14px 16px;
        font-weight: 500;
      }
    }
  }
  .search {
    margin-left: 0;
    border: 2px solid #0ad6df;
    border-radius: 50px;
    padding: 0.5rem;
    width: 200px;
    @include respond-to(lg) {
      margin-left: 8%;
    }
    input {
      margin-right: 5px;
      width: 130px;
      font-weight: 500;
    }
    .v-icon {
      color: #0ad6df;
    }
  }
}
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
.boxes_holder {
  margin-top: 100px;
  height: auto;
  @include respond-to(md) {
    height: 476px;
    margin-top: 200px;
    background-image: url(~assets/img/shape_index.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-bottom: 4rem;
  }
  .wrapper_boxes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @include respond-to(md) {
      flex-wrap: nowrap;
    }
    .boxes {
      position: relative;
      border-radius: 20px;
      margin: 2rem;
      padding: 1.5rem;
      height: 400px;
      background-color: #fff;
      @include respond-to(md) {
        margin: 1rem;
      }
      @include respond-to(1200) {
        margin: 2rem;
      }
      @include respond-to(xl) {
        margin: 5rem 4rem 4rem 2rem;
      }
      .logo_box {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          height: 150px;
          width: 150px;
        }
      }
      h3 {
        font-weight: 600;
        padding: 0.7rem 1rem 0.7rem 0;
        font-size: 20px;
        color: #5d5d5d;
      }
      .border {
        border-bottom: 1px solid #0886e8;
        width: 80%;
        margin: 0 auto;
      }
      .shopping {
        position: absolute;
        bottom: -20px;
        right: 20%;
        padding: 0.5rem;
        color: #fff;
        width: 170px;
        border-radius: 50px;
        background-image: linear-gradient(to left, #14bcd5, #0788d1);
        display: flex;
        span:first-child {
          font-weight: 500;
          font-size: 20px;
          text-align: center;
          width: 80%;
        }
        span:last-child {
          background-color: #0175d3;
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
}
.long_border {
  width: 75%;
  border: 1px solid #0175d2;
  margin: 2rem auto;
}
.center_logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #065fd6;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 35px;
    width: 35px;
  }
}
.middle_text {
  text-align: center;
  > div {
    padding: 1rem 0;
  }
  .start {
    margin: 1rem auto;
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
.middle_shape {
  display: none;
  @include respond-to(md) {
    display: block;
    height: 424px;
    background-image: url(~assets/img/middle_shape.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  @include respond-to(1200) {
    height: 536px;
  }
  @include respond-to(lg) {
    height: 640px;
  }
  @include respond-to(xl) {
    height: 840px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 270px;
    width: 65%;
    @include respond-to(1200) {
      height: 330px;
    }
    @include respond-to(lg) {
      height: 440px;
      width: 50%;
    }
    @include respond-to(xl) {
      height: 490px;
      width: 50%;
    }
    h1 {
      margin-right: 5rem;
      color: #0175d2;
      @include respond-to(1200) {
        margin-right: 10rem;
      }
    }
    p {
      width: 50%;
      margin: 1rem auto;
      color: #dc4d46;
    }
  }
}
.middle {
  text-align: center;
  font-size: 25px;
  margin: 3rem 0;
  @include respond-to(md) {
    margin: 0;
  }
}
.description_holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @include respond-to(lg) {
    flex-wrap: nowrap;
  }
  margin: 1rem 0;
  padding: 0 3rem;
  .wrapper_description {
    width: 300px;
    height: 200px;
    text-align: center;
    div {
      text-align: center;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
.copyright {
  text-align: center;
  margin: 2rem 0;
}
footer {
  margin-top: 5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <section>
    <div class="menu">
      <div class="logo">لوگو</div>
      <div class="menuItems">
        <ul>
          <li>
            <nuxt-link to>صفحه اصلی</nuxt-link>
          </li>
          <li>
            <nuxt-link to>محصولات</nuxt-link>
          </li>
          <li>
            <nuxt-link to>قوانین</nuxt-link>
          </li>
          <li>
            <nuxt-link to>راهنما</nuxt-link>
          </li>
          <li>
            <nuxt-link to>درباره ما</nuxt-link>
          </li>
          <li>
            <nuxt-link to>تماس با ما</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="search">
        <v-icon>search</v-icon>
        <input type="text" placeholder="جستجو" />
      </div>
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
    <div class="boxes_holder">
      <div class="wrapper_boxes">
        <div class="boxes" v-for="item in 3" :key="item">
          <div class="logo_box">
            <img src="~assets/img/logo_box.png" alt />
          </div>
          <h3>بسته شماره یک</h3>
          <div class="border"></div>
          <div class="radio">
            <v-radio-group v-model="radio">
              <v-radio on-icon="check_circle" color="#9a9a9a" label="بسته شامل موارد فوق میباشد"></v-radio>
              <v-radio on-icon="check_circle" color="#9a9a9a" label="بسته شامل موارد فوق میباشد"></v-radio>
              <v-radio on-icon="check_circle" color="#9a9a9a" label="بسته شامل موارد فوق میباشد"></v-radio>
            </v-radio-group>
          </div>
          <div class="shopping">
            <span>خرید</span>
            <span>
              <v-icon>shopping_basket</v-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="long_border"></div>
    <div class="center_logo">
      <img src="~assets/img/center_logo.png" alt />
    </div>
    <div class="middle_text">
      <div class="title">
        <h1>اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده</h1>
      </div>
      <div>
        <p>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده
          سوالات جواب بده
        </p>
      </div>
      <div class="start">
        <span>شروع</span>
        <span>
          <v-icon>keyboard_arrow_left</v-icon>
        </span>
      </div>
    </div>
    <div class="middle_shape">
      <div>
        <h1>اگر دنبال رشته مناسب جواب بده</h1>
        <p>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </p>
      </div>
    </div>
    <div class="middle">حس رقابت در قالب سنجش</div>
    <div class="description_holder">
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/clock_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/hand_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/clock_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/hand_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
    </div>
    <div class="long_border"></div>
    <div class="copyright">
      <p>2011-2019 NERIS Analytics Limited &copy;</p>
    </div>
    <footer>
      <img src="~assets/img/footer_image.png" alt />
    </footer>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {}
})
</script>
