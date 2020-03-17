<style lang="scss">
#nav-header {
  background-color: #fff;
  color: #4570ab;
  width: 80%;
  border-radius: 50px;
  padding: 2rem;
  position: absolute;
  top: 32px;
  height: 96px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: none;
  z-index: 10;
  @include respond-to(md) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @include respond-to(lg) {
    width: 65%;
  }
  .logo {
    display: none;
    @include respond-to(lg) {
      img {
        position: absolute;
        right: 50px;
        top: 14px;
        max-width: 70px;
      }
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
        display: inline-flex;
        padding: 14px 16px;
        font-weight: 500;
        min-width: 100px;
        justify-content: center;
        align-items: center;
        height: 40px;
        cursor: pointer;
        border-radius: 30px;
        &:hover,
        &.nuxt-link-exact-active {
          background: $primary-color;
          color: #fff;
        }
      }
    }
  }
  .left-panel {
    .user-wrapper {
      display: flex;
      align-items: center;
      .v-list-item {
        border-bottom: 1px solid #eee;
      }
      .text {
        margin-right: 8px;
      }
      .profile-wrapper {
        clip-path: polygon(56% 0, 95% 25%, 100% 75%, 49% 91%, 0 69%, 10% 26%);
        background-color: #e5e6e7;
        width: 80px;
        margin-bottom: -5px;
        img {
          width: 80px;
          height: 80px;
        }
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
      &::placeholder {
        color: #4570ab;
        opacity: 1;
      }
    }
    .v-icon {
      color: #0ad6df;
    }
  }
  .active {
    color: purple;
  }
}
</style>

<template>
  <div id="nav-header" class="menu">
    <div class="logo">
      <img src="~assets/img/logo.png" alt />
    </div>
    <div class="menuItems">
      <ul>
        <nuxt-link to="/" tag="li">صفحه اصلی</nuxt-link>
        <nuxt-link to="/blog" tag="li">اخبار و مقالات</nuxt-link>
        <nuxt-link to="/faq" tag="li">سوالات متداول</nuxt-link>
        <nuxt-link to="/aboutus" tag="li">درباره ما</nuxt-link>
        <nuxt-link to="/contactus" tag="li">تماس با ما</nuxt-link>
      </ul>
    </div>
    <div class="left-panel">
      <template v-if="user">
        <v-menu
          attach
          offset-y
          nudge-left="70"
          nudge-bottom="8"
          min-width="220"
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <div class="user-wrapper" v-on="on">
              <div class="profile-wrapper">
                <img v-if="user.gender == 'female'" src="/face/female.jpg" />
                <img v-else src="/face/male.jpg" />
              </div>
            </div>
          </template>
          <v-list nav>
            <v-list-item color="primary" to="/profile/dashboard" exact>
              <v-list-item-icon>
                <v-icon>la-tachometer-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>داشبورد</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" to="/profile/videos">
              <v-list-item-icon>
                <v-icon>la-video</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>فیلم ها</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" to="/profile/result">
              <v-list-item-icon>
                <v-icon>la-poll</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>نتایج</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" to="/profile/info">
              <v-list-item-icon>
                <v-icon>la-user</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>مشخصات</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item color="primary" @click="logout">
              <v-list-item-icon>
                <v-icon>la-sign-out-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>خروج</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn @click="login" color="secondary" outlined rounded>ورود</v-btn>
        <v-btn to="/free-test" color="primary" outlined rounded>شروع تست</v-btn>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import LoginDialog from '@/components/auth/login.vue'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },
  methods: {
    login() {
      this.$dialog.show({
        component: LoginDialog,
        dialog_wrapper_custom_class: 'login-dialog'
      })
    },
    logout() {
      this.$store.commit('auth/logout')
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  }
})
</script>
