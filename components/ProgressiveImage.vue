<template>
  <div
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="progressive-image-wrapper"
  >
    <div v-if="lineOne" :class="{ active: hover }" class="text-overlay">
      <div class="line-one">
        {{ lineOne }}
      </div>
      <div class="line-two">
        {{ lineTwo }}
      </div>
    </div>
    <picture :class="['progressive-image', classes.root]">
      <img
        ref="img"
        :src="dataUrl"
        :class="['progressive-image__img', classes.img]"
        :alt="$attrs.alt || ''"
        :style="{
          transitionDuration: `${transitionDuration}ms`
        }"
        v-bind="$attrs"
        v-on="$listeners"
      />
      <div
        ref="placeholder"
        v-show="dataUrl"
        :class="['progressive-image__placeholder', classes.placeholder]"
      >
        <div class="video-modal-spinner half-circle-spinner">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
      </div>
    </picture>
  </div>
</template>

<script>
const NAME = 'progressive-image'
/**
 * Drop in replacement for the HTML `<img>` tag which supports lazy-loading. Improves load times by waiting for the image to scroll into view before actually downloading it.
 *
 Note: This component uses [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) which is not supported by Internet Explorer.
 */
export default {
  name: 'VImg',
  inheritAttrs: false,
  props: {
    /**
     * Same as the HTML attribute
     */
    src: {
      type: String,
      required: true
    },
    /**
     * Same as the HTML attribute
     */
    srcset: {
      type: String,
      default: ''
    },
    /**
     * URL of the blurred placeholder image to use if you need one (ideally a very small image).
     */
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * CSS background styles for the placeholder in case you just want colors.
     */
    background: {
      type: String,
      default: ''
    },
    transitionDuration: {
      type: [Number, String],
      default: 700
    },
    classes: {
      type: Object,
      default: () => ({})
    },
    lineOne: {
      type: String,
      required: false,
      default: ''
    },
    lineTwo: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    dataUrl() {
      const { width, height } = this.$attrs
      if (!width || !height) return ''
      const w = 100
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = (height / width) * w
      return canvas.toDataURL()
    }
  },
  // watch: {
  //   src: {
  //     handler: 'init'
  //   },
  //   srcset: {
  //     handler: 'init'
  //   }
  // },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // this.observer = new IntersectionObserver(this.handler)
      // this.observer.observe(this.$el)
      // this.$once('hook:beforeDestroy', () => {
      //   this.observer.disconnect()
      // })
      this.loadImg()
    },
    // handler([entry]) {
    // const { $el } = this
    // if (entry.isIntersecting) {
    // Element is in viewport
    // this.observer.disconnect()
    // }
    // },
    loadImg() {
      const { src, srcset } = this
      const { img } = this.$refs
      img.addEventListener('load', this.onLoad)
      if (srcset) {
        img.srcset = srcset
      }
      img.src = src
    },
    onLoad() {
      const { $el } = this
      const { img } = this.$refs
      // const { img, placeholder } = this.$refs
      $el.classList.add(`${NAME}--loaded`)
      // if (placeholder) {
      //   img.addEventListener('transitionend', function onTransitionEnd() {
      //     placeholder.remove()
      //     img.removeEventListener('transitionend', onTransitionEnd)
      //   })
      // }
      img.removeEventListener('load', this.onLoad)
    }
  }
}
</script>

<style>
.progressive-image-wrapper {
  position: relative;
}
.progressive-image-wrapper .text-overlay {
  color: black;
  position: absolute;
  bottom: -1.5625vw;
  transform: translateY(100%);
  font-size: 1.5625vw;
  line-height: 1;
  letter-spacing: 0.015vw;
  text-transform: uppercase;
  z-index: 2;
  text-align: left;
  width: 100%;
  overflow: hidden;
  display: flex;
  pointer-events: none;
}
.progressive-image-wrapper .text-overlay .line-one {
  width: 15.3125vw;
  transform: translateY(1.875vw);
  transition-duration: 0.7s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
}
.progressive-image-wrapper .text-overlay .line-two {
  transform: translateY(1.875vw);
  transition-duration: 0.7s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  transition-delay: 0.1s;
}
.progressive-image-wrapper .text-overlay.active .line-one,
.progressive-image-wrapper .text-overlay.active .line-two {
  transform: translateY(0);
}
.progressive-image__placeholder {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f7;
}
.progressive-image {
  display: inline-block;
  position: relative;
  z-index: 2;
  width: 100%;
}
.progressive-image img {
  max-width: 100%;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
  transform: translate3d(0, 0, 999px);
  display: block;
  opacity: 0;
  transition-duration: 0.7s !important;
  transition-property: opacity !important;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1) !important;
}
.progressive-image--loaded .progressive-image img {
  opacity: 1;
}

/* Responsive */

@media screen and (min-width: 0px) and (max-width: 1024px) {
  .progressive-image-wrapper .text-overlay {
    display: none;
  }
}
@media screen and (min-width: 0px) and (max-width: 320px) {
}
@media screen and (min-width: 321px) and (max-width: 375px) {
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
