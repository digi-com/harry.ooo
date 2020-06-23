<template>
  <section id="app">
    <div id="cursor" />
    <!-- <Navigation /> -->
    <nuxt />
    <Footer />
  </section>
</template>

<script>
// import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    // Navigation,
    Footer
  },
  mounted() {
    if (this.isTouchDevice()) {
      document.getElementById('cursor').remove()
    } else {
      document.addEventListener('mousemove', function(event) {
        const x = event.pageX
        const y = event.pageY
        const scrollTop = window.pageYOffset
        const cursor = document.querySelector('div#cursor')
        cursor.style.left = x + 'px'
        cursor.style.top = y - scrollTop + 'px'
      })
    }
  },
  methods: {
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
</script>

<style>
html {
  font-family: 'Union', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: black;
  overflow-x: hidden;
}

/* html.daylight {
  -webkit-font-smoothing: subpixel-antialiased;
} */

html,
body,
a {
  cursor: none !important;
  color: white;
}

html.daylight,
body.daylight,
html.daylight a {
  cursor: none !important;
  color: black;
}

div#cursor {
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  pointer-events: none;
  position: fixed;
  z-index: 99999999;
  margin-left: -6px;
  margin-top: -6px;
  transition: transform 0.5s linear;
}
.daylight div#cursor {
  background-color: blue;
}

.daylight.ochre div#cursor {
  background-color: #c38748;
}

.daylight.margaret div#cursor {
  background-color: #dd75a9;
}

.daylight.mundial div#cursor {
  background-color: #209b57;
}

canvas {
  background-color: black;
  color: white;
}
.daylight canvas {
  background-color: white;
  color: black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.daylight {
  background-color: white;
  color: black;
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
