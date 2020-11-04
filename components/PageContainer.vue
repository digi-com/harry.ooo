<template>
  <div>
    <!-- Preloader -->
    <PageLoader />
    <!-- Page Container -->
    <vue100vh class="page-container">
      <div class="w-100 h-100" id="scroll-container"></div>
    </vue100vh>
  </div>
</template>

<script>
import vue100vh from 'vue-100vh'

export default {
  components: {
    vue100vh
  },
  mounted() {
    const Constructor = this.locomotiveScroll
    this.lmS = new Constructor({
      el: document.querySelector('#scroll-container'),
      smooth: true,
      lerp: 0.04
    })
    console.log('lmS', this.lmS)
  }
}
</script>

<style></style>
