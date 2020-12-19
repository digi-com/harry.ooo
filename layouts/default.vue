<template>
  <section id="app">
    <transition name="loader-fade">
      <vue100vh v-show="loading" :css="{ height: '100rvh' }" class="preloader">
        <transition name="fade-up">
          <svg
            v-show="logoLoaded"
            style="width: 20.46875vw; height: 4.921875vw; min-width: 262px; min-height: 63px;"
            viewBox="0 0 262 63"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(2 2)" fill-rule="nonzero" fill="none">
              <rect
                stroke="#000000"
                stroke-width="2"
                fill="#FFFFFF"
                x="-1"
                y="-1"
                width="260"
                height="61"
                rx="30.5"
              />
              <path
                d="M30.446 39v-8.632h9.724V39h2.47V20.41h-2.47v7.8h-9.724v-7.8h-2.47V39h2.47zm16.74 0l2.054-5.616h7.852L59.198 39h2.73l-7.436-18.59h-2.704L44.612 39h2.574zm9.126-7.644h-6.318l2.054-5.616c.39-1.066.754-2.158 1.04-3.224h.026c.312 1.066.702 2.132 1.092 3.224l2.106 5.616zM66.344 39v-8.086h4.498c2.548 0 3.77 1.404 4.238 3.874.312 1.586.988 3.458 1.768 4.212h2.834c-1.066-1.248-1.69-3.198-2.236-4.992-.416-1.352-1.014-2.912-2.47-3.51l-.702-.286c2.756-.416 4.238-2.236 4.238-4.758 0-3.016-1.976-5.044-6.214-5.044h-8.424V39h2.47zm5.434-10.192h-5.434V22.49h6.006c2.548 0 3.64 1.17 3.64 3.094 0 2.236-1.378 3.224-4.212 3.224zM84.67 39v-8.086h4.498c2.548 0 3.77 1.404 4.238 3.874.312 1.586.988 3.458 1.768 4.212h2.834c-1.066-1.248-1.69-3.198-2.236-4.992-.416-1.352-1.014-2.912-2.47-3.51l-.702-.286c2.756-.416 4.238-2.236 4.238-4.758 0-3.016-1.976-5.044-6.214-5.044H82.2V39h2.47zm5.434-10.192H84.67V22.49h6.006c2.548 0 3.64 1.17 3.64 3.094 0 2.236-1.378 3.224-4.212 3.224zM107.468 39v-7.722l7.254-10.868h-2.834l-5.59 8.814-5.512-8.814h-2.964l7.176 10.868V39h2.47zm27.526 0v-2.132h-9.516V20.41h-2.47V39h11.986zm3.09 0l2.054-5.616h7.852L150.096 39h2.73l-7.436-18.59h-2.704L135.51 39h2.574zm9.126-7.644h-6.318l2.054-5.616c.39-1.066.754-2.158 1.04-3.224h.026c.312 1.066.702 2.132 1.092 3.224l2.106 5.616zM159.348 39l3.692-13.312.702-2.704h.026l.728 2.704L168.136 39h2.47l5.044-18.59h-2.47l-2.964 12.168-.858 3.562h-.026l-.806-3.406-3.302-12.324h-2.808l-3.432 12.376-.832 3.354h-.026l-.78-3.562-2.86-12.168h-2.522L156.8 39h2.548zm25.58.364c3.77 0 7.072-2.08 7.072-5.512 0-2.392-1.274-3.848-3.458-4.654-1.352-.52-4.784-1.274-6.448-1.924-.936-.364-1.898-.988-1.898-2.132 0-2.002 1.742-3.12 4.186-3.12 2.652 0 4.394 1.326 4.55 3.822l2.392-.078c-.13-3.744-2.86-5.72-6.968-5.72-3.614 0-6.604 1.976-6.604 5.2 0 2.288 1.586 3.51 3.328 4.186 1.82.702 5.096 1.378 6.474 1.976 1.352.572 2.002 1.326 2.002 2.574 0 2.21-2.08 3.302-4.654 3.302-2.106 0-5.226-.858-5.46-4.42l-2.314.104c.078 4.056 3.146 6.396 7.8 6.396zm18.352 0c5.928 0 8.892-4.758 8.892-9.828 0-5.2-3.406-9.516-8.84-9.516-4.654 0-8.944 3.25-8.944 9.802 0 5.512 3.64 9.542 8.892 9.542zm0-2.054c-4.706 0-6.396-4.212-6.396-7.462 0-4.758 2.496-7.774 6.422-7.774 4.056 0 6.37 3.458 6.37 7.514 0 3.926-1.846 7.722-6.396 7.722zM217.732 39V24.05h.078L227.482 39h2.626V20.41h-2.366v14.872h-.078L217.94 20.41h-2.574V39h2.366z"
                fill="#000000"
              />
            </g>
          </svg>
        </transition>
      </vue100vh>
    </transition>
    <!-- <Navigation /> -->
    <nuxt />
    <!-- Preload Cursors -->
    <div
      style="position: absolute; top: 0; right: 0; width: 0; height: 0; pointer-events: none;"
    >
      <img src="/cursor.svg" style="opacity: 0;" />
      <img src="/pointer.svg" style="opacity: 0;" />
    </div>
    <!-- Meat Rack Modal -->
    <VideoModal
      v-if="meatRackModal"
      @close-clicked="toggleMeatRack()"
      video-id="429754603"
    />
    <!-- Mundial Modal -->
    <VideoModal
      v-if="mundialModal"
      @close-clicked="toggleMundial()"
      video-id="462169909"
    />
    <!-- Margaret Modal -->
    <VideoModal
      v-if="margaretModal"
      @close-clicked="toggleMargaret()"
      video-id="390695847"
    />
    <!-- Ochre Modal -->
    <VideoModal
      v-if="ochreModal"
      @close-clicked="toggleOchre()"
      video-id="370058381"
    />
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
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
  computed: {
    meatRackModal() {
      return this.$store.state.meatRack
    },
    mundialModal() {
      return this.$store.state.mundial
    },
    margaretModal() {
      return this.$store.state.margaret
    },
    ochreModal() {
      return this.$store.state.ochre
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
    ...mapMutations({
      toggleMeatRack: 'toggleMeatRack',
      toggleMundial: 'toggleMundial',
      toggleMargaret: 'toggleMargaret',
      toggleOchre: 'toggleOchre'
    }),
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
  width: 2.578125vw;
  height: 4.375vw;
  background-image: url('/cursor.svg');
  pointer-events: none;
  position: fixed;
  z-index: 99999999;
}
div#cursor.view-project {
  width: 3.203125vw;
  height: 4.21875vw;
  background-image: url('/pointer.svg');
  pointer-events: none;
  position: fixed;
  z-index: 99999999;
  transform: translateX(-0.625vw);
}
/* div#cursor.view-project {
  background-color: white;
  background-image: none;
  border: 2px solid black;
  border-radius: 999px;
  height: 63px;
  width: 15.375rem;
  padding: 0 1.625rem;
  transform: translateX(calc(-15.375rem / 2)) translateY(-2rem);
  z-index: 9999;
} */
/* .nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-decoration: none;
  letter-spacing: 0.15px;
} */
/* div#cursor.view-project::after {
  content: 'View Project';
  color: black;
  font-size: 1.625rem;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  position: absolute;
  left: 1.625rem;
  top: 0.875rem;
} */

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
