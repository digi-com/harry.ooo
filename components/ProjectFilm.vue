<template>
  <section class="film-wrapper">
    <div
      @click="playClicked()"
      @mouseenter="pointerEnter()"
      @mouseleave="pointerExit()"
      class="nav-button play-button"
    >
      <svg
        class="play-icon"
        viewBox="0 0 18 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4v16c0 1.1045695.8954305 2 2 2 .4327404 0 .8538077-.1403557 1.2-.4l10.6666667-8c.8836556-.6627417 1.0627417-1.9163444.4-2.8a2.00000172 2.00000172 0 00-.4-.4L5.2 2.4c-.8836556-.6627417-2.1372583-.4836556-2.8.4-.2596443.3461923-.4.7672596-.4 1.2z"
          fill="#FFFFFF"
          fill-rule="nonzero"
          stroke="#000000"
          stroke-width="2.25"
          stroke-linejoin="round"
        />
      </svg>
      Play
    </div>
    <div id="film">
      <video
        id="project-feature-video"
        :poster="filmPosterLink"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="filmLink" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    filmLink: {
      type: String,
      required: true
    },
    filmPosterLink: {
      type: String,
      required: true
    },
    externalLink: {
      type: String,
      default: '',
      required: false
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
    playClicked() {
      this.$emit('play-clicked')
    }
  }
}
</script>

<style>
.film-wrapper {
  position: relative;
}
#film {
  margin: 0 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53.125vw;
  position: relative;
  transform: translateZ(0);
  backface-visibility: hidden;
  clip-path: url(#filmClip);
  /* clip-path: inset(0px 80px 0px 80px); */
}
#film::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}
#film #project-feature-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.play-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.play-button:hover svg path {
  stroke: white;
  fill: black;
}
.play-icon {
  width: 1.40625vw;
  height: 1.875vw;
  min-width: 18px;
  min-height: 24px;
  margin-right: 0.78125vw;
}
/* Responsive */
@media screen and (min-width: 0px) and (max-width: 1279px) {
  .play-icon {
    margin-right: 10px;
  }
}
@media screen and (min-width: 0px) and (max-width: 320px) {
  #film {
    margin: 0;
    height: 60vw;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  #film {
    margin: 0;
    height: 60vw;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  #film {
    margin: 0;
    height: 60vw;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  #film {
    margin: 0;
    height: 60vw;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  #film {
    margin: 0;
    height: 60vw;
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
