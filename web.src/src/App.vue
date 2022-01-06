<script setup>
import AppHome from './components/AppHome.vue'
import AppSetting from './components/AppSetting.vue'
import {onMounted, ref} from 'vue'

const isDebug = ref(false)
onMounted(async () => {
  isDebug.value = await aardio.isDebug()
})
</script>

<template>
  <p v-if="isDebug">
    <router-link to="/">首页</router-link>
    <router-link to="/setting">设置</router-link>
  </p>
  <router-view></router-view>
</template>
