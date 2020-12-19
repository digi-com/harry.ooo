<template>
  <div id="ochre">
    <!-- Preloader -->
    <PageLoader />
    <div id="scroll-container" class="scroll-container">
      <!-- Navigation -->
      <Navigation />
      <!-- Top Spacer -->
      <div class="top-spacer spacer" />
      <!-- Video -->
      <ProjectFilm
        @play-clicked="toggleOchre()"
        film-link="/ochre/supercut_blur.mp4"
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
      <OchreImages />
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
        title: 'Ochre (2019)',
        paragraph: `<i>Ochre</i> is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. The film focuses on textures and atmosphere, gradually revealing elements of live performance before transitioning to the night programme. <i>Ochre</i> was photographed on a collection of small format film cameras; a Krasnagorsk 3, a Braun Nizo Professional and a Eumig Nautica for underwater sequences. The music was provided by Tapan, a Serbian band booked to perform at the festival. The sound was designed and edited by Tapan's Goran Simonoski.
        <br/><br/>
        Commissioned by Atlas Electronic, a music festival in Marrakech.`,
        footnotes: [
          { title: 'Atlas Electronic', link: 'https://atlas-electronic.com/' },
          { title: 'Saul Pankhurst', link: 'https://vimeo.com/saulpankhurst' },
          { title: 'Tapan', link: 'https://tapan.bandcamp.com/' }
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        { credit: 'Cinematography', name: 'Saul Pankhurst' },
        { credit: 'Music by', name: 'Tapan' },
        { credit: 'Sound Design', name: 'Goran Simonoski' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Titles', name: 'Dennis McInnes' }
      ]
    }
  },
  methods: {
    ...mapMutations({
      toggleOchre: 'toggleOchre'
    })
  },
  head() {
    return {
      title: 'Harry Lawson | Ochre (2019)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Ochre is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. A collaboration with cinematographer Saul Pankhurst, the film focuses on texture and atmosphere, gradually revealing elements of live performance before making the transition to the night programme.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Ochre is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. A collaboration with cinematographer Saul Pankhurst, the film focuses on texture and atmosphere, gradually revealing elements of live performance before making the transition to the night programme.`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Ochre is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. A collaboration with cinematographer Saul Pankhurst, the film focuses on texture and atmosphere, gradually revealing elements of live performance before making the transition to the night programme.`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://harry.ooo/projects/ochre'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://harry.ooo/projects/ochre'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Harry Lawson | Ochre (2019)'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Harry Lawson | Ochre (2019)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://harry.ooo/ochre/1.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://harry.ooo/ochre/1.png'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Ochre (2019)'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Ochre (2019)'
        }
      ]
    }
  }
}
</script>

<style></style>
