<template>
  <div>
    <div class="feature">
      <h2>Mundial</h2>
      <p>
        Sporting Club de Mundial was founded by Mundial Magazine in 2019. The
        film follows the mens first team through their inaugural season,
        providing an intimate portrait of a team from the perspective of a
        teammate on the sidelines recovering from a long-term injury. Featuring
        footage from players Kamal Guthmy and Shameek Farrell, alongside clips
        kindly donated by opposing teams, the film works as a collage of
        grassroots football in London.
      </p>
    </div>
    <MundialImages />
  </div>
</template>

<script>
import MundialImages from '~/components/MundialImages.vue'

export default {
  components: {
    MundialImages
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
</style>
