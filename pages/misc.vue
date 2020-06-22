<template>
  <section id="misc">
    <!-- <InternalNavigation /> -->
    <div class="misc-container">
      <h2>
        Archive
      </h2>
    </div>
  </section>
</template>

<script>
// import InternalNavigation from '~/components/InternalNavigation.vue'

export default {
  components: {
    // InternalNavigation
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

<style scoped>
h2 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
}
.misc-container {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 2rem 3rem;
  background-color: white;
  color: black;
  min-height: 100vh;
}
.misc-container h2 {
  grid-column: 4 / 9;
}
</style>
