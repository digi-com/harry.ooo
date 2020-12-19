<template>
  <div class="image-grid-container">
    <!-- Grid -->
    <section v-if="indexMode" class="m-image-grid">
      <div
        v-for="(image, index) in images"
        :key="'m-image-' + (index + 1)"
        :class="'m-image m-image-' + (index + 1)"
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
      >
        <client-only>
          <ProgressiveImage
            :width="image.width"
            :height="image.height"
            :src="image.src"
            line-one="Mundial"
            line-two="View Project"
          />
        </client-only>
      </div>
    </section>
    <!-- No Link -->
    <section v-else class="m-image-grid">
      <div
        v-for="(image, index) in images"
        :key="'m-image-' + (index + 1)"
        :class="'m-image m-image-' + (index + 1)"
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
          src: '/mundial/mundial-1.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-2.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-3.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-9.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-8.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-17.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-12.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-14.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-18.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-23.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-22.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-20.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-21.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-27.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-34.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-32.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-41.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-29.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-42.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-43.png',
          width: 1000,
          height: 563
        },
        {
          src: '/mundial/mundial-44.png',
          width: 1000,
          height: 563
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

.m-image-grid {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
  grid-template-rows: repeat(93, 3.125vw);
  grid-row-gap: 0.625vw;
}
.m-image-grid .m-image {
  position: relative;
}
.m-image-grid .m-image-1 {
  grid-column: 1 / 7;
  grid-row: 1 / 8;
}
.m-image-grid .m-image-2 {
  grid-column: 8 / 13;
  grid-row: 5 / 12;
}
.m-image-grid .m-image-3 {
  grid-column: 2 / 6;
  grid-row: 12 / 16;
  z-index: 1;
}
.m-image-grid .m-image-4 {
  grid-column: 5 / 12;
  grid-row: 15 / 22;
  z-index: 2;
}
.m-image-grid .m-image-5 {
  grid-column: 1 / 7;
  grid-row: 22 / 26;
  z-index: 1;
}
.m-image-grid .m-image-6 {
  grid-column: 2 / 6;
  grid-row: 33 / 38;
  z-index: 1;
}
.m-image-grid .m-image-7 {
  grid-column: 8 / 12;
  grid-row: 28 / 32;
  z-index: 1;
}
.m-image-grid .m-image-8 {
  grid-column: 9 / 13;
  grid-row: 31 / 35;
  z-index: 1;
}
.m-image-grid .m-image-9 {
  grid-column: 1 / 7;
  grid-row: 42 / 48;
  z-index: 1;
}
.m-image-grid .m-image-10 {
  grid-column: 8 / 12;
  grid-row: 40 / 44;
  z-index: 1;
}
.m-image-grid .m-image-11 {
  grid-column: 9 / 13;
  grid-row: 43 / 47;
  z-index: 1;
}
.m-image-grid .m-image-12 {
  grid-column: 1 / 5;
  grid-row: 53 / 57;
  z-index: 1;
}
.m-image-grid .m-image-13 {
  grid-column: 2 / 6;
  grid-row: 56 / 61;
  z-index: 1;
}
.m-image-grid .m-image-14 {
  grid-column: 8 / 13;
  grid-row: 52 / 55;
  z-index: 1;
}
.m-image-grid .m-image-15 {
  grid-column: 5 / 11;
  grid-row: 62 / 65;
  z-index: 2;
}
.m-image-grid .m-image-16 {
  grid-column: 1 / 7;
  grid-row: 65 / 68;
  z-index: 1;
}
.m-image-grid .m-image-17 {
  grid-column: 1 / 7;
  grid-row: 77 / 78;
  z-index: 1;
}
.m-image-grid .m-image-18 {
  grid-column: 8 / 13;
  grid-row: 73 / 78;
  z-index: 1;
}
.m-image-grid .m-image-19 {
  grid-column: 2 / 6;
  grid-row: 89 / 94;
  z-index: 1;
}
.m-image-grid .m-image-20 {
  grid-column: 8 / 12;
  grid-row: 83 / 88;
  z-index: 1;
}
.m-image-grid .m-image-21 {
  grid-column: 9 / 13;
  grid-row: 86 / 91;
  z-index: 1;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .m-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .m-image-grid {
    width: 118.5%;
    position: relative;
    left: -9.25%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .m-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .m-image-grid {
    width: 100%;
    position: relative;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .m-image-grid {
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
