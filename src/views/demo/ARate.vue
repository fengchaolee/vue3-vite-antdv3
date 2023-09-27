<script setup>
import { ref, reactive } from 'vue'

const value = ref(2)
</script>

<template>
  <div>
    <a-rate :value="value" />
  </div>
</template>

<style scoped>

</style>