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
    <MargaretImages />
  </div>
</template>

<script>
import MargaretImages from '~/components/MargaretImages.vue'

export default {
  components: {
    MargaretImages
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
