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
</style>
