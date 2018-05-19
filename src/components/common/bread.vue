<template>
<v-breadcrumb>
  <v-breadcrumb-item >
    当前位置：
  </v-breadcrumb-item>
  <v-breadcrumb-item >
    <v-icon type="home"></v-icon>
  </v-breadcrumb-item>
  <v-breadcrumb-item >
    {{this.name}}
  </v-breadcrumb-item>
</v-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      name: this.$route.name
    }
  }
}
</script>
<style>
.ant-breadcrumb {
  text-align: left;
}
</style>


