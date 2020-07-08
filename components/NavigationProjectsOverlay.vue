<template>
  <vue100vh :css="{ height: '100rvh' }" class="projects-overlay">
    <div class="projects-overlay-title">
      <!-- Projects -->
      <div class="nav-button">Projects</div>
      <!-- Close Button -->
      <div @click="closeModal()" class="close-button">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5552814 0l1.4142135 1.41421356-9.07 9.07000004v.0010678l9.07 9.07-1.4142135 1.4142135-9.07-9.07-9.07106784 9.07L0 19.5552814 9.07 10.484 0 1.41421356 1.41421356 0 10.484 9.07h.0012814H10.485L19.5552814 0z"
            fill="#000"
            fill-rule="nonzero"
          />
        </svg>
      </div>
    </div>
    <!-- Projects List -->
    <div
      v-for="project in projects"
      @click="pushRoute(project.slug)"
      @mouseenter="project.videoHover = true"
      @mouseleave="project.videoHover = false"
      :key="'project-' + project.title"
      class="project-row"
    >
      <div class="nav-button">{{ project.title }}</div>
      <div class="right">
        <span class="medium">{{ project.medium }}</span>
        <span class="type">{{ project.type }}</span>
        <span class="year">{{ project.year }}</span>
        <div class="circle-button">
          <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5142136 21.4694949L16.1 20.0552814 24.175 11.98H0v-2h24.166L16.1 1.9142136 17.5142136.5 26.585 9.571l.0002814-.001.4097186.41H27v.005l.9994949.9992136v.0010678l-1.4142135 1.4142135-9.0710678 9.07z"
              fill="#000000"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
      <!-- Video hover -->
      <video
        id="video-hover"
        v-show="project.videoHover"
        :class="project.id"
        :poster="project.videoPoster"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="project.supercut" type="video/mp4" />
      </video>
    </div>
  </vue100vh>
</template>

<script>
import vue100vh from 'vue-100vh'
export default {
  components: {
    vue100vh
  },
  data() {
    return {
      mundialHover: false,
      meatRackHover: false,
      margaretHover: false,
      ochreHover: false,
      projects: [
        {
          title: 'Mundial',
          id: 'mundial',
          medium: 'Video',
          type: 'Commission',
          year: '2020',
          slug: '/projects/mundial',
          supercut: '/mundial/mundial-supercut-o.mp4',
          videoHover: false,
          videoPoster: '/mundial/mundial-supercut-poster.png'
        },
        {
          title: 'Meat Rack',
          id: 'meat-rack',
          medium: 'Video',
          type: 'Documentary',
          year: '2020',
          slug: '/projects/meat-rack',
          supercut: '/meat-rack/supercut_o.mp4',
          videoHover: false,
          videoPoster: '/meat-rack/meat-rack-supercut-poster.png'
        },
        {
          title: 'Margaret',
          id: 'margaret',
          medium: 'Installation',
          type: 'Research',
          year: '2020',
          slug: '/projects/margaret',
          supercut: '/margaret/supercut.mp4',
          videoHover: false,
          videoPoster: '/margaret/margaret-supercut-poster.png'
        },
        {
          title: 'Ochre',
          id: 'ochre',
          medium: 'Video',
          type: 'Commission',
          year: '2019',
          slug: '/projects/ochre',
          supercut: '/ochre/supercut.mp4',
          videoHover: false,
          videoPoster: '/ochre/ochre-supercut-poster.png'
        }
      ]
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    pushRoute(slug) {
      this.$router.push({
        path: slug
      })
      //   this.$emit('close-modal')
    }
  }
}
</script>

<style>
.projects-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: white;
  width: 100vw;
  user-select: none;
  padding: 2rem 3rem;
  color: black;
}
.projects-overlay .projects-overlay-title {
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.projects-overlay .nav-button {
  color: black !important;
  border-color: black !important;
  background-color: white !important;
}
.projects-overlay .project-row {
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  position: relative;
}

/* Row hover */
.projects-overlay .project-row:hover .circle-button,
.projects-overlay .project-row:hover .nav-button {
  background: black !important;
  color: white !important;
}

.projects-overlay .project-row:hover .circle-button svg path {
  fill: white !important;
}

.projects-overlay .project-row .right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67%;
  z-index: 2;
}
.projects-overlay .project-row .right span {
  font-size: 2rem;
  letter-spacing: -0.08px;
}
.projects-overlay .project-row .right .medium {
  width: 10rem;
}
.projects-overlay .project-row .right .type {
  width: 12rem;
}
.projects-overlay .project-row .right .year {
  width: 5rem;
}

#video-hover {
  position: absolute;
  top: 0rem;
  left: calc(50% - 250px);
  width: 500px;
  height: auto;
  object-fit: fill;
  z-index: 1;
}

/* Responsive */

@media screen and (min-width: 0px) and (max-width: 320px) {
  .projects-overlay {
    padding: 1rem;
  }
  .projects-overlay .projects-overlay-title {
    margin-bottom: 0.5rem;
  }
  .projects-overlay .project-row .right {
    display: none;
  }
  .projects-overlay .project-row {
    padding: 0.5rem 0;
  }
  #video-hover {
    display: none;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .projects-overlay {
    padding: 1.5rem;
  }
  .projects-overlay .projects-overlay-title {
    margin-bottom: 0.75rem;
  }
  .projects-overlay .project-row .right {
    display: none;
  }
  .projects-overlay .project-row {
    padding: 0.75rem 0;
  }
  #video-hover {
    display: none;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
}
@media screen and (min-width: 481px) and (max-width: 767px) {
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
