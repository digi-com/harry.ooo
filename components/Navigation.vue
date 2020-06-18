<template>
  <nav>
    <nuxt-link to="/" class="name">Harry Lawson</nuxt-link>
    <nuxt-link to="/projects" class="projects">Projects</nuxt-link>
    <nuxt-link to="/information" class="information">Information</nuxt-link>
    <nuxt-link to="/misc" class="misc">Misc.</nuxt-link>
  </nav>
</template>

<script></script>

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
nav a {
  font-size: 0.875rem;
  font-weight: 400;
  width: auto;
  display: inline-block;
  text-decoration: none;
  color: white;
}
.daylight nav a {
  color: black;
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
</style>
