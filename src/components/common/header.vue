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
          name: '师资队伍',
          selected: this.$route.name === '师资队伍',
          href: '/team'
        },
        {
          name: '创新展示',
          selected: this.$route.name === '创新展示',
          href: '/innovation'
        },
        {
          name: '教学平台',
          selected: this.$route.name === '教学平台',
          href: '/teach'
        },
        {
          name: '培养工作',
          selected: this.$route.name === '培养工作',
          href: '/cultivate'
        },
        {
          name: '优秀校友'
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

