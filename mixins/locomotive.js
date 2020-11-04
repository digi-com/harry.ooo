import _ from 'lodash'

export default {
  data() {
    return {
      scrollPosition: 0,
      lmS: null
    }
  },
  watch: {
    $route() {
      this.lmS.update()
    }
  },
  mounted() {
    this.$nextTick(
      function() {
        // If touch device, do nothing.
        // If mouse-based device, create lmS.
        if (this.isTouchDevice()) {
        } else {
          // Create lmS instance
          const LocomotiveScrollConstructor = this.locomotiveScroll
          this.lmS = new LocomotiveScrollConstructor({
            el: document.querySelector('#scroll-container'),
            smooth: true,
            lerp: 0.04
          })
          // On lmS scroll, do onLmsScroll method
          this.lmS.on('scroll', _.throttle(this.onLmsScroll, 50))
          // Listen for and handle resize events
          window.addEventListener(
            'resize',
            _.debounce(this.onLmsResize.bind(this), 100)
          )
        }
      }.bind(this)
    )
  },
  destroyed() {
    // Destroy lmS instance
    this.lmS.destroy()
    // Remove resize event listener
    window.removeEventListener('resize', this.onLmsResize)
  },
  methods: {
    onLmsScroll(obj) {
      this.scrollPosition = obj.scroll.y
      console.log('[scrollPosition] ' + this.scrollPosition)
    },
    onLmsResize() {
      this.lmS.update()
    },
    isTouchDevice() {
      const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
      const mq = function(query) {
        return window.matchMedia(query).matches
      }

      if (
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
      ) {
        return true
      }

      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      const query = [
        '(',
        prefixes.join('touch-enabled),('),
        'heartz',
        ')'
      ].join('')
      return mq(query)
    }
  }
}
