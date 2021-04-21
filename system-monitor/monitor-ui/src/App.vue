<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default  {
    name:  'App'
  }
</script>


<style>
  * {
    margin: 0;
    padding: 0;
  }
  /*撑开内容充满整个页面*/
  #app {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
  }
</style>