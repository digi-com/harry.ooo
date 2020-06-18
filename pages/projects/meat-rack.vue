<template>
  <div id="meat-rack">
    <!-- Project Navigation -->
    <nav class="project-navigation">
      <div @click="goBack()" class="back-link">
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: translate(0, 2px) rotate(180deg); position: absolute;"
        >
          <path
            d="M12.34711.84l5.65685 5.656854v.000253l-5.65685 5.656854-.70711-.707107L16.087 6.999 0 7V6l16.092-.001-4.452-4.451893L12.34711.84z"
            fill="#FFFFFF"
            fill-rule="nonzero"
          />
        </svg>
        <span style="margin-left: calc(18px + 12px);">Back</span>
      </div>
      <div
        v-scroll-to="{
          el: '#film',
          duration: 1500,
          easing: [0.0, 0.0, 0.58, 1.0],
          cancelable: true,
          x: false,
          y: true
        }"
        style="padding-right: calc(13px + 7px);"
      >
        Watch Trailer
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: translate(8px, 1px); position: absolute;"
        >
          <path
            d="M12.163962 9.34711l-5.656854 5.65685h-.000253L.850001 9.34711 1.557108 8.64l4.447854 4.447L6.003962 0h1l.001 13.092 4.451893-4.452.707107.70711z"
            fill="#FFFFFF"
            fill-rule="nonzero"
          />
        </svg>
      </div>
    </nav>
    <!-- Scroll -->
    <div
      v-scroll-to="{
        el: '#feature',
        duration: 1000,
        easing: [0.0, 0.0, 0.58, 1.0],
        cancelable: true,
        x: false,
        y: true
      }"
      style="position: absolute; bottom: 0; left: calc(50% - 55px); z-index: 99; padding: 2rem 3rem; font-size: 0.875rem;"
    >
      <svg
        width="13"
        height="15"
        viewBox="0 0 13 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.163962 9.34711l-5.656854 5.65685h-.000253L.850001 9.34711 1.557108 8.64l4.447854 4.447L6.003962 0h1l.001 13.092 4.451893-4.452.707107.70711z"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
      </svg>
    </div>
    <!-- Absolute Logo -->
    <img
      class="absolute-logo"
      src="/meat-rack/meat-rack-title.png"
      style="max-width: 360px;"
    />
    <!-- Canvas -->
    <MeatRackCanvas
      :images="[
        '/meat-rack/1.png',
        '/meat-rack/2.png',
        '/meat-rack/3.png',
        '/meat-rack/4.png',
        '/meat-rack/5.png',
        '/meat-rack/6.png',
        '/meat-rack/7.png',
        '/meat-rack/8.png',
        '/meat-rack/9.png',
        '/meat-rack/12.png',
        '/meat-rack/13.png',
        '/meat-rack/14.png',
        '/meat-rack/15.png',
        '/meat-rack/16.png',
        '/meat-rack/17.png',
        '/meat-rack/18.png',
        '/meat-rack/19.png',
        '/meat-rack/22.png',
        '/meat-rack/24.png',
        '/meat-rack/25.png',
        '/meat-rack/26.png',
        '/meat-rack/27.png',
        '/meat-rack/28.png',
        '/meat-rack/29.png',
        '/meat-rack/31.png',
        '/meat-rack/33.png',
        '/meat-rack/34.png',
        '/meat-rack/35.png',
        '/meat-rack/36.png',
        '/meat-rack/37.png',
        '/meat-rack/38.png'
      ]"
    />
    <div id="feature" class="feature">
      <h2>Meat Rack (2020)</h2>
      <p class="paragraph">
        The NYC Downlow exists in the space where art and music collide, an
        ever-changing artwork / club created to fill a gaping void in the
        British music and festival scenes. Temporary, counter-cultural, in-your
        face, and unapologetically LGBTQ-specific, The Downlow is a queer
        phenomenon with a worldwide cult following.
        <br /><br />
        The Downlow first appeared at Glastonbury Festival in 2007 as a film-set
        replica of a dilapidated 1970s Lower East Side tenement with an X-rated
        gay nightclub inside. Having since evolved into a warehouse at the heart
        of the Meatpacking District in New York City (circa 1982), The Downlow
        celebrated their 10th Anniversary at Glastonbury in 2017. MEAT RACK
        works as a document of the celebrations, featuring interviews
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br /><br />
        Filmed at Glastonbury Festival in 2017. Exhibited online via Resident
        Advisor and Block9 (15th → 25th June 2020).
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
        src="https://player.vimeo.com/video/429754603?autoplay=1&loop=1"
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
// import MeatRackImages from '~/components/MeatRackImages.vue'
import MeatRackCanvas from '~/components/MeatRackCanvas.vue'
// import Footer from '~/components/Footer.vue'

export default {
  components: {
    // MeatRackImages,
    MeatRackCanvas
    // Footer
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style>
#meat-rack .feature {
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
.absolute-logo {
  position: absolute;
  top: calc(50% - 144px);
  left: calc(50% - 180px);
  z-index: 9999;
  user-select: none;
  pointer-events: none;
}
.feature h2 {
  grid-column: 3 / 7;
  font-weight: 400;
  font-size: 3rem;
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
