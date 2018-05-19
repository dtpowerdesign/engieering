<template>
<div id="middle-intro">
  <my-img></my-img>
  <div class="content">
    <my-sidebar></my-sidebar>
    <div class="main">
      <my-bread></my-bread>
      <div>
        <h1>人员信息</h1>
        <h2>实验教学中心名称：华北电力大学工程训练中心</h2>
        <h2>实验教学中心主任：安连锁</h2>
        <h2>实验教学中心联系人/联系电话：王秀梅 03127525099</h2>
        <h2>实验教学中心联系人电子邮箱：dldxwxm@sina.com</h2>
        <h2>所在学校名称：华北电力大学</h2>
        <h2>所在学校联系人/联系电话：纪蓬勃/03127525358</h2>
      </div>
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
#middle-intro {
  width: 100%;
}
</style>


