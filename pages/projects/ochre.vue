<template>
  <div>
    <div class="feature">
      <h2>Ochre</h2>
      <p>
        Ochre follows a twelve-day journey through Marrakech that comes to a
        close at Atlas Electronic on the outskirts of the city. The film was
        shot on three small format cameras; a Krasnagorsk 3, a Braun Nizo
        Professional and an Eumig Nautica (underwater sequences). The music in
        the film was provided by Tapan, a Serbian band who performed at the
        festival. The sound was designed and edited by Goran Simonoski who is a
        member of the band.
      </p>
    </div>
    <!-- <OchreCanvas
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
    /> -->
    <!-- <OchreImages /> -->
  </div>
</template>

<script>
// import OchreCanvas from '~/components/OchreCanvas.vue'
// import OchreImages from '~/components/OchreImages.vue'

export default {
  components: {
    // OchreCanvas
    // OchreImages
  },
  head() {
    return {
      htmlAttrs: {
        class: 'daylight'
      },
      bodyAttrs: {
        class: 'daylight'
      }
    }
  }
}
</script>

<style>
.feature {
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
