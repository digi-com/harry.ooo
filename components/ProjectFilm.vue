<template>
  <div id="film">
    <div id="film-scroll" />
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
</style>
