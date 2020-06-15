<template>
  <div>
    <div class="feature">
      <h2>Ochre</h2>
      <p>
        Ochre follows a twelve-day journey through Marrakech that comes to a
        close at Atlas Electronic on the outskirts of the city. The film was
        shot on three small format cameras; a Krasnagorsk 3, a Braun Nizo
        Professional and an Eumig Nautica (underwater sequences). The music in
        the film was provided by Tapan, a Serbian band who performed at the
        festival. The sound was designed and edited by Goran Simonoski who is a
        member of the band.
      </p>
    </div>
    <OchreImages />
  </div>
</template>

<script>
import OchreImages from '~/components/OchreImages.vue'

export default {
  components: {
    OchreImages
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
