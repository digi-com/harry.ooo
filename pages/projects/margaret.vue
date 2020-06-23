<template>
  <div id="margaret">
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas :images="canvasImages" logo="/margaret/margaret-title.png" />
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
        '/margaret/04 Living room.JPG',
        '/margaret/CAREHOME MINI DV.01_17_51_14.Still002.png',
        '/margaret/CAREHOME MINI DV.02_47_08_17.Still003.png',
        '/margaret/DSC02835.jpg',
        '/margaret/DSC02838.jpg',
        '/margaret/IMG_3250.jpeg',
        '/margaret/IMG_3305.jpg',
        '/margaret/Memory test 07.02.07 p2.jpeg',
        '/margaret/Memory tests 02.08.10 and 23.05.11 p3.jpeg',
        '/margaret/P1000490.jpg',
        '/margaret/TIMELINE 1.00_07_30_10.Still064.png',
        '/margaret/TIMELINE 1.00_08_02_19.Still066.png',
        '/margaret/TIMELINE 1.00_08_14_10.Still068.png',
        '/margaret/TIMELINE 1.00_10_46_05.Still073.png',
        '/margaret/TIMELINE 1.00_11_59_03.Still077.png',
        '/margaret/TIMELINE 1.00_13_01_13.Still078.png',
        '/margaret/TIMELINE 1.00_15_15_02.Still080.png',
        '/margaret/TIMELINE 1.00_15_53_06.Still082.png',
        '/margaret/TIMELINE 1.00_17_08_15.Still083.png',
        '/margaret/TIMELINE 1.00_19_08_04.Still087.png',
        '/margaret/TIMELINE 1.00_21_40_21.Still089.png',
        '/margaret/TIMELINE 1.00_25_04_20.Still091.png',
        '/margaret/TIMELINE 1.00_26_01_15.Still092.png',
        '/margaret/TIMELINE 1.00_26_03_23.Still093.png',
        '/margaret/TIMELINE 1.00_30_32_15.Still097.png',
        '/margaret/TIMELINE 1.00_31_16_21.Still001.png',
        '/margaret/TIMELINE 1.00_37_30_15.Still004.png',
        '/margaret/TIMELINE 1.00_40_06_16.Still102.png',
        '/margaret/TIMELINE 1.00_40_09_22.Still103.png',
        '/margaret/TIMELINE 1.00_41_11_09.Still100.png',
        '/margaret/TIMELINE 1.00_47_28_17.Still008.png',
        '/margaret/TIMELINE 1.00_47_32_24.Still009.png',
        '/margaret/TIMELINE 1.00_48_05_12.Still011.png',
        '/margaret/TIMELINE 1.00_48_17_01.Still012.png',
        '/margaret/TIMELINE 1.00_48_22_17.Still013.png',
        '/margaret/TIMELINE 1.00_48_26_05.Still014.png',
        '/margaret/TIMELINE 1.00_48_31_24.Still015.png',
        '/margaret/TIMELINE 1.00_49_18_16.Still016.png',
        '/margaret/TIMELINE 1.00_49_34_11.Still018.png',
        '/margaret/TIMELINE 1.00_50_20_12.Still020.png',
        '/margaret/TIMELINE 1.00_50_41_04.Still022.png',
        '/margaret/TIMELINE 1.00_50_47_02.Still023.png',
        '/margaret/TIMELINE 1.00_51_04_15.Still024.png',
        '/margaret/TIMELINE 1.00_51_26_08.Still026.png',
        '/margaret/TIMELINE 1.00_51_34_19.Still027.png',
        '/margaret/TIMELINE 1.00_57_14_21.Still105.png',
        '/margaret/TIMELINE 1.01_09_50_01.Still034.png',
        '/margaret/TIMELINE 1.01_13_53_05.Still049.png',
        '/margaret/TIMELINE 1.01_17_48_11.Still052.png',
        '/margaret/TIMELINE 1.01_23_14_10.Still056.png',
        '/margaret/TIMELINE 1.01_28_42_04.Still057.png'
      ],
      filmLink: '/margaret/supercut.mp4',
      projectFeatureContent: {
        title: 'Margaret (2020)',
        paragraph: `<i>Margaret</i> is a long-term multimedia project exploring memory, memory loss, intimacy and care through the experiences of families, carers,
        and health workers living with dementia. 
        <br /><br />
        <img src="/margaret/margaret-hand.png"/>
        <span class="caption">In 2009, Harry worked with his grandmother, Margaret, on a piece about memory loss. At the time, she was 89 and living with vascular dementia. As part of the project, Harry asked Margaret to draw around the fingers of her left hand with a pen. The drawing has been reproduced above.</span>
        <br /><br />
        The project now exists as a body of work about Margaret and the place she spent the last four years of her life — Glenholme House in Sunderland. It is set loosely over a period during which she moved out of her home and into residential care, and features a growing archive of objects and images relating to this time.
        <br /><br />
        The archive includes memory tests conducted by Harry’s aunt and photographs taken when the family were trying to sell Margaret’s house after moving her into the care home. There are also pages taken from an inventory of Margaret’s clothes and belongings. The film component fuses archival home videos and footage recorded at Glenholme House over a number of years before and after her death in 2014. Integrating mundane and surreal aspects of everyday life at the home, it is an observational portrait of Glenholme House and the people who live there. <i>Margaret</i> was screened for the first time at Testing Situations in February 2020.`,
        featureImages: [
          {
            imageOne: '/margaret/DSC02835.jpg',
            imageTwo: '/margaret/04 Living room.JPG'
          },
          {
            imageOne: '/margaret/03.png',
            imageTwo: '/margaret/02.png'
          },
          {
            imageOne: '/margaret/66.png'
          }
        ],
        footnotes: [
          '1. Glenholme House (https://www.wellburncare.co.uk/our-homes/glenholme-house)',
          '2. Testing Situations (https://www.charlesrobertharrison.com/testing-situations)',
          '3. Wellcome Trust (https://wellcome.ac.uk/)'
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        {
          credit: 'Filmed by',
          name: 'Harry Lawson, Geoff Lawson, Elizabeth Lawson'
        },
        { credit: 'Sound Design', name: 'Harry Lawson' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Commissioned by', name: 'Wellcome Trust' }
      ],
      projectImages: [
        '/margaret/02.png',
        '/margaret/03.png',
        '/margaret/04 Living room.JPG',
        '/margaret/66.png',
        '/margaret/DSC02835.jpg',
        '/margaret/DSC02838.jpg',
        '/margaret/IMG_3250.jpeg',
        '/margaret/IMG_3305.jpg',
        '/margaret/Memory test 07.02.07 p2.jpeg',
        '/margaret/Memory tests 02.08.10 and 23.05.11 p3.jpeg',
        '/margaret/P1000490.jpg',
        '/margaret/TIMELINE 1.00_07_30_10.Still064.png',
        '/margaret/TIMELINE 1.00_08_14_10.Still068.png',
        '/margaret/TIMELINE 1.00_10_46_05.Still073.png',
        '/margaret/TIMELINE 1.00_11_59_03.Still077.png',
        '/margaret/TIMELINE 1.00_13_01_13.Still078.png',
        '/margaret/TIMELINE 1.00_15_15_02.Still080.png',
        '/margaret/TIMELINE 1.00_15_53_06.Still082.png',
        '/margaret/TIMELINE 1.00_17_08_15.Still083.png',
        '/margaret/TIMELINE 1.00_19_08_04.Still087.png',
        '/margaret/TIMELINE 1.00_21_40_21.Still089.png',
        '/margaret/TIMELINE 1.00_25_04_20.Still091.png',
        '/margaret/TIMELINE 1.00_26_01_15.Still092.png',
        '/margaret/TIMELINE 1.00_26_03_23.Still093.png',
        '/margaret/TIMELINE 1.00_30_32_15.Still097.png',
        '/margaret/TIMELINE 1.00_31_16_21.Still001.png',
        '/margaret/TIMELINE 1.00_37_30_15.Still004.png',
        '/margaret/TIMELINE 1.00_40_06_16.Still102.png',
        '/margaret/TIMELINE 1.00_40_09_22.Still103.png',
        '/margaret/TIMELINE 1.00_41_11_09.Still100.png',
        '/margaret/TIMELINE 1.00_47_28_17.Still008.png',
        '/margaret/TIMELINE 1.00_47_32_24.Still009.png',
        '/margaret/TIMELINE 1.00_48_05_12.Still011.png',
        '/margaret/TIMELINE 1.00_48_17_01.Still012.png',
        '/margaret/TIMELINE 1.00_48_22_17.Still013.png',
        '/margaret/TIMELINE 1.00_48_26_05.Still014.png',
        '/margaret/TIMELINE 1.00_48_31_24.Still015.png',
        '/margaret/TIMELINE 1.00_49_18_16.Still016.png',
        '/margaret/TIMELINE 1.00_49_34_11.Still018.png',
        '/margaret/TIMELINE 1.00_50_20_12.Still020.png',
        '/margaret/TIMELINE 1.00_50_41_04.Still022.png',
        '/margaret/TIMELINE 1.00_50_47_02.Still023.png',
        '/margaret/TIMELINE 1.00_51_04_15.Still024.png',
        '/margaret/TIMELINE 1.00_51_26_08.Still026.png',
        '/margaret/TIMELINE 1.00_51_34_19.Still027.png',
        '/margaret/TIMELINE 1.00_57_14_21.Still105.png',
        '/margaret/TIMELINE 1.01_09_50_01.Still034.png',
        '/margaret/TIMELINE 1.01_13_53_05.Still049.png',
        '/margaret/TIMELINE 1.01_17_48_11.Still052.png',
        '/margaret/TIMELINE 1.01_23_14_10.Still056.png',
        '/margaret/TIMELINE 1.01_28_42_04.Still057.png',
        `/margaret/White tee Lands' End M 10 -12.jpg`,
        `/margaret/Turquoise viscose M&S blouse size 14.jpg`,
        `/margaret/Turquoise tee Lands' End M 10 - 12.jpg`,
        `/margaret/Pink 100% polyester topM&S size 14.jpg`,
        `/margaret/Lilac viscose blouse M&S size 14.jpg`,
        `/margaret/Lilac (mid) tee Lands' End M 10 - 12.jpg`,
        `/margaret/IMG_3282.jpg`,
        `/margaret/IMG_3249.jpeg`,
        `/margaret/Green silky M&S blouse with mandarin collar size 14.jpg`,
        `/margaret/Green (pale) silky blouse (old) Country Casuals 36 bust.jpg`,
        `/margaret/Cream thick silky blouse (old) M&S 36 bust.jpg`,
        `/margaret/Cream silky blouse with lace collar M&S size 16.jpg`
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
        class: ['daylight', 'margaret']
      },
      bodyAttrs: {
        class: ['daylight', 'margaret']
      }
    }
  }
}
</script>

<style></style>
