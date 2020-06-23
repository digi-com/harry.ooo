<template>
  <!-- Project Navigation -->
  <nav class="project-navigation">
    <nuxt-link to="/projects" class="back-link">
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
      <!-- <svg
        width="18"
        height="13"
        viewBox="0 0 18 13"
        xmlns="http://www.w3.org/2000/svg"
        style="transform: translate(0, 2px) rotate(180deg); position: absolute;"
      >
        <path
          d="M12.34711.84l5.65685 5.656854v.000253l-5.65685 5.656854-.70711-.707107L16.087 6.999 0 7V6l16.092-.001-4.452-4.451893L12.34711.84z"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
      </svg> -->
      <!-- <span style="margin-left: calc(18px + 12px);">Projects</span> -->
    </nuxt-link>
    <!-- <div
      v-scroll-to="{
        el: '#film-scroll',
        duration: 1500,
        easing: [0.0, 0.0, 0.58, 1.0],
        cancelable: true,
        x: false,
        y: true
      }"
      style="padding-right: calc(13px + 7px);"
    >
      Watch Trailer
      <svg
        width="13"
        height="15"
        viewBox="0 0 13 15"
        xmlns="http://www.w3.org/2000/svg"
        style="transform: translate(8px, 1px); position: absolute;"
      >
        <path
          d="M12.163962 9.34711l-5.656854 5.65685h-.000253L.850001 9.34711 1.557108 8.64l4.447854 4.447L6.003962 0h1l.001 13.092 4.451893-4.452.707107.70711z"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
      </svg>
    </div> -->
  </nav>
</template>

<script></script>

<style>
.project-navigation {
  position: absolute;
  top: 0;
  width: 100vw;
  color: white;
  z-index: 9999;
  padding: 2rem 3rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.back-link {
  text-decoration: none;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-link svg {
  transform: rotate(180deg) translateX(1px);
}
</style>
