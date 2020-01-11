<style lang="scss" scoped>
header {
  background: #fff;
  align-items: center;
  border-bottom: solid 0.5px #ebebeb;
  .layout {
    height: 65px;
  }
}
.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-left: 20px;
  padding-left: 60px;
  position: relative;
  img {
    max-height: 40px;
  }
  &:after {
    content: '';
    width: 1px;
    height: 30px;
    background: #d9d9d9;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.nav-wrapper {
  flex: 1;
  nav {
    ul {
      display: flex;
      li {
        padding: 0 22px;
        display: flex;
        align-items: center;
      }
    }
    a {
      color: #959595;
    }
  }
  .custom-button {
    border-radius: 4px;
    border: solid 1px $red-color;
    color: $red-color;
    background: rgba($red-color, 0.05);
  }
}
.profile-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10px;
  padding-right: 34px;
  &:after {
    content: '';
    width: 1px;
    height: 30px;
    background: #d9d9d9;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .user-icon {
    margin-left: 16px;
  }
  .chevron-icon {
    padding-bottom: 4px;
  }
  .user-name {
    margin-left: 6px;
  }
  .badge {
    margin-right: 24px;
    width: 25px;
    height: 25px;
    padding-top: 4px;
    background: $red-color;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}
</style>
<template>
  <div class="header-wrapper">
    <header>
      <v-container pa-0>
        <v-layout align-center>
          <div class="logo-wrapper">
            <nuxt-link to="/">
              <img src="~assets/img/logo@2x.png" alt="" />
            </nuxt-link>
          </div>
          <div class="nav-wrapper">
            <nav>
              <ul>
                <li>
                  <nuxt-link to="/">صفحه اصلی</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">رزرو هتل</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">صفحه اصلی</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">رزرو هتل</nuxt-link>
                </li>
                <v-spacer></v-spacer>
                <v-btn dark outlined small class="custom-button"
                  >پیگیری خرید</v-btn
                >
              </ul>
            </nav>
          </div>
          <div class="profile-wrapper">
            <!-- <userIcon /> -->
            <div class="user-icon">
              <v-icon>$user</v-icon>
            </div>
            <div class="user-name">
              محمد حسین افضلی
            </div>
            <div class="chevron-icon">
              <v-icon>$chevron_down</v-icon>
            </div>
            <div class="badge">{{ '3' | persianDigit }}</div>
          </div>
        </v-layout>
      </v-container>
    </header>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
// import userIcon from '~/assets/svg/user.svg?inline'
export default Vue.extend({
  // components: { userIcon }
})
</script>
