<template>
  <!-- Next Project -->
  <div class="project-table">
    <nuxt-link
      v-for="(project, index) in projects"
      :key="'project-' + index"
      :to="project.link"
      class="row"
    >
      <p class="title">{{ project.title }}</p>
      <p class="medium">{{ project.medium }}</p>
      <p class="type">{{ project.type }}</p>
      <p class="year">
        {{ project.year }}
        <svg
          width="25"
          height="18"
          viewBox="0 0 25 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5142136 17.4894949L15.1 16.0752814 21.174 10H0V8h21.166L15.1 1.93421356 16.5142136.52 23.584 7.59h.0012814L23.996 8H24v.004l.9994949 1.00021356v.00106781l-1.4142135 1.41421353-7.0710678 7.07z"
            fill="#FFFFFF"
            fill-rule="nonzero"
          />
        </svg>
      </p>
    </nuxt-link>
  </div>
</template>

<script>
// import { annotate } from 'rough-notation'

export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
  // mounted() {
  //   const e = document.querySelector('#project-name')
  //   const annotation = annotate(e, { type: 'circle' })
  //   annotation.show()
  // }
}
</script>

<style scoped>
.project-table {
  border-top: 2px solid white;
  margin: 0 3rem 12.5rem 3rem;
}
.daylight .project-table {
  border-top: 2px solid black;
}
.project-table .row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  text-decoration: none;
}
.project-table .row:hover .year svg {
  opacity: 1;
}
.daylight .project-table .row:hover .year svg path {
  fill: black;
}
.daylight .project-table .row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.project-table p {
  font-weight: 400;
  font-size: 1.25rem;
}
.project-table .title {
  grid-column: 1 / 3;
}
.project-table .medium {
  grid-column: 3 / 6;
}
.project-table .type {
  grid-column: 6 / 8;
}
.project-table .year {
  grid-column: 8 / 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-table .year svg {
  opacity: 0;
}
.project-table h2 {
  font-weight: 400;
  font-size: 1rem;
}
</style>
