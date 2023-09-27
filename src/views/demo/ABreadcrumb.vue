<script setup>
import { ref, reactive } from 'vue'

</script>

<template>
  <div>
    <h2>基本使用</h2>
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
    <h2>带下拉</h2>
    <a-breadcrumb>
    <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
    <a-breadcrumb-item>
      <a href="">General</a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a>
          </a-menu-item>
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
          </a-menu-item>
          <a-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-breadcrumb-item>
    <a-breadcrumb-item>Button</a-breadcrumb-item>
  </a-breadcrumb>
  </div>
</template>

<style scoped>

</style>