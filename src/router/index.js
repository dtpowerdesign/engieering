import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import MiddleIntro from '@/components/MiddleIntro'
import TeachTeam from '@/components/Team'
import Innovation from '@/components/Innovation'
import TeachPlatform from '@/components/Teach'
import CultivateWork from '@/components/Cultivate'

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
      path: '/team',
      name: '师资队伍',
      component: TeachTeam
    },
    {
      path: '/innovation',
      name: '创新展示',
      component: Innovation
    },
    {
      path: '/teach',
      name: '教学平台',
      component: TeachPlatform
    },
    {
      path: '/cultivate',
      name: '培养工作',
      component: CultivateWork
    }
  ]
})
