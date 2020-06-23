<template>
  <div id="index">
    <Navigation />
    <div style="position: relative; height: 100vh;">
      <video id="full-screen" autoplay muted loop playsinline>
        <source src="/meat-rack/video_1.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="image-array">
      <!-- Sticky header -->
      <div class="image-array-header">
        <!-- Image array count -->
        <span>Meat Rack {{ imageCount }}/32</span>
        <!-- Scroll-to link -->
        <div
          v-scroll-to="{
            el: '#film',
            duration: 2500,
            easing: [0.0, 0.0, 0.58, 1.0],
            cancelable: true,
            x: false,
            y: true
          }"
          style="padding-right: calc(13px + 8px); display: inline;"
        >
          Watch Trailer
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            xmlns="http://www.w3.org/2000/svg"
            style="transform: translate(8px, 1px); position: absolute;"
          >
            <path
              d="M12.163962 9.34711l-5.656854 5.65685h-.000253L.850001 9.34711 1.557108 8.64l4.447854 4.447L6.003962 0h1l.001 13.092 4.451893-4.452.707107.70711z"
              fill="#FFFFFF"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
      <!-- Sticky logo -->
      <div class="sticky-paragraph">
        <img src="/meat-rack/meat-rack-title.png" style="max-width: 360px;" />
      </div>
      <!-- Image array -->
      <div
        v-for="(image, index) in homeImages"
        :key="'image-' + index"
        class="image-container"
      >
        <!-- intersectionObserver -->
        <Observer
          @intersect="intersected(index + 1)"
          @exit="exited(index + 1)"
          :options="options"
          style="position: absolute; top: calc(50% + 144px);"
        />
        <img :src="image.url" :class="'image-' + (index + 1)" />
      </div>
    </div>
    <!-- Video -->
    <ProjectFilm film-link="/meat-rack/supercut_o.mp4" />
    <!-- Footer -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Observer from '~/components/Observer.vue'
import ProjectFilm from '~/components/ProjectFilm.vue'
// import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Observer,
    ProjectFilm
    // Footer
  },
  data() {
    return {
      options: null,
      imageCount: 1,
      homeImages: [
        {
          url: '/meat-rack/1.png'
        },
        {
          url: '/meat-rack/2.png'
        },
        {
          url: '/meat-rack/3.png'
        },
        {
          url: '/meat-rack/4.png'
        },
        {
          url: '/meat-rack/5.png'
        },
        {
          url: '/meat-rack/sequence2_2.png'
        },
        {
          url: '/meat-rack/6.png'
        },
        {
          url: '/meat-rack/7.png'
        },
        {
          url: '/meat-rack/8.png'
        },
        {
          url: '/meat-rack/9.png'
        },
        {
          url: '/meat-rack/10.png'
        },
        {
          url: '/meat-rack/11.png'
        },
        {
          url: '/meat-rack/12.png'
        },
        {
          url: '/meat-rack/13.png'
        },
        {
          url: '/meat-rack/14.png'
        },
        {
          url: '/meat-rack/15.png'
        },
        {
          url: '/meat-rack/16.png'
        },
        {
          url: '/meat-rack/17.png'
        },
        {
          url: '/meat-rack/18.png'
        },
        {
          url: '/meat-rack/19.png'
        },
        {
          url: '/meat-rack/20.png'
        },
        {
          url: '/meat-rack/21.png'
        },
        {
          url: '/meat-rack/22.png'
        },
        {
          url: '/meat-rack/23.png'
        },
        {
          url: '/meat-rack/24.png'
        },
        {
          url: '/meat-rack/25.png'
        },
        {
          url: '/meat-rack/26.png'
        },
        {
          url: '/meat-rack/27.png'
        },
        {
          url: '/meat-rack/28.png'
        },
        {
          url: '/meat-rack/sequence1_4.png'
        },
        {
          url: '/meat-rack/sequence3_2.png'
        },
        {
          url: '/meat-rack/29.png'
        }
      ]
    }
  },
  // mounted() {
  //   document.querySelector('.name').addEventListener('mouseenter', function() {
  //     const cursor = document.querySelector('div#cursor')
  //     cursor.style.transform = 'scale(2.5)'
  //   })
  //   document.querySelector('.name').addEventListener('mouseleave', function() {
  //     const cursor = document.querySelector('div#cursor')
  //     cursor.style.transform = 'scale(1)'
  //   })
  // },
  methods: {
    intersected(payload) {
      // console.log('intersected', payload)
      this.imageCount = payload
    },
    exited(payload) {
      // console.log('exited', payload)
      // this.imageCount = payload
    }
  }
}
</script>

<style>
#index .nav-button,
#index nav a {
  background: transparent;
  border: 2px solid white;
  color: white;
}
#full-screen {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: fill;
}
.image-array .image-array-header {
  color: white;
  position: sticky;
  top: 0;
  padding: 2rem 3rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  user-select: none;
}
.image-array .image-array-header a {
  color: white;
  text-decoration: none;
}
.image-array .image-container {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 100vh;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  align-items: center;
}
.image-array .image-container img {
  /* max-width: 360px; */
  display: block;
  max-width: 100%;
}

.sticky-paragraph {
  position: sticky;
  top: 0;
  font-family: 'Union';
  font-weight: 400;
  font-size: 1.75rem;
  font-style: italic;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 41rem;
  margin: 0 auto;
  line-height: 1.4;
  -webkit-font-smoothing: none;
  /* z-index: 9;
  mix-blend-mode: difference; */
}

/* Image + Grid Positioning */

.image-array > .image-container:nth-child(2) img {
  grid-column: 2 / 5;
}
.image-array > .image-container:nth-child(3) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(4) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(5) img {
  grid-column: 6 / 9;
}
.image-array > .image-container:nth-child(6) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(7) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(8) img {
  grid-column: 2 / 5;
}
.image-array > .image-container:nth-child(9) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(10) img {
  grid-column: 1 / 4;
}
.image-array > .image-container:nth-child(11) img {
  grid-column: 6 / 9;
}
.image-array > .image-container:nth-child(12) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(13) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(14) img {
  grid-column: 2 / 5;
}
.image-array > .image-container:nth-child(15) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(16) img {
  grid-column: 1 / 4;
}
.image-array > .image-container:nth-child(17) img {
  grid-column: 6 / 9;
}
.image-array > .image-container:nth-child(18) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(19) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(20) img {
  grid-column: 2 / 5;
}
.image-array > .image-container:nth-child(21) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(22) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(23) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(24) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(25) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(26) img {
  grid-column: 1 / 3;
}
.image-array > .image-container:nth-child(27) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(28) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(29) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(30) img {
  grid-column: 2 / 4;
}
.image-array > .image-container:nth-child(31) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(32) img {
  grid-column: 1 / 3;
}
.image-array > .image-container:nth-child(33) img {
  grid-column: 6 / 8;
}
.image-array > .image-container:nth-child(34) img {
  grid-column: 1 / 3;
}

/* Video Container */
.video-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .image-array .image-array-header {
    color: white;
    position: sticky;
    top: 0;
    padding: 1.5rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .image-array .image-array-header {
    color: white;
    position: sticky;
    top: 0;
    padding: 1.5rem;
  }
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
