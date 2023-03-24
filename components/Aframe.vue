<script lang="ts">
export default {
  name: 'Aframe',
  data () {
    return {
      aframes: [
        {
          scene: this.$props.scene,
          id: 1
        }
      ]
    }
  },
  props: {
    scene: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <div 
    class="aframe" 
    v-for="aframe in aframes" 
    :key="aframe.id" 
    v-html="aframe.scene"
  >
  </div>
</template>

<style scoped>
.aframe{
  background-color: var(--background);
  margin-bottom: 20px;
  width: 100%;
  height: 100vh;
}
</style>