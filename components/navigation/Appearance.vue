<template>
  <div
    @click="colorMode.value = (colorMode.value == 'dark' ? 'light': 'dark')"
  >
    <Icon
      v-if="colorMode.value == 'light'"
      name="ic:outline-dark-mode"
      size="2em"
    />
    <Icon
      v-else
      name="ic:outline-light-mode"
      size="2em"
    />
  </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()
</script>

<style scoped lang="scss">
  div > *{
    color: #000;
  }
</style>