<template>
  <div id="ochre">
    <!-- Navigation -->
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas :images="canvasImages" logo="/mundial/mundial-title.svg" />
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
        '/mundial/website grabs.00_02_55_11.Still033.png',
        '/mundial/FINAL W SUBS.00_01_18_10.Still029.png',
        '/mundial/FINAL W SUBS.00_01_21_15.Still032.png',
        '/mundial/FINAL W SUBS.00_01_15_00.Still027.png',
        '/mundial/08.11.19 3.00_01_11_00.Still002.png',
        '/mundial/FINAL W SUBS.00_01_19_09.Still030.png',
        '/mundial/FINAL W SUBS.00_00_39_03.Still010.png',
        '/mundial/FINAL W SUBS.00_01_15_21.Still028.png',
        '/mundial/website grabs.00_02_00_13.Still025.png',
        '/mundial/selects.00_19_43_00.Still001.png',
        '/mundial/clean [with titles only].00_00_18_05.Still002.png',
        '/mundial/website grabs.00_02_17_03.Still029.png',
        '/mundial/selects for website.00_00_01_00.Still047.png',
        '/mundial/website grabs.00_01_16_16.Still014.png',
        '/mundial/website grabs.00_02_02_10.Still026.png',
        '/mundial/website grabs.00_02_07_18.Still028.png',
        '/mundial/website grabs.00_02_30_00.Still031.png',
        '/mundial/clean [with titles only].00_00_27_05.Still004.png',
        '/mundial/FINAL W SUBS.00_01_25_00.Still033.png',
        '/mundial/selects for website.00_29_33_22.Still045.png',
        '/mundial/website grabs.00_01_59_09.Still024.png',
        '/mundial/website grabs.00_02_48_07.Still032.png',
        '/mundial/selects.00_13_27_16.Still004.png',
        '/mundial/website grabs.00_01_43_24.Still021.png',
        '/mundial/website grabs.00_01_19_15.Still015.png',
        '/mundial/FINAL W SUBS.00_00_02_05.Still003.png',
        '/mundial/FINAL W SUBS.00_02_15_09.Still051.png',
        '/mundial/selects for website.00_00_08_18.Still048.png',
        '/mundial/selects for website.00_29_29_17.Still044.png',
        '/mundial/website grabs.00_00_36_02.Still012.png',
        '/mundial/FINAL W SUBS.00_00_46_11.Still011.png',
        '/mundial/website grabs.00_02_04_21.Still027.png',
        '/mundial/clean [with titles only].00_02_36_06.Still013.png',
        '/mundial/selects for website.00_20_01_10.Still032.png',
        '/mundial/website grabs.00_01_03_13.Still013.png',
        '/mundial/selects for website.00_04_04_21.Still011.png',
        '/mundial/selects for website.00_04_03_06.Still008.png',
        '/mundial/FINAL W SUBS.00_00_37_18.Still008.png',
        '/mundial/TANNERY 1.01_20_42_10.Still005.png',
        '/mundial/clean [with titles only].00_02_41_17.Still014.png',
        '/mundial/selects for website.00_28_10_10.Still043.png',
        '/mundial/FINAL W SUBS.00_00_38_01.Still009.png',
        '/mundial/FINAL W SUBS.00_00_46_18.Still012.png',
        '/mundial/JOIN THE CLUB.00_01_30_24.Still003.png',
        '/mundial/selects for website.00_21_12_07.Still034.png',
        '/mundial/FINAL W SUBS.00_01_11_21.Still025.png',
        '/mundial/selects for website.00_17_03_15.Still030.png',
        '/mundial/JOIN THE CLUB.00_06_21_11.Still004.png',
        '/mundial/FINAL W SUBS.00_00_17_14.Still005.png',
        '/mundial/clean [with titles only].00_01_45_16.Still006.png',
        '/mundial/clean [with titles only].00_01_15_23.Still005.png',
        '/mundial/selects for website.00_21_40_05.Still036.png',
        '/mundial/selects for website.00_04_09_16.Still012.png',
        '/mundial/selects for website.00_00_04_24.Still049.png',
        '/mundial/selects for website.00_11_08_19.Still021.png',
        '/mundial/website grabs.00_02_20_07.Still030.png',
        '/mundial/selects for website.00_04_19_06.Still013.png',
        '/mundial/selects for website.00_10_42_17.Still020.png',
        '/mundial/selects for website.00_10_10_05.Still019.png',
        '/mundial/selects for website.00_26_42_09.Still041.png',
        '/mundial/selects for website.00_01_48_24.Still007.png',
        '/mundial/selects for website.00_11_48_01.Still023.png',
        '/mundial/selects for website.00_04_12_14.Still010.png',
        '/mundial/selects for website.00_11_46_21.Still022.png',
        '/mundial/C0130.00_20_16_00.Still002.png',
        '/mundial/selects.00_22_18_24.Still002.png',
        '/mundial/selects for website.00_06_40_03.Still017.png',
        '/mundial/selects for website.00_01_15_11.Still056.png',
        '/mundial/selects for website.00_04_15_06.Still009.png',
        '/mundial/selects for website.00_05_54_20.Still015.png',
        '/mundial/CUT 1.00_00_18_07.Still002.png',
        '/mundial/website grabs.00_01_51_15.Still022.png',
        '/mundial/website grabs.00_03_05_16.Still034.png',
        '/mundial/clean [with titles only].00_00_09_17.Still001.png'
      ],
      filmLink: '/margaret/supercut.mp4',
      projectFeatureContent: {
        title: 'Mundial (2020)',
        paragraph: `Sporting Club de Mundial was founded by Mundial Magazine in 2019. <i>Mundial</i> follows the SCdM men's first team through their inaugural season,
        providing an intimate portrait of a team from the perspective of a
        teammate on the sidelines recovering from a long-term injury. Featuring
        footage from players Kamal Guthmy and Shameek Farrell, alongside clips donated by opposing teams, <i>Mundial</i> works as a collage of
        grassroots football in London.`,
        featureImages: [
          {
            imageOne: '/mundial/website grabs.00_02_55_11.Still033.png',
            imageTwo: '/mundial/FINAL W SUBS.00_00_39_03.Still010.png'
          },
          {
            imageOne: '/mundial/FINAL W SUBS.00_01_15_21.Still028.png',
            imageTwo: '/mundial/website grabs.00_02_00_13.Still025.png'
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
        '/mundial/website grabs.00_02_55_11.Still033.png',
        '/mundial/FINAL W SUBS.00_01_18_10.Still029.png',
        '/mundial/FINAL W SUBS.00_01_21_15.Still032.png',
        '/mundial/FINAL W SUBS.00_01_15_00.Still027.png',
        '/mundial/08.11.19 3.00_01_11_00.Still002.png',
        '/mundial/FINAL W SUBS.00_01_19_09.Still030.png',
        '/mundial/FINAL W SUBS.00_00_39_03.Still010.png',
        '/mundial/FINAL W SUBS.00_01_15_21.Still028.png',
        '/mundial/website grabs.00_02_00_13.Still025.png',
        '/mundial/selects.00_19_43_00.Still001.png',
        '/mundial/clean [with titles only].00_00_18_05.Still002.png',
        '/mundial/website grabs.00_02_17_03.Still029.png',
        '/mundial/selects for website.00_00_01_00.Still047.png',
        '/mundial/website grabs.00_01_16_16.Still014.png',
        '/mundial/website grabs.00_02_02_10.Still026.png',
        '/mundial/website grabs.00_02_07_18.Still028.png',
        '/mundial/website grabs.00_02_30_00.Still031.png',
        '/mundial/clean [with titles only].00_00_27_05.Still004.png',
        '/mundial/FINAL W SUBS.00_01_25_00.Still033.png',
        '/mundial/selects for website.00_29_33_22.Still045.png',
        '/mundial/website grabs.00_01_59_09.Still024.png',
        '/mundial/website grabs.00_02_48_07.Still032.png',
        '/mundial/selects.00_13_27_16.Still004.png',
        '/mundial/website grabs.00_01_43_24.Still021.png',
        '/mundial/website grabs.00_01_19_15.Still015.png',
        '/mundial/FINAL W SUBS.00_00_02_05.Still003.png',
        '/mundial/FINAL W SUBS.00_02_15_09.Still051.png',
        '/mundial/selects for website.00_00_08_18.Still048.png',
        '/mundial/selects for website.00_29_29_17.Still044.png',
        '/mundial/website grabs.00_00_36_02.Still012.png',
        '/mundial/FINAL W SUBS.00_00_46_11.Still011.png',
        '/mundial/website grabs.00_02_04_21.Still027.png',
        '/mundial/clean [with titles only].00_02_36_06.Still013.png',
        '/mundial/selects for website.00_20_01_10.Still032.png',
        '/mundial/website grabs.00_01_03_13.Still013.png',
        '/mundial/selects for website.00_04_04_21.Still011.png',
        '/mundial/selects for website.00_04_03_06.Still008.png',
        '/mundial/FINAL W SUBS.00_00_37_18.Still008.png',
        '/mundial/TANNERY 1.01_20_42_10.Still005.png',
        '/mundial/clean [with titles only].00_02_41_17.Still014.png',
        '/mundial/selects for website.00_28_10_10.Still043.png',
        '/mundial/FINAL W SUBS.00_00_38_01.Still009.png',
        '/mundial/FINAL W SUBS.00_00_46_18.Still012.png',
        '/mundial/JOIN THE CLUB.00_01_30_24.Still003.png',
        '/mundial/selects for website.00_21_12_07.Still034.png',
        '/mundial/FINAL W SUBS.00_01_11_21.Still025.png',
        '/mundial/selects for website.00_17_03_15.Still030.png',
        '/mundial/JOIN THE CLUB.00_06_21_11.Still004.png',
        '/mundial/FINAL W SUBS.00_00_17_14.Still005.png',
        '/mundial/clean [with titles only].00_01_45_16.Still006.png',
        '/mundial/clean [with titles only].00_01_15_23.Still005.png',
        '/mundial/selects for website.00_21_40_05.Still036.png',
        '/mundial/selects for website.00_04_09_16.Still012.png',
        '/mundial/selects for website.00_00_04_24.Still049.png',
        '/mundial/selects for website.00_11_08_19.Still021.png',
        '/mundial/website grabs.00_02_20_07.Still030.png',
        '/mundial/selects for website.00_04_19_06.Still013.png',
        '/mundial/selects for website.00_10_42_17.Still020.png',
        '/mundial/selects for website.00_10_10_05.Still019.png',
        '/mundial/selects for website.00_26_42_09.Still041.png',
        '/mundial/selects for website.00_01_48_24.Still007.png',
        '/mundial/selects for website.00_11_48_01.Still023.png',
        '/mundial/selects for website.00_04_12_14.Still010.png',
        '/mundial/selects for website.00_11_46_21.Still022.png',
        '/mundial/C0130.00_20_16_00.Still002.png',
        '/mundial/selects.00_22_18_24.Still002.png',
        '/mundial/selects for website.00_06_40_03.Still017.png',
        '/mundial/selects for website.00_01_15_11.Still056.png',
        '/mundial/selects for website.00_04_15_06.Still009.png',
        '/mundial/selects for website.00_05_54_20.Still015.png',
        '/mundial/CUT 1.00_00_18_07.Still002.png',
        '/mundial/website grabs.00_01_51_15.Still022.png',
        '/mundial/website grabs.00_03_05_16.Still034.png',
        '/mundial/clean [with titles only].00_00_09_17.Still001.png'
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
