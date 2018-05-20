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

