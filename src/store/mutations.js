export default {
  appendPet: (state, { species, pet}) => {
    //appends to the pets state which is all animals
    if (species === 'cats') {
      state.pets.splice(state[species].length, 0, pet)
    } else if (species === 'dogs') {
      state.pets.push(pet)
    }
    //appends it to the species specific in state
    state[species].push(pet)
  },
  deletePet: (state, {index, species}) => {

    if (species === 'cats') {
      let copyPetsState = [...state.pets]
      copyPetsState.splice(index, 1)
      state.pets = copyPetsState
    } else if (species === 'dogs') {
      let copyPetsState = [...state.pets]
      copyPetsState.splice([index + state.cats.length], 1)
      state.pets = copyPetsState
    }
    let copyArray = [...state[species]]
    copyArray.splice(index, 1)
    state[species] = copyArray
  }
}