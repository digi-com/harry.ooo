<template>
  <section class="canvas-item">
    <canvas id="project-canvas"></canvas>
    <div class="absolute-logo">
      <img :src="logo" style="max-width: 360px;" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    imageWidth: {
      type: Number,
      required: true
    },
    imageHeight: {
      type: Number,
      required: true
    }
  },
  mounted() {
    const canvasTag = document.querySelector('#project-canvas')

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

    const imageWidth = this.imageWidth
    const imageHeight = this.imageHeight

    const draw = function() {
      if (currentX) {
        if (images[i].complete) {
          context.drawImage(
            images[i],
            currentX - imageWidth / 2,
            currentY - imageHeight / 2,
            imageWidth,
            imageHeight
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
.canvas-item {
  position: relative;
  height: 100vh;
  margin-bottom: 10rem;
}
.canvas-caption-header {
  position: absolute;
  top: 0;
  padding: 2rem 3rem;
  background: transparent;
  user-select: none;
  color: white;
}
.canvas-caption-header h2 {
  font-weight: 400;
  font-size: 0.875rem;
}
.absolute-logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  user-select: none;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .canvas-item {
    margin-bottom: 4rem;
  }
  .absolute-logo {
    bottom: 0 !important;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
}
@media screen and (min-width: 481px) and (max-width: 767px) {
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
}
@media screen and (min-width: 1280px) and (max-width: 1440px) {
}
@media screen and (min-width: 1441px) and (max-width: 1600px) {
}
@media screen and (min-width: 1601px) and (max-width: 1920px) {
}
@media screen and (min-width: 1921px) and (max-width: 2560px) {
}
@media screen and (min-width: 2561px) and (max-width: 9999px) {
}
</style>
