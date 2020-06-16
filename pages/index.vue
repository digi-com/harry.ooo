<template>
  <div>
    <Navigation />
    <div style="position: relative; height: 100vh;">
      <video id="full-screen" autoplay muted loop>
        <source src="/meat-rack/video_1.mp4" type="video/mp4" />
      </video>
      <marquee-text :repeat="10" class="ra-marquee">
        <a
          href="https://www.residentadvisor.net/"
          rel="noopener"
          target="blank"
          class="ra-link"
        >
          <svg
            width="936"
            height="449"
            viewBox="0 0 936 449"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M925.008 359.515c6.274-5.975 10.236-14.348 10.236-23.693 0-8.994-4.28-17.078-10.141-22.997L661.04 48.762l-79.702 79.702 207.901 207.901H494.688c-14.399-.431-25.81-5.262-35.465-14.619L327.056 189.579c-13.705-12.96-32.479-21.16-52.834-21.16-.072 0-.139.01-.201.01v-.01H112.72v-55.152h167.056v.011c33.099.016 62.631 13.563 84.278 35.303l98.584 98.583 79.702-79.702-100.5-100.5C399.832 25.594 343.1.551 279.491.551H0v280.583h236.379v.018c15.374.11 29.254 6.433 39.276 16.588l129.441 129.445c13.166 12.93 30.955 21.081 50.68 21.815h357.57c15.053-.198 28.648-6.361 38.57-16.254l73.147-73.14-.055-.091"
              fill="#FFFFFF"
              fill-rule="evenodd"
            />
          </svg>
          Watch Meat Rack on Resident Advisor
        </a>
      </marquee-text>
    </div>
    <div class="image-array">
      <div class="image-array-header">
        <span>Meat Rack {{ imageCount }}/24</span>
        <div>
          <a
            v-scroll-to="{
              el: '#trailer',
              duration: 2500,
              easing: [0.0, 0.0, 0.58, 1.0],
              cancelable: true,
              x: false,
              y: true
            }"
            href="#"
            style="margin-right: 1rem;"
            >Watch Trailer ↓</a
          >
          <nuxt-link to="/projects/meat-rack">View Project →</nuxt-link>
        </div>
      </div>
      <div class="sticky-paragraph">
        <p>
          THE NYC DOWNLOW exists in the space where art and music collide, an
          ever-changing artwork/club created to fill a gaping void in the
          British music and festival scenes. Temporary, counter-cultural,
          in-your face, and unapologetically LGBTQ-specific, The NYC Downlow is
          a phenomenon with a cult following.
          <br /><br />
          Set in a warehouse at the heart of New York City's Meatpacking
          District, MEAT RACK celebrates the 10th Anniversary of a
          counter-cultural icon.
        </p>
      </div>
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
    <!-- Vimeo -->
    <div id="trailer" class="video-container">
      <iframe
        src="https://player.vimeo.com/video/370058381?autoplay=1&loop=1"
        width="960"
        height="540"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Observer from '~/components/Observer.vue'

export default {
  components: {
    Navigation,
    Observer
  },
  data() {
    return {
      options: null,
      imageCount: 1,
      homeImages: [
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_10_21_20.Still406.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_10_47_20.Still443.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_00_11.Still461.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_21_04.Still489.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_25_13.Still508.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_29_13.Still513.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_30_00.Still518.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_30_07.Still520.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_31_05.Still526.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_47_08.Still549.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_11_51_11.Still561.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_03_24.Still575.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_47_17.Still626.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_48_10.Still632.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_48_17.Still636.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_49_22.Still634.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_52_22.Still639.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_53_17.Still644.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_54_14.Still646.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_12_55_18.Still647.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_15_19_20.Still852.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_15_20_06.Still857.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_15_32_14.Still864.png'
        },
        {
          url: '/meat-rack/FINAL IMAGE one sound file.00_15_39_21.Still867.png'
        }
      ]
    }
  },
  methods: {
    intersected(payload) {
      // console.log('intersected', payload)
      this.imageCount = payload
    },
    exited(payload) {
      console.log('exited', payload)
      // this.imageCount = payload
    }
  }
}
</script>

<style>
#full-screen {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: fill;
}
.ra-marquee {
  position: absolute;
  bottom: 2rem;
  /* mix-blend-mode: difference; */
}
.ra-link {
  /* position: absolute;
  bottom: 2rem;
  right: 3rem; */
  margin-left: 2rem;
  cursor: pointer;
  font-size: 1.875rem;
  display: flex;
  align-items: center;
  user-select: none;
  -webkit-font-smoothing: none;
  text-transform: uppercase;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  color: white;
}
.ra-link svg {
  width: 40px;
  height: 20px;
  margin-right: 16px;
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
  font-size: 1.375rem;
  font-style: italic;
  height: 100vh;
  display: flex;
  align-items: center;
  max-width: 32.5rem;
  margin: 0 auto;
  line-height: 1.45;
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

/* Video Container */
.video-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
