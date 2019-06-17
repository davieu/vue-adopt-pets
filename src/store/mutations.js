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
  }
}