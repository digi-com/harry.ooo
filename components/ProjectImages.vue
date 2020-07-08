<template>
  <div class="image-array-container">
    <div
      v-for="(image, index) in images"
      :key="'image-' + index"
      :class="'image-slot-' + (index + 1)"
      class="image"
    >
      <!-- <img :src="image" /> -->
      <client-only>
        <ProgressiveImage
          :src="image.url"
          :placeholder="image.placeholder"
          :width="image.width"
          :height="image.height"
        />
      </client-only>
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
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(21, auto 173px);
  grid-gap: 1rem;
  margin: 0 3rem 0 3rem;
  margin-bottom: 10rem;
}
.image-array-container .image img {
  max-width: 100%;
  height: auto;
}
.image-array-container .image span {
  font-size: 0.875rem;
  margin-top: 1rem;
  display: block;
}
.image-array-container .image-slot-1 {
  display: block;
  grid-column: 2 / 7;
  grid-row-start: 1;
}
.image-array-container .image-slot-2 {
  display: block;
  grid-column: 6 / 12;
  grid-row-start: 1;
  transform: translateY(7rem);
}
.image-array-container .image-slot-3 {
  display: block;
  grid-column: 8 / 13;
  grid-row-start: 3;
  transform: translateY(6.9375rem);
}
.image-array-container .image-slot-4 {
  display: block;
  grid-column: 1 / 4;
  grid-row-start: 3;
  transform: translateY(-3.5rem);
}
.image-array-container .image-slot-5 {
  display: block;
  grid-column: 9 / 12;
  grid-row-start: 5;
  transform: translateY(6.9375rem);
}
.image-array-container .image-slot-6 {
  display: block;
  grid-column: 10 / 13;
  grid-row-start: 5;
  transform: translateY(13.9375rem);
  z-index: 2;
}
.image-array-container .image-slot-7 {
  display: block;
  grid-column: 2 / 6;
  grid-row-start: 5;
  transform: translateY(-10.375rem);
}
.image-array-container .image-slot-8 {
  display: block;
  grid-column: 1 / 6;
  grid-row-start: 7;
  transform: translateY(-10.1875rem);
}
.image-array-container .image-slot-9 {
  display: block;
  grid-column: 1 / 7;
  grid-row-start: 9;
  transform: translateY(13rem);
}
.image-array-container .image-slot-10 {
  display: block;
  grid-column: 2 / 5;
  grid-row-start: 9;
  transform: translateY(-10rem);
}
.image-array-container .image-slot-11 {
  display: block;
  grid-column: 6 / 12;
  grid-row-start: 9;
  transform: translateY(7.3125rem);
  z-index: 2;
}
.image-array-container .image-slot-12 {
  display: block;
  grid-column: 8 / 12;
  grid-row-start: 7;
  transform: translateY(10.625rem);
}
.image-array-container .image-slot-13 {
  display: block;
  grid-column: 8 / 13;
  grid-row-start: 11;
  transform: translateY(7.5rem);
  z-index: 2;
}
.image-array-container .image-slot-14 {
  display: block;
  grid-column: 1 / 6;
  grid-row-start: 11;
  transform: translateY(13.1875rem);
}
.image-array-container .image-slot-15 {
  display: block;
  grid-column: 9 / 12;
  grid-row-start: 13;
  transform: translateY(7.5rem);
  z-index: 2;
}
.image-array-container .image-slot-16 {
  display: none;
}
.image-array-container .image-slot-17 {
  display: block;
  grid-column: 2 / 6;
  grid-row-start: 13;
  transform: translateY(13.375rem);
}
.image-array-container .image-slot-18 {
  display: block;
  grid-column: 1 / 5;
  grid-row-start: 15;
  transform: translateY(13.5rem);
}
.image-array-container .image-slot-19 {
  display: block;
  grid-column: 7 / 13;
  grid-row-start: 15;
  transform: translateY(4.1875rem);
}
.image-array-container .image-slot-20 {
  display: block;
  grid-column: 2 / 7;
  grid-row-start: 17;
  transform: translateY(6.625rem);
}
.image-array-container .image-slot-21 {
  display: block;
  grid-column: 6 / 12;
  grid-row-start: 17;
  transform: translateY(13.625rem);
}
.image-array-container .image-slot-22 {
  display: block;
  grid-column: 8 / 13;
  grid-row-start: 19;
  transform: translateY(13.8125rem);
}
.image-array-container .image-slot-23 {
  display: block;
  grid-column: 1 / 4;
  grid-row-start: 19;
  transform: translateY(3.25rem);
}
.image-array-container .image-slot-24 {
  display: block;
  grid-column: 2 / 6;
  grid-row-start: 21;
  transform: translateY(-3.625rem);
}

/* Second 24 */

