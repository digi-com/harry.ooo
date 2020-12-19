<template>
  <div id="mundial">
    <!-- Preloader -->
    <PageLoader />
    <div id="scroll-container" class="scroll-container">
      <!-- Navigation -->
      <Navigation />
      <!-- Top Spacer -->
      <div class="top-spacer spacer" />
      <!-- Video -->
      <ProjectFilm
        @play-clicked="toggleMundial()"
        film-link="/mundial/mundial-supercut-blur.mp4"
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
      <MundialImages />
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
        title: 'Mundial (2020)',
        paragraph: `Sporting Club de Mundial was founded by Mundial Magazine in 2019. <i>Mundial</i> had initially hoped to follow the SCdM men's first team through their inaugural season,
        providing an intimate portrait of a team from the perspective of a
        teammate recovering from a long-term injury. However, in March 2020, halfway through the season (with the team still unbeaten in the league) COVID-19 hit and grassroots sport in London ground to a halt. The season was written off, and for various off-the-field reasons, SCdM no longer exists. The film now exists as a time capsule to a strangely distant time earlier this year, before the pandemic. Featuring footage from players Kamal Guthmy and Shameek Farrell, clips donated by opposing teams, and a selection of archival material shot on early camera phones, <i>Mundial</i> is a collage of
        grassroots football in London.
        <br/><br/>
        The film was made in loving memory of Jermaine Wright, who sadly passed away in April having contracted Coronavirus. Affectionately known as Mr. Hackney Marshes, Jermaine served as both an on-field referee and behind-the-scenes catalyst for the Hackney & Leyton Sunday Football League — as vice chairman, schedule secretary, results secretary, press officer and head official. Film commissioned by Mundial Magazine.`
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        {
          credit: 'Camera',
          name: 'Tom Brandhorst, Alex Graham, Kamal Guthmy, Shameek Farrell'
        },
        { credit: 'Cinematography', name: 'Harry Lawson' },
        { credit: 'Edited by', name: 'Harry Lawson, Saul Pankhurst' },
        { credit: 'Titles', name: 'Alex Mertekis' },
        { credit: 'Commissioned by', name: 'Mundial Studio' }
      ],
      projectImages: [
        {
          url: '/mundial/mundial-1.png',
          placeholder: '/mundial/placeholders/mundial-1.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-2.png',
          placeholder: '/mundial/placeholders/mundial-2.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-3.png',
          placeholder: '/mundial/placeholders/mundial-3.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-4.png',
          placeholder: '/mundial/placeholders/mundial-4.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-5.png',
          placeholder: '/mundial/placeholders/mundial-5.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-6.png',
          placeholder: '/mundial/placeholders/mundial-6.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-7.png',
          placeholder: '/mundial/placeholders/mundial-7.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-8.png',
          placeholder: '/mundial/placeholders/mundial-8.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-9.png',
          placeholder: '/mundial/placeholders/mundial-9.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-10.png',
          placeholder: '/mundial/placeholders/mundial-10.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-11.png',
          placeholder: '/mundial/placeholders/mundial-11.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-12.png',
          placeholder: '/mundial/placeholders/mundial-12.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-13.png',
          placeholder: '/mundial/placeholders/mundial-13.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-14.png',
          placeholder: '/mundial/placeholders/mundial-14.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-15.png',
          placeholder: '/mundial/placeholders/mundial-15.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-16.png',
          placeholder: '/mundial/placeholders/mundial-16.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-17.png',
          placeholder: '/mundial/placeholders/mundial-17.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-18.png',
          placeholder: '/mundial/placeholders/mundial-18.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-19.png',
          placeholder: '/mundial/placeholders/mundial-19.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-20.png',
          placeholder: '/mundial/placeholders/mundial-20.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-21.png',
          placeholder: '/mundial/placeholders/mundial-21.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-22.png',
          placeholder: '/mundial/placeholders/mundial-22.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-23.png',
          placeholder: '/mundial/placeholders/mundial-23.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-24.png',
          placeholder: '/mundial/placeholders/mundial-24.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-25.png',
          placeholder: '/mundial/placeholders/mundial-25.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-26.png',
          placeholder: '/mundial/placeholders/mundial-26.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-27.png',
          placeholder: '/mundial/placeholders/mundial-27.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-28.png',
          placeholder: '/mundial/placeholders/mundial-28.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-29.png',
          placeholder: '/mundial/placeholders/mundial-29.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-30.png',
          placeholder: '/mundial/placeholders/mundial-30.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-31.png',
          placeholder: '/mundial/placeholders/mundial-31.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-32.png',
          placeholder: '/mundial/placeholders/mundial-32.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-33.png',
          placeholder: '/mundial/placeholders/mundial-33.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-34.png',
          placeholder: '/mundial/placeholders/mundial-34.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-35.png',
          placeholder: '/mundial/placeholders/mundial-35.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-36.png',
          placeholder: '/mundial/placeholders/mundial-36.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-37.png',
          placeholder: '/mundial/placeholders/mundial-37.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-38.png',
          placeholder: '/mundial/placeholders/mundial-38.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-39.png',
          placeholder: '/mundial/placeholders/mundial-39.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-40.png',
          placeholder: '/mundial/placeholders/mundial-40.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-41.png',
          placeholder: '/mundial/placeholders/mundial-41.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-42.png',
          placeholder: '/mundial/placeholders/mundial-42.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-43.png',
          placeholder: '/mundial/placeholders/mundial-43.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-44.png',
          placeholder: '/mundial/placeholders/mundial-44.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-45.png',
          placeholder: '/mundial/placeholders/mundial-45.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-46.png',
          placeholder: '/mundial/placeholders/mundial-46.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-47.png',
          placeholder: '/mundial/placeholders/mundial-47.png',
          width: 1000,
          height: 563
        },
        {
          url: '/mundial/mundial-48.png',
          placeholder: '/mundial/placeholders/mundial-48.png',
          width: 1000,
          height: 563
        }
      ],
      projects: [
        {
          title: 'Meat Rack',
          medium: 'Video',
          type: 'Documentary',
          year: '2020',
          link: '/projects/meat-rack'
        },
        {
          title: 'Margaret',
          medium: 'Video + Installation',
          type: 'Research',
          year: '2020',
          link: '/projects/margaret'
        },
        {
          title: 'Ochre',
          medium: 'Video',
          type: 'Commission',
          year: '2019',
          link: '/projects/ochre'
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      toggleMundial: 'toggleMundial'
    })
  },
  head() {
    return {
      title: 'Harry Lawson | Mundial (2020)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Sporting Club de Mundial was founded by Mundial Magazine in 2019. Mundial follows the SCdM men's first team through their inaugural season, providing an intimate portrait of a team from the perspective of a teammate on the sidelines recovering from a long-term injury. Featuring footage from players Kamal Guthmy and Shameek Farrell, alongside clips donated by opposing teams, Mundial works as a collage of grassroots football in London.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Sporting Club de Mundial was founded by Mundial Magazine in 2019. Mundial follows the SCdM men's first team through their inaugural season, providing an intimate portrait of a team from the perspective of a teammate on the sidelines recovering from a long-term injury. Featuring footage from players Kamal Guthmy and Shameek Farrell, alongside clips donated by opposing teams, Mundial works as a collage of grassroots football in London.`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Sporting Club de Mundial was founded by Mundial Magazine in 2019. Mundial follows the SCdM men's first team through their inaugural season, providing an intimate portrait of a team from the perspective of a teammate on the sidelines recovering from a long-term injury. Featuring footage from players Kamal Guthmy and Shameek Farrell, alongside clips donated by opposing teams, Mundial works as a collage of grassroots football in London.`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://harry.ooo/projects/mundial'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://harry.ooo/projects/mundial'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Harry Lawson | Mundial (2020)'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Harry Lawson | Mundial (2020)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://harry.ooo/mundial/mundial-41.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://harry.ooo/mundial/mundial-41.png'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Mundial (2020)'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Mundial (2020)'
        }
      ]
    }
  }
}
</script>

<style></style>
