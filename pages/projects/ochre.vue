<template>
  <div id="ochre">
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
    <!-- Absolute Logo -->
    <img
      class="ochre-absolute-logo"
      src="/ochre/ochre-title.png"
      style="max-width: 357px;"
    />
    <div class="feature">
      <h2>Ochre</h2>
      <p class="paragraph">
        Ochre follows a twelve-day journey through Marrakech that comes to a
        close at Atlas Electronic on the outskirts of the city. The film was
        shot on three small format cameras; a Krasnagorsk 3, a Braun Nizo
        Professional and an Eumig Nautica (underwater sequences). The music in
        the film was provided by Tapan, a Serbian band who performed at the
        festival. The sound was designed and edited by Goran Simonoski who is a
        member of the band.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p class="footnotes">
        1. The NYC Downlow (https://thenycdownlow.com/)
        <br />
        2. Block9 (https://www.block9.com/)
        <br />
        3. Glastonbury Festival (https://www.glastonburyfestivals.co.uk/)
        <br />
        4. Resident Advisor (https://www.residentadvisor.net/)
      </p>
    </div>
    <!-- Feature Grid -->
    <div class="feature-grid">
      <img src="/meat-rack/sequence1_1.png" />
      <img src="/meat-rack/sequence1_2.png" />
      <img src="/meat-rack/sequence1_3.png" />
      <img src="/meat-rack/sequence1_4.png" />
      <img src="/meat-rack/sequence1_5.png" />
      <img src="/meat-rack/sequence2_1.png" />
      <img src="/meat-rack/sequence2_2.png" />
      <img src="/meat-rack/sequence3_1.png" />
      <img src="/meat-rack/sequence3_2.png" />
      <img src="/meat-rack/1.png" />
      <img src="/meat-rack/2.png" />
      <img src="/meat-rack/3.png" />
      <img src="/meat-rack/4.png" />
      <img src="/meat-rack/5.png" />
      <img src="/meat-rack/6.png" />
      <img src="/meat-rack/7.png" />
      <img src="/meat-rack/8.png" />
      <img src="/meat-rack/9.png" />
      <img src="/meat-rack/10.png" />
      <img src="/meat-rack/11.png" />
      <img src="/meat-rack/12.png" />
      <img src="/meat-rack/13.png" />
      <img src="/meat-rack/14.png" />
      <img src="/meat-rack/15.png" />
      <img src="/meat-rack/16.png" />
      <img src="/meat-rack/17.png" />
      <img src="/meat-rack/18.png" />
      <img src="/meat-rack/19.png" />
      <img src="/meat-rack/20.png" />
      <img src="/meat-rack/21.png" />
      <img src="/meat-rack/22.png" />
      <img src="/meat-rack/23.png" />
      <img src="/meat-rack/24.png" />
      <img src="/meat-rack/25.png" />
      <img src="/meat-rack/26.png" />
      <img src="/meat-rack/27.png" />
      <img src="/meat-rack/28.png" />
      <img src="/meat-rack/29.png" />
      <img src="/meat-rack/30.png" />
      <img src="/meat-rack/31.png" />
      <img src="/meat-rack/32.png" />
      <img src="/meat-rack/33.png" />
      <img src="/meat-rack/34.png" />
      <img src="/meat-rack/35.png" />
      <img src="/meat-rack/36.png" />
      <img src="/meat-rack/37.png" />
      <img src="/meat-rack/38.png" />
      <img src="/meat-rack/39.png" />
      <img src="/meat-rack/40.png" />
      <img src="/meat-rack/41.png" />
      <img src="/meat-rack/42.png" />
      <img src="/meat-rack/43.png" />
      <img src="/meat-rack/44.png" />
    </div>
    <!-- Vimeo -->
    <div id="film" class="video-container">
      <iframe
        src="https://player.vimeo.com/video/370058381?autoplay=1&loop=1"
        width="960"
        height="540"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <!-- Credits -->
    <div class="credits">
      <div class="column-1">
        <div class="item">
          <span class="credit">Directed by</span>
          <span class="name">Harry Lawson</span>
        </div>
        <div class="item">
          <span class="credit">In collaboration with</span>
          <span class="name">Gideon Berger, Stephen Gallagher</span>
        </div>
        <div class="item">
          <span class="credit">Cinematography</span>
          <span class="name">Saul Pankhurst</span>
        </div>
        <div class="item">
          <span class="credit">Camera</span>
          <span class="name">Saul Pankhurst, Liam Healy</span>
        </div>
      </div>
      <div class="column-2">
        <div class="item">
          <span class="credit">Sound Recording</span>
          <span class="name">Emma Barnaby</span>
        </div>
        <div class="item">
          <span class="credit">Sound Design</span>
          <span class="name">Harry Lawson</span>
        </div>
        <div class="item">
          <span class="credit">Edited by</span>
          <span class="name">Harry Lawson</span>
        </div>
      </div>
      <div class="column-3">
        <div class="item">
          <span class="credit">Special thanks</span>
          <span class="name">Andrew Kötting</span>
        </div>
        <div class="item">
          <span class="credit">Titles</span>
          <span class="name">Dennis McInnes</span>
        </div>
        <div class="item">
          <span class="credit">Commissioned by</span>
          <span class="name">Block9</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OchreCanvas from '~/components/OchreCanvas.vue'

export default {
  components: {
    OchreCanvas
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
#ochre .feature {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 10rem 3rem;
  user-select: none;
  max-width: 1280px;
  margin: 0 auto;
  text-align: left;
}
.project-navigation {
  position: fixed;
  top: 0;
  width: 100vw;
  color: white;
  z-index: 9999;
  padding: 2rem 3rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.feature h2 {
  grid-column: 3 / 7;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 2rem;
}
.feature .paragraph {
  grid-column: 3 / 7;
  line-height: 1.5;
  font-size: 1.25rem;
}
.feature .footnotes {
  grid-column: 3 / 7;
  line-height: 1.5;
  font-size: 1rem;
  margin-top: 2rem;
}
/* Feature grid */
.feature-grid {
  margin-bottom: calc(10.25rem - (100vh - 540px) / 2);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
}
.feature-grid img {
  max-width: 100%;
}
.ochre-absolute-logo {
  position: absolute;
  top: calc(50% - 22px);
  left: calc(50% - 178px);
  z-index: 9999;
  user-select: none;
  pointer-events: none;
}
/* Video container */
.video-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
/* Credits */
.credits {
  text-transform: uppercase;
  font-size: 0.875rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  margin-top: calc(10.25rem - (100vh - 540px) / 2);
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
  line-height: 1.3;
}
.credits .item {
  margin-bottom: 1.25rem;
}
.credits .credit {
  margin-bottom: 0.125rem;
}
.credits .name,
.credits .credit {
  display: block;
}
.credits .column-1 {
  grid-column: 1 / 4;
}
.credits .column-2 {
  grid-column: 4 / 6;
}
.credits .column-3 {
  grid-column: 6 / 8;
}
</style>
