import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import MiddleIntro from '@/components/MiddleIntro'
import Teach from '@/components/Teach'
import Foreign from '@/components/Foreign'
import Innovation from '@/components/Innovation'
import Department from '@/components/Department'
import Report from '@/components/Report'
import Not from '@/components/notFound'
import inform1 from '@/components/Index/inform1'
import inform2 from '@/components/Index/inform2'
import inform3 from '@/components/Index/inform3'
import inform4 from '@/components/Index/inform4'
import news1 from '@/components/Index/news1'
import news2 from '@/components/Index/news2'
import news3 from '@/components/Index/news3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: IndexPage
    },
    {
      path: '/middle',
      name: '中心概况',
      component: MiddleIntro
    },
    {
      path: '/department',
      name: '机构设置',
      component: Department
    },
    {
      path: '/teach',
      name: '教学体系',
      component: Teach
    },
    {
      path: '/innovation',
      name: '创新实践',
      component: Innovation
    },
    {
      path: '/foreign',
      name: '对外交流',
      component: Foreign
    },
    {
      path: '/report',
      name: '年度报告',
      component: Report
    },
    {
      path: '/inform1',
      name: 'inform1',
      component: inform1
    },
    {
      path: '/inform2',
      name: 'inform2',
      component: inform2
    },
    {
      path: '/inform3',
      name: 'inform3',
      component: inform3
    },
    {
      path: '/inform4',
      name: 'inform4',
      component: inform4
    },
    {
      path: '/news1',
      name: 'news1',
      component: news1
    },
    {
      path: '/news2',
      name: 'news2',
      component: news2
    },
    {
      path: '/news3',
      name: 'news3',
      component: news3
    },
    {
      path: '/not',
      name: 'not',
      component: Not
    }
  ]
})
