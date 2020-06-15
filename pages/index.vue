<template>
  <div>
    <Navigation />
    <video id="full-screen" autoplay muted loop>
      <source src="/meat-rack/video_1.mp4" type="video/mp4" />
    </video>
    <div class="ra-link">
      <svg
        width="936"
        height="449"
        viewBox="0 0 936 449"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M925.008 359.515c6.274-5.975 10.236-14.348 10.236-23.693 0-8.994-4.28-17.078-10.141-22.997L661.04 48.762l-79.702 79.702 207.901 207.901H494.688c-14.399-.431-25.81-5.262-35.465-14.619L327.056 189.579c-13.705-12.96-32.479-21.16-52.834-21.16-.072 0-.139.01-.201.01v-.01H112.72v-55.152h167.056v.011c33.099.016 62.631 13.563 84.278 35.303l98.584 98.583 79.702-79.702-100.5-100.5C399.832 25.594 343.1.551 279.491.551H0v280.583h236.379v.018c15.374.11 29.254 6.433 39.276 16.588l129.441 129.445c13.166 12.93 30.955 21.081 50.68 21.815h357.57c15.053-.198 28.648-6.361 38.57-16.254l73.147-73.14-.055-.091"
          fill="#FFFFFF"
          fill-rule="evenodd"
        />
      </svg>
      Watch Meat Rack on Resident Advisor
    </div>
    <!-- Canvas -->
    <MeatRackCanvas
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
    />
    <MargaretCanvas
      :images="[
        '/margaret/04 Living room.JPG',
        '/margaret/CAREHOME MINI DV.01_17_51_14.Still002.png',
        '/margaret/CAREHOME MINI DV.02_47_08_17.Still003.png',
        '/margaret/DSC02835.jpg',
        '/margaret/DSC02838.jpg',
        '/margaret/IMG_3250.jpeg',
        '/margaret/IMG_3305.jpg',
        '/margaret/Memory test 07.02.07 p2.jpeg',
        '/margaret/Memory tests 02.08.10 and 23.05.11 p3.jpeg',
        '/margaret/P1000490.jpg',
        '/margaret/TIMELINE 1.00_07_30_10.Still064.png',
        '/margaret/TIMELINE 1.00_08_02_19.Still066.png',
        '/margaret/TIMELINE 1.00_08_14_10.Still068.png',
        '/margaret/TIMELINE 1.00_10_46_05.Still073.png',
        '/margaret/TIMELINE 1.00_11_59_03.Still077.png',
        '/margaret/TIMELINE 1.00_13_01_13.Still078.png',
        '/margaret/TIMELINE 1.00_15_15_02.Still080.png',
        '/margaret/TIMELINE 1.00_15_53_06.Still082.png',
        '/margaret/TIMELINE 1.00_17_08_15.Still083.png',
        '/margaret/TIMELINE 1.00_19_08_04.Still087.png',
        '/margaret/TIMELINE 1.00_21_40_21.Still089.png',
        '/margaret/TIMELINE 1.00_25_04_20.Still091.png',
        '/margaret/TIMELINE 1.00_26_01_15.Still092.png',
        '/margaret/TIMELINE 1.00_26_03_23.Still093.png',
        '/margaret/TIMELINE 1.00_30_32_15.Still097.png',
        '/margaret/TIMELINE 1.00_31_16_21.Still001.png',
        '/margaret/TIMELINE 1.00_37_30_15.Still004.png',
        '/margaret/TIMELINE 1.00_40_06_16.Still102.png',
        '/margaret/TIMELINE 1.00_40_09_22.Still103.png',
        '/margaret/TIMELINE 1.00_41_11_09.Still100.png',
        '/margaret/TIMELINE 1.00_47_28_17.Still008.png',
        '/margaret/TIMELINE 1.00_47_32_24.Still009.png',
        '/margaret/TIMELINE 1.00_48_05_12.Still011.png',
        '/margaret/TIMELINE 1.00_48_17_01.Still012.png',
        '/margaret/TIMELINE 1.00_48_22_17.Still013.png',
        '/margaret/TIMELINE 1.00_48_26_05.Still014.png',
        '/margaret/TIMELINE 1.00_48_31_24.Still015.png',
        '/margaret/TIMELINE 1.00_49_18_16.Still016.png',
        '/margaret/TIMELINE 1.00_49_34_11.Still018.png',
        '/margaret/TIMELINE 1.00_50_20_12.Still020.png',
        '/margaret/TIMELINE 1.00_50_41_04.Still022.png',
        '/margaret/TIMELINE 1.00_50_47_02.Still023.png',
        '/margaret/TIMELINE 1.00_51_04_15.Still024.png',
        '/margaret/TIMELINE 1.00_51_26_08.Still026.png',
        '/margaret/TIMELINE 1.00_51_34_19.Still027.png',
        '/margaret/TIMELINE 1.00_57_14_21.Still105.png',
        '/margaret/TIMELINE 1.01_09_50_01.Still034.png',
        '/margaret/TIMELINE 1.01_13_53_05.Still049.png',
        '/margaret/TIMELINE 1.01_17_48_11.Still052.png',
        '/margaret/TIMELINE 1.01_23_14_10.Still056.png',
        '/margaret/TIMELINE 1.01_28_42_04.Still057.png'
      ]"
    />
    <OchreCanvas
      :images="[
        '/ochre/CHEZ MOUNIR VISUAL ONLY.00_00_10_07.Still002.png',
        '/ochre/CHEZ MOUNIR VISUAL ONLY.00_00_26_02.Still004.png',
        '/ochre/Instagram Edit.00_08_08_10.Still016.png',
        '/ochre/Instagram Edit.00_08_09_03.Still020.png',
        '/ochre/Instagram Edit.00_08_09_04.Still021.png',
        '/ochre/Instagram Edit.00_08_09_05.Still022.png',
        '/ochre/Instagram Edit.00_08_09_06.Still023.png',
        '/ochre/Instagram Edit.00_08_09_07.Still024.png',
        '/ochre/Instagram Edit.00_08_09_08.Still025.png',
        '/ochre/Instagram Edit.00_08_09_09.Still026.png',
        '/ochre/Instagram Edit.00_08_09_10.Still027.png',
        '/ochre/Instagram Edit.00_08_10_06.Still028.png',
        '/ochre/Instagram Edit.00_08_10_07.Still029.png',
        '/ochre/Instagram Edit.00_08_10_08.Still030.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_10_13.Still003.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_22_18.Still002.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_00_23_19.Still004.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_00_13.Still006.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_06_24.Still007.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_09_15.Still012.png',
        '/ochre/Maroque Timeline 1 (MASTER).00_08_10_22.Still011.png',
        '/ochre/OCHRE website grabs.00_00_00_00.Still020.png',
        '/ochre/OCHRE website grabs.00_00_07_07.Still021.png',
        '/ochre/OCHRE website grabs.00_00_07_11.Still022.png',
        '/ochre/OCHRE website grabs.00_00_10_20.Still024.png',
        '/ochre/OCHRE website grabs.00_00_10_21.Still025.png',
        '/ochre/OCHRE website grabs.00_00_10_24.Still026.png',
        '/ochre/OCHRE website grabs.00_00_11_00.Still027.png',
        '/ochre/OCHRE website grabs.00_00_11_01.Still028.png',
        '/ochre/OCHRE website grabs.00_00_11_12.Still031.png',
        '/ochre/OCHRE website grabs.00_00_12_08.Still035.png',
        '/ochre/OCHRE website grabs.00_00_12_11.Still038.png',
        '/ochre/OCHRE website grabs.00_00_18_15.Still039.png',
        '/ochre/OCHRE website grabs.00_00_18_19.Still040.png',
        '/ochre/OCHRE website grabs.00_00_20_01.Still041.png',
        '/ochre/OCHRE website grabs.00_00_29_00.Still045.png',
        '/ochre/OCHRE website grabs.00_00_30_08.Still046.png',
        '/ochre/OCHRE website grabs.00_00_32_08.Still047.png',
        '/ochre/OCHRE website grabs.00_00_37_24.Still052.png',
        '/ochre/OCHRE website grabs.00_00_46_00.Still057.png',
        '/ochre/OCHRE website grabs.00_00_47_19.Still058.png',
        '/ochre/OCHRE website grabs.00_00_48_14.Still059.png',
        '/ochre/OCHRE website grabs.00_01_01_13.Still064.png',
        '/ochre/OCHRE website grabs.00_01_04_08.Still065.png',
        '/ochre/OCHRE website grabs.00_01_10_00.Still066.png',
        '/ochre/OCHRE website grabs.00_01_12_21.Still067.png',
        '/ochre/OCHRE website grabs.00_01_16_07.Still068.png',
        '/ochre/OCHRE website grabs.00_01_16_16.Still069.png',
        '/ochre/OCHRE website grabs.00_01_18_09.Still070.png',
        '/ochre/OCHRE website grabs.00_01_20_12.Still071.png',
        '/ochre/OCHRE website grabs.00_01_27_02.Still072.png',
        '/ochre/OCHRE website grabs.00_01_28_13.Still073.png',
        '/ochre/OCHRE website grabs.00_01_29_08.Still074.png',
        '/ochre/OCHRE website grabs.00_01_31_22.Still075.png',
        '/ochre/OCHRE website grabs.00_01_32_10.Still076.png',
        '/ochre/OCHRE website grabs.00_01_32_22.Still077.png',
        '/ochre/OCHRE website grabs.00_01_33_10.Still078.png',
        '/ochre/OCHRE website grabs.00_01_34_11.Still079.png',
        '/ochre/OCHRE website grabs.00_01_37_05.Still080.png',
        '/ochre/OCHRE website grabs.00_01_39_21.Still084.png',
        '/ochre/OCHRE website grabs.00_01_41_06.Still085.png',
        '/ochre/OCHRE website grabs.00_01_42_03.Still086.png',
        '/ochre/OCHRE website grabs.00_01_44_04.Still090.png',
        '/ochre/OCHRE website grabs.00_01_44_13.Still091.png',
        '/ochre/OCHRE website grabs.00_01_45_08.Still092.png',
        '/ochre/OCHRE website grabs.00_01_49_22.Still097.png',
        '/ochre/OCHRE website grabs.00_01_50_07.Still098.png',
        '/ochre/OCHRE website grabs.00_01_59_18.Still108.png',
        '/ochre/OCHRE website grabs.00_02_00_13.Still109.png',
        '/ochre/OCHRE website grabs.00_02_01_06.Still110.png',
        '/ochre/OCHRE website grabs.00_02_01_07.Still111.png',
        '/ochre/OCHRE website grabs.00_02_15_09.Still116.png',
        '/ochre/OCHRE website grabs.00_02_29_06.Still117.png'
      ]"
    />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import MeatRackCanvas from '~/components/MeatRackCanvas.vue'
import MargaretCanvas from '~/components/MargaretCanvas.vue'
import OchreCanvas from '~/components/OchreCanvas.vue'

export default {
  components: {
    Navigation,
    MeatRackCanvas,
    MargaretCanvas,
    OchreCanvas
  }
}
</script>

<style>
#full-screen {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: fill;
}
.ra-link {
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  cursor: pointer;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  user-select: none;
}
.ra-link svg {
  width: 40px;
  height: 20px;
  margin-right: 16px;
}
.image-array .image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-array img {
  max-width: 360px;
  display: block;
}
</style>
