
<style lang="scss">
.menu {
  background-color: #fff;
  color: #4570ab;
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
        cursor: pointer;
        &:hover {
          background: #9ef1f4;
          border-radius: 30px;
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
  <div class="menu">
    <div class="logo">لوگو</div>
    <div class="menuItems">
      <ul>
        <nuxt-link to tag="li">صفحه اصلی</nuxt-link>
        <nuxt-link to tag="li">محصولات</nuxt-link>
        <nuxt-link to tag="li">قوانین</nuxt-link>
        <nuxt-link to tag="li">راهنما</nuxt-link>
        <nuxt-link to tag="li">درباره ما</nuxt-link>
        <nuxt-link to tag="li">تماس با ما</nuxt-link>
      </ul>
    </div>
    <div class="search">
      <v-icon>search</v-icon>
      <input type="text" placeholder="جستجو" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
