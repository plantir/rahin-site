<style lang="scss" >
#contactus {
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
    .scene {
      clip-path: polygon(0 0, 100% 0, calc(100% - 150px) 100%, 0 100%);
      flex: 0 0 60%;
      width: 100%;
      background-color: #eaeae9;
    }
    .text {
      padding: 0 100px 50px;
      color: #fff;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 16px;
      h1 {
        color: #fff;
        margin-top: 0;
      }
      .tell {
        font-size: 1.5rem;
      }
      .social-icons {
        display: flex;
        margin-top: 40px;
        .icon {
          margin: 0 16px;
          width: 50px;
          height: 50px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: padding ease-in-out 0.1s;
          &:hover {
            padding-bottom: 8px;
          }
          &.facebook {
            background: #3f5b96;
          }
          &.twitter {
            background: #2a9fee;
          }
          &.instagram {
            background: #cd446b;
          }
          &.telegram {
            background: #30a8dc;
          }
          &.linkedin {
            background: #0077b7;
          }
          .v-icon {
            color: #fff;
          }
        }
      }
    }
  }
  .image-wrapper {
    img {
      max-width: 100%;
    }
  }
  .form-wrapper {
    max-width: 600px;
    margin: 80px auto;
    .v-input__slot {
      border-radius: 0;
      border-right: 3px solid #0dced6;
    }
    .form-title {
      font-size: 1.6rem;
      font-weight: 600;
      color: #576071;
    }
    .v-input {
      margin-top: 16px;
    }
  }
}
</style>
<template>
  <div id="contactus">
    <header>
      <div class="scene">
        <img src="https://static.neris-assets.com/images/team.svg?v=2" />
      </div>
      <div class="text">
        <h1>تماس با ما</h1>
        <p>لطفا سوالات، پیشنهادات یا انتقادات خود را برای ما ارسال کنید - ما همه پیغام ها رو میخونیم و خوشحال میشیم که نظرتون رو به ما بگید!</p>
        <div class="email">
          <a href="mailto:support@domain.com" class="no-color with-border">support@domain.com</a>
        </div>
        <div class="company-info">
          <div class="name">موسسه هدایت تحصیلی راهین</div>
          <div class="address">تهران، دهکده المپیک، شهرک گلستان، مجتمع تجارای باران، واحد ۱۳</div>

          <div class="tell">{{"021-44715454" | persianDigit}}</div>
        </div>
        <div class="social-cta">
          <div class="social-icons">
            <a href="https://www.facebook.com/16Personalities" class="icon telegram">
              <v-icon>socicon-telegram</v-icon>
            </a>
            <a href="https://www.instagram.com/16personalitiesofficial/" class="icon linkedin">
              <v-icon>socicon-linkedin</v-icon>
            </a>
            <a href="https://twitter.com/16personalities" class="icon instagram">
              <v-icon>socicon-instagram</v-icon>
            </a>
            <a href="https://twitter.com/16personalities" class="icon twitter">
              <v-icon>socicon-twitter</v-icon>
            </a>
            <a href="https://www.instagram.com/16personalitiesofficial/" class="icon facebook">
              <v-icon>socicon-facebook</v-icon>
            </a>
          </div>
        </div>
      </div>
    </header>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs3>
          <div class="image-wrapper">
            <img src="~assets/img/soreal_1.jpeg" alt />
          </div>
        </v-flex>
        <v-flex xs6>
          <div class="form-wrapper">
            <div class="form-title">سوال، پیشنهاد یا انتقاد خود را برای ما ارسال نمایید</div>
            <v-select solo hide-details :items="items" v-model="contact.type" label="عنوان"></v-select>
            <v-text-field solo hide-details label="شماره تماس" name="name"></v-text-field>
            <v-textarea solo name="input-7-4" label="متن پیغام"></v-textarea>
            <v-btn large color="primary" outlined>ارسال</v-btn>
            <v-btn large color="grey" text>خالی کردن</v-btn>
          </div>
        </v-flex>
        <v-flex xs3>
          <div class="image-wrapper">
            <img src="~assets/img/soreal_3.jpeg" alt />
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
      contact: {
        type: null
      }
    }
  }
})
</script>