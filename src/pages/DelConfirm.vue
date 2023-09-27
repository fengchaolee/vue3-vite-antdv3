<script setup>
// import { defineEmits, defineProps } from 'vue'
defineProps({
  title: {type: String, default: '删除提示'},
  content: {type: String, default: '确定要删除吗？'},
  delConfirmShow: {type: Boolean, required: true}})
const emit = defineEmits(['delConfirmOk', 'delConfirmCancel'])
</script>

<template>
  <div class="del-confirm">
    <a-modal
      :visible="delConfirmShow"
      :title="title"
      okText="确定"
      :maskClosable ="false"
      :closable="false"
      class="delModal"
      width="350px"
    >
      <template #footer>
        <a-button @click="emit('delConfirmCancel')">取消</a-button>
        <a-button type="primary" @click="emit('delConfirmOk')">确定</a-button>
      </template>
      <div>{{ content }}</div>
    </a-modal>
  </div>
</template>

<style scoped>

</style>