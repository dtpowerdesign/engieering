<template>
<div id="index">
  <div class="bannber">
    <v-carousel autoplay class="carousel">
    <v-carousel-item>
        <div class="demo-carousel">
          <img src="../../static/img/banner.jpg" alt="">
        </div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">
          <img src="../../static/img/banner.jpg" alt="">
        </div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">
          <img src="../../static/img/banner.jpg" alt="">
        </div>
    </v-carousel-item>
    </v-carousel>
    </div>
    <div class="content">
      <div class="inform">
      <div class="inform_title">通知公告</div>
      <div class="inform_body">
        <div v-for="(i, j) in informArr" :key="j"><span><span style="font-size:20px;margin-right:10px;margin-top:5px;">·</span>{{i.name}}</span><span>{{i.time}}</span></div>
      </div>
      </div>
      <div class="summary">
        <div class="summary_title">中心概况</div>
        <div class="summary_body">
          <div class="summary_body_left">
            <img src="../../static/img/summary.jpg" alt="">
          </div>
          <div class="summary_body_right">
            <p v-for="(i, j) in summaryArr" :key="j">{{i}}</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      informArr: [{'name': '工程训练中心招聘面试说明情况', 'time': '2014-9-11'}],
      summaryArr: ['华北电力大学工程训练中心的前身是1958年建校之初建立的校办工厂、电子学实验室、电工实验室和热工实验室。', '作为一所以工科为主的综合性大学，华北电力大学历来十分重视学生工程能力和素质的培养。建校后不久成立了校办工厂，并使之成为教学、科研和生产的三结合基地；1970年原校办工厂更名为实习工厂，成为学校的实践教学基地', '长期以来，学校侧重为能源电力行业培养专业人才，在工程教育中形成了 “重实践、强能力”的人才培养特色。为了加强学生工程实践能力的培养，1998年学校以电力技术方面的实验室为基础投资建设，建立了电工实践基地，担负对学生进行电力工程方面的工程基础和工程实践训练的任务；2003年以热能动力方面的实验室为基础组建电厂实践教学中心，为广大师生营造了一个模拟电力生产过程的训练基地，面向全校学生开放，进行电厂认识实习、生产实习、动力设备拆装实验，辅助专业课程的现场教学等实践教学活动。']
    }
  }
}
</script>
<style scoped>
.demo-carousel{
  position: relative;
}
.demo-carousel>img{
  width: 100%;
}
.content{
  margin: 100px auto 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
}
.inform{
  width: 30%;
}
.inform_title, .summary_title{
  background-color: #4D5659;
  height: 40px;
  color:white;
  line-height: 40px;
  font-size: 25px;
  text-align: left;
  padding-left: 20px;
}
.inform_body{
  border: 1px solid gray;
  padding: 20px 5px;
}
.inform_body>div{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.summary{
  width: 60%;
}
.summary_body{
  display: flex;
  justify-content: space-around;
}

.summary_body_left>img{
  width: 100%;
}
.summary_body_right{
  margin-left: 20px;
}
.summary_body_right>p{
  text-indent: 30px;
  text-align: left;
  line-height: 20px;
}
</style>
