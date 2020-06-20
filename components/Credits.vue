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
</style>
