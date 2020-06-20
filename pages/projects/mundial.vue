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
    <!-- <MundialImages /> -->
  </div>
</template>

<script>
// import MundialImages from '~/components/MundialImages.vue'

export default {
  components: {
    // MundialImages
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

<style></style>
