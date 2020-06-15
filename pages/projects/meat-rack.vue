<template>
  <div id="meat-rack">
    <!-- <video id="full-screen" autoplay muted loop>
      <source src="/meat-rack/video_1.mp4" type="video/mp4" />
    </video> -->
    <div class="feature">
      <h2>Meat Rack</h2>
      <p>
        Meat Rack is an experimental documentary film about The NYC Downlow,
        Block9's infamous queer club. Set in a warehouse at the heart of New
        York City's Meatpacking District, circa 1982, Meat Rack celebrates The
        NYC Downlow's 10th Anniversary. Filmed at Glastonbury Festival in 2017.
        Exhibited online via Resident Advisor (15th → 25th June 2020).
      </p>
    </div>
    <MeatRackImages />
  </div>
</template>

<script>
import MeatRackImages from '~/components/MeatRackImages.vue'

export default {
  components: {
    MeatRackImages
  }
}
</script>

<style>
#meat-rack .feature {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 12rem 3rem;
}
.feature h2 {
  grid-column: 4 / 8;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1rem;
}
.feature p {
  grid-column: 4 / 8;
  line-height: 1.5;
  font-size: 1.25rem;
}
</style>
