<template>
  <!-- Next Project -->
  <div class="top-container">
    <div
      v-scroll-to="{
        el: '#app',
        duration: 1500,
        easing: [0.0, 0.0, 0.58, 1.0],
        cancelable: true,
        x: false,
        y: true
      }"
      class="nav-button"
    >
      Back to Top
    </div>
  </div>
</template>

<script>
// import { annotate } from 'rough-notation'

export default {
  // mounted() {
  //   const e = document.querySelector('#project-name')
  //   const annotation = annotate(e, { type: 'circle' })
  //   annotation.show()
  // }
}
</script>

<style scoped>
.top-container {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding-bottom: 12.5rem;
}
#index .top-container {
  margin-top: 12.5rem !important;
}
</style>
