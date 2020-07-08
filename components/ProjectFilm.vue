<template>
  <div id="film">
    <div id="film-scroll" />
    <a v-if="externalLink" :href="externalLink" target="_blank" rel="noopener">
      <div class="watch-film play-button">
        Watch Film
      </div>
    </a>
    <div v-else class="play-button">
      Watch Trailer
    </div>
    <video id="project-feature-video" autoplay muted loop playsinline>
      <source :src="filmLink" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    filmLink: {
      type: String,
      required: true
    },
    externalLink: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style>
#film {
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94vh;
  position: relative;
  margin-top: calc(11rem - (100vh - 94vh) / 2);
  transform: translateZ(0);
  backface-visibility: hidden;
}
#film::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 0, 0, 0);
  top: 0;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  transform: translateZ(0);
  backface-visibility: hidden;
}
#film #film-scroll {
  position: absolute;
  top: -1.5rem;
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
  top: calc(50% - 32px);
  left: calc(50% - 152px);
  background-color: white;
  border: 2px solid black;
  color: black;
  font-size: 2rem;
  text-transform: uppercase;
  z-index: 9999;
  border-radius: 999px;
  height: 64px;
  width: 304px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
.watch-film.play-button {
  width: 250px;
  left: calc(50% - 125px);
}
/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  #film {
    margin: 0 1rem;
    height: 30vh;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  #film {
    margin: 0 1.5rem;
    height: 30vh;
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
