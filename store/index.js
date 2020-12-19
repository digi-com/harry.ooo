export const state = () => ({
  meatRack: false,
  mundial: false,
  margaret: false,
  ochre: false
})

export const mutations = {
  toggleMeatRack(state) {
    state.meatRack = !state.meatRack
  },
  toggleMundial(state) {
    state.mundial = !state.mundial
  },
  toggleMargaret(state) {
    state.margaret = !state.margaret
  },
  toggleOchre(state) {
    state.ochre = !state.ochre
  }
}
