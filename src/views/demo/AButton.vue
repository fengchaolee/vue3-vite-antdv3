<script setup>
import { ref } from 'vue';
import { throttle } from 'lodash'

const btnLoading = ref(false)
function handleLoadingClick() {
  console.log('click handleLoadingClick ');
  btnLoading.value = true
  setTimeout(() => {
    btnLoading.value = false
  }, 5000)
}

// 节流不生效
/* function handleThrottleClick(){
  throttle(() => {
    console.log('throttle...')
  }, 3000)
} */
// 节流生效
/* const handleThrottleClick = throttle(() => {
  console.log('throttle...')
}, 3000) */

function throttleFn(){
  console.log('throttle...')
}

const handleThrottleClick = throttle(() => {
  throttleFn()
}, 3000)
</script>

<template>
  <h2>5种按钮类型</h2>
  <a-button type="primary">主按钮</a-button>
  <a-button type="default">默认按钮</a-button>
  <a-button type="dashed">虚线按钮</a-button>
  <a-button type="text">文本按钮</a-button>
  <a-button type="link">链接按钮</a-button>
  <h2>加载中状态</h2>
  <a-button :loading="btnLoading" @click="handleLoadingClick">点击后加载，5秒后终止加载中状态</a-button>
  <h2>节流按钮</h2>
  <a-button @click="handleThrottleClick">3秒内只能向后台请求一次</a-button>
</template>

<style scoped>

</style>