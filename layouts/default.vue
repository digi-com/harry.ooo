<template>
  <section id="app">
    <transition name="loader-fade">
      <vue100vh v-show="loading" :css="{ height: '100rvh' }" class="preloader">
        <transition name="fade-up">
          <svg
            v-show="logoLoaded"
            width="310"
            height="64"
            viewBox="0 0 310 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(2 2)" fill-rule="nonzero" fill="none">
              <rect
                stroke="#000000"
                stroke-width="2"
                fill="#FFFFFF"
                x="-1"
                y="-1"
                width="308"
                height="62"
                rx="31"
              />
              <path
                d="M31.472 41V30.376H43.44V41h3.04V18.12h-3.04v9.6H31.472v-9.6h-3.04V41h3.04zm20.58 0l2.528-6.912h9.664L66.836 41h3.36l-9.152-22.88h-3.328L48.884 41h3.168zm11.232-9.408h-7.776l2.528-6.912c.48-1.312.928-2.656 1.28-3.968h.032c.384 1.312.864 2.624 1.344 3.968l2.592 6.912zM75.608 41v-9.952h5.536c3.136 0 4.64 1.728 5.216 4.768.384 1.952 1.216 4.256 2.176 5.184h3.488c-1.312-1.536-2.08-3.936-2.752-6.144-.512-1.664-1.248-3.584-3.04-4.32l-.864-.352c3.392-.512 5.216-2.752 5.216-5.856 0-3.712-2.432-6.208-7.648-6.208H72.568V41h3.04zm6.688-12.544h-6.688V20.68H83c3.136 0 4.48 1.44 4.48 3.808 0 2.752-1.696 3.968-5.184 3.968zM98.14 41v-9.952h5.536c3.136 0 4.64 1.728 5.216 4.768.384 1.952 1.216 4.256 2.176 5.184h3.488c-1.312-1.536-2.08-3.936-2.752-6.144-.512-1.664-1.248-3.584-3.04-4.32l-.864-.352c3.392-.512 5.216-2.752 5.216-5.856 0-3.712-2.432-6.208-7.648-6.208H95.1V41h3.04zm6.688-12.544H98.14V20.68h7.392c3.136 0 4.48 1.44 4.48 3.808 0 2.752-1.696 3.968-5.184 3.968zM126.176 41v-9.504l8.928-13.376h-3.488l-6.88 10.848-6.784-10.848h-3.648l8.832 13.376V41h3.04zm33.832 0v-2.624h-11.712V18.12h-3.04V41h14.752zm3.78 0l2.528-6.912h9.664L178.572 41h3.36l-9.152-22.88h-3.328L160.62 41h3.168zm11.232-9.408h-7.776l2.528-6.912c.48-1.312.928-2.656 1.28-3.968h.032c.384 1.312.864 2.624 1.344 3.968l2.592 6.912zM189.936 41l4.544-16.384.864-3.328h.032l.896 3.328L200.752 41h3.04L210 18.12h-3.04l-3.648 14.976-1.056 4.384h-.032l-.992-4.192-4.064-15.168h-3.456l-4.224 15.232-1.024 4.128h-.032l-.96-4.384-3.52-14.976h-3.104L186.8 41h3.136zm31.46.448c4.64 0 8.704-2.56 8.704-6.784 0-2.944-1.568-4.736-4.256-5.728-1.664-.64-5.888-1.568-7.936-2.368-1.152-.448-2.336-1.216-2.336-2.624 0-2.464 2.144-3.84 5.152-3.84 3.264 0 5.408 1.632 5.6 4.704l2.944-.096c-.16-4.608-3.52-7.04-8.576-7.04-4.448 0-8.128 2.432-8.128 6.4 0 2.816 1.952 4.32 4.096 5.152 2.24.864 6.272 1.696 7.968 2.432 1.664.704 2.464 1.632 2.464 3.168 0 2.72-2.56 4.064-5.728 4.064-2.592 0-6.432-1.056-6.72-5.44l-2.848.128c.096 4.992 3.872 7.872 9.6 7.872zm22.564 0c7.296 0 10.944-5.856 10.944-12.096 0-6.4-4.192-11.712-10.88-11.712-5.728 0-11.008 4-11.008 12.064 0 6.784 4.48 11.744 10.944 11.744zm0-2.528c-5.792 0-7.872-5.184-7.872-9.184 0-5.856 3.072-9.568 7.904-9.568 4.992 0 7.84 4.256 7.84 9.248 0 4.832-2.272 9.504-7.872 9.504zM261.724 41V22.6h.096L273.724 41h3.232V18.12h-2.912v18.304h-.096L261.98 18.12h-3.168V41h2.912z"
                fill="#000000"
              />
            </g>
          </svg>
        </transition>
      </vue100vh>
    </transition>
    <Navigation />
    <nuxt />
  </section>
