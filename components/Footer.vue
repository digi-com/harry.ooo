<template>
  <!-- Next Project -->
  <div class="footer-container">
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
.footer-container {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
}
.footer-container nav {
  position: relative;
}
/* #index .footer-container {
  margin-top: 12.5rem !important;
  height: 2rem;
} */
.back-to-top {
  position: absolute;
  right: 3rem;
  z-index: 999;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .footer-container {
    height: auto;
    display: block;
    padding: 1rem;
    padding-top: 0;
  }
  .footer-container nav {
    padding: 0;
    margin-bottom: 1rem;
  }
  .back-to-top {
    position: relative;
    display: inline-flex;
    right: auto;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .footer-container {
    height: auto;
    display: block;
    padding: 1.5rem;
    padding-top: 0;
  }
  .footer-container nav {
    padding: 0;
    margin-bottom: 1.5rem;
  }
  .back-to-top {
    position: relative;
    display: inline-flex;
    right: auto;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .footer-container {
    height: auto;
    display: block;
    padding: 1.5rem;
    padding-top: 0;
  }
  .footer-container nav {
    padding: 0;
    margin-bottom: 1.5rem;
  }
  .back-to-top {
    position: relative;
    display: inline-flex;
    right: auto;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .footer-container {
    height: auto;
    display: block;
    padding: 1.5rem;
    padding-top: 0;
  }
  .footer-container nav {
    padding: 0;
    margin-bottom: 1.5rem;
  }
  .back-to-top {
    position: relative;
    display: inline-flex;
    right: auto;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
}
@media screen and (min-width: 1280px) and (max-width: 1440px) {
}
@media screen and (min-width: 1441px) and (max-width: 1600px) {
}
@media screen and (min-width: 1601px) and (max-width: 1920px) {
}
@media screen and (min-width: 1921px) and (max-width: 2560px) {
}
@media screen and (min-width: 2561px) and (max-width: 9999px) {
}
</style>
