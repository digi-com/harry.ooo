<template>
  <picture :class="['progressive-image', classes.root]">
    <div
      ref="placeholder"
      v-if="dataUrl"
      :class="['progressive-image__placeholder', classes.placeholder]"
      :style="{ background }"
    >
      <img v-bind="$attrs" :src="placeholder || dataUrl" alt="" />
    </div>
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
  </picture>
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
  // functional: true, // TODO
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
      default: 100
    },
    classes: {
      type: Object,
      default: () => ({})
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
  watch: {
    src: {
      handler: 'init'
    },
    srcset: {
      handler: 'init'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.observer = new IntersectionObserver(this.handler)
      this.observer.observe(this.$el)
      this.$once('hook:beforeDestroy', () => {
        this.observer.disconnect()
      })
    },
    handler([entry]) {
      const { $el } = this
      if (entry.isIntersecting) {
        // Element is in viewport
        $el.classList.add(`${NAME}--loading`)
        $el.classList.add(`${NAME}--animate`)
        this.loadImg()
        this.observer.disconnect()
      }
    },
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
      const { img, placeholder } = this.$refs
      $el.classList.remove(`${NAME}--loading`)
      $el.classList.add(`${NAME}--loaded`)
      if (placeholder) {
        img.addEventListener('transitionend', function onTransitionEnd() {
          placeholder.remove()
          img.removeEventListener('transitionend', onTransitionEnd)
        })
      }
      img.removeEventListener('load', this.onLoad)
    }
  }
}
</script>

<style>
.progressive-image {
  display: inline-block;
  position: relative;
}
.progressive-image img {
  vertical-align: top;
}
.progressive-image__placeholder {
  position: absolute;
  overflow: hidden;
}
.progressive-image__placeholder img {
  transform: scale(1.05);
  filter: blur(10px);
}
.progressive-image__img {
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: ease;
}
.progressive-image--loaded .progressive-image__img {
  opacity: 1;
}

/* Animation */
.progressive-image {
  /* transform: translate3d(0, 3rem, 0); */
  /* opacity: 0; */
  /* transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1); */
}
.progressive-image--animate {
  /* opacity: 1; */
}
</style>
