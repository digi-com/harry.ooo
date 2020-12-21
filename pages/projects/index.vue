<template>
  <div id="projects">
    <PageLoader />
    <vue100vh class="page-container">
      <div id="scroll-container" class="scroll-container">
        <Navigation :projects="true" />
        <div class="spacer" />
        <div class="projects-container">
          <div
            v-for="(project, index) in projects"
            :key="'project-' + index"
            :style="{ height: project.vwHeight }"
            @click="pushRoute(project.slug)"
            @mouseenter="viewProjectEnter(project)"
            @mouseleave="viewProjectExit(project)"
            class="project-item"
          >
            <video
              :poster="project.videoPoster"
              autoplay
              muted
              loop
              playsinline
            >
              <source :src="project.supercut" type="video/mp4" />
            </video>
            <div :class="{ active: project.hover }" class="project-title">
              <h2 class="title">{{ project.title }}</h2>
              <h2 class="view">View Project</h2>
            </div>
          </div>
        </div>
        <div class="spacer" />
        <Footer />
      </div>
    </vue100vh>
  </div>
</template>

<script>
import vue100vh from 'vue-100vh'

// Import locomotive.js mixin
import locomotive from '~/mixins/locomotive.js'

export default {
  components: {
    vue100vh
  },
  mixins: [locomotive],
  data() {
    return {
      projects: [
        {
          title: 'Mundial',
          id: 'mundial',
          medium: 'Video',
          type: 'Commission',
          year: '2020',
          slug: '/projects/mundial',
          supercut: '/mundial/mundial-supercut-o.mp4',
          hover: false,
          videoPoster: '/mundial/mundial-supercut-poster.png',
          vwHeight: '26.71875vw'
        },
        {
          title: 'Meat Rack',
          id: 'meat-rack',
          medium: 'Video',
          type: 'Documentary',
          year: '2020',
          slug: '/projects/meat-rack',
          supercut: '/meat-rack/supercut_o.mp4',
          hover: false,
          videoPoster: '/meat-rack/meat-rack-supercut-poster.png',
          vwHeight: '35.625vw'
        },
        {
          title: 'Margaret',
          id: 'margaret',
          medium: 'Installation',
          type: 'Research',
          year: '2020',
          slug: '/projects/margaret',
          supercut: '/margaret/supercut.mp4',
          hover: false,
          videoPoster: '/margaret/margaret-supercut-poster.png',
          vwHeight: '26.71875vw'
        },
        {
          title: 'Ochre',
          id: 'ochre',
          medium: 'Video',
          type: 'Commission',
          year: '2019',
          slug: '/projects/ochre',
          supercut: '/ochre/supercut.mp4',
          hover: false,
          videoPoster: '/ochre/ochre-supercut-poster.png',
          vwHeight: '26.71875vw'
        }
      ]
    }
  },
  methods: {
    viewProjectEnter(project) {
      project.hover = true
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.add('view-project')
      }
    },
    viewProjectExit(project) {
      project.hover = false
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    },
    pushRoute(slug) {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
      this.$router.push({
        path: slug
      })
    }
  }
}
</script>

<style>
.projects-container {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
}
.projects-container .project-item {
  max-width: 100%;
  text-decoration: none;
  margin-bottom: 15.625vw;
  position: relative;
}
.projects-container .project-item:last-child {
  margin-bottom: 0;
}
.project-item .project-title {
  position: absolute;
  bottom: -1.328125vw;
  transform: translateY(100%);
  font-size: 1.5625vw;
  line-height: 1;
  letter-spacing: 0.015vw;
  text-transform: uppercase;
  z-index: 2;
  text-align: left;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.project-item .project-title.active .title,
.project-item .project-title.active .view {
  transform: translateY(0);
}
.project-item .project-title .title {
  grid-column: 1 / 3;
  transform: translateY(1.875vw);
  transition-duration: 0.7s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
}
.project-item .project-title .view {
  grid-column: 3 / 6;
  transform: translateY(1.875vw);
  transition-duration: 0.7s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  transition-delay: 0.1s;
}
.project-item .project-title h2 {
  font-size: 1.5625vw;
  line-height: 1;
  letter-spacing: 0.015vw;
  text-transform: uppercase;
  font-weight: 400;
}
.projects-container .project-item video {
  width: 100%;
}
.projects-container .project-item:nth-child(1) {
  grid-column: 3 / 9;
  grid-row: 1;
}
.projects-container .project-item:nth-child(2) {
  grid-column: 6 / 12;
  grid-row: 2;
}
.projects-container .project-item:nth-child(3) {
  grid-column: 2 / 8;
  grid-row: 3;
}
.projects-container .project-item:nth-child(4) {
  grid-column: 5 / 11;
  grid-row: 4;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .projects-container {
    padding: 0 1.5rem;
  }
  .projects-container .project-item {
    margin-bottom: 160px;
    grid-column: 1 / 13 !important;
    height: auto !important;
  }
  .project-item .project-title .title {
    transform: translateY(0);
    font-size: 18px;
    margin-top: 12px;
    grid-column: 1 / 7;
  }
  .project-item .project-title .view {
    display: none;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .projects-container {
    padding: 0 1.5rem;
  }
  .projects-container .project-item {
    margin-bottom: 160px;
    grid-column: 1 / 13 !important;
    height: auto !important;
  }
  .project-item .project-title .title {
    transform: translateY(0);
    font-size: 18px;
    margin-top: 12px;
    grid-column: 1 / 7;
  }
  .project-item .project-title .view {
    display: none;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .projects-container {
    padding: 0 1.5rem;
  }
  .projects-container .project-item {
    margin-bottom: 160px;
    grid-column: 1 / 13 !important;
    height: auto !important;
  }
  .project-item .project-title .title {
    transform: translateY(0);
    font-size: 18px;
    margin-top: 12px;
    grid-column: 1 / 7;
  }
  .project-item .project-title .view {
    display: none;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .projects-container {
    padding: 0 1.5rem;
  }
  .projects-container .project-item {
    margin-bottom: 160px;
    grid-column: 1 / 13 !important;
    height: auto !important;
  }
  .project-item .project-title .title {
    transform: translateY(0);
    font-size: 18px;
    margin-top: 12px;
    grid-column: 1 / 7;
  }
  .project-item .project-title .view {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .projects-container {
    padding: 0 1.5rem;
  }
  .projects-container .project-item {
    margin-bottom: 160px;
    grid-column: 3 / 11 !important;
    height: auto !important;
  }
  .project-item .project-title .title {
    transform: translateY(0);
    font-size: 20px;
    margin-top: 12px;
    grid-column: 1 / 7;
  }
  .project-item .project-title .view {
    display: none;
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
