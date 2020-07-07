<template>
  <!-- Next Project -->
  <div class="top-container">
    <nav>
      <div class="name">
        <nuxt-link to="/">Harry Lawson</nuxt-link>
      </div>
      <div class="projects">
        <div @click="toggleProjects()" class="nav-button">Projects</div>
      </div>
      <div class="information">
        <div @click="toggleInfo()" class="nav-button">Info</div>
      </div>
    </nav>
    <div
      v-scroll-to="{
        el: '#app',
        duration: 1500,
        easing: [0.0, 0.0, 0.58, 1.0],
        cancelable: true,
        x: false,
        y: true
      }"
      class="nav-button back-to-top"
    >
      Back to Top
    </div>
    <NavigationProjectsOverlay
      v-if="projectsVisible"
      @close-modal="toggleProjects()"
    />
    <NavigationInfoOverlay v-if="infoVisible" @close-modal="toggleInfo()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectsVisible: false,
      infoVisible: false
    }
  },
  methods: {
    toggleProjects() {
      this.projectsVisible = !this.projectsVisible
    },
    toggleInfo() {
      this.infoVisible = !this.infoVisible
    }
  }
  // head() {
  //   return {
  //     htmlAttrs: {
  //       class: this.projectsVisible || this.infoVisible ? 'modal-open' : ''
  //     },
  //     bodyAttrs: {
  //       class: this.projectsVisible || this.infoVisible ? 'modal-open' : ''
  //     }
  //   }
  // }
}
</script>

<style scoped>
.top-container {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
}
#index .top-container {
  margin-top: 12.5rem !important;
  height: 2rem;
}
.back-to-top {
  position: absolute;
  right: 3rem;
  z-index: 999999;
}
</style>
