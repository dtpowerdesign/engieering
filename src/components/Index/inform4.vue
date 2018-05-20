<template>
<div id="middle-intro">
  <my-img></my-img>
  <div class="content">
    <div class="main">
      <my-bread></my-bread>
      <div>
        <h1>工程训练中心用印细则</h1>
        <h2>根据学校文件精神，为规范工程训练中心用印使用与管理，提高工作效率，特制定本规定。</h2>
        <h2>一、印章的使用管理及审批</h2>
        <h2>工程训练中心印章由中心教学秘书负责保管，按照谁主管谁负责，中心主任审批的原则使用，用印单位或个人须填写《工程训练中心用印登记表》，并经中心主任签字审批后方可使用印章。</h2>
        <h2>二、印章使用区别</h2>
        <h2>1、以中心名义上报校外上级单位的材料，经中心主任签发后使用中心大学字头的印章。</h2>
        <h2>2、以中心的名义上报学校有关部门的报告、申请、报表等材料用印和下发中心各部门的文件，必须经中心主任签发后方可用印，无特殊情况一般使用中心大学字头的印章。</h2>
        <h2>3、以中心的名义出具的各种证明，如学生教学实践证明、在职证明、外出调研证明等用印，由中心主任审核批准，签发后使用中心大学字头的印章。</h2>
        <h2>4、特殊情况需要使用中心保定字头的印章，由中心主任批准。</h2>
        <h2>5、本规定由工程训练中心办公室负责解释。</h2>
        <h2>6、本规定自发布之日起执行，以往相关规定同时废止。</h2>
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


