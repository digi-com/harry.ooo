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
</style>
