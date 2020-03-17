<style lang="scss" >
#aboutus {
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
      a {
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
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
          text-decoration: none;
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
      .company-info {
        margin-top: 20px;
        color: darken($primary-color, 30);
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
  <div id="aboutus">
    <header>
      <div class="scene">
        <img src="~assets/svg/team.svg" />
      </div>
      <div class="text">
        <h1>درباره ما</h1>
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
            <!-- <img src="~assets/img/soreal_2.jpeg" alt /> -->
          </div>
        </v-flex>
        <v-flex xs6>
          <div class="content-wrapper">
            <div class="form-title">موسسه هدایت تحصیلی راهین</div>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
        </v-flex>
        <v-flex xs3>
          <div class="image-wrapper">
            <!-- <img src="~assets/img/soreal_4.jpeg" alt /> -->
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