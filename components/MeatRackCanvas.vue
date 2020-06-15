<template>
  <section class="meat-rack-canvas-item">
    <div class="canvas-caption-header">
      <h2>Meat Rack 1/38</h2>
    </div>
    <canvas id="meat-rack-canvas"></canvas>
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
    const canvasTag = document.querySelector('#meat-rack-canvas')

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
          context.drawImage(
            images[i],
            currentX - 180,
            currentY - window.innerHeight - 144,
            360,
            288
          )
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
.meat-rack-canvas-item {
  position: relative;
  transform: translateY(-3px);
}
.canvas-caption-header {
  position: absolute;
  top: 0;
  padding: 2rem 3rem;
  background: transparent;
  user-select: none;
  color: white;
  mix-blend-mode: difference;
}
.canvas-caption-header h2 {
  font-weight: 400;
  font-size: 0.875rem;
}
</style>
