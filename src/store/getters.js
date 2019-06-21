export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  // getAllCats: (state) => {
  //   return state.pets.filter((pet) => {
  //     return pet.species === 'cat'
  //   })
  // },
  getAllCats: (state) => {
    return state.cats.length
  },
  // getAllDogs: (state) => {
  //   return state.pets.filter((pet) => {
  //     return pet.species === 'dog'
  //   })
  // }
  getAllDogs: (state) => {
    return state.dogs.length
  },

  getAnimalDetail: (state, species, index) => {
    return state
  }
}