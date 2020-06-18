<template>
  <section>
    <div id="cursor" />
    <nuxt />
  </section>
</template>

<script>
// import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    // Navigation
  },
  mounted() {
    // Old way of replacing cursor
    document.addEventListener('mousemove', function(event) {
      const x = event.pageX
      const y = event.pageY
      const scrollTop = window.pageYOffset
      const cursor = document.querySelector('div#cursor')
      cursor.style.left = x + 'px'
      cursor.style.top = y - scrollTop + 'px'
    })
    // document.querySelector('nav').addEventListener('mouseover', function() {
    //   const cursor = document.querySelector('div#cursor')
    //   cursor.style.transform = 'scale(1.5)'
    // })
    // document.addEventListener('mousemove', function(e) {
    //   const cursor = document.querySelector('div#cursor')
    // })
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
  color: white;
  overflow-x: hidden;
}

html,
body,
a {
  cursor: none !important;
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
  transition: background-color 0s linear;
}
.daylight div#cursor {
  background-color: blue;
}
div#cursor.red-cursor {
  background-color: red;
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
</style>
