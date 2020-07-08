<template>
  <section id="hero">
    <client-only>
      <ProgressiveImage
        :width="1200"
        :height="1697"
        src="/meat-rack/meat-rack-poster.jpg"
        placeholder="/meat-rack/placeholders/meat-rack-poster.jpg"
        class="hero-image-1"
      />
      <ProgressiveImage
        :width="720"
        :height="576"
        src="/meat-rack/42.png"
        placeholder="/meat-rack/placeholders/42.png"
        class="hero-image-2"
      />
      <ProgressiveImage
        :width="720"
        :height="576"
        src="/meat-rack/40.png"
        placeholder="/meat-rack/placeholders/40.png"
        class="hero-image-3"
      />
      <ProgressiveImage
        :width="720"
        :height="576"
        src="/meat-rack/45.png"
        placeholder="/meat-rack/placeholders/45.png"
        class="hero-image-4"
      />
      <ProgressiveImage
        :width="720"
        :height="576"
        src="/meat-rack/49.png"
        placeholder="/meat-rack/placeholders/49.png"
        class="hero-image-5"
      />
      <ProgressiveImage
        :width="720"
        :height="576"
        src="/meat-rack/11.png"
        placeholder="/meat-rack/placeholders/11.png"
        class="hero-image-6"
      />
    </client-only>
  </section>
</template>

<script>
export default {}
</script>

<style>
#hero {
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(22, 2rem);
  grid-column-gap: 1rem;
  padding: 16rem 3rem 0 3rem;
}
#hero img {
  height: auto;
  max-width: 100%;
}
#hero .hero-image-1 {
  grid-column: 1 / 5;
  grid-row-start: 1;
}
#hero .hero-image-2 {
  grid-column: 3 / 6;
  grid-row-start: 13;
}
#hero .hero-image-3 {
  grid-column: 6 / 9;
  grid-row-start: 1;
}
#hero .hero-image-4 {
  grid-column: 7 / 10;
  grid-row-start: 4;
}
#hero .hero-image-5 {
  grid-column: 8 / 12;
  grid-row-start: 14;
}
#hero .hero-image-6 {
  grid-column: 11 / 13;
  grid-row-start: 1;
}

/* Responsive */

@media screen and (min-width: 0px) and (max-width: 320px) {
  #hero {
    display: block;
    padding: 20rem 1rem 0 1rem;
  }
  #hero .progressive-image {
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  #hero {
    display: block;
    padding: 24.5rem 1.5rem 0 1.5rem;
  }
  #hero .progressive-image {
    margin-bottom: 1.5rem;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  #hero {
    display: block;
    padding: 24.5rem 1.5rem 0 1.5rem;
  }
  #hero .progressive-image {
    margin-bottom: 1.5rem;
  }
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
