<template>
  <div id="ochre">
    <!-- Navigation -->
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas
      :images="canvasImages"
      :image-width="360"
      :image-height="203"
      logo="/mundial/mundial-title.svg"
    />
    <!-- Video -->
    <ProjectFilm :film-link="filmLink" />
    <!-- Feature -->
    <ProjectFeature :content="projectFeatureContent" />
    <!-- Credits -->
    <Credits :credits="credits" />
    <!-- Image Grid -->
    <ProjectImages :images="projectImages" />
    <!-- Next Project -->
    <BackToTop :projects="projects" />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import ProjectCanvas from '~/components/ProjectCanvas.vue'
import ProjectFilm from '~/components/ProjectFilm.vue'
import ProjectFeature from '~/components/ProjectFeature.vue'
import ProjectImages from '~/components/ProjectImages.vue'
import Credits from '~/components/Credits.vue'
import BackToTop from '~/components/BackToTop.vue'

export default {
  components: {
    Navigation,
    ProjectCanvas,
    ProjectFilm,
    ProjectFeature,
    ProjectImages,
    Credits,
    BackToTop
  },
  data() {
    return {
      canvasImages: [
        '/mundial/mundial-1.png',
        '/mundial/mundial-2.png',
        '/mundial/mundial-3.png',
        '/mundial/mundial-4.png',
        '/mundial/mundial-5.png',
        '/mundial/mundial-6.png',
        '/mundial/mundial-7.png',
        '/mundial/mundial-8.png',
        '/mundial/mundial-9.png',
        '/mundial/mundial-10.png',
        '/mundial/mundial-11.png',
        '/mundial/mundial-12.png',
        '/mundial/mundial-13.png',
        '/mundial/mundial-14.png',
        '/mundial/mundial-15.png',
        '/mundial/mundial-16.png',
        '/mundial/mundial-17.png',
        '/mundial/mundial-18.png',
        '/mundial/mundial-19.png',
        '/mundial/mundial-20.png',
        '/mundial/mundial-21.png',
        '/mundial/mundial-22.png',
        '/mundial/mundial-23.png',
        '/mundial/mundial-24.png',
        '/mundial/mundial-25.png',
        '/mundial/mundial-26.png',
        '/mundial/mundial-27.png',
        '/mundial/mundial-28.png',
        '/mundial/mundial-29.png',
        '/mundial/mundial-30.png',
        '/mundial/mundial-31.png',
        '/mundial/mundial-32.png',
        '/mundial/mundial-33.png',
        '/mundial/mundial-34.png',
        '/mundial/mundial-35.png',
        '/mundial/mundial-36.png',
        '/mundial/mundial-37.png',
        '/mundial/mundial-38.png',
        '/mundial/mundial-39.png',
        '/mundial/mundial-40.png',
        '/mundial/mundial-41.png',
        '/mundial/mundial-42.png',
        '/mundial/mundial-43.png',
        '/mundial/mundial-44.png',
        '/mundial/mundial-45.png',
        '/mundial/mundial-46.png',
        '/mundial/mundial-47.png',
        '/mundial/mundial-48.png'
      ],
      filmLink: '/mundial/mundial-supercut-o.mp4',
      projectFeatureContent: {
        title: 'Mundial (2020)',
        paragraph: `Sporting Club de Mundial was founded by Mundial Magazine in 2019. <i>Mundial</i> follows the SCdM men's first team through their inaugural season,
        providing an intimate portrait of a team from the perspective of a
        teammate on the sidelines recovering from a long-term injury. Featuring
        footage from players Kamal Guthmy and Shameek Farrell, alongside clips donated by opposing teams, <i>Mundial</i> works as a collage of
        grassroots football in London.`,
        featureImages: [
          {
            imageOne: '/mundial/mundial-35.png',
            imageTwo: '/mundial/mundial-36.png'
          },
          {
            imageOne: '/mundial/mundial-47.png',
            imageTwo: '/mundial/mundial-48.png'
          }
        ],
        footnotes: [
          '1. Mundial Magazine (https://mundialmag.com/)',
          '2. Shameek Farrell (https://www.instagram.com/shameek_ldn/)',
          '3. Hackney & Leyton Football League (http://www.hackneyandleytonfootballleague.co.uk/)'
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        { credit: 'Cinematography', name: 'Harry Lawson' },
        {
          credit: 'Camera',
          name:
            'Harry Lawson, Tom Brandhorst, Alex Graham, Kamal Guthmy, Shameek Farrell'
        },
        { credit: 'Edited by', name: 'Harry Lawson, Saul Pankhurst' },
        { credit: 'Titles', name: 'Alex Mertekis' },
        { credit: 'Commissioned by', name: 'Mundial Studio' }
      ],
      projectImages: [
        '/mundial/mundial-1.png',
        '/mundial/mundial-2.png',
        '/mundial/mundial-3.png',
        '/mundial/mundial-4.png',
        '/mundial/mundial-5.png',
        '/mundial/mundial-6.png',
        '/mundial/mundial-7.png',
        '/mundial/mundial-8.png',
        '/mundial/mundial-9.png',
        '/mundial/mundial-10.png',
        '/mundial/mundial-11.png',
        '/mundial/mundial-12.png',
        '/mundial/mundial-13.png',
        '/mundial/mundial-14.png',
        '/mundial/mundial-15.png',
        '/mundial/mundial-16.png',
        '/mundial/mundial-17.png',
        '/mundial/mundial-18.png',
        '/mundial/mundial-19.png',
        '/mundial/mundial-20.png',
        '/mundial/mundial-21.png',
        '/mundial/mundial-22.png',
        '/mundial/mundial-23.png',
        '/mundial/mundial-24.png',
        '/mundial/mundial-25.png',
        '/mundial/mundial-26.png',
        '/mundial/mundial-27.png',
        '/mundial/mundial-28.png',
        '/mundial/mundial-29.png',
        '/mundial/mundial-30.png',
        '/mundial/mundial-31.png',
        '/mundial/mundial-32.png',
        '/mundial/mundial-33.png',
        '/mundial/mundial-34.png',
        '/mundial/mundial-35.png',
        '/mundial/mundial-36.png',
        '/mundial/mundial-37.png',
        '/mundial/mundial-38.png',
        '/mundial/mundial-39.png',
        '/mundial/mundial-40.png',
        '/mundial/mundial-41.png',
        '/mundial/mundial-42.png',
        '/mundial/mundial-43.png',
        '/mundial/mundial-44.png',
        '/mundial/mundial-45.png',
        '/mundial/mundial-46.png',
        '/mundial/mundial-47.png',
        '/mundial/mundial-48.png'
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
  head() {
    return {
      htmlAttrs: {
        class: ['daylight', 'mundial']
      },
      bodyAttrs: {
        class: ['daylight', 'mundial']
      }
    }
  }
}
</script>

<style></style>
