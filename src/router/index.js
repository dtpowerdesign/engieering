import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import MiddleIntro from '@/components/MiddleIntro'
import TeachTeam from '@/components/Team'
import Innovation from '@/components/Innovation'
import TeachPlatform from '@/components/Teach'
import CultivateWork from '@/components/Cultivate'
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
