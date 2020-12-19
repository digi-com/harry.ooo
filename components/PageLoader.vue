<template>
  <!-- Preloader -->
  <transition name="slide-fade">
    <div
      v-show="loading"
      :style="{ backgroundColor: bgHex }"
      class="page-loader flex items-center justify-center"
    >
      <div class="half-circle-spinner">
        <div :style="{ borderTopColor: lineHex }" class="circle circle-1"></div>
        <div
          :style="{ borderBottomColor: lineHex }"
          class="circle circle-2"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    bgHex: {
      type: String,
      default: '#fff',
      required: false
    },
    lineHex: {
      type: String,
      default: '#000',
      required: false
    }
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 800)
  }
}
</script>

<style>
.page-loader {
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
  z-index: 9998;
  background-color: white;
}

/* Loading Spinner */
.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 4.6875vw;
  height: 4.6875vw;
  min-width: 60px;
  min-height: 60px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 0.15625vw solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #000;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #000;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.slide-fade-enter-active {
  transition: all 0s;
  transform: translate3d(0, 0, 0);
  will-change: opacity, transform;
}
.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  transform: translate3d(0, 0, 0);
  will-change: opacity, transform;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 0, 0);
  will-change: opacity, transform;
}

/* Responsive */
@media screen and (min-width: 0) and (max-width: 1279px) {
  .half-circle-spinner .circle {
    border: 2px solid transparent;
  }
}
@media screen and (min-width: 0px) and (max-width: 320px) {
  .progressive-image .half-circle-spinner {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    border-radius: 100%;
    position: relative;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .progressive-image .half-circle-spinner {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    border-radius: 100%;
    position: relative;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .progressive-image .half-circle-spinner {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    border-radius: 100%;
    position: relative;
  }
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
