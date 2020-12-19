<template>
  <section id="navigation">
    <nav>
      <div v-if="home" class="name">
        <nuxt-link to="/" class="no-hover">Harry Lawson</nuxt-link>
      </div>
      <div v-if="!home" class="name">
        <nuxt-link
          @mouseenter.native="pointerEnter()"
          @mouseleave.native="pointerExit()"
          @click.native="pointerExit()"
          to="/"
          class="nav-button"
          >Harry Lawson</nuxt-link
        >
      </div>
      <div v-if="projects" class="projects">
        <nuxt-link to="/projects" class="no-hover">Projects</nuxt-link>
      </div>
      <div v-if="!projects" class="projects">
        <nuxt-link
          @mouseenter.native="pointerEnter()"
          @mouseleave.native="pointerExit()"
          @click.native="pointerExit()"
          to="/projects"
          class="nav-button"
          >Projects</nuxt-link
        >
      </div>
      <div v-if="info" class="information">
        <nuxt-link to="/info" class="no-hover">Info</nuxt-link>
      </div>
      <div v-if="!info" class="information">
        <nuxt-link
          @mouseenter.native="pointerEnter()"
          @mouseleave.native="pointerExit()"
          @click.native="pointerExit()"
          to="/info"
          class="nav-button"
          >Info</nuxt-link
        >
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
  props: {
    home: {
      type: Boolean,
      default: false,
      required: false
    },
    projects: {
      type: Boolean,
      default: false,
      required: false
    },
    info: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      navProjectsVisible: false,
      navInfoVisible: false
    }
  },
  methods: {
    pointerEnter() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.add('view-project')
      }
    },
    pointerExit() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    },
    toggleNavProjects() {
      this.navProjectsVisible = !this.navProjectsVisible
    },
    toggleNavInfo() {
      this.navInfoVisible = !this.navInfoVisible
    }
  }
}
</script>

<style>
nav {
  width: auto;
  padding: 2.5vw 2.5vw 0;
  display: flex;
  align-items: center;
}
nav .name {
  margin-right: 0.9375vw;
}
nav .projects {
  margin-right: 0.9375vw;
}
nav .information {
  margin: 0;
}

@media screen and (min-width: 0px) and (max-width: 320px) {
  nav {
    display: block;
    padding: 1.6875rem 1.5rem 0;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.25rem;
    margin-right: 0;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  nav {
    display: block;
    padding: 1.6875rem 1.5rem 0;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.25rem;
    margin-right: 0;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  nav {
    display: block;
    padding: 1.6875rem 1.5rem 0;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.25rem;
    margin-right: 0;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  nav {
    display: block;
    padding: 1.6875rem 1.5rem 0;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.25rem;
    margin-right: 0;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  nav {
    display: block;
    padding: 1.6875rem 1.5rem 0;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.25rem;
    margin-right: 0;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
  nav {
    display: block;
    padding: 1.6875rem 1.5rem 0;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.25rem;
    margin-right: 0;
  }
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
