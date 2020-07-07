<template>
  <div class="observer" />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data: () => ({
    observer: null
  }),
  mounted() {
    const options = this.options || {}
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect')
      } else if (entry && !entry.isIntersecting) {
        this.$emit('exit')
      }
    }, options)

    this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
  }
}
</script>
