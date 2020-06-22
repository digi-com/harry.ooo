<template>
  <section id="information">
    <!-- <InternalNavigation /> -->
    <div class="information-container">
      <h2>
        Harry Lawson (b. 1994) is documentary filmmaker based in London.
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
#information {
  padding-top: 5rem;
}
.information-container {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 2rem 3rem;
  background-color: white;
  color: black;
  min-height: 100vh;
}
.information-container h2 {
  grid-column: 6 / 9;
}
</style>
