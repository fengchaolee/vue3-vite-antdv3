<script setup>
import { ref, reactive } from 'vue'
import SparkMD5 from 'spark-md5'

const fileUpload = ref()

async function handleFileChange() {
  // 获取file
  const file = fileUpload.value.files[0]
  if(!file) return
  console.log(file);
  // 切片
  const chunks = handleFileChunk(file, 1024)
  console.log(chunks);
  // 获取文件hash
  const hash = await handleFileHash(chunks)
  console.log(hash);
  // 上传分片
  chunks.forEach(chunk => {
    const res = handleUploadFileChunk(chunk)
    console.log(res);
  })
}

async function handleUploadFileChunk(chunk) {
  const formData = new FormData();
  formData.append('file', chunk);

  const res = await fetch('https://file.io', {
    method: 'POST',
    body: formData
  })
  return res.json()
}

// 获取文件hash
function handleFileHash(chunks) {
  const md5 = new SparkMD5()
  return new Promise(function(resolve, reject) {
    function readFile(i) {
      if(i >= chunks.length){
        resolve(md5.end());
        return
      }
      const blob = chunks[i]
      const reader = new FileReader()
      reader.onload = e => {
        const bs = e.target.result
        md5.append(bs)
        readFile(i + 1)
      }
      reader.readAsArrayBuffer(blob)
    }
    readFile(0)
  })
}

// 计算分片
function handleFileChunk(file, chunkSize) {
  let chunks = []
  for(let i = 0; i < file.size; i += chunkSize){
    chunks.push(file.slice(i, i + chunkSize))
  }
  return chunks
}

</script>

<template>
  <div>
    <input type="file" @change="handleFileChange" ref="fileUpload">
  </div>
</template>

<style scoped>

</style>