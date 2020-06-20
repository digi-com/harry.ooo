<template>
  <div id="meat-rack">
    <!-- Navigation -->
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas
      :images="canvasImages"
      logo="/meat-rack/meat-rack-title.png"
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
    <NextProject :projects="projects" />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import ProjectCanvas from '~/components/ProjectCanvas.vue'
import ProjectFilm from '~/components/ProjectFilm.vue'
import ProjectFeature from '~/components/ProjectFeature.vue'
import ProjectImages from '~/components/ProjectImages.vue'
import Credits from '~/components/Credits.vue'
import NextProject from '~/components/NextProject.vue'

export default {
  components: {
    Navigation,
    ProjectCanvas,
    ProjectFilm,
    ProjectFeature,
    ProjectImages,
    Credits,
    NextProject
  },
  data() {
    return {
      canvasImages: [
        '/meat-rack/1.png',
        '/meat-rack/2.png',
        '/meat-rack/3.png',
        '/meat-rack/4.png',
        '/meat-rack/5.png',
        '/meat-rack/6.png',
        '/meat-rack/7.png',
        '/meat-rack/8.png',
        '/meat-rack/9.png',
        '/meat-rack/12.png',
        '/meat-rack/13.png',
        '/meat-rack/14.png',
        '/meat-rack/15.png',
        '/meat-rack/16.png',
        '/meat-rack/17.png',
        '/meat-rack/18.png',
        '/meat-rack/19.png',
        '/meat-rack/22.png',
        '/meat-rack/24.png',
        '/meat-rack/25.png',
        '/meat-rack/26.png',
        '/meat-rack/27.png',
        '/meat-rack/28.png',
        '/meat-rack/29.png',
        '/meat-rack/31.png',
        '/meat-rack/33.png',
        '/meat-rack/34.png',
        '/meat-rack/35.png',
        '/meat-rack/36.png',
        '/meat-rack/37.png',
        '/meat-rack/38.png'
      ],
      filmLink: '/meat-rack/supercut_o.mp4',
      projectFeatureContent: {
        title: 'Meat Rack (2020)',
        paragraph: `The NYC Downlow exists in the space where art and music collide, an
        ever-changing artwork/club created to fill a gaping void in the British
        music and festival scenes. Temporary, counter-cultural, in-your face and
        unapologetically LGBTQ-specific, NYC Downlow is a queer phenomenon with
        a worldwide cult following.
        <br /><br />
        The Downlow first appeared at Glastonbury Festival in 2007 as a film-set
        replica of a dilapidated 1970s Lower East Side tenement with an X-rated
        gay nightclub inside. Having since evolved into a warehouse at the heart
        of the Meatpacking District in New York City (circa 1982), The Downlow
        celebrated their 10th Anniversary at Glastonbury in 2017. Meat Rack
        works as a document of the celebrations, featuring interviews with
        artists and dancers.
        <br /><br />
        Filmed at Glastonbury Festival in 2017. Exhibited online via Resident
        Advisor and Block9 (15th → 25th June 2020).`,
        featureImages: [
          {
            imageOne: '/meat-rack/sequence1_1.png',
            imageTwo: '/meat-rack/sequence1_2.png'
          },
          {
            imageOne: '/meat-rack/sequence1_4.png',
            imageTwo: '/meat-rack/sequence1_5.png'
          },
          {
            imageOne: '/meat-rack/sequence3_1.png',
            imageTwo: '/meat-rack/sequence3_2.png'
          }
        ],
        footnotes: [
          '1. The NYC Downlow (https://thenycdownlow.com/)',
          '2. Block9 (https://www.block9.com/)',
          '3. Glastonbury Festival (https://www.glastonburyfestivals.co.uk/)',
          '4. Resident Advisor (https://www.residentadvisor.net/)'
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
        { credit: 'Titles', name: 'Dennis McInnes' },
        { credit: 'Commissioned by', name: 'Block9' }
      ],
      projectImages: [
        '/meat-rack/meat-rack-poster.jpg',
        '/meat-rack/2.png',
        '/meat-rack/1.png',
        '/meat-rack/4.png',
        '/meat-rack/5.png',
        '/meat-rack/6.png',
        '/meat-rack/8.png',
        '/meat-rack/7.png',
        '/meat-rack/9.png',
        '/meat-rack/12.png',
        '/meat-rack/13.png',
        '/meat-rack/15.png',
        '/meat-rack/16.png',
        '/meat-rack/17.png',
        '/meat-rack/20.png',
        '/meat-rack/24.png',
        '/meat-rack/28.png',
        '/meat-rack/30.png',
        '/meat-rack/38.png',
        '/meat-rack/33.png',
        '/meat-rack/34.png',
        '/meat-rack/35.png',
        '/meat-rack/36.png',
        '/meat-rack/37.png'
      ],
      projects: [
        {
          title: 'Mundial',
          medium: 'Video',
          type: 'Commission',
          year: '2020',
          link: '/projects/mundial'
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
  }
}
</script>

<style></style>
