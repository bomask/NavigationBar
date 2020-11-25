<template>
  <div class="body">
    <ScaleRotate>
      <h1 style="min-width: 90px;color: #c94e50">码上赢</h1>
      <router-link id="home" :to="{path:'about'}">
        <span>about</span>
      </router-link>
      <router-link id="project1" :to="{path:'project1'}">
        <span>project1</span>
      </router-link>
      <router-link id="project2" :to="{path:'project2'}">
        <span>project2</span>
      </router-link>
      <router-link id="project3" :to="{path:'project3'}">
        <span>project3</span>
      </router-link>
    </ScaleRotate>


      <main id="page-wrap">
        <router-view class="animate__animated animate__bounceInUp"/>
      </main>


  </div>

</template>

<script>
  import animate from "animate.css";
  import {ScaleRotate} from 'vue-burger-menu'

  export default {
    name: 'Home',
    data() {
      return {}
    },
    components: {
      ScaleRotate
    }

  }
</script>


<style>
  .bm-burger-button {
    z-index: 999;
  }

  .bm-item-list > * > span:hover {
    color: #b4bad2;
  }

  .bm-item-list > * > span:active {
    color: #c94e50;
  }

  .bm-menu {
    background-color: #373a47;
  }

  main {
    padding: 0;
    margin: 0;
    height: 100%;
    background: #b4bad2;
    overflow: auto;
    text-align: center;
  }

  .body {
    height: 100%;
  }

</style>
