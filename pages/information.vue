<template>
  <section id="information">
    <div class="nav-button">Info</div>
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
    <div class="information-container">
      <h2>
        Harry Lawson (b. 1994) is a documentary filmmaker based in London.
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
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
h2 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
}
#information {
  padding: 2rem 3rem;
  min-height: 100vh;
  background-color: white;
}
#information .nav-button {
  color: black;
  background-color: white;
  border-color: black;
}
.information-container {
  max-width: 100%;
  display: block;
  background-color: white;
  color: black;
  min-height: 100vh;
  margin-top: 4rem;
}
.information-container h2 {
  grid-column: 6 / 9;
}
/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  #information {
    padding: 1.5rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  #information {
    padding: 1.5rem;
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
