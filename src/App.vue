<script setup>
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router'
import AButton from '@/views/demo/AButton.vue'
import ABreadcrumb from './views/demo/ABreadcrumb.vue';
import ABadge from './views/demo/ABadge.vue'
import AInput from "./views/demo/AInput.vue";
import AUpload from './views/demo/AUpload.vue'
import AAA from "@/views/demo/AAA.vue";

import Todo from "./pages/Todo.vue"

import Test from "./pages/Test.vue"
</script>

<template>
  <RouterView/>
  <div>
     <!--<AButton></AButton>-->
    <!-- <ABreadcrumb></ABreadcrumb> -->
    <!-- <ABadge></ABadge> -->
    <!--<AInput />-->
    <!-- <AUpload></AUpload> -->
    <!--<AAA />-->

    <!--<Todo />-->
    <!--<Test />-->
  </div>
</template>

<style scoped>

</style>