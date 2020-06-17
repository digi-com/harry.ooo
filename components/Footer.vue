<template>
  <!-- Footer -->
  <footer>
    <div class="left">
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
        <a
          href="https://vimeo.com/harrylawsonnn"
          rel="noopener"
          target="_blank"
        >
          Vimeo
        </a>
      </div>
      <div class="column-3">
        <p>harry@harry.ooo</p>
        <p>+44 (0) 7773 456255</p>
      </div>
    </div>
    <div class="right">© Harry Lawson, 2019 — 2020. All rights reserved.</div>
  </footer>
</template>

<script></script>

<style>
footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.875rem;
  padding: 2rem 3rem 4rem 3rem;
}
footer .left {
  display: flex;
  align-items: flex-start;
}
footer .left .column-1 a {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
}
footer .left .column-2,
footer .left .column-3 {
  margin-left: 4rem;
}
footer .left .column-2 a,
footer .left .column-3 p {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
}
footer .right {
  opacity: 0.2;
}
</style>
