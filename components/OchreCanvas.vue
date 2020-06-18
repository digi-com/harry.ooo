<template>
  <section class="ochre-canvas-item">
    <canvas id="ochre-canvas"></canvas>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  mounted() {
    const canvasTag = document.querySelector('#ochre-canvas')

    canvasTag.width = window.innerWidth * 2
    canvasTag.height = window.innerHeight * 2

    canvasTag.style.width = window.innerWidth + 'px'
    canvasTag.style.height = window.innerHeight + 'px'

    const context = canvasTag.getContext('2d')
    context.scale(2, 2)

    let aimX = null
    let aimY = null
    let currentX = null
    let currentY = null

    let i = 0
    const images = this.images.map((src) => {
      const image = document.createElement('img')
      image.src = src
      return image
    })

    document.addEventListener('mousemove', function(event) {
      aimX = event.pageX
      aimY = event.pageY
      if (currentX === null) {
        currentX = event.pageX
        currentY = event.pageY
      }
    })

    canvasTag.addEventListener('click', function() {
      i = i + 1
      if (i >= images.length) {
        i = 0
      }
    })

    const draw = function() {
      if (currentX) {
        if (images[i].complete) {
          context.drawImage(images[i], currentX - 180, currentY - 144, 360, 288)
        }

        currentX = currentX + (aimX - currentX) * 0.1
        currentY = currentY + (aimY - currentY) * 0.1
      }

      requestAnimationFrame(draw)
    }

    draw()
  }
}
</script>

<style>
.ochre-canvas-item {
  position: relative;
  background-color: white;
  height: 100vh;
}
</style>
