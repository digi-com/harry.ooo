<template>
  <div id="feature" class="feature">
    <!-- Feature Content -->
    <div class="feature-content">
      <h2>{{ content.title }}</h2>
      <p v-html="content.paragraph" class="paragraph" />
      <div class="footnotes">
        <p
          v-for="(footnote, index) in content.footnotes"
          :key="'footnote-' + index"
        >
          {{ footnote }}
        </p>
      </div>
    </div>
    <!-- Feature Images -->
    <div class="feature-images">
      <div
        v-for="(row, index) in content.featureImages"
        :key="'row-' + index"
        class="row"
      >
        <img :src="row.imageOne" class="image-1" />
        <img :src="row.imageTwo" class="image-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.feature {
  padding-top: 10rem;
  margin: 0 3rem;
  text-align: left;
  user-select: none;
  position: relative;
  display: flex;
  align-items: flex-start;
}
.feature-content {
  flex: 0 0 47rem;
  max-width: 47rem;
}
.feature-images {
  display: block;
  flex: 0 0 calc(27rem - 4rem);
  max-width: calc(27rem - 4rem);
  margin-left: 4rem;
}

.feature-images .row {
  margin-bottom: 4rem;
  width: 100%;
  height: calc(9.25rem + 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.feature-images .row .image-1 {
  position: absolute;
  max-width: 50%;
  transform: translate(-2rem, -2rem);
}
.feature-images .row .image-2 {
  position: absolute;
  max-width: 50%;
  transform: translate(2rem, 2rem);
}

.feature h2 {
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 3.75rem;
  letter-spacing: -1px;
}
.feature .paragraph img {
  max-width: 100%;
  margin-bottom: 1rem;
}
.feature .paragraph {
  font-family: 'Suisse Works';
  line-height: 1.5;
  font-size: 1.5rem;
  letter-spacing: -0.125px;
}
.feature .paragraph .caption {
  font-size: 1rem;
  line-height: 1.5;
  display: inline-block;
}
.daylight .feature .paragraph {
  -webkit-font-smoothing: subpixel-antialiased;
}
.feature .footnotes {
  line-height: 1.5;
  font-size: 1rem;
  margin-top: 5rem;
  margin-bottom: 12.5rem;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .feature {
    display: block;
    margin: 0 1.5rem;
  }
  .feature h2 {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 3.75rem;
    letter-spacing: -0.5px;
  }
  .feature .paragraph {
    line-height: 1.4;
    font-size: 1.125rem;
    letter-spacing: -0.1px;
  }
  .feature .paragraph .caption {
    font-size: 0.9375rem;
  }
  .feature .footnotes {
    margin-bottom: 6rem;
    font-size: 0.875rem;
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
