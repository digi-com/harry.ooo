<template>
  <div id="projects">
    <PageLoader />
    <div class="projects-container">
      <div
        v-for="(project, index) in projects"
        :key="'project-' + index"
        :to="project.slug"
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        class="project-item"
      >
        <video :poster="project.videoPoster" autoplay muted loop playsinline>
          <source :src="project.supercut" type="video/mp4" />
        </video>
        <h2>{{ project.title }}</h2>
        <h4>{{ project.type }}, {{ project.medium }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    viewProjectEnter() {
      document.querySelector('div#cursor').classList.add('view-project')
    },
    viewProjectExit() {
      document.querySelector('div#cursor').classList.remove('view-project')
    }
  }
}
</script>

<style>
.projects-container {
  display: grid;
  grid-template-columns: repeat(12, calc(100% / 12));
  max-width: 76rem;
  margin: 0 auto;
}
.projects-container .project-item {
  max-width: 100%;
  overflow: hidden;
  text-decoration: none;
  margin-bottom: 11.25rem;
}
.projects-container .project-item:first-child {
  /* margin-top: calc(11.25rem + 6rem); */
}
.project-item h2 {
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: -0.24px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.project-item h4 {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: -0.16px;
  color: #ccc;
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
</style>
