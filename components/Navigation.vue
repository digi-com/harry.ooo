<template>
  <section id="navigation">
    <nav>
      <div class="name">
        <nuxt-link to="/">Harry Lawson</nuxt-link>
      </div>
      <div class="projects">
        <div @click="toggleProjects()" class="nav-button">Projects</div>
      </div>
      <div class="information">
        <nuxt-link to="/information">Info</nuxt-link>
      </div>
      <!-- <nuxt-link to="/misc" class="misc">Misc.</nuxt-link> -->
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toggleProjects() {
      this.$router.push({
        path: '/projects/'
      })
    },
    projectsMundialGo() {
      this.projectsHover = !this.projectsHover
      this.$router.push({
        path: '/projects/mundial'
      })
    }
  }
}
</script>

<style>
nav {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 2rem 3rem 2rem 3rem;
  position: absolute;
  z-index: 99999;
}
nav a,
.nav-button {
  /* font-size: 0.875rem;
  font-weight: 400;
  width: auto;
  display: inline-block;
  text-decoration: none;
  color: white; */
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  text-transform: uppercase;
  z-index: 9999;
  border-radius: 999px;
  height: 64px;
  width: auto;
  padding: 0 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-decoration: none;
}
.daylight nav a,
.daylight .nav-button {
  color: black;
  background-color: white;
  border: 2px solid black;
}
.close-button {
  background-color: transparent;
  border: 2px solid black;
  z-index: 9999;
  border-radius: 999px;
  height: 64px;
  width: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-decoration: none;
}
nav .name {
  grid-column: 1 / 4;
}
nav .projects {
  grid-column: 4 / 6;
}
nav .information {
  grid-column: 6 / 8;
}
nav .misc {
  grid-column: 8 / 9;
}

/* Projects Overlay */
.projects-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  background-color: black;
  color: white !important;
}
.projects-overlay .nav-button {
  color: white;
  background-color: transparent;
  border: 2px solid white;
}
.close-button {
  position: absolute;
  top: 2rem;
  right: 3rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.75rem;
  position: relative;
}
li {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-gap: 1rem;
  align-items: center;
  padding: 2rem 3rem 1rem 3rem;
  letter-spacing: -0.25px;
  user-select: none;
  position: relative;
  z-index: 3;
}
.projects-overlay a {
  text-decoration: none;
  display: block;
  position: relative;
  color: white !important;
}
.header {
  font-size: 0.875rem;
  letter-spacing: 0;
  line-height: 1.4;
  opacity: 0.5;
}
.title {
  grid-column: 1 / 6;
}
.medium {
  grid-column: 6 / 11;
}
.type {
  grid-column: 11 / 14;
}
.year {
  grid-column: 16 / 17;
}
</style>
