<template>
  <div 
    class="aframe" 
    v-for="aframe in aframes" 
    :key="aframe.id" 
    v-html="aframe.scene"
  >
  </div>
</template>

<script>
export default {
  name: 'Aframe',
  data () {
    return {
      aframes: [
        {
          scene: '<a-scene vr-mode-ui="enabled: false" embedded><a-entity position="0 -1 3" scale="0.5 0.5 0.5"><a-camera zoom="0.8" fov="80" near="0.001" far="50"></a-camera></a-entity><a-torus-knot color="#e1e1e1" segments-tubular="124" radius="1" radius-tubular="0.1" wireframe="true"><a-animation easing="linear" attribute="rotation" repeat="indefinite" dur="30000" to="360 360 360"></a-animation></a-torus-knot></a-scene>',
          id: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
.aframe{
  background-color: blue;
  margin-bottom: 20px;
  width: 100%;
  height: 100vh;
}
</style>