<template>
  <div>
    <PageLoader />
    <div class="page-container">
      <div id="scroll-container" class="scroll-container">
        <div class="index-container">
          <Navigation :home="true" />
          <div class="top-spacer spacer" />
          <IndexImages />
          <div class="bottom-spacer spacer" />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import locomotive.js mixin
import locomotive from '~/mixins/locomotive.js'

export default {
  components: {},
  mixins: [locomotive],
  data() {
    return {
      homeContent: {
        title: 'Meat Rack (2020)',
        paragraph: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s LES tenement with an X-rated gay nightclub inside. Having since evolved into a seedy warehouse at the heart of New York City's Meatpacking District circa 1982, The Downlow celebrated its 10th anniversary in 2017.
        <br /><br />
        <i>Meat Rack</i> works as a document of the celebrations, taking us all the way from Somerset to New York over the course of 16 minutes. From construction site to dance floor, build crew to muscle boys, the film is a personal tribute to a cultural phenomenon. Intimate, expressive and occasionally unsettling, <i>Meat Rack</i> captures the fleeting nature of Glastonbury’s most notorious nightspot. Shot on a Betacam SP camcorder with additional VHS-C inserts. Both formats were manufactured and available to the public in 1982.`
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.smooth()
    })
  },
  beforeDestroy() {
    // If touch device, do nothing.
    // If mouse-based device, remove lmS.
    if (this.isTouchDevice()) {
    } else {
      // Remove resize event listener
      window.removeEventListener('resize', this.updateLms)
      // Remove refresh event listener
      ScrollTrigger.removeEventListener('refresh', this.updateLms)
    }
  },
  methods: {
    ...mapMutations({
      toggleMeatRack: 'toggleMeatRack'
    }),
    smooth() {
      // If touch device, do nothing.
      // If mouse-based device, create lmS.
      if (this.isTouchDevice()) {
        // Register ScrollTrigger with GSAP
        gsap.registerPlugin(ScrollTrigger)
        // Run the animate function
        this.animateNoLms()
        // After everything is set up, refresh ScrollTrigger and update lmS because padding may have been added for pinning, etc.
        ScrollTrigger.refresh(true)
      } else {
        // Register ScrollTrigger with GSAP
        gsap.registerPlugin(ScrollTrigger)
        // On lmS scroll, update ScrollTrigger
        this.lmS.on('scroll', ScrollTrigger.update)
        // On resize, update lmS
        window.addEventListener('resize', this.updateLms)
        // Create this.lmS without 'this'
        const lmsInstance = this.lmS
        // Tell ScrollTrigger to use these proxy methods for the "#scroll-container" element
        ScrollTrigger.scrollerProxy('#scroll-container', {
          scrollTop(value) {
            return arguments.length
              ? lmsInstance.scrollTo(value, 0, 0)
              : lmsInstance.scroll.instance.scroll.y
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            }
          }
        })
        // Run the animate function
        this.animate(this.lmS)
        // Each time the window updates, refresh ScrollTrigger and update lmS
        ScrollTrigger.addEventListener('refresh', this.updateLms)
        // After everything is set up, refresh ScrollTrigger and update lmS because padding may have been added for pinning, etc.
        ScrollTrigger.refresh(true)
      }
    },
    animate(lmS) {
      // Film reveal
      gsap.fromTo(
        '#film',
        {
          scaleX: 0.8453947368,
          ease: 'none'
        },
        {
          scrollTrigger: {
            id: 'mr-film',
            trigger: '#film',
            scroller: '#scroll-container',
            scrub: true,
            start: 'top bottom',
            end: 'bottom bottom'
          },
          scaleX: 1,
          ease: 'none'
        }
      )
    },
    animateNoLms() {
      gsap.fromTo(
        '#film',
        {
          scaleX: 0.8453947368,
          ease: 'none'
        },
        {
          scrollTrigger: {
            id: 'mr-film',
            trigger: '#film',
            scrub: true,
            start: 'top bottom',
            end: 'bottom bottom'
          },
          scaleX: 1,
          ease: 'none'
        }
      )
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
    },
    updateLms() {
      this.lmS.update()
    }
  }
}
</script>

<style>
.page-container {
  background-color: transparent;
  overflow: visible;
  height: auto !important;
}
.has-scroll-init .page-container {
  overflow: hidden;
}
.index-container {
  width: 100%;
}
.bottom-spacer {
  height: 16.25vw;
}
</style>
