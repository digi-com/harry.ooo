import _ from 'lodash'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
        // Create lmS instance
        const LocomotiveScrollConstructor = this.locomotiveScroll
        this.lmS = new LocomotiveScrollConstructor({
          el: document.querySelector('#scroll-container'),
          smooth: true,
          lerp: 0.04
        })
        // Register ScrollTrigger
        // gsap.registerPlugin(ScrollTrigger)

        // On lmS scroll, update ScrollTrigger
        // this.lmS.on('scroll', ScrollTrigger.update)

        // On lmS scroll, do onLmsScroll method
        this.lmS.on('scroll', _.throttle(this.onLmsScroll, 50))

        // Tell ScrollTrigger to use lmS as scroll proxy
        // ScrollTrigger.scrollerProxy('#scroll-container', {
        //   scrollTop(value) {
        //     return arguments.length
        //       ? this.lmS.scrollTo(value, 0, 0)
        //       : this.lmS.scroll.instance.scroll.y
        //   },
        //   getBoundingClientRect() {
        //     return {
        //       top: 0,
        //       left: 0,
        //       width: window.innerWidth,
        //       height: window.innerHeight
        //     }
        //   }
        // })

        // Index container transform test
        // gsap.from('.index-container', {
        //   scrollTrigger: {
        //     trigger: '.index-container',
        //     scroller: '#scroll-container',
        //     scrub: true
        //   },
        //   scaleX: 0,
        //   ease: 'none'
        // })

        // Listen for window updates, refresh ScrollTrigger and update lmS
        // ScrollTrigger.addEventListener('refresh', () => this.lmS.update())

        // Refresh for DOM updates
        // ScrollTrigger.refresh()

        // Listen for and handle resize events
        window.addEventListener(
          'resize',
          _.debounce(this.onLmsResize.bind(this), 100)
        )
      }.bind(this)
    )
  },
  destroyed() {
    // Destroy lmS instance
    this.lmS.destroy()
    // Remove resize event listener
    window.removeEventListener('resize', this.onLmsResize)
  },
  computed: {
    // currentYScrollPosition() {
    //   return this.lmS.scroll.instance.scroll.y
    // }
  },
  methods: {
    onLmsScroll(obj) {
      this.scrollPosition = obj.scroll.y
      console.log('[yScrollPos] ' + this.scrollPosition)
    },
    onLmsResize() {
      this.lmS.update()
    }
  }
}
