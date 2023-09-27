<script setup>
import { ref, reactive, onMounted } from 'vue'

onMounted(() => {
  // true
  if('' == 0){
    console.log(111);
  }

  if (1 < 5 < 3) {
    // x是 *任何* 值都为真！
    console.log(222);
  }

  const obj = { width: 10, height: 15 };
  // 为什么是 NaN？拼写好难！
  const area = obj.width * obj.heigth;
  console.log('area: ' + area); // NaN

  console.log(4 / []) // Infinity
})
</script>

<template>
  <div></div>
</template>

<style scoped>

</style>