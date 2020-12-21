<template>
  <a
    :href="link"
    @mouseenter="pointerEnter()"
    @mouseleave="pointerExit()"
    @click="pointerExit()"
    target="_blank"
    rel="noopener"
    class="press-row"
  >
    <div style="display: flex; align-items: center; margin-bottom: 0;">
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
        {{ title }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    pointerEnter() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.add('view-project')
      }
    },
    pointerExit() {
      if (document.querySelector('div#cursor')) {
        document.querySelector('div#cursor').classList.remove('view-project')
      }
    }
  }
}
</script>

<style>
.press-row:hover .circle-button {
  background: black;
}
.press-row:hover .circle-button svg path {
  fill: white;
}
</style>
