<script setup>
import { ref } from "vue";
import { debounce } from 'lodash'

const inputVal = ref('')
// 防抖不生效
/* function handleInputChange() {
  debounce(() => {
    console.log(inputVal.value)
  }, 1000)
} */
const handleInputChange = debounce(() => {
  console.log(inputVal.value)
}, 1000)
</script>

<template>
  <h2>防抖</h2>
  <a-input placeholder="请输入" v-model:value="inputVal" @change="handleInputChange"></a-input>
</template>

<style scoped>

</style>