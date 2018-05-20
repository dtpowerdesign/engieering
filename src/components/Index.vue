<template>
<div id="index">
  <div class="bannber">
    <v-carousel autoplay class="carousel">
    <v-carousel-item>
        <div class="demo-carousel">
          <img src="../../static/img/banner1.jpg" alt="">
        </div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">
          <img src="../../static/img/banner2.jpg" alt="">
        </div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">
          <img src="../../static/img/banner3.jpg" alt="">
        </div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">
          <img src="../../static/img/banner4.jpg" alt="">
        </div>
    </v-carousel-item>
    </v-carousel>
    </div>
    <!-- <div class="content">
      <div class="inform" @click="$router.push('/team')">
      <div class="inform_title">通知公告</div>
      <div class="inform_body">
        <div v-for="(i, j) in informArr" :key="j"><span><span style="font-size:20px;margin-right:10px;margin-top:5px;">·</span>{{i.name}}</span><span>{{i.time}}</span></div>
      </div>
      </div>
      <div class="summary">
        <div class="summary_title">华北电力大学工程训诫中心2017年度报告</div>
        <div class="summary_body">
          <div class="summary_body_left">
            <img src="../../static/img/summary.jpg" alt="">
          </div>
          <div class="summary_body_right">
            <p v-for="(i, j) in summaryArr" :key="j">{{i}}</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="news">
      <div class="news_title"><span style="font-size:2rem;color:#334659">通知公告</span><span @click="$router.push('/not')">了解更多&gt;&gt;&gt;</span></div>
      <div class="news_content">
        <div class="news_content_right">
          <p v-for="(i, j) in informArr" :key="j"><span @click="$router.push(i.href)">{{i.name}}</span><span @click="$router.push(i.href)">{{i.time}}</span></p>
        </div>
        <div class="news_content_left">
          <img src="../../static/img/summary.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="news">
      <div class="news_title"><span style="font-size:2rem;color:#334659">新闻动态</span><span @click="$router.push('/not')">了解更多&gt;&gt;&gt;</span></div>
      <div class="news_content">
        <div class="news_content_left">
          <img src="../../static/img/news.jpg" alt="">
        </div>
        <div class="news_content_right">
          <p v-for="(i, j) in newsArr" :key="j" @click="go(i.href)"><span>{{i.name}}</span><span>{{i.time}}</span></p>
          <p v-for="(i, j) in newsArr2" :key="j" @click="$router.push(i.href)"><span>{{i.name}}</span><span>{{i.time}}</span></p>
        </div>
      </div>
    </div>
    <!-- <div class="content2">
      <div @click="$router.push('/team')">师资队伍</div>
      <div @click="$router.push('/teach')">网络教学</div>
      <div @click="$router.push('/not')">联系我们</div>
    </div> -->
    <div class="carousel">
      <swiper></swiper>
    </div>
</div>
</template>
<script>
import swiper from '@/components/common/swiper'
export default {
  components: {swiper},
  data () {
    return {
      informArr: [
        {'name': '工程训练中心2016—2017学年度考核结果公示', 'time': '2017.11.08', 'href': '/inform2'},
        {'name': '工程训练中心关于深入开展“优化管理服务”活动5——6月份落实情况', 'time': '2017.07.05', 'href': '/inform1'},
        {'name': '工程训练中心结合教育教学思想大讨论活动梳理近五年具体工作', 'time': '2017.05.17', 'href': '/inform3'},
        {'name': '工程训练中心用印细则', 'time': '2017.04.11', 'href': '/inform4'}
      ],
      summaryArr: ['心教师积极承担教改教目，2017年度由中心主任王秀梅申报的教育部新工科研究与实践项目：发挥综合性工程训练中心优势，探索构建多学科交叉融合的工程人才培养模式批准立项，中心教师完成的教改项目还获得了省级教学成果一等奖1项，二等奖1项', '在科学研究方面，经过多年的积累，中心逐渐形成了以电力系统及其自动化、继电保护、新能源电力系统、火电机组仿真、工业过程仿真、变电站巡检装置等为核心的技术研究方向，形成了合理的科研梯队。2017年度，中心教师指导学生参加第十二届全国大学生“恩智浦”杯智能汽车竞赛、美国国际大学生数学建模竞赛等竞赛项目，获得国家级奖项16项，省级竞赛奖项21项。学生获得6项专利授权', '工程训练中心的训练指导队伍由教师、工程技术人员、技术工人和管理人员组成。除了专职人员外，还通过聘任的办法聘请部分院系所属教研室教师兼职参与中心的建设和教学。中心施行专职人员一体化管理，兼职人员院系和中心双重管理的模式'],
      newsArr: [{'name': '俱乐部学子机器人创意大赛中获得优异成绩！', 'time': ' 1周前', 'href': 'https://mp.weixin.qq.com/s/cFwuZwhRGSQP9BhLfZKgTA'}, {'name': '俱乐部学子在2018中国工程机器人大赛中取得优异成绩！', 'time': ' 2018/5/4', 'href': 'https://mp.weixin.qq.com/s/cT9CS2Fe-usEgMCsS-p0_A'}, {'name': '全国大学生机械创新设计大赛慧鱼组竞赛获佳绩', 'time': '2018/4/24', 'href': 'https://mp.weixin.qq.com/s/-j7iW3Y-Hn_379UVCwMiXg'}, {'name': '华北电力大学第十届机器人大赛圆满举办', 'time': '2018/4/15', 'href': 'https://mp.weixin.qq.com/s/wxKgLLRYAEbXppis2y3GDA'}],
      newsArr2: [{'name': '校党委书记周坚视察工程训练中心', 'time': ' 2017/5/18', 'href': '/news1'}, {'name': '杨勇平校长参观工程训练中心', 'time': '2017/2/28', 'href': '/news2'}, {'name': '电力之光闪耀第九届全国大学生创新创业年会', 'time': '2016/11/18', 'href': '/news3'}]
    }
  },
  methods: {
    go (href) {
      window.location.href = href
    }
  }
}
</script>
<style scoped>
div, p, span{
  cursor: pointer;
}
p:hover, span:hover{
  color: #409EFF;
}
.demo-carousel{
  position: relative;
}
.demo-carousel>img{
  margin: auto;
  width: 1500px;
  height: 600px;
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
  line-height: 35px;
}
.news{
  background-color: #F6F6F6;
}
.news_title{
  margin:10px auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.news_content{
  border-top: 1px solid gray;
  padding-top: 20px;
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
}
.news_content_left{
  width: 40%;
}
.news_content_right{
  width: 55%;
}
.news_content_left>img{
  width: 100%;
}
.news_content_right>p{
  display: flex;
  justify-content: space-between;
  line-height: 35px;
  font-size:1.1rem;
}
.report{
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 100px auto;
}
.report>div{
  width: 45%;
  background-color: #4D5759;
  color: white;
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.content2{
  background-color: #F6F6F6;
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.content2>div{
  width: 30%;
  text-align: left;
  background-color: #4E555B;
  color: white;
  font-size: 20px;
  text-indent: 20px;
}
.carousel{
  width: 90%;
  margin: 100px auto;
}
</style>
