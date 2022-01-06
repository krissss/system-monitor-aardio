<script setup>
import { reactive, onMounted, ref } from 'vue'

const form = reactive({
  icon: ''
})
const icons = ref([])
onMounted(async () => {
  icons.value = await aardio.setting_getIcons()
})

async function saveSetting() {
  if (await aardio.setting_save(form)) {
    toast('保存成功')
  } else {
    toast('保存失败', 'error')
  }
}

async function downloadAssets() {
  await aardio.setting_downloadAssets()
}
</script>

<template>
  <div class="header">
    <span class="title">设置</span>
    <el-button type="text" @click="downloadAssets">资源下载</el-button>
  </div>

  <el-form label-width="60px">
    <el-form-item label="图标">
      <el-radio-group v-model="form.icon">
        <el-radio v-for="(icon, index) in icons" :key="index" :label="icon">
          <div class="icon-radio">
            <img :src="`/assets/icons/${icon}/icon (1).ico`"/>
            {{ icon }}
          </div>
        </el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="saveSetting">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border-bottom: 1px dashed #eee;
  padding: 10px 20px;
  margin-bottom: 20px;
}
.header .title {
  display: inline-block;
  font-size: 18px;
  border-left: 3px solid var(--el-color-primary);
  padding-left: 10px;
}
.icon-radio {
  display: flex;
  align-items: center;
}
.icon-radio img {
  width: 20px;
  height: 20px;
  margin-right: 3px;
  background-color: rgba(0,0,0,.3);
}
</style>
