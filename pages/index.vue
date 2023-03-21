<template>
  <div>
    <main>
      <ContentDoc />
    </main>
    <VIframe />
  </div>
</template>

<script setup lang="ts">
const rooms = ref([
  {
    name: "hallo",
    image: "image"
  },
  {
    name: "doie"
  },
  {
    name: "erjoi"
  }
])
</script>

<style scoped>
</style>