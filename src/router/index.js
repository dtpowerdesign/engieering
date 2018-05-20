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
      path: '/not',
      name: 'not',
      component: Not
    }
  ]
})
