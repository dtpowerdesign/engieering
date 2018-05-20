<template>
<div class="side-bar">
  <v-menu style="width:240px" mode="inline" :data="menuData1" @item-click="go($event)"></v-menu>
</div>
</template>
<script>
export default {
  methods: {
    go (e) {
      this.$router.push(e[0].test)
    }
  },
  data () {
    return {
      menuData1: [
        {
          name: '首页',
          selected: this.$route.name === '首页',
          href: '',
          test: '/'
        },
        {
          name: '中心概况',
          selected: this.$route.name === '中心概况',
          href: '',
          test: '/middle'
        },
        {
          name: '机构设置',
          selected: this.$route.name === '机构设置',
          href: '',
          test: '/department'
        },
        {
          name: '教学体系',
          selected: this.$route.name === '教学体系',
          href: '',
          test: '/teach'
        },
        {
          name: '创新实践',
          selected: this.$route.name === '创新实践',
          href: '',
          test: '/innovation'
        },
        {
          name: '对外交流',
          selected: this.$route.name === '对外交流',
          href: '',
          test: '/foreign'
        },
        {
          name: '年度报告',
          selected: this.$route.name === '年度报告',
          href: '',
          test: '/report'
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

