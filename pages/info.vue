<template>
  <div>
    <PageLoader />
    <vue100vh class="page-container">
      <div id="scroll-container" class="scroll-container">
        <Navigation :info="true" />
        <div class="spacer" />
        <div class="info-container">
          <div class="info-content">
            <p class="content">
              Harry Lawson (b. South Shields, 1994) is an artist and documentary
              filmmaker based in London. His work is split between archival
              research, experimental documentary and image-making. He
              sporadically programmes and hosts documentary film screenings,
              exhibiting experimental non-fiction work in London and elsewhere.
            </p>
            <p class="content">
              Harry holds a BA in English Literature from King's College London
              and an MA in Ethnographic and Documentary Film from University
              College London. He has worked with various organisations and
              brands, including Block9, Institute for Ageing, The FA, Umbro,
              Puma and Mundial. His films have been featured in places like The
              Observer, Crack Magazine, Resident Advisor, Mixmag, Hypebeast, and
              Attack Magazine. In February 2020, he was commissioned by Wellcome
              Trust to take part in an exhibition called Testing Situations.
            </p>
            <!-- Press -->
            <div class="press">
              <div class="nav-button title">Press</div>
              <a
                href="https://www.residentadvisor.net/news/72903"
                target="_blank"
                rel="noopener"
                class="press-row"
              >
                <div
                  style="display: flex; align-items: center; margin-bottom: 0;"
                >
                  <div class="circle-button" style="margin-right: 1.875vw;">
                    <svg
                      class="arrow-icon"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8986865 14.91348017l-1.99999998 7e-8-.00019898-11.4199735L1.80418111 20.58781319.38996754 19.17359962 17.47791002 2.08565715l-11.40689556.00015104V.08580813l12.82818019.00015104-.00050813-.00090609.57962858.00019898.00353554-.00353553.00353553.00353553 1.41330033-.0001989.00075505.00075504v1.99999991l-.00075505 12.82767206z"
                        fill="#000000"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </div>
                  <div class="press-item">
                    RA News: Watch Meat Rack, a short film tribute to
                    Glastonbury's NYC Downlow — via Resident Advisor
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="spacer" />
        <Footer />
      </div>
    </vue100vh>
  </div>
</template>

<script>
import vue100vh from 'vue-100vh'

// Import locomotive.js mixin
import locomotive from '~/mixins/locomotive.js'

export default {
  components: {
    vue100vh
  },
  mixins: [locomotive]
}
</script>

<style>
.info-container {
  width: 100%;
}
.info-container .info-content {
  width: 100%;
  padding: 0 2.5vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.625vw;
}
.info-container .content {
  font-size: 2.03125vw;
  letter-spacing: -0.02vw;
  line-height: 1.5;
  text-indent: 3vw;
  grid-column: 4 / 11;
  margin-right: 1vw;
  margin-bottom: 7.5vw;
}
.info-container .press,
.info-container .contact {
  grid-column: 4 / 11;
}
.info-container .content:first-child {
  margin-bottom: 3.125vw;
}
.info-container .press .title {
  margin-bottom: 3.75vw;
}
.info-container .press-row {
  font-size: 2.03125vw;
  letter-spacing: -0.02vw;
  line-height: 1.5;
  text-decoration: none;
  display: block;
  margin-bottom: 1.875vw;
}
.info-container .press-row:last-child {
  margin-bottom: 0;
}
.info-container .info-content {
  padding-top: 0;
  padding-bottom: 0;
}
.info-container .contact-container {
  margin-top: 3rem;
}
.info-container .contact-row {
  font-size: 2.03125vw;
  letter-spacing: 0.01875vw;
  text-decoration: none;
  display: block;
}
.info-container .contact-row:first-child {
  margin-bottom: 1.25vw;
}
.info-container .contact-item {
  display: flex;
  align-items: center;
}
.info-container .contact-item span {
  margin-left: 1.25vw;
}
.info-container .arrow-icon {
  width: 1.640625vw;
  height: 1.640625vw;
  min-width: 21px;
  min-height: 21px;
}

/* Responsive */
@media screen and (min-width: 0px) and (max-width: 320px) {
  .info-container .info-content {
    padding: 0 1.5rem;
  }
  .info-container .content {
    font-size: 16px;
    letter-spacing: -0.12px;
    text-indent: 22px;
    grid-column: 1 / 13;
    margin-right: 0;
  }
  .info-container .content {
    margin-bottom: 64px;
  }
  .info-container .content:first-child {
    margin-bottom: 24px;
  }
  .info-container .press {
    grid-column: 1 / 13;
  }
  .info-container .press .title {
    margin-bottom: 40px;
  }
  .info-container .press-row {
    margin-bottom: 24px;
  }
  .info-container .press-row:last-child {
    margin-bottom: 0;
  }
  .info-container .press-row .circle-button {
    display: none;
  }
  .info-container .press-item {
    font-size: 16px;
    letter-spacing: -0.12px;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .info-container .info-content {
    padding: 0 1.5rem;
  }
  .info-container .content {
    font-size: 18px;
    letter-spacing: -0.12px;
    text-indent: 22px;
    grid-column: 1 / 13;
    margin-right: 0;
  }
  .info-container .content {
    margin-bottom: 64px;
  }
  .info-container .content:first-child {
    margin-bottom: 24px;
  }
  .info-container .press {
    grid-column: 1 / 13;
  }
  .info-container .press .title {
    margin-bottom: 40px;
  }
  .info-container .press-row {
    margin-bottom: 24px;
  }
  .info-container .press-row:last-child {
    margin-bottom: 0;
  }
  .info-container .press-row .circle-button {
    display: none;
  }
  .info-container .press-item {
    font-size: 18px;
    letter-spacing: -0.12px;
  }
}
@media screen and (min-width: 376px) and (max-width: 480px) {
  .info-container .info-content {
    padding: 0 1.5rem;
  }
  .info-container .content {
    font-size: 20px;
    letter-spacing: -0.16px;
    text-indent: 22px;
    grid-column: 1 / 13;
    margin-right: 0;
  }
  .info-container .content {
    margin-bottom: 64px;
  }
  .info-container .content:first-child {
    margin-bottom: 28px;
  }
  .info-container .press {
    grid-column: 1 / 13;
  }
  .info-container .press .title {
    margin-bottom: 44px;
  }
  .info-container .press-row {
    margin-bottom: 28px;
  }
  .info-container .press-row:last-child {
    margin-bottom: 0;
  }
  .info-container .press-row .circle-button {
    display: none;
  }
  .info-container .press-item {
    font-size: 20px;
    letter-spacing: -0.16px;
  }
}
@media screen and (min-width: 481px) and (max-width: 767px) {
  .info-container .info-content {
    padding: 0 1.5rem;
  }
  .info-container .content {
    font-size: 25px;
    letter-spacing: -0.2px;
    text-indent: 36px;
    grid-column: 1 / 13;
    margin-right: 0;
  }
  .info-container .content {
    margin-bottom: 80px;
  }
  .info-container .content:first-child {
    margin-bottom: 32px;
  }
  .info-container .press {
    grid-column: 1 / 13;
  }
  .info-container .press .title {
    margin-bottom: 48px;
  }
  .info-container .press-row {
    margin-bottom: 32px;
  }
  .info-container .press-row:last-child {
    margin-bottom: 0;
  }
  .info-container .press-row .circle-button {
    display: none;
  }
  .info-container .press-item {
    font-size: 25px;
    letter-spacing: -0.2px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .info-container .press-row .circle-button {
    display: none;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
  .info-container .press-row .circle-button {
    display: none;
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
