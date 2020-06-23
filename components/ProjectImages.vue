<template>
  <div class="image-array-container">
    <div
      v-for="(image, index) in images"
      :key="'image-' + index"
      :class="'image-slot-' + (index + 1)"
      class="image"
    >
      <img :src="image" />
      <!-- <span>Caption</span> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.image-array-container {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-gap: 1rem;
  margin: 0 3rem 0 3rem;
}
.image-array-container .image {
  margin-bottom: 12.5rem;
}
.image-array-container .image img {
  max-width: 100%;
}
.image-array-container .image span {
  font-size: 0.875rem;
  margin-top: 1rem;
  display: block;
}
.image-array-container .image-slot-1 {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
}
.image-array-container .image-slot-2 {
  grid-column: 7 / 9;
  grid-row: 1 / 2;
}
.image-array-container .image-slot-3 {
  grid-column: 3 / 7;
  grid-row: 2 / 3;
}
.image-array-container .image-slot-4 {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
}
.image-array-container .image-slot-5 {
  grid-column: 7 / 9;
  grid-row: 3 / 4;
}
.image-array-container .image-slot-6 {
  grid-column: 2 / 4;
  grid-row: 4 / 5;
}
.image-array-container .image-slot-7 {
  grid-column: 7 / 9;
  grid-row: 4 / 5;
}
.image-array-container .image-slot-8 {
  grid-column: 1 / 4;
  grid-row: 5 / 6;
}
.image-array-container .image-slot-9 {
  grid-column: 6 / 8;
  grid-row: 5 / 6;
}
.image-array-container .image-slot-10 {
  grid-column: 3 / 7;
  grid-row: 6 / 7;
}
.image-array-container .image-slot-11 {
  grid-column: 1 / 3;
  grid-row: 7 / 8;
}
.image-array-container .image-slot-12 {
  grid-column: 7 / 9;
  grid-row: 7 / 8;
}
.image-array-container .image-slot-13 {
  grid-column: 2 / 5;
  grid-row: 8 / 9;
}
.image-array-container .image-slot-14 {
  grid-column: 6 / 8;
  grid-row: 8 / 9;
}
.image-array-container .image-slot-15 {
  grid-column: 2 / 4;
  grid-row: 9 / 10;
}
.image-array-container .image-slot-16 {
  grid-column: 7 / 9;
  grid-row: 9 / 10;
}
.image-array-container .image-slot-17 {
  grid-column: 1 / 4;
  grid-row: 10 / 11;
}
.image-array-container .image-slot-18 {
  grid-column: 6 / 8;
  grid-row: 10 / 11;
}
.image-array-container .image-slot-19 {
  grid-column: 3 / 7;
  grid-row: 11 / 12;
}
.image-array-container .image-slot-20 {
  grid-column: 1 / 3;
  grid-row: 12 / 13;
}
.image-array-container .image-slot-21 {
  grid-column: 4 / 6;
  grid-row: 12 / 13;
}
.image-array-container .image-slot-22 {
  grid-column: 7 / 9;
  grid-row: 12 / 13;
}
.image-array-container .image-slot-23 {
  grid-column: 2 / 5;
  grid-row: 13 / 14;
}
.image-array-container .image-slot-24 {
  grid-column: 6 / 8;
  grid-row: 13 / 14;
}
/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .image-array-container {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 1rem;
    margin: 0 1.5rem 0 1.5rem;
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