</template>

<script>
import vue100vh from 'vue-100vh'

export default {
  components: {
    vue100vh
  },
  data() {
    return {
      loading: true,
      logoLoaded: false
    }
  },
  mounted() {
    if (this.isTouchDevice()) {
    } else {
      const newCursor = document.createElement('div')
      newCursor.setAttribute('id', 'cursor')
      document.getElementById('app').appendChild(newCursor)
      document.addEventListener('mousemove', function(event) {
        const x = event.pageX
        const y = event.pageY
        const scrollTop = window.pageYOffset
        const cursor = document.querySelector('div#cursor')
        cursor.style.left = x + 'px'
        cursor.style.top = y - scrollTop + 'px'
      })
      document.addEventListener('mouseleave', function(event) {
        const cursor = document.querySelector('div#cursor')
        cursor.classList.add('cursor-hidden')
      })
      document.addEventListener('mouseenter', function(event) {
        const cursor = document.querySelector('div#cursor')
        cursor.classList.remove('cursor-hidden')
      })
    }
    this.preload()
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
    },
    preload() {
      setTimeout(() => {
        this.loading = false
      }, 1200)
      setTimeout(() => {
        this.logoLoaded = true
      }, 200)
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
  background-color: white;
}
html.has-scroll-init {
  overflow: hidden;
}

html.night {
  background-color: black;
  color: white;
}

html * {
  cursor: none !important;
}

html,
body,
a {
  color: black;
}

div#cursor {
  width: 34px;
  height: 62px;
  background-image: url('/cursor.svg');
  pointer-events: none;
  position: fixed;
  z-index: 99999999;
  /* transition: transform 0.5s linear; */
}
div#cursor.view-project {
  background-color: white;
  background-image: none;
  border: 2px solid black;
  border-radius: 999px;
  height: 4rem;
  width: 17.3125rem;
  padding: 0 1.625rem;
  transform: translateX(calc(-17.3125rem / 2)) translateY(-2rem);
}
div#cursor.view-project::after {
  content: 'View Project';
  color: black;
  font-size: 1.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  position: absolute;
  left: 1.625rem;
  top: 0.75rem;
}

canvas {
  background-color: white;
  color: black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Preloader */

.preloader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  background-color: white;
}

/* Preloader transitions, etc. */

.loader-fade-enter-active {
  animation: loader-fade-in 2s cubic-bezier(0.19, 1, 0.22, 1);
}
.loader-fade-leave-active {
  animation: loader-fade-out 2s cubic-bezier(0.19, 1, 0.22, 1);
}
@keyframes loader-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes loader-fade-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fade-up-enter-active {
  animation: fade-up-in 0.64s cubic-bezier(0.19, 1, 0.22, 1);
}
.fade-up-leave-active {
  animation: fade-up-in 0.64s cubic-bezier(0.19, 1, 0.22, 1) reverse;
}
@keyframes fade-up-in {
  0% {
    opacity: 0;
    /* transform: translateY(12px); */
  }
  100% {
    opacity: 1;
    /* transform: translateY(0px); */
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
  #app {
    /* max-width: 1280px; */
    /* margin: 0 auto; */
    position: relative;
  }
}
@media screen and (min-width: 1441px) and (max-width: 1600px) {
  #app {
    /* max-width: 1280px; */
    /* margin: 0 auto; */
    position: relative;
  }
}
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  #app {
    /* max-width: 1280px; */
    /* margin: 0 auto; */
    position: relative;
  }
}
@media screen and (min-width: 1921px) and (max-width: 2560px) {
  #app {
    /* max-width: 1280px; */
    /* margin: 0 auto; */
    position: relative;
  }
}
@media screen and (min-width: 2561px) and (max-width: 9999px) {
  #app {
    /* max-width: 1280px; */
    /* margin: 0 auto; */
    position: relative;
  }
}
</style>
