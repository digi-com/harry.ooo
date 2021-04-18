<template>
  <div class="image-grid-container">
    <!-- Grid -->
    <section class="index-image-grid">
      <div
        v-for="(image, index) in images"
        :key="'index-image-' + (index + 1)"
        :class="'index-image index-image-' + (index + 1)"
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToProject(image.link)"
      >
        <client-only>
          <ProgressiveImage
            :width="image.width"
            :height="image.height"
            :src="image.src"
            :line-one="image.title"
            line-two="View Project"
          />
        </client-only>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: '/index/home-1.png',
          width: 502,
          height: 709,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-2.png',
          width: 400,
          height: 320,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-3.png',
          width: 604,
          height: 340,
          link: 'ochre',
          title: 'Ochre'
        },
        {
          src: '/index/home-4.png',
          width: 502,
          height: 282,
          link: 'margaret',
          title: 'Margaret'
        },
        {
          src: '/index/home-5.png',
          width: 400,
          height: 225,
          link: 'mundial',
          title: 'Mundial'
        },
        {
          src: '/index/home-6.png',
          width: 910,
          height: 510,
          link: 'ochre',
          title: 'Ochre'
        },
        {
          src: '/index/home-7.png',
          width: 604,
          height: 340,
          link: 'mundial',
          title: 'Mundial'
        },
        {
          src: '/index/home-8.png',
          width: 400,
          height: 225,
          link: 'ochre',
          title: 'Ochre'
        },
        {
          src: '/index/home-9.png',
          width: 502,
          height: 400,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-10.png',
          width: 502,
          height: 282,
          link: 'margaret',
          title: 'Margaret'
        },
        {
          src: '/index/home-11.png',
          width: 604,
          height: 482,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-12.png',
          width: 502,
          height: 282,
          link: 'mundial',
          title: 'Mundial'
        },
        {
          src: '/index/home-13.png',
          width: 400,
          height: 320,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-14.png',
          width: 808,
          height: 455,
          link: 'margaret',
          title: 'Margaret'
        },
        {
          src: '/index/home-15.png',
          width: 502,
          height: 282,
          link: 'mundial',
          title: 'Mundial'
        },
        {
          src: '/index/home-16.png',
          width: 502,
          height: 402,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-17.png',
          width: 604,
          height: 340,
          link: 'margaret',
          title: 'Margaret'
        },
        {
          src: '/index/home-18.png',
          width: 502,
          height: 282,
          link: 'margaret',
          title: 'Margaret'
        },
        {
          src: '/index/home-19.png',
          width: 502,
          height: 282,
          link: 'ochre',
          title: 'Ochre'
        },
        {
          src: '/index/home-20.png',
          width: 400,
          height: 320,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-21.png',
          width: 400,
          height: 320,
          link: 'meat-rack',
          title: 'Meat Rack'
        },
        {
          src: '/index/home-22.png',
          width: 502,
          height: 282,
          link: 'margaret',
          title: 'Margaret'
        },
        {
          src: '/index/home-23.png',
          width: 604,
          height: 340,
          link: 'ochre',
          title: 'Ochre'
        },
        {
          src: '/index/home-24.png',
          width: 400,
          height: 320,
          link: 'meat-rack',
          title: 'Meat Rack'
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
    },
    goToProject(slug) {
      this.$router.push({
        path: '/projects/' + slug
      })
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

.index-image-grid {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
  grid-template-rows: repeat(154, 3.125vw);
  grid-row-gap: 0.625vw;
}
.index-image-grid .index-image {
  position: relative;
  /* margin-bottom: 15.625vw; */
  display: none;
}
.index-image-grid .index-image-1 {
  grid-column: 2 / 7;
  grid-row-start: 1;
  display: block;
}
.index-image-grid .index-image-2 {
  grid-column: 8 / 12;
  grid-row-start: 5;
  display: block;
}
.index-image-grid .index-image-3 {
  grid-column: 1 / 7;
  grid-row-start: 20;
  display: block;
}
.index-image-grid .index-image-4 {
  grid-column: 8 / 13;
  grid-row-start: 16;
  display: block;
}
.index-image-grid .index-image-5 {
  grid-column: 8 / 12;
  grid-row-start: 26;
  display: block;
}
.index-image-grid .index-image-6 {
  grid-column: 2 / 11;
  grid-row-start: 35;
  display: block;
}
.index-image-grid .index-image-7 {
  grid-column: 1 / 7;
  grid-row-start: 50;
  display: block;
}
.index-image-grid .index-image-8 {
  grid-column: 8 / 12;
  grid-row-start: 50;
  display: block;
}
.index-image-grid .index-image-9 {
  grid-column: 2 / 7;
  grid-row-start: 61;
  display: block;
}
.index-image-grid .index-image-10 {
  grid-column: 8 / 13;
  grid-row-start: 59;
  display: block;
}
.index-image-grid .index-image-11 {
  grid-column: 1 / 7;
  grid-row-start: 74;
  display: block;
}
.index-image-grid .index-image-12 {
  grid-column: 8 / 13;
  grid-row-start: 69;
  display: block;
}
.index-image-grid .index-image-13 {
  grid-column: 8 / 12;
  grid-row-start: 79;
  display: block;
}
.index-image-grid .index-image-14 {
  grid-column: 3 / 11;
  grid-row-start: 90;
  display: block;
}
.index-image-grid .index-image-15 {
  grid-column: 2 / 7;
  grid-row-start: 104;
  display: block;
}
.index-image-grid .index-image-16 {
  grid-column: 8 / 13;
  grid-row-start: 104;
  display: block;
}
.index-image-grid .index-image-17 {
  grid-column: 1 / 7;
  grid-row-start: 114;
  display: block;
}
.index-image-grid .index-image-18 {
  grid-column: 8 / 13;
  grid-row-start: 117;
  display: block;
}
.index-image-grid .index-image-19 {
  grid-column: 2 / 7;
  grid-row-start: 125;
  display: block;
}
.index-image-grid .index-image-20 {
  grid-column: 8 / 12;
  grid-row-start: 127;
  display: block;
}
.index-image-grid .index-image-21 {
  grid-column: 3 / 7;
  grid-row-start: 135;
  display: block;
}
.index-image-grid .index-image-22 {
  grid-column: 8 / 13;
  grid-row-start: 138;
  display: block;
}
.index-image-grid .index-image-23 {
  grid-column: 1 / 7;
  grid-row-start: 146;
  display: block;
}
.index-image-grid .index-image-24 {
  grid-column: 8 / 12;
  grid-row-start: 148;
  display: block;
}

@media screen and (min-width: 0px) and (max-width: 320px) {
  .index-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .index-image-grid {
    width: 118.5%;
    position: relative;
    left: -9.25%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .index-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .index-image-grid {
    width: 100%;
    position: relative;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .index-image-grid {
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
