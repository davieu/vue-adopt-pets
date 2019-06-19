<template>
  <div>
    <h1>{{ upperCaseSpecies }} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template slot="name" slot-scope="data">
        <button 
          @click="confirmHandleDelete(data.index, species)"
        >
          X
        </button>
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    species: String,
    pets: Array
  },
  computed: {
    upperCaseSpecies() {
      return this.species[0].toUpperCase() + this.species.slice(1)
    }
  },
  methods: {
    ...mapActions([
      'removePet'
    ]),
    // handleDelete(index, species) {
    //   const payload = {index, species}
    //   this.removePet(payload)
    // },
    confirmHandleDelete(index, species) {
      let result = confirm("Are you sure you want to delete?")
      if (result) {
        const payload = {index, species}
        this.removePet(payload)
      }
    }
  }
}
</script>
