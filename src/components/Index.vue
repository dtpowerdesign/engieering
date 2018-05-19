<template>
    <div id="components-layout-demo-top">
        <v-layout class="layout">
            <v-header>
                <v-menu theme="dark" mode="horizontal" :data="menuData1" :style="{lineHeight: '64px'}"></v-menu>
            </v-header>
        </v-layout>
    </div>
</template>

<style>
</style>
<script>
export default {
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
