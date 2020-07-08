<template>
  <section id="navigation">
    <nav>
      <div class="name">
        <nuxt-link to="/">Harry Lawson</nuxt-link>
      </div>
      <div class="projects">
        <div @click="toggleNavProjects()" class="nav-button">Projects</div>
      </div>
      <div class="information">
        <div @click="toggleNavInfo()" class="nav-button">Info</div>
      </div>
    </nav>
    <NavigationProjectsOverlay
      v-if="navProjectsVisible"
      @close-modal="toggleNavProjects()"
    />
    <NavigationInfoOverlay
      v-if="navInfoVisible"
      @close-modal="toggleNavInfo()"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      navProjectsVisible: false,
      navInfoVisible: false
    }
  },
  methods: {
    toggleNavProjects() {
      this.navProjectsVisible = !this.navProjectsVisible
    },
    toggleNavInfo() {
      this.navInfoVisible = !this.navInfoVisible
    }
  }
  // head() {
  //   return {
  //     htmlAttrs: {
  //       class:
  //         this.navProjectsVisible || this.navInfoVisible ? 'modal-open' : ''
  //     },
  //     bodyAttrs: {
  //       class:
  //         this.navProjectsVisible || this.navInfoVisible ? 'modal-open' : ''
  //     }
  //   }
  // }
}
</script>

<style>
nav {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  padding: 2rem 3rem;
  position: absolute;
  z-index: 9;
}
nav .name {
  grid-column: 1 / 5;
}
nav .projects {
  grid-column: 5 / 8;
}
nav .information {
  grid-column: 8 / 13;
}

@media screen and (min-width: 0px) and (max-width: 320px) {
  nav {
    display: block;
    padding: 1rem;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1rem;
  }
  nav a,
  .nav-button {
    font-size: 1.5rem;
    height: 48px;
    width: auto;
    padding: 0 1.3125rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  nav {
    display: block;
    padding: 1.5rem;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.5rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  nav {
    display: block;
    padding: 1.5rem;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.5rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  nav {
    display: block;
    padding: 1.5rem;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  nav {
    display: block;
    padding: 1.5rem;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.5rem;
  }
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
