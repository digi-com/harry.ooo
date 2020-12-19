<template>
  <div id="feature" class="feature">
    <!-- Feature Content -->
    <div class="feature-content">
      <h2>{{ content.title }}</h2>
      <p v-html="content.paragraph" class="paragraph" />
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
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
}
.feature-content {
  grid-column: 5 / 11;
}
.feature h2 {
  font-weight: 400;
  font-family: 'Union';
  font-size: 4.375vw;
  line-height: 1;
  margin-bottom: 4.6875vw;
  letter-spacing: -0.1vw;
}
.feature .paragraph img {
  max-width: 100%;
  margin-bottom: 1.25vw;
  height: 25.78125vw;
}
.feature .paragraph {
  font-family: 'Union';
  line-height: 1.5;
  font-size: 1.40625vw;
  letter-spacing: -0.0125vw;
  max-width: 45.3125vw;
}
.feature .paragraph .caption {
  font-size: 1.09375vw;
  line-height: 1.6;
  display: inline-block;
}

/* Responsive */

@media screen and (min-width: 0px) and (max-width: 320px) {
  .feature {
    padding: 0 1.5rem;
  }
  .feature-content {
    grid-column: 1 / 13;
  }
  .feature h2 {
    font-size: 32px;
    margin-bottom: 48px;
    letter-spacing: -0.6px;
  }
  .feature .paragraph img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  .feature .paragraph {
    font-size: 14px;
    letter-spacing: -0.1px;
    max-width: 100%;
    word-break: break-word;
  }
  .feature .paragraph .caption {
    font-size: 11px;
    line-height: 1.6;
    display: inline-block;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .feature {
    padding: 0 1.5rem;
  }
  .feature-content {
    grid-column: 1 / 13;
  }
  .feature h2 {
    font-size: 36px;
    margin-bottom: 60px;
    letter-spacing: -0.64px;
  }
  .feature .paragraph img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  .feature .paragraph {
    font-size: 15px;
    letter-spacing: -0.12px;
    max-width: 100%;
    word-break: break-word;
  }
  .feature .paragraph .caption {
    font-size: 12px;
    line-height: 1.6;
    display: inline-block;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .feature {
    padding: 0 1.5rem;
  }
  .feature-content {
    grid-column: 1 / 13;
  }
  .feature h2 {
    font-size: 36px;
    margin-bottom: 60px;
    letter-spacing: -0.64px;
  }
  .feature .paragraph img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  .feature .paragraph {
    font-size: 16px;
    letter-spacing: -0.12px;
    max-width: 100%;
    word-break: break-word;
  }
  .feature .paragraph .caption {
    font-size: 13px;
    line-height: 1.6;
    display: inline-block;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .feature {
    padding: 0 1.5rem;
  }
  .feature-content {
    grid-column: 1 / 13;
  }
  .feature h2 {
    font-size: 36px;
    margin-bottom: 60px;
    letter-spacing: -0.64px;
  }
  .feature .paragraph img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  .feature .paragraph {
    font-size: 16px;
    letter-spacing: -0.12px;
    max-width: 100%;
    word-break: break-word;
  }
  .feature .paragraph .caption {
    font-size: 13px;
    line-height: 1.6;
    display: inline-block;
  }
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
