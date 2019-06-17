export default {
  // addPet: (context, pet) => {
  //   context.commit('appendPet', pet)
  // }
  //Both are the same bottom is the standard. {commit} is from vuex
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}