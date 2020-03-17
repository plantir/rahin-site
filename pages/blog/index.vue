<style lang="scss" scoped>
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
  height: 220px;
  .scene {
    clip-path: polygon(0 0, 100% 0, calc(100% - 150px) 100%, 0 100%);
    flex: 0 0 60%;
    width: 100%;
    background-color: #eaeae9;
  }
  .text {
    color: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    h1 {
      color: #fff;
      margin-top: 0;
    }
    p {
      text-align: center;
    }
    a {
      display: inline-flex;
      margin: 0 4px 0 8px;
      color: #fff !important;
      border-bottom: 1px solid transparent;
      position: relative;
      &:after {
        content: '';
        transition: all 0.4s;
        height: 1px;
        width: 0;
        position: absolute;
        background: #fff;
        top: 100%;
      }
      &:hover {
        &:after {
          width: 100%;
        }
        opacity: 0.8;
      }
    }
  }
}
.blog-categories {
  .categories-wrapper {
    display: flex;
    justify-content: center;
    .item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      flex: 0 0 100px;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      background: #888;
      position: relative;
      cursor: pointer;
      opacity: 0.7;
      transition: all 0.2s ease-in-out;
      margin: 0 8px;
      &:hover {
        opacity: 1;
      }
      &.selected {
        opacity: 1;
        background: #ff8f00;
      }
      //   &.selected:before {
      //     content: '';
      //     position: absolute;
      //     width: calc(100% + 6px);
      //     height: calc(100% + 6px);
      //     border: 3px solid #ff8f00;
      //     border-radius: 100%;
      //   }
      //   &.selected:after {
      //     content: '';
      //     position: absolute;
      //     width: 100%;
      //     height: 100%;
      //     border: 5px solid #fff;
      //     border-radius: 100%;
      //   }
      //   &.selected {
      //     border: 1px solid;
      //   }
      .v-icon {
        font-size: 3rem;
        color: #fff;
      }
    }
  }
}
.blog-items {
  margin-top: 20px;
  .items-wrapper {
    display: flex;
    flex-wrap: wrap;
    min-height: 320px;
    .item {
      flex: 0 0 33.333%;
      padding: 8px;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
<template>
  <div>
    <header>
      <div class="text">
        <h1>اخبار و مقالات</h1>
        <p>ما اینجا همه چیزهایی که برای آشنایی با راهین لازم دارید را جمع کرده ایم.</p>
        <i class></i>
      </div>
    </header>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs1></v-flex>
        <v-flex xs10>
          <div class="blog-categories">
            <div class="categories-wrapper">
              <div
                class="item"
                :class="{selected:cat.id == selectedCategory}"
                @click="selectCategory(cat)"
                v-for="cat in categories"
                :key="cat.id"
              >
                <v-icon>{{cat.icon}}</v-icon>
              </div>
            </div>
          </div>
          <div class="blog-items">
            <div class="items-wrapper">
              <div class="item" v-for="item in items" :key="item.id">
                <img :src="item.cover" alt />
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs1></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      selectedCategory: 1,
      categories: [
        { id: 1, icon: 'la-video' },
        { id: 2, icon: 'las la-newspaper' },
        { id: 3, icon: 'las la-object-group' },
        { id: 4, icon: 'la-star' },
        { id: 5, icon: 'la-users' }
      ],
      blogItems: [
        {
          id: 1,
          category: 1,
          cover: '/img/about2.jpg'
        },
        {
          id: 2,
          category: 2,
          cover: '/img/about2.jpg'
        },
        {
          id: 3,
          category: 3,
          cover: '/img/about2.jpg'
        },
        {
          id: 4,
          category: 4,
          cover: '/img/about2.jpg'
        },
        {
          id: 5,
          category: 5,
          cover: '/img/about2.jpg'
        },
        {
          id: 6,
          category: 1,
          cover: '/img/about2.jpg'
        },
        {
          id: 7,
          category: 1,
          cover: '/img/about2.jpg'
        },
        {
          id: 8,
          category: 2,
          cover: '/img/about2.jpg'
        },
        {
          id: 9,
          category: 3,
          cover: '/img/about2.jpg'
        },
        {
          id: 10,
          category: 4,
          cover: '/img/about2.jpg'
        }
      ]
    }
  },
  methods: {
    selectCategory(cat) {
      this.selectedCategory = cat.id
    }
  },
  computed: {
    items() {
      let blogItems = (<any>this).blogItems
      return blogItems.filter(item => item.category == this.selectedCategory)
    }
  }
})
</script>