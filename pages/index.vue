<template>
  <div>
    <PageLoader />
    <vue100vh class="page-container">
      <div id="scroll-container" class="scroll-container">
        <div
          class="red-square"
          style="width: 500px; height: 500px; background: red;"
        />
        <div class="index-container">
          <div
            v-for="(image, index) in homeImages"
            :key="'image-' + index"
            :class="'image-' + (index + 1)"
            @mouseenter="viewProjectEnter()"
            @mouseleave="viewProjectExit()"
            class="home-image test"
          >
            <client-only>
              <ProgressiveImage
                :src="image.url"
                :placeholder="image.placeholderUrl"
                :width="image.width"
                :height="image.height"
              />
            </client-only>
          </div>
        </div>
        <Footer />
      </div>
    </vue100vh>
  </div>
</template>

<script>
import vue100vh from 'vue-100vh'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  components: {
    vue100vh
  },
  data() {
    return {
      homeContent: {
        title: 'Meat Rack (2020)',
        paragraph: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s LES tenement with an X-rated gay nightclub inside. Having since evolved into a seedy warehouse at the heart of New York City's Meatpacking District circa 1982, The Downlow celebrated its 10th anniversary in 2017.
        <br /><br />
        <i>Meat Rack</i> works as a document of the celebrations, taking us all the way from Somerset to New York over the course of 16 minutes. From construction site to dance floor, build crew to muscle boys, the film is a personal tribute to a cultural phenomenon. Intimate, expressive and occasionally unsettling, <i>Meat Rack</i> captures the fleeting nature of Glastonbury’s most notorious nightspot. Shot on a Betacam SP camcorder with additional VHS-C inserts. Both formats were manufactured and available to the public in 1982.`
      },
      homeImages: [
        {
          url: '/meat-rack/meat-rack-poster.jpg',
          placeholderUrl: '/meat-rack/placeholders/meat-rack-poster.jpg',
          width: 1200,
          height: 1697
        },
        {
          url: '/meat-rack/10.png',
          placeholderUrl: '/meat-rack/placeholders/10.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/8.png',
          placeholderUrl: '/meat-rack/placeholders/8.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/9.png',
          placeholderUrl: '/meat-rack/placeholders/9.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/13.png',
          placeholderUrl: '/meat-rack/placeholders/13.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/16.png',
          placeholderUrl: '/meat-rack/placeholders/16.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/30.png',
          placeholderUrl: '/meat-rack/placeholders/30.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/11.png',
          placeholderUrl: '/meat-rack/placeholders/11.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/22.png',
          placeholderUrl: '/meat-rack/placeholders/22.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/23.png',
          placeholderUrl: '/meat-rack/placeholders/23.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/39.png',
          placeholderUrl: '/meat-rack/placeholders/39.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/29.png',
          placeholderUrl: '/meat-rack/placeholders/29.png',
          width: 720,
          height: 576
        }
      ],
      scrollPosition: 0
    }
  },
  mounted() {
    this.smooth()
  },
  methods: {
    onScroll(obj) {
      this.scrollPosition = obj.scroll.y
      console.log({ pos: this.scrollPosition })
    },
    smooth() {
      gsap.registerPlugin(ScrollTrigger)
      document.documentElement.scrollTop = 0
      /* eslint-disable-next-line */
      const locoScroll = new this.locomotiveScroll({
        el: document.querySelector('#scroll-container'),
        smooth: true,
        lerp: 0.04
      })
      locoScroll.scrollTo(0, 0, 0)

      locoScroll.on('scroll', ScrollTrigger.update)

      // window.addEventListener('resize', () => {
      //   locoScroll.update()
      // })

      // Tell ScrollTrigger to use these proxy methods for the "#scroll-container" element
      ScrollTrigger.scrollerProxy('#scroll-container', {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })
      // Run the animate function
      this.animate(locoScroll)
      // Each time the window updates, refresh ScrollTrigger and update lmS
      ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
      // After everything is set up, refresh ScrollTrigger and update lmS because padding may have been added for pinning, etc.
      ScrollTrigger.refresh()
    },
    animate(locoScroll) {
      gsap.from('.index-container', {
        scrollTrigger: {
          trigger: '.index-container',
          scroller: '#scroll-container',
          scrub: true,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => console.log(self.direction)
        },
        translateX: '100%',
        transformOrigin: 'left center',
        ease: 'none'
      })
    },
    isTouchDevice() {
      try {
        document.createEvent('TouchEvent')
        return true
      } catch (e) {
        return false
      }
    },
    intersected(payload) {
      this.imageCount = payload
    },
    viewProjectEnter() {
      document.querySelector('div#cursor').classList.add('view-project')
    },
    viewProjectExit() {
      document.querySelector('div#cursor').classList.remove('view-project')
    }
  }
}
</script>

<style>
.page-container {
  background: white;
  overflow: hidden;
}
.page-container.no-scroll {
  overflow: visible;
  height: auto !important;
}
.index-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(71, 2rem);
  grid-gap: 1rem;
  padding: 6rem 4rem 0 4rem;
  margin-bottom: 224px;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}
.index-container .content {
  grid-column: 3 / 11;
  grid-row: 1 / 2;
}
.index-container .content h2 {
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 3.75rem;
  letter-spacing: -1px;
}
.index-container .content p {
  font-family: 'Suisse Works';
  line-height: 1.5;
  font-size: 1.5625rem;
  letter-spacing: -0.125px;
  margin-bottom: 4rem;
}
.index-container .image-1 {
  grid-column: 1 / 7;
  grid-row-start: 1;
  display: none;
}
.index-container .image-2 {
  grid-column: 9 / 12;
  grid-row-start: calc(18 - 18);
  transform: translateY(1rem);
}
.index-container .image-3 {
  grid-column: 2 / 7;
  grid-row-start: calc(23 - 18);
  transform: translateY(1rem);
}
.index-container .image-4 {
  grid-column: 6 / 10;
  grid-row-start: calc(27 - 18);
  transform: translateY(1rem);
}
.index-container .image-5 {
  grid-column: 1 / 4;
  grid-row-start: calc(35 - 18);
  transform: translateY(2rem);
}
.index-container .image-6 {
  grid-column: 7 / 12;
  grid-row-start: calc(38 - 18);
}
.index-container .image-7 {
  grid-column: 8 / 13;
  grid-row-start: calc(50 - 18);
  transform: translateY(1rem);
}
.index-container .image-8 {
  grid-column: 2 / 5;
  grid-row-start: calc(44 - 18);
  transform: translateY(2rem);
}
.index-container .image-9 {
  grid-column: 1 / 4;
  grid-row-start: calc(53 - 18);
  z-index: 2;
  transform: translateY(2rem);
}
.index-container .image-10 {
  grid-column: 2 / 5;
  grid-row-start: calc(56 - 18);
  z-index: 1;
  transform: translateY(2rem);
}
.index-container .image-11 {
  grid-column: 9 / 13;
  grid-row-start: calc(63 - 18);
}
.index-container .image-12 {
  grid-column: 3 / 7;
  grid-row-start: calc(65 - 18);
  transform: translateY(2rem);
}
.index-container img {
  max-width: 100%;
  height: auto;
}
/* Video */
.home-film {
  margin-top: 3vh !important;
  margin-bottom: 10.75rem !important;
}
/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .index-container {
    display: block;
    padding: 6.5rem 1rem 0 1rem;
    margin-bottom: 8rem;
  }
  .index-container .content {
    margin-bottom: 8rem;
  }
  .index-container .content h2 {
    font-size: 2.5rem;
    letter-spacing: -0.5px;
    margin-bottom: 3rem;
  }
  .index-container .content p {
    font-size: 0.75rem;
    letter-spacing: -0.05px;
    margin-bottom: 3.25rem;
  }
  .index-container .home-image {
    margin-bottom: 1rem;
    transform: none;
  }
  .home-film {
    margin-top: 8rem !important;
    margin-bottom: 8rem !important;
    height: 37vh !important;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .index-container {
    display: block;
    padding: 6.5rem 1.5rem 0 1.5rem;
    margin-bottom: 8rem;
  }
  .index-container .content {
    margin-bottom: 8rem;
  }
  .index-container .content h2 {
    font-size: 2.25rem;
    letter-spacing: -0.4px;
    margin-bottom: 3rem;
  }
  .index-container .content p {
    font-size: 0.75rem;
    letter-spacing: -0.05px;
    margin-bottom: 3.25rem;
  }
  .index-container .home-image {
    margin-bottom: 1.5rem;
    transform: none;
  }
  .home-film {
    margin-top: 8rem !important;
    margin-bottom: 8rem !important;
    height: 41vh !important;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .index-container {
    display: block;
    padding: 6.5rem 1.5rem 0 1.5rem;
    margin-bottom: 8rem;
  }
  .index-container .content {
    margin-bottom: 8rem;
  }
  .index-container .content h2 {
    font-size: 2.25rem;
    letter-spacing: -0.4px;
    margin-bottom: 3rem;
  }
  .index-container .content p {
    font-size: 0.8125rem;
    letter-spacing: -0.18px;
    margin-bottom: 3.25rem;
  }
  .index-container .home-image {
    margin-bottom: 1.5rem;
    transform: none;
  }
  .home-film {
    margin-top: 8rem !important;
    margin-bottom: 8rem !important;
    height: 41vh !important;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .index-container {
    padding: 6.5rem 1.5rem 0 1.5rem;
    margin-bottom: 8rem;
  }
  .index-container .content {
    margin-bottom: 8rem;
    grid-column: 1 / 13;
    grid-row: 1 / 2;
  }
  .index-container .content h2 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.64px;
  }
  .index-container .content p {
    font-size: 1.375rem;
    letter-spacing: -0.18px;
    margin-bottom: 3.25rem;
  }
  .index-container .home-image {
    margin-bottom: 1.5rem;
    transform: none;
  }
  .home-film {
    margin-top: 8rem !important;
    margin-bottom: 8rem !important;
    height: 41vh !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .index-container {
    padding: 6.5rem 1.5rem 0 1.5rem;
    margin-bottom: 8rem;
  }
  .index-container .content {
    margin-bottom: 8rem;
    grid-column: 1 / 13;
    grid-row: 1 / 2;
  }
  .index-container .content h2 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.64px;
  }
  .index-container .content p {
    font-size: 1.375rem;
    letter-spacing: -0.18px;
    margin-bottom: 3.25rem;
  }
  .index-container .home-image {
    margin-bottom: 1.5rem;
    transform: none;
  }
  .home-film {
    margin-top: 8rem !important;
    margin-bottom: 8rem !important;
    height: 50vh !important;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
  .index-container {
    padding: 6.5rem 1.5rem 0 1.5rem;
    margin-bottom: 8rem;
  }
  .index-container .content {
    margin-bottom: 8rem;
    grid-column: 1 / 13;
    grid-row: 1 / 2;
  }
  .index-container .content h2 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.64px;
  }
  .index-container .content p {
    font-size: 1.375rem;
    letter-spacing: -0.18px;
    margin-bottom: 3.25rem;
  }
  .index-container .home-image {
    margin-bottom: 1.5rem;
    transform: none;
  }
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
