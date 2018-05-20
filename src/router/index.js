import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import MiddleIntro from '@/components/MiddleIntro'
import Teach from '@/components/Teach'
import Foreign from '@/components/Foreign'
import Innovation from '@/components/Innovation'
<<<<<<< HEAD
import Department from '@/components/Department'
import Report from '@/components/Report'
=======
import TeachPlatform from '@/components/Teach'
import CultivateWork from '@/components/Cultivate'
import Not from '@/components/notFound'
>>>>>>> dev1

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
<<<<<<< HEAD
      path: '/report',
      name: '年度报告',
      component: Report
=======
      path: '/cultivate',
      name: '培养工作',
      component: CultivateWork
    },
    {
      path: '/not',
      name: 'not',
      component: Not
>>>>>>> dev1
    }
  ]
})
