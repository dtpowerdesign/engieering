<template>
  <v-header>
    <div class="logo">工程训练中心</div>
    <v-menu theme="dark" mode="horizontal" :data="menuData1" :style="{lineHeight: '64px'}"></v-menu>
  </v-header>
</template>
<script>
export default {
  name: 'my-header',
  data () {
    return {
      menuData1: [
        {
          name: '首页',
          selected: this.$route.name === '首页',
          href: '/'
        },
        {
          name: '中心概况',
          selected: this.$route.name === '中心概况',
          href: '/middle'
        },
        {
          name: '机构设置',
          selected: this.$route.name === '机构设置',
          href: '/department'
        },
        {
          name: '教学体系',
          selected: this.$route.name === '教学体系',
          href: '/teach'
        },
        {
          name: '对外交流',
          selected: this.$route.name === '对外交流',
          href: '/foreign'
        },
        {
          name: '年度报告',
          selected: this.$route.name === '年度报告',
          href: '/report'
        }
      ]
    }
  }
}
</script>
<style>
.ant-layout-header {
  line-height: 32px;
  width: 80%;
  min-width: 1280px;
  margin: 0 auto;
}
.ant-layout-header {
  display: flex;
  justify-content: center;
}
.ant-layout-header .logo {
  /* width: 120px; */
  height: 31px;
  /* background: #333; */
  border-radius: 6px;
  margin: 16px 24px 16px 0;
  float: left;
  color: #fff;
  font-size: 30px;
}
</style>

