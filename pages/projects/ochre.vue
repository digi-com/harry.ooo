<template>
  <div id="ochre">
    <!-- Navigation -->
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas :images="canvasImages" logo="/ochre/ochre-title.png" />
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
        '/ochre/Instagram Edit.00_08_08_10.Still016.png',
        '/ochre/Instagram Edit.00_08_09_03.Still020.png',
        '/ochre/Instagram Edit.00_08_09_04.Still021.png',
        '/ochre/Instagram Edit.00_08_09_05.Still022.png',
        '/ochre/Instagram Edit.00_08_09_06.Still023.png',
        '/ochre/Instagram Edit.00_08_09_07.Still024.png',
        '/ochre/Instagram Edit.00_08_09_08.Still025.png',
        '/ochre/Instagram Edit.00_08_09_09.Still026.png',
        '/ochre/Instagram Edit.00_08_09_10.Still027.png',
        '/ochre/Instagram Edit.00_08_10_06.Still028.png',
        '/ochre/Instagram Edit.00_08_10_07.Still029.png',
        '/ochre/Instagram Edit.00_08_10_08.Still030.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_10_13.Still003.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_22_18.Still002.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_23_19.Still004.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_00_13.Still006.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_06_24.Still007.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_09_15.Still012.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_10_22.Still011.png',
        '/ochre/OCHRE website grabs.00_00_00_00.Still020.png',
        '/ochre/OCHRE website grabs.00_00_07_07.Still021.png',
        '/ochre/OCHRE website grabs.00_00_07_11.Still022.png',
        '/ochre/OCHRE website grabs.00_00_10_20.Still024.png',
        '/ochre/OCHRE website grabs.00_00_10_21.Still025.png',
        '/ochre/OCHRE website grabs.00_00_10_24.Still026.png',
        '/ochre/OCHRE website grabs.00_00_11_00.Still027.png',
        '/ochre/OCHRE website grabs.00_00_11_01.Still028.png',
        '/ochre/OCHRE website grabs.00_00_11_12.Still031.png',
        '/ochre/OCHRE website grabs.00_00_12_08.Still035.png',
        '/ochre/OCHRE website grabs.00_00_12_11.Still038.png',
        '/ochre/OCHRE website grabs.00_00_18_15.Still039.png',
        '/ochre/OCHRE website grabs.00_00_18_19.Still040.png',
        '/ochre/OCHRE website grabs.00_00_20_01.Still041.png',
        '/ochre/OCHRE website grabs.00_00_29_00.Still045.png',
        '/ochre/OCHRE website grabs.00_00_30_08.Still046.png',
        '/ochre/OCHRE website grabs.00_00_32_08.Still047.png',
        '/ochre/OCHRE website grabs.00_00_37_24.Still052.png',
        '/ochre/OCHRE website grabs.00_00_46_00.Still057.png',
        '/ochre/OCHRE website grabs.00_00_47_19.Still058.png',
        '/ochre/OCHRE website grabs.00_00_48_14.Still059.png',
        '/ochre/OCHRE website grabs.00_01_01_13.Still064.png',
        '/ochre/OCHRE website grabs.00_01_04_08.Still065.png',
        '/ochre/OCHRE website grabs.00_01_10_00.Still066.png',
        '/ochre/OCHRE website grabs.00_01_12_21.Still067.png',
        '/ochre/OCHRE website grabs.00_01_16_07.Still068.png',
        '/ochre/OCHRE website grabs.00_01_16_16.Still069.png',
        '/ochre/OCHRE website grabs.00_01_18_09.Still070.png',
        '/ochre/OCHRE website grabs.00_01_20_12.Still071.png',
        '/ochre/OCHRE website grabs.00_01_27_02.Still072.png',
        '/ochre/OCHRE website grabs.00_01_28_13.Still073.png',
        '/ochre/OCHRE website grabs.00_01_29_08.Still074.png',
        '/ochre/OCHRE website grabs.00_01_31_22.Still075.png',
        '/ochre/OCHRE website grabs.00_01_32_10.Still076.png',
        '/ochre/OCHRE website grabs.00_01_32_22.Still077.png',
        '/ochre/OCHRE website grabs.00_01_33_10.Still078.png',
        '/ochre/OCHRE website grabs.00_01_34_11.Still079.png',
        '/ochre/OCHRE website grabs.00_01_37_05.Still080.png',
        '/ochre/OCHRE website grabs.00_01_39_21.Still084.png',
        '/ochre/OCHRE website grabs.00_01_41_06.Still085.png',
        '/ochre/OCHRE website grabs.00_01_42_03.Still086.png',
        '/ochre/OCHRE website grabs.00_01_44_04.Still090.png',
        '/ochre/OCHRE website grabs.00_01_44_13.Still091.png',
        '/ochre/OCHRE website grabs.00_01_45_08.Still092.png',
        '/ochre/OCHRE website grabs.00_01_49_22.Still097.png',
        '/ochre/OCHRE website grabs.00_01_50_07.Still098.png',
        '/ochre/OCHRE website grabs.00_01_59_18.Still108.png',
        '/ochre/OCHRE website grabs.00_02_00_13.Still109.png',
        '/ochre/OCHRE website grabs.00_02_01_06.Still110.png',
        '/ochre/OCHRE website grabs.00_02_01_07.Still111.png',
        '/ochre/OCHRE website grabs.00_02_15_09.Still116.png',
        '/ochre/OCHRE website grabs.00_02_29_06.Still117.png'
      ],
      filmLink: '/ochre/supercut.mp4',
      projectFeatureContent: {
        title: 'Ochre (2019)',
        paragraph: `Ochre is the result of a twelve-day journey through Marrakech and the surrounding area, coming to a conclusion at Atlas Electronic on the outskirts of the city. A collaboration with cinematographer Saul Pankhurst, the film focuses on the textures and atmosphere of the city, gradually revealing elements of live performance before transitioning to night-time.
        <br /><br />
        Ochre was shot on three small format cameras; a Krasnagorsk 3, a Braun Nizo Professional and a Eumig Nautica for the underwater sequences. The music in the film was provided by Tapan, a band from Serbia booked to perform at the festival. The sound was designed and edited by Goran Simonoski, a member of the band.
        <br /><br />
        Filmed at Atlas Electronic Festival in 2018. Exhibited online via Resident
        Advisor and Atlas Electronic (15th → 25th June 2020).`,
        featureImages: [
          {
            imageOne: '/ochre/Instagram Edit.00_08_08_10.Still016.png',
            imageTwo: '/ochre/Instagram Edit.00_08_09_03.Still020.png'
          },
          {
            imageOne: '/ochre/Instagram Edit.00_08_09_04.Still021.png',
            imageTwo: '/ochre/Instagram Edit.00_08_09_05.Still022.png'
          },
          {
            imageOne: '/ochre/Instagram Edit.00_08_10_06.Still028.png',
            imageTwo: '/ochre/Instagram Edit.00_08_10_08.Still030.png'
          }
        ],
        footnotes: [
          '1. Atlas Electronic (https://atlas-electronic.com/)',
          '2. Saul Pankhurst (https://vimeo.com/saulpankhurst)',
          '3. Tapan (https://tapan.bandcamp.com/)',
          '4. Resident Advisor (https://www.residentadvisor.net/)'
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        { credit: 'Cinematography', name: 'Saul Pankhurst' },
        { credit: 'Music by', name: 'Tapan' },
        { credit: 'Sound Design', name: 'Goran Simonoski' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Titles', name: 'Dennis McInnes' },
        { credit: 'Commissioned by', name: 'Atlas Electronic' }
      ],
      projectImages: [
        '/ochre/Instagram Edit.00_08_08_10.Still016.png',
        '/ochre/Instagram Edit.00_08_09_03.Still020.png',
        '/ochre/Instagram Edit.00_08_09_04.Still021.png',
        '/ochre/Instagram Edit.00_08_09_05.Still022.png',
        '/ochre/Instagram Edit.00_08_09_06.Still023.png',
        '/ochre/Instagram Edit.00_08_09_07.Still024.png',
        '/ochre/Instagram Edit.00_08_09_08.Still025.png',
        '/ochre/Instagram Edit.00_08_09_09.Still026.png',
        '/ochre/Instagram Edit.00_08_09_10.Still027.png',
        '/ochre/Instagram Edit.00_08_10_06.Still028.png',
        '/ochre/Instagram Edit.00_08_10_07.Still029.png',
        '/ochre/Instagram Edit.00_08_10_08.Still030.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_10_13.Still003.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_22_18.Still002.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_23_19.Still004.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_00_13.Still006.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_06_24.Still007.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_09_15.Still012.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_10_22.Still011.png',
        '/ochre/OCHRE website grabs.00_00_00_00.Still020.png',
        '/ochre/OCHRE website grabs.00_00_07_07.Still021.png',
        '/ochre/OCHRE website grabs.00_00_07_11.Still022.png',
        '/ochre/OCHRE website grabs.00_00_10_20.Still024.png',
        '/ochre/OCHRE website grabs.00_00_10_21.Still025.png'
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
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: ['daylight', 'ochre']
      },
      bodyAttrs: {
        class: ['daylight', 'ochre']
      }
    }
  }
}
</script>

<style></style>
