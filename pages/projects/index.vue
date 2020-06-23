<template>
  <section id="projects">
    <div class="nav-button">Projects</div>
    <div @click="goBack()" class="close-button">
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
    <li class="header">
      <span class="title">Title</span>
      <span class="medium">Medium</span>
      <span class="type">Type</span>
      <span class="year">Year</span>
    </li>
    <ul>
      <nuxt-link to="/projects/mundial">
        <li
          @mouseenter="mundialHover = true"
          @mouseleave="mundialHover = false"
        >
          <span class="title">
            Mundial
          </span>
          <span class="medium">Video</span>
          <span class="type">Commission</span>
          <span class="year">2020</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/projects/meat-rack">
        <li
          @mouseenter="meatRackHover = true"
          @mouseleave="meatRackHover = false"
        >
          <span class="title">Meat Rack</span>
          <span class="medium">Video</span>
          <span class="type">Documentary</span>
          <span class="year">2020</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/projects/margaret">
        <li
          @mouseenter="margaretHover = true"
          @mouseleave="margaretHover = false"
        >
          <span class="title">Margaret</span>
          <span class="medium">Video + Installation</span>
          <span class="type">Research</span>
          <span class="year">2020</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/projects/ochre">
        <li @mouseenter="ochreHover = true" @mouseleave="ochreHover = false">
          <span class="title">Ochre</span>
          <span class="medium">Video</span>
          <span class="type">Commission</span>
          <span class="year">2019</span>
        </li>
      </nuxt-link>
    </ul>
    <!-- Mundial -->
    <video
      id="video-hover"
      v-show="mundialHover"
      class="mundial-hover"
      autoplay
      muted
      loop
    >
      <source src="/mundial/mundial_1_o.mp4" type="video/mp4" />
    </video>
    <!-- Meat Rack -->
    <video
      id="video-hover"
      v-show="meatRackHover"
      class="meat-rack-hover"
      autoplay
      muted
      loop
    >
      <source src="/meat-rack/supercut_o.mp4" type="video/mp4" />
    </video>
    <!-- Margaret -->
    <video
      id="video-hover"
      v-show="margaretHover"
      class="margaret-hover"
      autoplay
      muted
      loop
    >
      <source src="/margaret/supercut.mp4" type="video/mp4" />
    </video>
    <!-- Ochre -->
    <video
      id="video-hover"
      v-show="ochreHover"
      class="ochre-hover"
      autoplay
      muted
      loop
    >
      <source src="/ochre/supercut.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script>
// import InternalNavigation from '~/components/InternalNavigation.vue'

export default {
  components: {
    // InternalNavigation
  },
  data() {
    return {
      mundialHover: false,
      meatRackHover: false,
      margaretHover: false,
      ochreHover: false
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: 'daylight'
      },
      bodyAttrs: {
        class: 'daylight'
      }
    }
  }
}
</script>

<style scoped>
/* #video-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: fill;
  z-index: 1;
} */

.mundial-hover {
  position: absolute;
  top: calc(240px - 141px + 40px);
  left: calc(45% - 250px);
  width: 500px;
  height: auto;
  object-fit: fill;
  z-index: 1;
}
.meat-rack-hover {
  position: absolute;
  top: calc(288px - 183px + 40px);
  left: calc(55% - 250px);
  width: 500px;
  height: auto;
  object-fit: fill;
  z-index: 1;
}
.margaret-hover {
  position: absolute;
  top: calc(360px - 141px + 40px);
  left: calc(45% - 250px);
  width: 500px;
  height: auto;
  object-fit: fill;
  z-index: 1;
}
.ochre-hover {
  position: absolute;
  top: calc(432px - 141px + 40px);
  left: calc(55% - 250px);
  width: 500px;
  height: auto;
  object-fit: fill;
  z-index: 1;
}

#projects {
  background-color: white;
  color: black;
  min-height: 100vh;
  padding: 2rem 3rem 2rem 3rem;
}
#projects .nav-button {
  color: black;
  background-color: white;
  border: 2px solid black;
}
a {
  text-decoration: none;
  color: black;
  display: block;
  position: relative;
}
a:hover {
  color: blue;
}
.coming-soon li span {
  color: rgba(0, 0, 0, 0.2);
}
.coming-soon {
  position: relative;
  user-select: none;
}
.coming-soon-badge {
  font-size: 0.75rem;
  padding: 6px 11px 6px 11px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.16);
  color: rgba(0, 0, 0, 0.22);
  display: inline-block;
  margin-left: 0.5rem;
  border-radius: 999px;
  vertical-align: top;
  transform: translateY(1px);
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
  padding: 2rem 0 1rem 0;
  letter-spacing: -0.25px;
  user-select: none;
  position: relative;
  z-index: 3;
}
.header {
  font-size: 0.875rem;
  letter-spacing: 0;
  line-height: 1.4;
  margin-top: 2rem;
}
.title {
  grid-column: 1 / 4;
}
.medium {
  grid-column: 6 / 11;
}
.type {
  grid-column: 11 / 16;
}
.year {
  grid-column: 16 / 17;
}
</style>
