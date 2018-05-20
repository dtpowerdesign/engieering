<template>
<div id="middle-intro">
  <my-img></my-img>
  <div class="content">
    <div class="main">
      <my-bread></my-bread>
      <div>
        <h1>工程训练中心2016—2017学年度考核结果公示</h1>
        <h2>根据华电校人[2017]22号文件精神，经本人述职、基层推荐、中心考核领导小组综合评定，拟定了2016—2017学年度中心职工初步考核结果，具体如下：</h2>
        <h2>优秀：   范建明   赵路佳  王  娜   马春利
合格：   崔伟清   李学军   房  静   陈  丽   赵  宇   管爱华
         邢迪雄   曹  锋  李  伟   刘  欢   张哲江   翟改华
         宋占军   柏志远   陈立庄  王海英   董  玉   胡立仁
         霍文胜   陈小群   张文生   吴秀敏  张  旭</h2>
        <h2>如有异议，三日内向中心考核领导小组反映特此公示</h2>

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


