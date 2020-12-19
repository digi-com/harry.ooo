<template>
  <!-- Credits -->
  <div class="credits">
    <div
      v-for="(credit, index) in credits"
      :key="'credit-' + index"
      class="item"
    >
      <span class="credit">{{ credit.credit }}</span>
      <span class="name">{{ credit.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    credits: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
/* Credits */
.credits {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
  grid-row-gap: 5.625vw;
}
.credits .item .credit {
  line-height: 1.875;
  font-size: 0.9375vw;
  text-transform: uppercase;
  letter-spacing: 0.32px;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 0.32;
  display: block;
}
.credits .item .name {
  line-height: 1.875;
  font-size: 0.9375vw;
  text-transform: uppercase;
  letter-spacing: 0.32px;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.credits .item:nth-child(1) {
  grid-column: 2 / 5;
}
.credits .item:nth-child(2) {
  grid-column: 5 / 8;
}
.credits .item:nth-child(3) {
  grid-column: 9 / 12;
}
.credits .item:nth-child(4) {
  grid-column: 2 / 5;
}
.credits .item:nth-child(5) {
  grid-column: 5 / 8;
}
.credits .item:nth-child(6) {
  grid-column: 9 / 12;
}
.credits .item:nth-child(7) {
  grid-column: 2 / 5;
}
.credits .item:nth-child(8) {
  grid-column: 5 / 8;
}
.credits .item:nth-child(9) {
  grid-column: 9 / 12;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .credits {
    width: 100%;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.625vw;
    grid-row-gap: 5.625vw;
  }
  .credits .item {
    grid-column: 1 / 13 !important;
  }
  .credits .item .credit {
    line-height: 1.875;
    font-size: 11px;
    letter-spacing: 0.32px;
  }
  .credits .item .name {
    line-height: 1.875;
    font-size: 11px;
    letter-spacing: 0.32px;
  }
}
@media screen and (min-width: 321px) and (max-width: 767px) {
  .credits {
    width: 100%;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.625vw;
    grid-row-gap: 5.625vw;
  }
  .credits .item {
    grid-column: 1 / 10 !important;
  }
  .credits .item .credit {
    line-height: 1.875;
    font-size: 11px;
    letter-spacing: 0.32px;
  }
  .credits .item .name {
    line-height: 1.875;
    font-size: 11px;
    letter-spacing: 0.32px;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
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
