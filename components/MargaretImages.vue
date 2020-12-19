<template>
  <div class="image-grid-container">
    <!-- Grid -->
    <section v-if="indexMode" class="ma-image-grid">
      <div
        v-for="(image, index) in images"
        :key="'ma-image-' + (index + 1)"
        :class="'ma-image ma-image-' + (index + 1)"
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
      >
        <client-only>
          <ProgressiveImage
            :width="image.width"
            :height="image.height"
            :src="image.src"
            line-one="Margaret"
            line-two="View Project"
          />
        </client-only>
      </div>
    </section>
    <!-- No Link -->
    <section v-else class="ma-image-grid">
      <div
        v-for="(image, index) in images"
        :key="'ma-image-' + (index + 1)"
        :class="'ma-image ma-image-' + (index + 1)"
      >
        <client-only>
          <ProgressiveImage
            :width="image.width"
            :height="image.height"
            :src="image.src"
          />
        </client-only>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    indexMode: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      images: [
        {
          src: '/margaret/8.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/9.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/4.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/6.png',
          width: 960,
          height: 720
        },
        {
          src: '/margaret/11.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/14.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/3.png',
          width: 960,
          height: 720
        },
        {
          src: '/margaret/13.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/17.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/15.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/19.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/20.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/24.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/23.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/29.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/30.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/34.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/41.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/46.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/47.png',
          width: 960,
          height: 540
        },
        {
          src: '/margaret/44.png',
          width: 960,
          height: 540
        }
      ]
    }
  },
  methods: {
    viewProjectEnter() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.add('view-project')
      }
    },
    viewProjectExit() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    }
  }
}
</script>

<style scoped>
.image-grid-container {
  position: relative;
}

/* Grid  */

.ma-image-grid {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
  grid-template-rows: repeat(98, 3.125vw);
  grid-row-gap: 0.625vw;
}
.ma-image-grid .ma-image {
  position: relative;
}
.ma-image-grid .ma-image-1 {
  grid-column: 1 / 7;
  grid-row: 1 / 8;
}
.ma-image-grid .ma-image-2 {
  grid-column: 8 / 13;
  grid-row: 5 / 12;
}
.ma-image-grid .ma-image-3 {
  grid-column: 2 / 6;
  grid-row: 12 / 16;
  z-index: 1;
}
.ma-image-grid .ma-image-4 {
  grid-column: 5 / 11;
  grid-row: 15 / 22;
  z-index: 2;
}
.ma-image-grid .ma-image-5 {
  grid-column: 1 / 7;
  grid-row: 21 / 26;
  z-index: 1;
}
.ma-image-grid .ma-image-6 {
  grid-column: 2 / 6;
  grid-row: 32 / 36;
  z-index: 1;
}
.ma-image-grid .ma-image-7 {
  grid-column: 8 / 13;
  grid-row: 23 / 32;
  z-index: 2;
}
.ma-image-grid .ma-image-8 {
  grid-column: 9 / 13;
  grid-row: 35 / 38;
  z-index: 1;
}
.ma-image-grid .ma-image-9 {
  grid-column: 8 / 12;
  grid-row: 38 / 41;
  z-index: 1;
}
.ma-image-grid .ma-image-10 {
  grid-column: 1 / 7;
  grid-row: 41 / 45;
  z-index: 1;
}
.ma-image-grid .ma-image-11 {
  grid-column: 5 / 12;
  grid-row: 47 / 49;
  z-index: 1;
}
.ma-image-grid .ma-image-12 {
  grid-column: 2 / 6;
  grid-row: 52 / 58;
  z-index: 1;
}
.ma-image-grid .ma-image-13 {
  grid-column: 9 / 13;
  grid-row: 60 / 64;
  z-index: 1;
}
.ma-image-grid .ma-image-14 {
  grid-column: 1 / 7;
  grid-row: 61 / 65;
  z-index: 1;
}
.ma-image-grid .ma-image-15 {
  grid-column: 8 / 13;
  grid-row: 69 / 73;
  z-index: 2;
}
.ma-image-grid .ma-image-16 {
  grid-column: 2 / 6;
  grid-row: 72 / 76;
  z-index: 1;
}
.ma-image-grid .ma-image-17 {
  grid-column: 1 / 7;
  grid-row: 81 / 86;
  z-index: 1;
}
.ma-image-grid .ma-image-18 {
  grid-column: 8 / 13;
  grid-row: 79 / 82;
  z-index: 1;
}
.ma-image-grid .ma-image-19 {
  grid-column: 8 / 13;
  grid-row: 89 / 92;
  z-index: 1;
}
.ma-image-grid .ma-image-20 {
  grid-column: 2 / 6;
  grid-row: 92 / 96;
  z-index: 1;
}
.ma-image-grid .ma-image-21 {
  grid-column: 3 / 7;
  grid-row: 94 / 98;
  z-index: 1;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .ma-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .ma-image-grid {
    width: 118.5%;
    position: relative;
    left: -9.25%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .ma-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .ma-image-grid {
    width: 100%;
    position: relative;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .ma-image-grid {
    width: 100%;
    position: relative;
    padding: 0 1.5rem;
  }
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
