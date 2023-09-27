<script setup>
import { toRaw, onMounted, reactive, ref, watch, computed } from 'vue';
import { getUuid } from '@/utils/commonUtils'
import DelConfirm from "./DelConfirm.vue";

const inputTodo = ref('')
const itemInputDisabled = ref(true)
const curTodo = reactive({})
const curTodos = reactive([])
const curType = ref(-1)
const allTodos = reactive([])
const unfinishedTotos = reactive([])
const completedTotos = reactive([])
// 添加一项待办任务
function addTodo(){
  let todo = {}
  const uuid = getUuid()
  todo = {
    id: uuid,
    content: inputTodo.value,
    status: 0
  }
  allTodos.unshift(todo)
  unfinishedTotos.unshift(todo)
  getTodos(curType.value)
  inputTodo.value = ''
}
// 编辑一项待办任务
const editTodoVisible = ref(false)
function editTodo(item) {
  Object.assign(curTodo, item)
  editTodoVisible.value = true
}
function editTodoOk() {
  const idx = curTodos.findIndex(e => e.id === curTodo.id)
  const cloneObj = structuredClone(toRaw(curTodo))
  curTodos.splice(idx, 1, cloneObj)
  const idx2 = allTodos.findIndex(e => e.id === curTodo.id)
  allTodos.splice(idx2, 1, cloneObj)
  editTodoVisible.value = false
}
// 删除一项待办任务
const delConfirmShow = ref(false)
function delTodo(item) {
  Object.assign(curTodo, item)
  delConfirmShow.value = true
}
function delConfirmOk(){
  const idx = curTodos.findIndex(e => e.id === curTodo.id)
  if (idx !== -1) curTodos.splice(idx, 1)
  const idx2 = allTodos.findIndex(e => e.id === curTodo.id)
  if (idx2 !== -1) allTodos.splice(idx2, 1)
  const idx3 = completedTotos.findIndex(e => e.id === curTodo.id)
  if (idx3 !== -1) completedTotos.splice(idx3, 1)
  const idx4 = unfinishedTotos.findIndex(e => e.id === curTodo.id)
  if (idx4 !== -1) unfinishedTotos.splice(idx4, 1)
  Object.assign(curTodo, {})
  delConfirmShow.value = false
}
function delConfirmCancel(){
  Object.assign(curTodo, {})
  delConfirmShow.value = false
}
// 查询待办任务
function getTodos(type){
  curTodos.length = 0
  curType.value = type
  let resultTodos = toRaw(allTodos)
  if(type !== -1) {
    resultTodos = resultTodos.filter(e => {
      if(e.status === type) return e
    })
    switch (type) {
      case 0:
        unfinishedTotos.length = 0
        unfinishedTotos.push(...resultTodos)
        break;
      case 1:
        completedTotos.length = 0
        completedTotos.push(...resultTodos)
        break;
      default:
        break;
    }
  }
  curTodos.push(...resultTodos)
}
// 修改一项待办的完成状态
function checkTodo(item){
  if(item.status === 0){
    item.status = 1
    completedTotos.push(item)
    const arr1 = toRaw(unfinishedTotos).filter(e => e.id !== item.id)
    unfinishedTotos.length = 0
    unfinishedTotos.push(...arr1)
  }else {
    item.status = 0
    unfinishedTotos.push(item)
    const arr2 = toRaw(completedTotos).filter(e => e.id !== item.id)
    completedTotos.length = 0
    completedTotos.push(...arr2)
  }
}
onMounted(() => {
  getTodos(curType.value)
})
</script>

<template>
  <!-- 编辑待办弹窗 -->
  <a-modal v-model:visible="editTodoVisible" title="编辑待办">
    <a-form>
      <a-input
        autocomplete="off"
        allow-clear
        :maxlength="30"
        show-count
        v-model:value="curTodo.content"
      ></a-input>
    </a-form>
    <template #footer>
      <a-button key="save" type="primary" @click="editTodoOk">保存</a-button>
    </template>
  </a-modal>
  <!-- 删除待办弹窗 -->
  <DelConfirm :del-confirm-show="delConfirmShow" @del-confirm-ok="delConfirmOk" @del-confirm-cancel="delConfirmCancel"/>

  <div style="width: 80%;margin-left: 20px;">
    <h2>待办任务</h2>
    <a-input
      placeholder="添加一项待办任务，最多30个字，按回车键提交"
      allow-clear
      autocomplete="off"
      :maxlength="30"
      show-count
      v-model:value="inputTodo"
      @press-enter="addTodo"
    ></a-input>
    <a-list
      :data-source="curTodos"
    >
      <template #header>
        <a-button size="small" @click="getTodos(-1)">全部</a-button>
        <a-button size="small" @click="getTodos(0)">待办</a-button>
        <a-button size="small" @click="getTodos(1)">完成</a-button>
      </template>
      <template #renderItem="{ item, index }">
        <a-list-item>
          <template #actions>
            <a key="list-item-edit" @click.prevent="editTodo(item)">编辑</a>
            <a key="list-item-del" @click.prevent="delTodo(item)">删除</a>
          </template>
          <a-checkbox :checked="item.status" @change="checkTodo(item)"></a-checkbox>
          <a-input
            :disabled="true"
            :bordered="false"
            v-model:value="item.content"
            style="color: #333;"
            :class="{strikethrough: item.status === 1 ? true : false}"
          ></a-input>
        </a-list-item>
      </template>
      <template #footer>
        共 {{ curTodos.length }} 条<span v-if="curType === -1">，已完成 {{ completedTotos.length }} 条，还有 {{ unfinishedTotos.length }} 条未完成</span>
      </template>
    </a-list>
  </div>
</template>

<style scoped>
.ant-list-header>.ant-btn {
  margin-right: 10px;
}
.strikethrough {
  text-decoration: line-through;
}
</style>