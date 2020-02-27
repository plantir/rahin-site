<style lang="scss" >
.login-dialog {
  border-radius: 36px !important;
  > div {
    padding: 40px;
    width: 420px;
    position: relative;
    z-index: 0;
  }
  img.wave {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 100%;
    z-index: -1;
  }
  img.user {
    position: absolute;
    right: 50px;
    z-index: -1;
  }
  .wrapper {
    margin-top: 60px;
  }
  .text-wrapper {
    margin-right: 110px;
    color: #264d77;
    width: 200px;
    text-align: justify;
    h1 {
      font-size: 18px;
    }
    h5 {
      margin-top: 4px;
      font-size: 11px;
      font-weight: 400;
      opacity: 0.8;
      line-height: 16px;
    }
  }
  .form-wrapper {
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
    .verify {
      .v-btn {
        background: linear-gradient(to left, #ff7965, #fdd76f);
        .icon-wrapper {
          background: #fc7965;
        }
      }
      .v-input__slot {
        border-color: #fc7965;
      }
    }
    .v-input__slot {
      border-radius: 0;
      border-right: 3px solid #0dced6;
    }
    .v-btn {
      width: 140px;
      background: linear-gradient(to left, #08dbe2, #0882d0);
      .icon-wrapper {
        position: absolute;
        background: #0dced6;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 26px;
        left: -9px;
        border-radius: 100%;
        .v-icon {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
<template>
  <div id="login-dialog" ref="wrapper">
    <img class="wave" src="./wave.svg" alt />
    <img
      class="user"
      :src="mode=='register'?require('./user.png'):require('./user_close_eye.png')"
      alt
    />
    <div class="wrapper">
      <div class="text-wrapper">
        <h1>به سایت راهین خوش آمدید</h1>
        <h5>برای استفاده از تمامی امکانات سایت وارد سایت شوید</h5>
      </div>
      <div class="form-wrapper">
        <div v-show="mode == 'register'">
          <v-text-field
            v-validate="{required:true,mobile:true}"
            autocomplete="off"
            v-model="user.mobile"
            :error-messages="errors.collect('mobile')"
            data-vv-as="شماره موبایل"
            name="mobile"
            label="شماره موبایل"
            ref="mobile"
            @keyup.enter="register"
            solo
          ></v-text-field>
          <v-btn @click="register" color="primary" rounded>
            <span>ورود</span>
            <span class="icon-wrapper">
              <v-icon>la-check</v-icon>
            </span>
          </v-btn>
        </div>
        <div class="verify" v-show="mode == 'verify'">
          <div class="mb-4">
            <div>کد ۶ رقمی اس ام اس شده را وارد نمایید</div>
            <div>
              <a class="primary--text" @click="resendSMS">ارسال مجدد کد</a>
            </div>
          </div>
          <v-text-field
            v-validate="{required:true,digits:6}"
            autocomplete="off"
            v-model="user.password"
            :error-messages="errors.collect('password')"
            data-vv-as="کد ۶ رقمی"
            name="password"
            label="کد ۶ رقمی"
            ref="password"
            @keyup.enter="verify"
            solo
          ></v-text-field>
          <v-btn @click="verify" color="primary" rounded>
            <span>تایید</span>
            <span class="icon-wrapper">
              <v-icon>la-check</v-icon>
            </span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      user: {
        mobile: null,
        password: null
      },
      mode: 'register'
    }
  },
  mounted() {
    let mobileField = this.$refs.mobile as HTMLInputElement
    mobileField.focus()
  },
  methods: {
    async register() {
      let valid = await this.$validator.validate('mobile')
      if (valid) {
        let loader = this.$loader.show(this.$refs.wrapper)
        try {
          await this.$service.auth.register(this.user.mobile)
          this.mode = 'verify'
          let passwordField = this.$refs.password as HTMLInputElement
          setImmediate(passwordField.focus)
        } catch (error) {
          this.$toast
            .timeout(10000)
            .error()
            .showSimple('خطایی رخ داده است لطفا مجددا تلاش کنید')
        }
        loader.hide()
      }
    },
    async verify() {
      let valid = await this.$validator.validate('password')
      if (valid) {
        let loader = this.$loader.show(this.$refs.wrapper)
        try {
          let { data } = await this.$service.auth.login({
            mobile: this.user.mobile,
            password: this.user.password
          })
          this.$store.commit('auth/set_token', data)
          this.$dialog.destroy()
        } catch (error) {
          this.$toast
            .error()
            .timeout(10000)
            .showSimple('کد وارد شده صحیح نمیباشد')
        }
        loader.hide()
        // this.$validator.errors.clear()
      }
    },
    resendSMS() {
      console.log('resendSMS')
    }
  }
})
</script>