<template>
  <v-header>
    <div class="logo">工程训练中心</div>
    <v-menu theme="dark" mode="horizontal" :data="menuData1" :style="{lineHeight: '64px'}"></v-menu>
  </v-header>
</template>
<script>
export default {
  data () {
    return {
      menuData1: [
        {
          name: '首页'
        },
        {
          name: '中心概况',
          selected: true
        },
        {
          name: '师资队伍'
        },
        {
          name: '创新展示'
        },
        {
          name: '教学平台'
        },
        {
          name: '培养工作'
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

