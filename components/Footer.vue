<template>
  <!-- Next Project -->
  <div class="footer-container">
    <div class="nav-button c-button no-hover">
      © 2020
    </div>
    <a
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      @click="pointerExit()"
      href="https://www.instagram.com/harrylaws.on/"
      rel="noopener"
      target="_blank"
      class="nav-button ig-button"
    >
      Instagram
    </a>
    <a
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      @click="pointerExit()"
      href="mailto:harry@harry.ooo"
      class="nav-button email-button"
    >
      Email
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectsVisible: false,
      infoVisible: false
    }
  },
  methods: {
    pointerEnter() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.add('view-project')
      }
    },
    pointerExit() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    },
    toggleProjects() {
      this.projectsVisible = !this.projectsVisible
    },
    toggleInfo() {
      this.infoVisible = !this.infoVisible
    }
  }
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0;
  position: relative;
  padding: 0 2.5vw 2.5vw;
}
.footer-container nav {
  position: relative;
}

.c-button {
  letter-spacing: -0.2px;
}

.c-button,
.ig-button {
  margin-right: 0.9375vw;
}

.ig-button:hover {
  background: #d6249f;
  background: radial-gradient(
    circle at 20% 145%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  border: none;
  padding: 0 2.1875vw;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .footer-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem 1.6875rem;
  }
  .c-button,
  .ig-button {
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .footer-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem 1.6875rem;
  }
  .c-button,
  .ig-button {
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .footer-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem 1.6875rem;
  }
  .c-button,
  .ig-button {
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .footer-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem 1.6875rem;
  }
  .c-button,
  .ig-button {
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .footer-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem 1.6875rem;
  }
  .c-button,
  .ig-button {
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
  .back-to-top {
    position: relative;
    display: inline-flex;
    right: auto;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
  .footer-container {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.5rem 1.6875rem;
  }
  .c-button,
  .ig-button {
    margin-right: 0;
    margin-bottom: 1.25rem;
  }
  .back-to-top {
    position: relative;
    display: inline-flex;
    right: auto;
  }
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
