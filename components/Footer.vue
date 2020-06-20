<template>
  <!-- Footer -->
  <footer>
    <div class="column-1">
      <nuxt-link to="/">Index</nuxt-link>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/information">Information</nuxt-link>
      <nuxt-link to="/archive">Archive</nuxt-link>
    </div>
    <div class="column-2">
      <a href="https://www.instagram.com/" rel="noopener" target="_blank">
        Instagram
      </a>
      <a href="https://www.are.na/" rel="noopener" target="_blank">
        Are.na
      </a>
      <a href="https://vimeo.com/harrylawsonnn" rel="noopener" target="_blank">
        Vimeo
      </a>
    </div>
    <div class="column-3">
      <p>harry@harry.ooo</p>
      <p>+44 (0) 7773 456255</p>
    </div>
    <div class="copyright">
      © Harry Lawson, 2019 — 2020. All rights reserved.
    </div>
  </footer>
</template>

<script></script>

<style>
footer {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  font-size: 0.875rem;
  padding: 1.5rem 0 3.75rem 0;
  margin: 12.5rem 3rem 0 3rem;
  border-top: 2px solid white;
}
.daylight footer {
  border-top: 2px solid black;
}
footer a,
footer p {
  display: block;
  text-decoration: none;
  margin-bottom: 1.25rem;
}
footer .column-1 {
  grid-column: 1 / 2;
}
footer .column-2 {
  grid-column: 2 / 3;
}
footer .column-3 {
  grid-column: 3 / 4;
}

footer .copyright {
  grid-column: 5 / 9;
  justify-self: end;
}
</style>
