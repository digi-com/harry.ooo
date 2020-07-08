<template>
  <!-- Credits -->
  <div class="credits">
    <!-- <h2>Credits</h2> -->
    <div class="credits-container">
      <div
        v-for="(credit, index) in credits"
        :key="'credit-' + index"
        :style="{ gridRowStart: index + 1 }"
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
  width: 100%;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  padding-bottom: 10.5rem;
  margin-top: 6rem;
}
.credits h2 {
  font-weight: 400;
  font-size: 2.75rem;
  line-height: 1;
  margin-bottom: 2.875rem;
  letter-spacing: -0.64px;
  grid-column: 3 / 8;
  grid-row: 1 / 2;
}
.credits-container {
  grid-column: 3 / 11;
}
.credits .item:first-child {
  border-top: 2px solid black;
  /* padding-top: 1.25rem; */
}
.credits .item {
  line-height: 1.75;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.credits .credit {
  width: 30%;
  opacity: 0.56;
}
.credits .name {
  width: 70%;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .credits {
    display: block;
    padding: 0 1rem;
  }
  .credits .item {
    font-size: 0.875rem;
  }
  .credits .credit {
    width: 50%;
  }
  .credits .name {
    width: 50%;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .credits {
    display: block;
    padding: 0 1.5rem;
  }
  .credits .item {
    font-size: 0.875rem;
  }
  .credits .credit {
    width: 50%;
  }
  .credits .name {
    width: 50%;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .credits {
    display: block;
    padding: 0 1.5rem;
    /* margin-top: 4rem; */
  }
  .credits .item {
    font-size: 0.875rem;
  }
  .credits .credit {
    width: 50%;
  }
  .credits .name {
    width: 50%;
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
