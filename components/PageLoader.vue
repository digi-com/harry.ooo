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
  z-index: 9999998;
  background-color: white;
}

/* Loading Spinner */
.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 30) solid transparent;
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
</style>
