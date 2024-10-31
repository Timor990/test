<template>
  <div>
    <canvas class="background" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "background",
  mounted() {
    this.drawGradient();
  },
  methods: {
    drawGradient() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "bisque"); 
      gradient.addColorStop(1, "lightblue"); 
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
  },
};
</script>

<style scoped>
.background {
  display: block; /* 确保 canvas 是块级元素 */
}
</style>