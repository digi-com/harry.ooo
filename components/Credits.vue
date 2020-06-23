<template>
  <!-- Credits -->
  <div class="credits">
    <div class="column-1">
      <div
        v-for="(credit, index) in credits"
        :key="'credit-' + index"
        class="item"
      >
        <span class="credit">{{ credit.credit }}</span>
        <span class="name">{{ credit.name }}</span>
      </div>
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
  font-size: 1rem;
  line-height: 1.3;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 12.5rem;
  border-top: 2px solid white;
}
.daylight .credits {
  border-top: 2px solid black;
}
.credits .item {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}
.daylight .credits .item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.credits .credit {
  grid-column: 1 / 3;
  opacity: 0.48;
}
.credits .name {
  grid-column: 3 / 9;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .credits {
    font-size: 0.875rem;
    line-height: 1.3;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 12.5rem;
    border-top: 2px solid white;
  }
  .credits .credit {
    grid-column: 1 / 5;
    opacity: 0.48;
  }
  .credits .name {
    grid-column: 5 / 9;
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
