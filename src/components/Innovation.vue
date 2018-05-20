<template>
<div id="innovation-display">
  <my-img></my-img>
  <div class="content">
    <my-sidebar></my-sidebar>
    <div class="main">
      <my-bread></my-bread>
      <div>
        <h1>创新实践</h1>
        <p>中心负责管理全校国家级大学生创新实践项目。在研项目200余项，2017年结题国家级大创项目51项。由中心教师指导结题的大创项目国家级3项，省级6项，校级3项。</p>
        <img src="../../static/img/innovation_1.png" alt="">
        <p>由中心教师指导的学生参加2017中国工程机器人大赛暨国际公开赛,获得一等奖，5项，二等奖 4项，三等奖7项，获得2017年中国机器人大赛，一等奖1项，二等奖2项；获得2017年中国旅游暨安防机器人大赛，一等奖1项，二等奖2项；获得首届金砖国家创客大赛，二等奖2项；获得河北省第二届大学生创新创业年会，一等奖1项，二等奖2项，三等奖2项.</p>
        <img src="../../static/img/innovation_2.png" alt="">
        <img src="../../static/img/innovation_3.jpg" alt="">
        <img src="../../static/img/innovation_4.jpg" alt="">
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


