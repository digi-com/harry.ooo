<template>
  <div class="image-grid-container">
    <!-- Grid -->
    <section v-if="index" class="mr-image-grid">
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-1"
      >
        <client-only>
          <ProgressiveImage
            :width="1200"
            :height="1697"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/meat-rack-poster.jpg"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-2"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/42.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-3"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/7.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-4"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/11.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-5"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/15.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-6"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/9.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-7"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/22.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-8"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/23.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-9"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/29.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-10"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/2.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-11"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/1.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-12"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/3.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-13"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/40.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-14"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/10.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-15"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/8.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-16"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/39.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-17"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/45.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-18"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/41.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-19"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/49.png"
          />
        </client-only>
      </div>
      <div
        @mouseenter="viewProjectEnter()"
        @mouseleave="viewProjectExit()"
        @click="goToMeatRack()"
        to="/projects/meat-rack"
        class="mr-image-20"
      >
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            line-one="Meat Rack"
            line-two="View Project"
            src="/meat-rack/13.png"
          />
        </client-only>
      </div>
    </section>
    <!-- No Link -->
    <section v-else class="mr-image-grid">
      <div class="mr-image-1">
        <client-only>
          <ProgressiveImage
            :width="1200"
            :height="1697"
            src="/meat-rack/meat-rack-poster.jpg"
          />
        </client-only>
      </div>
      <div class="mr-image-2">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/42.png"
          />
        </client-only>
      </div>
      <div class="mr-image-3">
        <client-only>
          <ProgressiveImage :width="720" :height="576" src="/meat-rack/7.png" />
        </client-only>
      </div>
      <div class="mr-image-4">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/11.png"
          />
        </client-only>
      </div>
      <div class="mr-image-5">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/15.png"
          />
        </client-only>
      </div>
      <div class="mr-image-6">
        <client-only>
          <ProgressiveImage :width="720" :height="576" src="/meat-rack/9.png" />
        </client-only>
      </div>
      <div class="mr-image-7">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/22.png"
          />
        </client-only>
      </div>
      <div class="mr-image-8">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/23.png"
          />
        </client-only>
      </div>
      <div class="mr-image-9">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/29.png"
          />
        </client-only>
      </div>
      <div class="mr-image-10">
        <client-only>
          <ProgressiveImage :width="720" :height="576" src="/meat-rack/2.png" />
        </client-only>
      </div>
      <div class="mr-image-11">
        <client-only>
          <ProgressiveImage :width="720" :height="576" src="/meat-rack/1.png" />
        </client-only>
      </div>
      <div class="mr-image-12">
        <client-only>
          <ProgressiveImage :width="720" :height="576" src="/meat-rack/3.png" />
        </client-only>
      </div>
      <div class="mr-image-13">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/40.png"
          />
        </client-only>
      </div>
      <div class="mr-image-14">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/10.png"
          />
        </client-only>
      </div>
      <div class="mr-image-15">
        <client-only>
          <ProgressiveImage :width="720" :height="576" src="/meat-rack/8.png" />
        </client-only>
      </div>
      <div class="mr-image-16">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/39.png"
          />
        </client-only>
      </div>
      <div class="mr-image-17">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/45.png"
          />
        </client-only>
      </div>
      <div class="mr-image-18">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/41.png"
          />
        </client-only>
      </div>
      <div class="mr-image-19">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/49.png"
          />
        </client-only>
      </div>
      <div class="mr-image-20">
        <client-only>
          <ProgressiveImage
            :width="720"
            :height="576"
            src="/meat-rack/13.png"
          />
        </client-only>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    viewProjectEnter() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.add('view-project')
      }
    },
    viewProjectExit() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    },
    goToMeatRack() {
      this.$router.push({
        path: '/projects/meat-rack'
      })
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    }
  }
}
</script>

<style scoped>
.image-grid-container {
  position: relative;
}

/* Grid  */

.mr-image-grid {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
  grid-template-rows: repeat(96, 3.125vw);
  grid-row-gap: 0.625vw;
}
.mr-image-grid .mr-image-1 {
  grid-column: 2 / 7;
  grid-row: 1 / 16;
}
.mr-image-grid .mr-image-2 {
  grid-column: 2 / 6;
  grid-row: 23 / 30;
}
.mr-image-grid .mr-image-3 {
  grid-column: 3 / 7;
  grid-row: 28 / 35;
}
.mr-image-grid .mr-image-4 {
  grid-column: 1 / 7;
  grid-row: 39 / 50;
}
.mr-image-grid .mr-image-5 {
  grid-column: 1 / 6;
  grid-row: 53 / 62;
}
.mr-image-grid .mr-image-6 {
  grid-column: 1 / 7;
  grid-row: 66 / 76;
}
.mr-image-grid .mr-image-7 {
  grid-column: 3 / 7;
  grid-row: 80 / 87;
}
.mr-image-grid .mr-image-8 {
  grid-column: 1 / 5;
  grid-row: 85 / 92;
}
.mr-image-grid .mr-image-9 {
  grid-column: 3 / 7;
  grid-row: 90 / 97;
}
.mr-image-grid .mr-image-10 {
  grid-column: 8 / 12;
  grid-row: 5 / 12;
}
.mr-image-grid .mr-image-11 {
  grid-column: 9 / 13;
  grid-row: 10 / 17;
}
.mr-image-grid .mr-image-12 {
  grid-column: 8 / 12;
  grid-row: 15 / 22;
}
.mr-image-grid .mr-image-13 {
  grid-column: 9 / 13;
  grid-row: 26 / 33;
}
.mr-image-grid .mr-image-14 {
  grid-column: 8 / 12;
  grid-row: 37 / 44;
}
.mr-image-grid .mr-image-15 {
  grid-column: 5 / 11;
  grid-row: 48 / 58;
}
.mr-image-grid .mr-image-16 {
  grid-column: 9 / 13;
  grid-row: 61 / 68;
}
.mr-image-grid .mr-image-17 {
  grid-column: 8 / 12;
  grid-row: 71 / 78;
}
.mr-image-grid .mr-image-18 {
  grid-column: 9 / 13;
  grid-row: 75 / 82;
}
.mr-image-grid .mr-image-19 {
  grid-column: 8 / 12;
  grid-row: 86 / 93;
}
.mr-image-grid .mr-image-20 {
  grid-column: 9 / 13;
  grid-row: 91 / 98;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .mr-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .mr-image-grid {
    width: 118.5%;
    position: relative;
    left: -9.25%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .mr-image-grid {
    width: 122%;
    position: relative;
    left: -11%;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .mr-image-grid {
    width: 100%;
    position: relative;
    padding: 0 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .mr-image-grid {
    width: 100%;
    position: relative;
    padding: 0 1.5rem;
  }
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
