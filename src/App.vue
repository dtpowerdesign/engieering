<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/common/header'
export default {
  components: {
    MyHeader
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  width: 80%;
  min-width: 1366px;
  margin: 0 auto;
  display: flex;
}
.main {
  padding: 0 20px;
  width: 82.5%
}
.main > div {
  width: 100%;
}
</style>
