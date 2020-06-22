<template>
  <div id="film">
    <div id="film-scroll" />
    <div class="play-button">
      Watch Trailer
    </div>
    <video id="project-feature-video" autoplay muted loop>
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
}
#film::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 0, 0, 0);
  top: 0;
  backdrop-filter: blur(50px);
}
#film #film-scroll {
  position: absolute;
  top: -1.5rem;
  z-index: 999999;
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
  background-color: black;
  border: 2px solid white;
  color: white;
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
.daylight .play-button {
  background-color: white;
  border: 2px solid black;
  color: black;
}
</style>
