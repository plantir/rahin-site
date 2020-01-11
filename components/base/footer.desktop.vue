<style lang="scss" scoped>
footer {
  background: #fff;
  .container {
    max-width: 1520px;
  }
}
.main-footer {
  padding: 16px 0;
  .footer-link {
    padding-top: 16px;
    &.second {
      padding-right: 100px;
      border-left: 1px solid #e1e1e1;
      border-right: 1px solid #e1e1e1;
    }
    h3 {
      margin-bottom: 23px;
      font-size: 15px;
      font-weight: 600;
    }
    ul {
      li {
        font-size: 13px;
        position: relative;
        padding-right: 16px;
        &:before {
          content: '';
          width: 7px;
          height: 8px;
          background: $red-color;
          border-radius: 100%;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        + li {
          margin-top: 16px;
        }
        a {
          color: #393d46;
        }
      }
    }
  }
  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      a {
        display: block;
        img {
          max-height: 45px;
        }
      }
    }
    .support {
      margin-top: 30px;
      min-width: 280px;

      > div {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
        span:last-child {
          direction: ltr;
          display: inline-block;
        }
        &:first-child {
          border-bottom: 1px solid #e1e1e1;
        }
      }
    }
    .social {
      margin-top: 20px;
      display: flex;
      width: 320px;
      justify-content: space-between;
      .v-icon {
        font-size: 18px;
        color: #999;
        &:hover {
          color: $primary-color;
        }
      }
    }
  }
}
.sub-footer {
  border-top: 1px solid #e1e1e1;

  ul {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    li {
      a {
        font-weight: 600;
      }
    }
  }
}
</style>
<template>
  <footer>
    <div class="main-footer">
      <v-container class="pa-0">
        <v-layout row wrap>
          <v-flex xs2 pa-3>
            <div class="footer-link ">
              <h3>پرطرفدار ترین هتل ها</h3>
              <ul>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs4 pa-3>
            <div class="footer-link second">
              <h3>پرطرفدار ترین هتل ها</h3>
              <ul>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"> هتل پارسیان استقلال تهران</nuxt-link>
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs6 pa-3>
            <div class="footer-left">
              <div class="logo">
                <nuxt-link to="/">
                  <img src="~assets/img/logo@2x.png" alt="" />
                </nuxt-link>
              </div>
              <div class="support">
                <div class="telegram-support">
                  <span>پشتیبانی تلگرامی</span><span>@riziato</span>
                </div>
                <div class="phone-support">
                  <span>پشتیبانی تلفنی</span
                  ><span>{{ '021 - 22112255' | persianDigit }}</span>
                </div>
              </div>
              <div class="social">
                <a href=""><v-icon>socicon-linkedin</v-icon></a>
                <a href=""><v-icon>socicon-twitter</v-icon></a>
                <a href=""><v-icon>socicon-facebook</v-icon></a>
                <a href=""><v-icon>socicon-instagram</v-icon></a>
                <a href=""><v-icon>socicon-telegram</v-icon></a>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="sub-footer">
      <v-container class="pa-0">
        <ul>
          <li>
            <nuxt-link to="/">تماس با ما </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">تماس با ما </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">تماس با ما </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">تماس با ما </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">تماس با ما </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">تماس با ما </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">تماس با ما </nuxt-link>
          </li>
        </ul>
      </v-container>
    </div>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
