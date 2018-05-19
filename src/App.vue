<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/common/header'
import MyFooter from '@/components/common/footer'
export default {
  components: {
    MyHeader,
    MyFooter
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
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
}
.main {
  padding: 0 20px;
  width: 82.5%
}
.main > div {
  width: 100%;
  text-align: left;
  padding: 0 0 40px 0;
}
.main > div > h1,
.main > div > h2 {
  margin: 20px 0;
}
.main > div > p {
  font-size: 20px;
  text-indent: 2em;
}
.main > div > img{
  display: block;
  width: 60%;
  margin: 20px auto;
}
</style>
