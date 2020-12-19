<template>
  <div id="meat-rack">
    <!-- Preloader -->
    <PageLoader />
    <div id="scroll-container" class="scroll-container">
      <!-- Navigation -->
      <Navigation />
      <!-- Top Spacer -->
      <div class="top-spacer spacer" />
      <!-- Video -->
      <ProjectFilm
        @play-clicked="toggleMeatRack()"
        film-link="/meat-rack/supercut_blur.mp4"
      />
      <!-- Spacer -->
      <div class="spacer" />
      <!-- Feature -->
      <ProjectFeature :content="projectFeatureContent" />
      <!-- Spacer -->
      <div class="spacer" />
      <!-- Credits -->
      <Credits :credits="credits" />
      <!-- Spacer -->
      <div class="spacer" />
      <!-- Image Grid -->
      <MeatRackImages />
      <!-- Bottom Spacer -->
      <div class="bottom-spacer spacer" />
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import locomotive.js mixin
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
  data() {
    return {
      projectFeatureContent: {
        title: 'Meat Rack (2020)',
        paragraph: `The NYC Downlow is Block9’s legendary queer nightclub. First appearing at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside, the space has since evolved into a seedy warehouse at the heart of the Meatpacking District circa 1982. The warehouse serves as the location for <i>Meat Rack</i>, a short film documenting the Downlow's 10th birthday celebration in 2017. In an attempt to construct an immersive reality (like the venue itself) <i>Meat Rack</i> was filmed on a Betacam SP camcorder with VHS-C inserts. Both formats were manufactured and available to the public in 1982.
        <br /><br />
        <i>Meat Rack</i> takes viewers from Somerset to New York City over the course of 16 minutes. From construction site to dance floor, build crew to muscle boys, the film is a personal tribute to a cultural phenomenon. An intimate, unsettling portrait that attempts to capture the fleeting nature of one of Glastonbury’s most notorious nightspots.
        <br /><br />
        Two major influences on the film were Wakefield Poole's <i>Bijou</i> and Philip Trevelyan's <i>The Moon and The Sledgehammer</i>. Special thanks to Andrew Kötting for his advice and guidance throughout. Cinematography by Saul Pankhurst. Second Camera by Liam Healy. Sound Recording by Emma Barnaby. Graphics by Dennis McInnes. Meat Rack featured (in order of appearance); Jacob Love, Dieter Zachmeister, Richard Godderidge, Dan Thompson, David McFarlane, Olly Lajevardi, Chris Thompson, Haydn Nuttall, Alex Hale, Justin McCarthy, Josh Doyle, Dave Rushton, Giorgio Spiegelfeld, Craig Worrall, Jordi Hulsof, Thanasis Petroyiannis, Camille Leon, James Andrew Telford, Chester Hayes, Lottie Croucher, Joseph Wilson, Felippe Johann, Rudi Douglas, Ashraf Ejjbair, AJ Pittman, Paul Willis, Maggie Balmaceda, Rhys, Yoko Fomo, Ginger Johnson, Kenny “Dope” Gonzalez, Lucy Fizz, Joey Demento, and Rodent Decay.
        <br /><br />
        <i>Meat Rack</i> was first exhibited online via Block9 from 23rd → 30th June 2020. It was selected as part of The Observer's Guide to Summer Culture and covered widely in other publications such as Crack, Resident Advisor, Mixmag, DJMag, Ransom Note, Hypebeast and Attack Magazine.
        `,
        footnotes: [
          { title: 'The NYC Downlow', link: 'https://thenycdownlow.com/' },
          { title: 'Block9', link: 'https://www.block9.com/' },
          {
            title: 'Glastonbury Festival',
            link: 'https://www.glastonburyfestivals.co.uk/'
          }
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        {
          credit: 'In collaboration with',
          name: 'Gideon Berger, Stephen Gallagher'
        },
        { credit: 'Cinematography', name: 'Saul Pankhurst' },
        { credit: 'Camera', name: 'Saul Pankhurst, Liam Healy' },
        { credit: 'Sound Recording', name: 'Emma Barnaby' },
        { credit: 'Sound Design', name: 'Harry Lawson' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Special thanks', name: 'Andrew Kötting' },
        { credit: 'Titles', name: 'Dennis McInnes' }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.smooth()
    })
  },
  beforeDestroy() {
    // If touch device, do nothing.
    // If mouse-based device, remove lmS.
    if (this.isTouchDevice()) {
    } else {
      // Remove resize event listener
      window.removeEventListener('resize', this.updateLms)
      // Remove refresh event listener
      ScrollTrigger.removeEventListener('refresh', this.updateLms)
    }
  },
  methods: {
    ...mapMutations({
      toggleMeatRack: 'toggleMeatRack'
    }),
    smooth() {
      // If touch device, do nothing.
      // If mouse-based device, create lmS.
      if (this.isTouchDevice()) {
        // Register ScrollTrigger with GSAP
        gsap.registerPlugin(ScrollTrigger)
        // Run the animate function
        this.animateNoLms()
        // After everything is set up, refresh ScrollTrigger and update lmS because padding may have been added for pinning, etc.
        ScrollTrigger.refresh(true)
      } else {
        // Register ScrollTrigger with GSAP
        gsap.registerPlugin(ScrollTrigger)
        // On lmS scroll, update ScrollTrigger
        this.lmS.on('scroll', ScrollTrigger.update)
        // On resize, update lmS
        window.addEventListener('resize', this.updateLms)
        // Create this.lmS without 'this'
        const lmsInstance = this.lmS
        // Tell ScrollTrigger to use these proxy methods for the "#scroll-container" element
        ScrollTrigger.scrollerProxy('#scroll-container', {
          scrollTop(value) {
            return arguments.length
              ? lmsInstance.scrollTo(value, 0, 0)
              : lmsInstance.scroll.instance.scroll.y
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
        this.animate(this.lmS)
        // Each time the window updates, refresh ScrollTrigger and update lmS
        ScrollTrigger.addEventListener('refresh', this.updateLms)
        // After everything is set up, refresh ScrollTrigger and update lmS because padding may have been added for pinning, etc.
        ScrollTrigger.refresh(true)
      }
    },
    animate(lmS) {
      // Body color change
      gsap
        .timeline()
        .set('.scroll-container', {
          backgroundColor: '#ffffff'
        })
        .fromTo(
          '.scroll-container',
          {
            backgroundColor: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer',
              trigger: '.top-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            backgroundColor: '#000000',
            ease: 'none'
          }
        )
        .fromTo(
          '.scroll-container',
          {
            backgroundColor: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer',
              trigger: '.bottom-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            backgroundColor: '#ffffff',
            ease: 'none'
          }
        )
      // Placeholder color change
      gsap
        .timeline()
        .set('.progressive-image__placeholder', {
          backgroundColor: '#f5f5f7'
        })
        .fromTo(
          '.progressive-image__placeholder',
          {
            backgroundColor: '#f5f5f7',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-placeholder',
              trigger: '.top-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            backgroundColor: '#080809',
            ease: 'none'
          }
        )
        .fromTo(
          '.progressive-image__placeholder',
          {
            backgroundColor: '#080809',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-placeholder',
              trigger: '.bottom-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            backgroundColor: '#f5f5f7',
            ease: 'none'
          }
        )
      // Circle color change
      gsap
        .timeline()
        .set('.circle-1', {
          borderTopColor: '#000000'
        })
        .fromTo(
          '.circle-1',
          {
            borderTopColor: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner',
              trigger: '.top-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            borderTopColor: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.circle-1',
          {
            borderTopColor: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner',
              trigger: '.bottom-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            borderTopColor: '#000000',
            ease: 'none'
          }
        )
      gsap
        .timeline()
        .set('.circle-2', {
          borderBottomColor: '#000000'
        })
        .fromTo(
          '.circle-2',
          {
            borderBottomColor: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner-ii',
              trigger: '.top-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            borderBottomColor: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.circle-2',
          {
            borderBottomColor: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner-ii',
              trigger: '.bottom-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            borderBottomColor: '#000000',
            ease: 'none'
          }
        )
      // Content colour change
      gsap
        .timeline()
        .set('.feature-content', {
          color: '#000000'
        })
        .fromTo(
          '.feature-content',
          {
            color: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner',
              trigger: '.top-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            color: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.feature-content',
          {
            color: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner',
              trigger: '.bottom-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            color: '#000000',
            ease: 'none'
          }
        )
      // Credits colour change
      gsap
        .timeline()
        .set('.credits', {
          color: '#000000'
        })
        .fromTo(
          '.credits',
          {
            color: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner',
              trigger: '.top-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            color: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.credits',
          {
            color: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner',
              trigger: '.bottom-spacer',
              scroller: '#scroll-container',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            color: '#000000',
            ease: 'none'
          }
        )
    },
    animateNoLms() {
      // Body color change
      gsap
        .timeline()
        .set('.scroll-container', {
          backgroundColor: '#ffffff'
        })
        .fromTo(
          '.scroll-container',
          {
            backgroundColor: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer',
              trigger: '.top-spacer',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            backgroundColor: '#000000',
            ease: 'none'
          }
        )
        .fromTo(
          '.scroll-container',
          {
            backgroundColor: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer',
              trigger: '.bottom-spacer',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            backgroundColor: '#ffffff',
            ease: 'none'
          }
        )
      // Placeholder color change
      gsap
        .timeline()
        .set('.progressive-image__placeholder', {
          backgroundColor: '#f5f5f7'
        })
        .fromTo(
          '.progressive-image__placeholder',
          {
            backgroundColor: '#f5f5f7',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-placeholder',
              trigger: '.top-spacer',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            backgroundColor: '#080809',
            ease: 'none'
          }
        )
        .fromTo(
          '.progressive-image__placeholder',
          {
            backgroundColor: '#080809',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-placeholder',
              trigger: '.bottom-spacer',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            backgroundColor: '#f5f5f7',
            ease: 'none'
          }
        )
      // Circle color change
      gsap
        .timeline()
        .set('.circle-1', {
          borderTopColor: '#000000'
        })
        .fromTo(
          '.circle-1',
          {
            borderTopColor: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner',
              trigger: '.top-spacer',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            borderTopColor: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.circle-1',
          {
            borderTopColor: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner',
              trigger: '.bottom-spacer',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            borderTopColor: '#000000',
            ease: 'none'
          }
        )
      gsap
        .timeline()
        .set('.circle-2', {
          borderBottomColor: '#000000'
        })
        .fromTo(
          '.circle-2',
          {
            borderBottomColor: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner-ii',
              trigger: '.top-spacer',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            borderBottomColor: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.circle-2',
          {
            borderBottomColor: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner-ii',
              trigger: '.bottom-spacer',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            borderBottomColor: '#000000',
            ease: 'none'
          }
        )
      // Content colour change
      gsap
        .timeline()
        .set('.feature-content', {
          color: '#000000'
        })
        .fromTo(
          '.feature-content',
          {
            color: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner',
              trigger: '.top-spacer',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            color: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.feature-content',
          {
            color: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner',
              trigger: '.bottom-spacer',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            color: '#000000',
            ease: 'none'
          }
        )
      // Credits colour change
      gsap
        .timeline()
        .set('.credits', {
          color: '#000000'
        })
        .fromTo(
          '.credits',
          {
            color: '#000000',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'top-spacer-spinner',
              trigger: '.top-spacer',
              scrub: true,
              start: 'top top',
              end: '+=360 top'
            },
            color: '#ffffff',
            ease: 'none'
          }
        )
        .fromTo(
          '.credits',
          {
            color: '#ffffff',
            ease: 'none'
          },
          {
            scrollTrigger: {
              id: 'bottom-spacer-spinner',
              trigger: '.bottom-spacer',
              scrub: true,
              start: 'top bottom',
              end: 'bottom bottom'
            },
            color: '#000000',
            ease: 'none'
          }
        )
    },
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
    }
  },
  head() {
    return {
      title: 'Harry Lawson | Meat Rack (2020)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside. Having since evolved into a warehouse at the heart of the Meatpacking District in New York City circa 1982, The Downlow celebrated its 10th anniversary in 2017.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside. Having since evolved into a warehouse at the heart of the Meatpacking District in New York City circa 1982, The Downlow celebrated its 10th anniversary in 2017.`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside. Having since evolved into a warehouse at the heart of the Meatpacking District in New York City circa 1982, The Downlow celebrated its 10th anniversary in 2017.`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://harry.ooo/projects/meat-rack'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://harry.ooo/projects/meat-rack'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Harry Lawson | Meat Rack (2020)'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Harry Lawson | Meat Rack (2020)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://harry.ooo/og.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://harry.ooo/og.png'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Meat Rack (2020)'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Meat Rack (2020)'
        }
      ]
    }
  }
}
</script>

<style>
#meat-rack .credits .item .credit {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#meat-rack .credits .item .name {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Responsive */

@media screen and (min-width: 0px) and (max-width: 1024px) {
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
