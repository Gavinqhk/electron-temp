<template>
  <div class="login-wrapper">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-row class="mb-4">
      <el-button @click="setCount">Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>
<script setup lang="ts">
// import { app as electronApp } from "electron";
import { ref } from "vue";

const count = ref(0);
const setCount = () => {
  count.value++;
  window.electronAPI.setTitle(count.value);
};
</script>
