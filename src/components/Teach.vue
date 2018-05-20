<template>
<div id="teach-work">
  <my-img></my-img>
  <div class="content">
    <my-sidebar></my-sidebar>
    <div class="main">
      <my-bread></my-bread>
      <div>
        <h1>教学体系</h1>
        <p>经过多年的建设，中心构建了三层次、五模块、四年不断线的、特色鲜明的工程实践教学体系。</p>
        <br>
        <p><strong>特点：</strong>机械工程与电力工程相结合；工程实践和创新实践相结合；以电力实践为特色的实践教学体系。</p>
        <br>
        <p><strong>理念：</strong>以学生为本，促进学生知识、能力、素质协调发展。</p>
        <br>
        <p><strong>指导思想：</strong>突出学生“实践能力、创新能力、发展能力”培养。</p>
        <br>
        <p><strong>培养特色：</strong>“厚基础、重实践、强能力”。</p>
        <img src="../../static/img/teach_1.png" alt="">
        <img src="../../static/img/teach_2.jpg" alt="">
        <img src="../../static/img/teach_3.jpg" alt="">
        <img src="../../static/img/teach_4.jpg" alt="">
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
#teach-work {
  width: 100%;
}
</style>


