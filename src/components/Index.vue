<template>
    <div id="components-layout-demo-top">
        <v-layout class="layout">
          <my-header></my-header>
        </v-layout>
    </div>
</template>

<style>
</style>
<script>
import MyHeader from './common/header'

export default {
  components: {
    MyHeader
  },
  data () {
    return {
      menuData1: [
        {
          name: 'nav 1'
        },
        {
          name: 'nav 2',
          selected: true
        },
        {
          name: 'nav 3'
        }
      ]
    }
  }
}
</script>
