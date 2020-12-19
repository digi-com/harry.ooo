<template>
  <div class="image-grid-container">
    <!-- Grid -->
    <section v-if="indexMode" class="o-image-grid">
      <div
        v-for="(image, index) in images"
        :key="'o-image-' + (index + 1)"
        :class="'o-image o-image-' + (index + 1)"
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
      >
        <client-only>
          <ProgressiveImage
            :width="image.width"
            :height="image.height"
            :src="image.src"
            line-one="Ochre"
            line-two="View Project"
          />
        </client-only>
      </div>
    </section>
    <!-- No Link -->
    <section v-else class="o-image-grid">
      <div
        v-for="(image, index) in images"
        :key="'o-image-' + (index + 1)"
        :class="'o-image o-image-' + (index + 1)"
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
          src: '/ochre/1.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/4.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/7.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/6.png',
          width: 960,
          height: 720
        },
        {
          src: '/ochre/5.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/8.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/11.png',
          width: 960,
          height: 720
        },
        {
          src: '/ochre/12.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/9.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/14.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/18.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/22.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/33.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/38.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/37.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/31.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/34.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/36.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/41.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/42.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/45.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/46.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/47.png',
          width: 960,
          height: 540
        },
        {
          src: '/ochre/43.png',
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

.o-image-grid {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
  grid-template-rows: repeat(99, 3.125vw);
  grid-row-gap: 0.625vw;
}
.o-image-grid .o-image {
  position: relative;
}
.o-image-grid .o-image-1 {
  grid-column: 1 / 7;
  grid-row: 1 / 8;
}
.o-image-grid .o-image-2 {
  grid-column: 8 / 13;
  grid-row: 5 / 12;
}
.o-image-grid .o-image-3 {
  grid-column: 2 / 6;
  grid-row: 12 / 16;
  z-index: 1;
}
.o-image-grid .o-image-4 {
  grid-column: 5 / 11;
  grid-row: 15 / 22;
  z-index: 2;
}
.o-image-grid .o-image-5 {
  grid-column: 1 / 7;
  grid-row: 21 / 26;
  z-index: 1;
}
.o-image-grid .o-image-6 {
  grid-column: 2 / 6;
  grid-row: 32 / 36;
  z-index: 1;
}
.o-image-grid .o-image-7 {
  grid-column: 8 / 13;
  grid-row: 26 / 32;
  z-index: 2;
}
.o-image-grid .o-image-8 {
  grid-column: 1 / 5;
  grid-row: 41 / 44;
  z-index: 1;
}
.o-image-grid .o-image-9 {
  grid-column: 7 / 13;
  grid-row: 36 / 41;
  z-index: 1;
}
.o-image-grid .o-image-10 {
  grid-column: 2 / 6;
  grid-row: 50 / 52;
  z-index: 1;
}
.o-image-grid .o-image-11 {
  grid-column: 8 / 13;
  grid-row: 47 / 49;
  z-index: 1;
}
.o-image-grid .o-image-12 {
  grid-column: 1 / 6;
  grid-row: 59 / 62;
  z-index: 1;
}
.o-image-grid .o-image-13 {
  grid-column: 7 / 12;
  grid-row: 57 / 62;
  z-index: 1;
}
.o-image-grid .o-image-14 {
  grid-column: 2 / 6;
  grid-row: 69 / 72;
  z-index: 1;
}
.o-image-grid .o-image-15 {
  grid-column: 1 / 5;
  grid-row: 72 / 73;
  z-index: 2;
}
.o-image-grid .o-image-16 {
  grid-column: 7 / 11;
  grid-row: 67 / 71;
  z-index: 1;
}
.o-image-grid .o-image-17 {
  grid-column: 8 / 12;
  grid-row: 70 / 75;
  z-index: 1;
}
.o-image-grid .o-image-18 {
  grid-column: 9 / 13;
  grid-row: 73 / 79;
  z-index: 1;
}
.o-image-grid .o-image-19 {
  grid-column: 1 / 7;
  grid-row: 81 / 88;
  z-index: 1;
}
.o-image-grid .o-image-20 {
  grid-column: 9 / 13;
  grid-row: 82 / 88;
  z-index: 1;
}
.o-image-grid .o-image-21 {
  grid-column: 8 / 12;
  grid-row: 85 / 89;
  z-index: 1;
}
.o-image-grid .o-image-22 {
  grid-column: 1 / 5;
  grid-row: 92 / 98;
  z-index: 1;
}
.o-image-grid .o-image-23 {
  grid-column: 2 / 6;
  grid-row: 95 / 100;
  z-index: 1;
}
.o-image-grid .o-image-24 {
  grid-column: 8 / 13;
  grid-row: 94 / 102;
  z-index: 1;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .o-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .o-image-grid {
    width: 118.5%;
    position: relative;
    left: -9.25%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .o-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .o-image-grid {
    width: 100%;
    position: relative;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .o-image-grid {
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
