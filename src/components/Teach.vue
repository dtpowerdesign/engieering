<template>
<div id="teach-work">
  <my-img></my-img>
  <div class="content">
    <my-sidebar></my-sidebar>
    <div class="main">
      <my-bread></my-bread>
      <div></div>
    </div>
  </div>
</div>
</template>
<script>
import MyImg from '@/components/common/imgcontainer'
import MySidebar from '@/components/common/sidebar'
import MyBread from '@/components/common/bread'
export default {
  components: {
    MyImg,
    MySidebar,
    MyBread
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
#teach-work {
  width: 100%;
}
</style>


