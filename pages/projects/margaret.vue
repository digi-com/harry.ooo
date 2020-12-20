<template>
  <div id="margaret">
    <!-- Preloader -->
    <PageLoader />
    <div id="scroll-container" class="scroll-container">
      <!-- Navigation -->
      <Navigation />
      <!-- Top Spacer -->
      <div class="top-spacer spacer" />
      <!-- Video -->
      <ProjectFilm
        @play-clicked="toggleMargaret()"
        film-link="/margaret/supercut_blur.mp4"
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
      <MargaretImages />
      <!-- Bottom Spacer -->
      <div class="bottom-spacer spacer" />
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

// Import locomotive.js mixin
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
  data() {
    return {
      projectFeatureContent: {
        title: 'Margaret (2020)',
        paragraph: `<i>Margaret</i> is a long-term multimedia project focused on themes of intimacy, care and memory loss. The project now exists as a body of work about my grandma (Margaret) and the place she spent the last four years of her life, Glenholme House in Sunderland. The project is set over a period of four years, during which she moved out of her home and into residential care.
        <br /><br />
        <img src="/margaret/margaret-hand.png"/>
        <span class="caption">In 2009, I worked with Margaret on a number of pieces about memory loss. At the time, she was 89 years old and living with vascular dementia. We conducted memory tests together and co-wrote acrostic poems about her life. As part of the project, Margaret was asked to draw around the fingers of her left hand with a pen. The drawing has been reproduced above.</span>
        <br /><br />
        The project is composed of multiple, interchangeable elements. The film component fuses archival home videos and footage recorded at the care home over a number of years before and after Margaret's death in 2014. Integrating both the mundane and surreal aspects of everyday life at the home, <i>Margaret</i> works as an observational portrait of Glenholme House and the people who live there.
        <br /><br />
        Beyond the film, there is a growing archive of images and objects relating to that time. The archive includes memory tests conducted by my aunt, and a collection of photographs taken when the family were trying to sell Margaret’s house after moving into the care home. There are also pages taken from an inventory of Margaret’s clothes and belongings. <i>Margaret</i> was screened for the first time at Testing Situations in 2020.`,
        footnotes: [
          {
            title: 'Glenholme House',
            link: 'https://www.wellburncare.co.uk/'
          },
          {
            title: 'Testing Situations',
            link: 'https://www.charlesrobertharrison.com/testing-situations'
          },
          { title: 'Wellcome Trust', link: 'https://wellcome.ac.uk/' }
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        {
          credit: 'Filmed by',
          name: 'Harry, Geoff, and Elizabeth Lawson'
        },
        { credit: 'Sound Design', name: 'Harry Lawson' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Commissioned by', name: 'Wellcome Trust' }
      ]
    }
  },
  methods: {
    ...mapMutations({
      toggleMargaret: 'toggleMargaret'
    })
  },
  head() {
    return {
      title: 'Harry Lawson | Margaret (2020)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Margaret is a long-term multimedia project focused on themes of intimacy, care and memory loss. The project now exists as a body of work about my grandma (Margaret) and the place she spent the last four years of her life, Glenholme House in Sunderland. The project is set over a period of four years, during which she moved out of her home and into residential care.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Margaret is a long-term multimedia project focused on themes of intimacy, care and memory loss. The project now exists as a body of work about my grandma (Margaret) and the place she spent the last four years of her life, Glenholme House in Sunderland. The project is set over a period of four years, during which she moved out of her home and into residential care.`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Margaret is a long-term multimedia project focused on themes of intimacy, care and memory loss. The project now exists as a body of work about my grandma (Margaret) and the place she spent the last four years of her life, Glenholme House in Sunderland. The project is set over a period of four years, during which she moved out of her home and into residential care.`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://harry.ooo/projects/margaret'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://harry.ooo/projects/margaret'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Harry Lawson | Margaret (2020)'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Harry Lawson | Margaret (2020)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://harry.ooo/margaret/15.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://harry.ooo/margaret/15.png'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Margaret (2020)'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Margaret (2020)'
        }
      ]
    }
  }
}
</script>

<style></style>
