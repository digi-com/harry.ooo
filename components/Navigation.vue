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

@media screen and (min-width: 0px) and (max-width: 320px) {
  nav {
    display: block;
    padding: 1.5rem;
  }
  nav .name,
  nav .projects {
    margin-bottom: 1.5rem;
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
