<style lang="scss">
.menu {
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
        &:hover {
          background: #9ef1f4;
        }
      }
    }
  }
  .left-panel {
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
  <div class="menu">
    <div class="logo">
      <img src="/logo.svg" alt />
    </div>
    <div class="menuItems">
      <ul>
        <nuxt-link to="/" tag="li">صفحه اصلی</nuxt-link>
        <nuxt-link to tag="li">قوانین</nuxt-link>
        <nuxt-link to tag="li">راهنما</nuxt-link>
        <nuxt-link to tag="li">درباره ما</nuxt-link>
        <nuxt-link to tag="li">تماس با ما</nuxt-link>
      </ul>
    </div>
    <div class="left-panel">
      <v-btn @click="login" color="secondary" outlined rounded>ورود</v-btn>
      <v-btn to="/free-test" color="primary" outlined rounded>شروع تست</v-btn>
    </div>
    <!-- <div class="search">
      <v-icon>search</v-icon>
      <input type="text" placeholder="جستجو" />
    </div>-->
  </div>
</template>

<script lang="ts">
import LoginDialog from '@/components/auth/login.vue'
import Vue from 'vue'
export default Vue.extend({
  methods: {
    login() {
      this.$dialog.show({
        component: LoginDialog,
        dialog_wrapper_custom_class: 'login-dialog'
      })
    }
  }
})
</script>
