<template>
<div id="innovation-display">
  <my-img></my-img>
  <div class="content">
    <my-sidebar></my-sidebar>
    <div class="main">
      <my-bread></my-bread>
      <div>
        <h1>机构设置</h1>
        <p>中心设有工程基础实训部、电力工程实训部、先进制造技术实训部、创新实训部四个教学部门，承担我校每年30多万学生人时数的实训任务。</p>
        <p>结合现代技术发展，从系统的角度，进行教学内容的完善和改革，在传统工艺的基础上，增加了系统和现代技术的内容，实现内容拓展。针对学校特色，紧紧围绕发电、输电、配电和新能源对电力生产全过程进行教学内容的完善和提高。通过举办校内创新竞赛，组织实施大学生创新实践项目等等，进一步扩大大学生创新实践活动内容，以课程和实践项目打基础，以自主研究和科技竞赛促水平，促进了大学生创新实践活动的良性发展。</p>
        <img src="../../static/img/department.png" alt="">
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


