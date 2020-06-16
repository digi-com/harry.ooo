<template>
  <div id="meat-rack">
    <video id="full-screen" autoplay muted loop>
      <source src="/meat-rack/video_1.mp4" type="video/mp4" />
    </video>
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
    <!-- Canvas -->
    <!-- <MeatRackCanvas
      :images="[
        '/meat-rack/FINAL IMAGE one sound file.00_02_25_02.Still082.png',
        '/meat-rack/FINAL IMAGE one sound file.00_04_23_01.Still123.png',
        '/meat-rack/FINAL IMAGE one sound file.00_05_44_18.Still196.png',
        '/meat-rack/FINAL IMAGE one sound file.00_08_02_12.Still352.png',
        '/meat-rack/FINAL IMAGE one sound file.00_08_13_05.Still364.png',
        '/meat-rack/FINAL IMAGE one sound file.00_09_36_11.Still387.png',
        '/meat-rack/FINAL IMAGE one sound file.00_10_21_20.Still406.png',
        '/meat-rack/FINAL IMAGE one sound file.00_10_47_20.Still443.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_00_11.Still461.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_21_04.Still489.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_25_13.Still508.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_29_13.Still513.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_30_00.Still518.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_30_07.Still520.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_31_05.Still526.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_47_08.Still549.png',
        '/meat-rack/FINAL IMAGE one sound file.00_11_51_11.Still561.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_03_24.Still575.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_47_17.Still626.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_48_10.Still632.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_48_17.Still636.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_49_22.Still634.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_52_22.Still639.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_53_17.Still644.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_54_14.Still646.png',
        '/meat-rack/FINAL IMAGE one sound file.00_12_55_18.Still647.png',
        '/meat-rack/FINAL IMAGE one sound file.00_13_16_11.Still680.png',
        '/meat-rack/FINAL IMAGE one sound file.00_13_16_18.Still683.png',
        '/meat-rack/FINAL IMAGE one sound file.00_13_27_03.Still724.png',
        '/meat-rack/FINAL IMAGE one sound file.00_13_33_14.Still732.png',
        '/meat-rack/FINAL IMAGE one sound file.00_13_53_20.Still750.png',
        '/meat-rack/FINAL IMAGE one sound file.00_14_29_14.Still771.png',
        '/meat-rack/FINAL IMAGE one sound file.00_16_13_09.Still827.png',
        '/meat-rack/FINAL IMAGE one sound file.00_15_19_20.Still852.png',
        '/meat-rack/FINAL IMAGE one sound file.00_15_20_06.Still857.png',
        '/meat-rack/FINAL IMAGE one sound file.00_15_32_14.Still864.png',
        '/meat-rack/FINAL IMAGE one sound file.00_15_39_21.Still867.png',
        '/meat-rack/FINAL IMAGE one sound file.00_16_11_09.Still872.png'
      ]"
    /> -->
    <!-- <MeatRackImages /> -->
  </div>
</template>

<script>
// import MeatRackImages from '~/components/MeatRackImages.vue'
// import MeatRackCanvas from '~/components/MeatRackCanvas.vue'

export default {
  components: {
    // MeatRackImages,
    // MeatRackCanvas
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
  position: absolute;
  top: 0;
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
