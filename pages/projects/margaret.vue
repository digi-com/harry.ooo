<template>
  <div>
    <div class="feature">
      <h2>Margaret</h2>
      <p>
        Margaret is a long-term multimedia project that explores memory loss,
        vascular dementia, and the experiences of patients, families, carers,
        and health workers that deal with dementia every day.
      </p>
      <p class="small">
        In 2009, Harry worked with his grandmother, Margaret, on a piece about
        memory loss. At the time, she was 89 and living with vascular dementia.
        As part of the project, Harry asked Margaret to draw around the fingers
        of her left hand with a pen. The drawing has been reproduced above.
      </p>
      <p>
        The project now exists as a body of work about Margaret and the place
        she spent the last four years of her life — Glenholme House in
        Sunderland. It is set loosely over a period during which she moved out
        of her home and into residential care, and features a growing archive of
        objects and images relating to themes of intimacy, care, and memory
        loss.
      </p>
      <p>
        This archive includes memory tests conducted by Harry’s aunt and
        photographs she took when the family were trying to sell Margaret’s
        house after moving her into the home. There are also pages taken from an
        inventory of Margaret’s clothes and belongings and large scale prints of
        the original photographs. The film component fuses archival home videos
        with material Harry and his Dad, Geoff, shot at the care home over a
        number of years before and after Margaret’s death in 2014.
      </p>
      <p>
        Integrating mundane, intimate and surreal aspects of everyday life at
        the home, it is an observational portrait of Glenholme House and the
        people who live there. Margaret was screened for the first time at
        Testing Situations in February 2020.
      </p>
    </div>
    <!-- <MargaretCanvas
      :images="[
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
      ]"
    /> -->
    <!-- <MargaretImages /> -->
  </div>
</template>

<script>
// import MargaretCanvas from '~/components/MargaretCanvas.vue'
// import MargaretImages from '~/components/MargaretImages.vue'

export default {
  components: {
    // MargaretCanvas
    // MargaretImages
  },
  head() {
    return {
      htmlAttrs: {
        class: 'daylight'
      },
      bodyAttrs: {
        class: 'daylight'
      }
    }
  }
}
</script>

<style>
.feature {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 12rem 3rem;
}
.feature h2 {
  grid-column: 4 / 8;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1rem;
}
.feature p {
  grid-column: 4 / 8;
  line-height: 1.5;
  font-size: 1.25rem;
}
.feature p.small {
  font-size: 1rem;
}
</style>
