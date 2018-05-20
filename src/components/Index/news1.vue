<template>
<div id="innovation-display">
  <my-img></my-img>
  <div class="content">
    <div class="main">
      <my-bread></my-bread>
      <div>
        <h1>校党委书记周坚视察工程训练中心</h1>
        <p>2017年5月18日下午，校党委书记周坚、校党委副书记郭孝锋、副校长律方成来中心视察。</p>
        <p>在工程训练中心主任王秀梅的陪同下，校领导一行参观了工程训练中心创新创业实践基地，现场观摩了学生正在开展的科技创新实践活动，并与师生亲切交谈。</p>
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
#innovation-display {
  width: 100%;
}
</style>


