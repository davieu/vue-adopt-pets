<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species.substring(3,0) }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return{
      animal: []
    }
  },
  computed: {
    ...mapState([
      'cats', 
      'dogs'
    ])
    // cats() {
    //   return this.$store.state.cats
    // }
  },
  mounted() {
    //this['cats'][0] is what it looks like. To access the state for the specific animal 
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>

