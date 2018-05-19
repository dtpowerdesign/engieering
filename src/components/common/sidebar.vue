<template>
<div class="side-bar">
  <v-menu style="width:240px" mode="inline" :data="sideBarData"></v-menu>
</div>
</template>
<script>
export default {
  data () {
    return {
      sideBarData: [
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
.side-bar {
  width: 17.5%;
  max-width: 240px;
  min-width: 240px;
  font-size: 20px;
}
.side-bar .ant-menu-item > a,
.side-bar .ant-menu-item > span {
  font-size: 18px;
}
</style>

