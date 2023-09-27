<script setup>
import { ref, reactive } from 'vue'

</script>

<template>
  <div>
    <h2>基本使用</h2>
    <a-badge :count="19">
      <a-avatar shape="square" />
    </a-badge>
    <h2>显示数字0，默认不显示</h2>
    <a-badge :count="0" show-zero>
      <a-avatar shape="square"></a-avatar>
    </a-badge>
    <h2>封顶数字，默认为99</h2>
    <a-badge :count="19" :overflow-count="10">
      <a-avatar shape="square" size="large" />
    </a-badge>
    <h2>独立使用</h2>
    <a-badge count="25" />
    <a-badge count="109" :number-style="{ backgroundColor: '#52c41a' }" />
    <h2>自定义标题</h2>
    <a-badge :count="5" title="Custom hover text">
      <a-avatar shape="square" size="large" />
    </a-badge>
    <h2>缎带，默认蓝色</h2>
    <a-badge-ribbon text="Hippies" color="purple">
      <a-card title="Pushes open the window" size="small">and raises the spyglass.</a-card>
    </a-badge-ribbon>
  </div>
</template>

<style scoped>
.ant-badge{
  margin-right: 25px;
}
</style>