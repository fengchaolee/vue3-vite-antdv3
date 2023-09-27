<script setup>
const student = {
  score: {
    math: [98, 67, () => {
      return 99;
    },
    ],
  },
};
const res = student?.score?.math?.[2]?.(); // 99
console.log(res)
</script>

<template>

</template>

<style scoped>

</style>