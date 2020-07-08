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
          <a :href="footnote.link" target="_blank" rel="noopener">
            <span class="footnote-number">{{ index + 1 }}</span>
            {{ footnote.title }}
            <span class="footnote-link">({{ footnote.link }})</span>
          </a>
        </p>
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
  text-align: left;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  padding: 10rem 3rem 0 3rem;
}
.feature-content {
  grid-column: 3 / 11;
}
.feature-images {
  display: none;
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
  font-size: 1.0625rem;
  line-height: 1.6;
  display: inline-block;
}
.daylight .feature .paragraph {
  -webkit-font-smoothing: subpixel-antialiased;
}
.feature .footnotes {
  line-height: 1.5;
  font-size: 1.3125rem;
  letter-spacing: -0.08px;
  margin-top: 3.75rem;
}

.feature .footnotes p {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.feature .footnotes p a {
  text-decoration: none;
}

.feature .footnote-number {
  border: 2px solid black;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 99999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3125rem;
  margin-right: 0.75rem;
  text-decoration: none;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .feature {
    display: block;
    padding: 8rem 1rem 0 1rem;
  }
  .feature h2 {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 3rem;
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
    margin-bottom: 8rem;
    font-size: 1.125rem;
    margin-top: 3.25rem;
  }
  .feature .footnotes .footnote-link {
    display: none;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .feature {
    display: block;
    padding: 8rem 1.5rem 0 1.5rem;
  }
  .feature h2 {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.5px;
  }
  .feature .paragraph {
    font-size: 0.75rem;
    letter-spacing: -0.05px;
    margin-bottom: 3rem;
  }
  .feature .paragraph .caption {
    font-size: 0.75rem;
    letter-spacing: -0.12px;
    line-height: 1.48;
  }
  .feature .footnotes {
    margin-bottom: 4rem;
    font-size: 0.875rem;
    margin-top: 3rem;
  }
  .feature .footnotes p {
    margin-bottom: 0.5rem;
  }
  .feature .footnotes .footnote-link {
    display: none;
  }
  .feature .footnote-number {
    border: 1px solid black;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 99999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    text-decoration: none;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .feature {
    display: block;
    padding: 8rem 1.5rem 0 1.5rem;
  }
  .feature h2 {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.5px;
  }
  .feature .paragraph {
    font-size: 0.8125rem;
    letter-spacing: -0.18px;
    margin-bottom: 3rem;
  }
  .feature .paragraph .caption {
    font-size: 0.8125rem;
    letter-spacing: -0.16px;
    line-height: 1.48;
  }
  .feature .footnotes {
    margin-bottom: 4rem;
    font-size: 0.875rem;
    margin-top: 3rem;
  }
  .feature .footnotes p {
    margin-bottom: 0.5rem;
  }
  .feature .footnotes .footnote-link {
    display: none;
  }
  .feature .footnote-number {
    border: 1px solid black;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 99999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    margin-right: 0.5rem;
    text-decoration: none;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .feature {
    display: block;
    padding: 8rem 1.5rem 0 1.5rem;
  }
  .feature h2 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.64px;
  }
  .feature .paragraph {
    font-size: 1.375rem;
    letter-spacing: -0.18px;
    margin-bottom: 3rem;
  }
  .feature .paragraph .caption {
    font-size: 1rem;
    letter-spacing: -0.16px;
    line-height: 1.5;
  }
  .feature .footnotes .footnote-link {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .feature {
    display: block;
    padding: 8rem 1.5rem 0 1.5rem;
  }
  .feature h2 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.64px;
  }
  .feature .paragraph {
    font-size: 1.375rem;
    letter-spacing: -0.18px;
    margin-bottom: 3rem;
  }
  .feature .paragraph .caption {
    font-size: 1rem;
    letter-spacing: -0.16px;
    line-height: 1.5;
  }
  .feature .footnotes .footnote-link {
    display: none;
  }
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