.image-array-container .image-slot-25 {
  display: block;
  grid-column: 1 / 6;
  grid-row-start: 23;
  transform: translateY(-3.4375rem);
}
.image-array-container .image-slot-26 {
  display: block;
  grid-column: 8 / 12;
  grid-row-start: 23;
  transform: translateY(-12.325rem);
}
.image-array-container .image-slot-27 {
  display: block;
  grid-column: 9 / 13;
  grid-row-start: 23;
  transform: translateY(14.25rem);
}
.image-array-container .image-slot-28 {
  display: block;
  grid-column: 2 / 5;
  grid-row-start: 25;
  transform: translateY(-3.5rem);
}
.image-array-container .image-slot-29 {
  display: block;
  grid-column: 9 / 12;
  grid-row-start: 25;
  transform: translateY(10.9375rem);
}
.image-array-container .image-slot-30 {
  display: block;
  grid-column: 10 / 13;
  grid-row-start: 25;
  transform: translateY(16.9375rem);
  z-index: 2;
}
.image-array-container .image-slot-31 {
  display: block;
  grid-column: 2 / 6;
  grid-row-start: 29;
  transform: translateY(-3.0625rem);
}
.image-array-container .image-slot-32 {
  display: block;
  grid-column: 1 / 7;
  grid-row-start: 27;
  transform: translateY(-3.3125rem);
}
.image-array-container .image-slot-33 {
  display: block;
  grid-column: 1 / 7;
  grid-row-start: 31;
  transform: translateY(-2.875rem);
}
.image-array-container .image-slot-34 {
  display: block;
  grid-column: 8 / 12;
  grid-row-start: 29;
  transform: translateY(10.3125rem);
}
.image-array-container .image-slot-35 {
  display: block;
  grid-column: 5 / 11;
  grid-row-start: 31;
  transform: translateY(10.5rem);
  z-index: 2;
}
.image-array-container .image-slot-36 {
  display: block;
  grid-column: 8 / 12;
  grid-row-start: 27;
  transform: translateY(17.125rem);
}
.image-array-container .image-slot-37 {
  display: block;
  grid-column: 9 / 13;
  grid-row-start: 33;
  transform: translateY(10.6875rem);
}
.image-array-container .image-slot-38 {
  display: block;
  grid-column: 1 / 6;
  grid-row-start: 33;
  transform: translateY(10.6875rem);
}
.image-array-container .image-slot-39 {
  display: block;
  grid-column: 9 / 12;
  grid-row-start: 35;
  transform: translateY(7.375rem);
  z-index: 2;
}
.image-array-container .image-slot-40 {
  display: block;
  grid-column: 2 / 7;
  grid-row-start: 35;
  transform: translateY(10.875rem);
}
.image-array-container .image-slot-41 {
  display: block;
  grid-column: 1 / 5;
  grid-row-start: 37;
  transform: translateY(13.5rem);
}
.image-array-container .image-slot-41 {
  display: block;
  grid-column: 10 / 13;
  grid-row-start: 37;
  transform: translateY(0.5rem);
}
.image-array-container .image-slot-42 {
  display: block;
  grid-column: 1 / 5;
  grid-row-start: 37;
  transform: translateY(11.0625rem);
}
.image-array-container .image-slot-43 {
  display: block;
  grid-column: 7 / 12;
  grid-row-start: 39;
  transform: translateY(-2.8125rem);
}
.image-array-container .image-slot-44 {
  display: block;
  grid-column: 8 / 13;
  grid-row-start: 41;
  transform: translateY(-2.625rem);
}
.image-array-container .image-slot-45 {
  display: block;
  grid-column: 1 / 4;
  grid-row-start: 39;
  transform: translateY(11.25rem);
}
.image-array-container .image-slot-46 {
  display: block;
  grid-column: 3 / 6;
  grid-row-start: 39;
  transform: translateY(16.25rem);
}
.image-array-container .image-slot-47 {
  display: block;
  grid-column: 1 / 7;
  grid-row-start: 41;
  transform: translateY(9.375rem);
}
.image-array-container .image-slot-48 {
  display: none;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .image-array-container {
    display: block;
    margin: 0 1rem 0 1rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  .image-array-container .image {
    transform: none;
    margin-bottom: 1rem;
  }
  .image-array-container .image:nth-last-child(2) {
    transform: none;
    margin-bottom: 0;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .image-array-container {
    display: block;
    margin: 0 1.5rem 0 1.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  .image-array-container .image {
    transform: none;
    margin-bottom: 1.5rem;
  }
  .image-array-container .image:nth-last-child(2) {
    transform: none;
    margin-bottom: 0;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .image-array-container {
    display: block;
    margin: 0 1.5rem 0 1.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  .image-array-container .image {
    transform: none;
    margin-bottom: 1.5rem;
  }
  .image-array-container .image:nth-last-child(2) {
    transform: none;
    margin-bottom: 0;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .image-array-container {
    margin: 0 1.5rem 0 1.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .image-array-container {
    margin: 0 1.5rem 0 1.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
  .image-array-container {
    margin: 0 1.5rem 0 1.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
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
