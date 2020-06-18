<template>
  <section id="projects">
    <InternalNavigation />
    <li class="header">
      <span class="title">Title</span>
      <span class="medium">Medium</span>
      <span class="type">Type</span>
      <span class="year">Year</span>
    </li>
    <ul>
      <div class="coming-soon">
        <li>
          <span class="title">
            Mundial
            <div class="coming-soon-badge">
              Coming Soon
            </div>
          </span>
          <span class="medium">Video</span>
          <span class="type">Commission</span>
          <span class="year">2020</span>
        </li>
      </div>
      <nuxt-link to="/projects/meat-rack">
        <li
          @mouseenter="meatRackHoverSwitch()"
          @mouseleave="meatRackHoverSwitch()"
        >
          <span class="title">Meat Rack</span>
          <span class="medium">Video</span>
          <span class="type">Documentary</span>
          <span class="year">2020</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/projects/margaret">
        <li
          @mouseenter="margaretHoverSwitch()"
          @mouseleave="margaretHoverSwitch()"
        >
          <span class="title">Margaret</span>
          <span class="medium">Video + Installation</span>
          <span class="type">Research</span>
          <span class="year">2020</span>
        </li>
      </nuxt-link>
      <nuxt-link to="/projects/ochre">
        <li @mouseenter="ochreHoverSwitch()" @mouseleave="ochreHoverSwitch()">
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
      <source src="/mundial/mundial_2.mp4" type="video/mp4" />
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
import InternalNavigation from '~/components/InternalNavigation.vue'

export default {
  components: {
    InternalNavigation
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
    mundialHoverSwitch() {
      this.mundialHover = !this.mundialHover
    },
    meatRackHoverSwitch() {
      this.meatRackHover = !this.meatRackHover
    },
    margaretHoverSwitch() {
      this.margaretHover = !this.margaretHover
    },
    ochreHoverSwitch() {
      this.ochreHover = !this.ochreHover
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
  font-size: 1.5rem;
  position: relative;
}
li {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  align-items: center;
  padding: 2rem 3rem 1rem 3rem;
  letter-spacing: -0.25px;
  user-select: none;
  position: relative;
  z-index: 3;
}
.header {
  font-size: 0.875rem;
  letter-spacing: 0;
  line-height: 1.4;
}
.title {
  grid-column: 1 / 4;
}
.medium {
  grid-column: 4 / 6;
}
.type {
  grid-column: 6 / 8;
}
.year {
  grid-column: 8 / 9;
}
</style>
