<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species.substring(3,0) }})</h1>

    <div class="pet-detail" v-if="editing === false">
      <p>Age: {{ animal.age }} years old</p>
      <p>Breed: {{ animal.breed }}</p>
      <p>Gender: {{ animal.gender }}</p>
      <p>Age: {{ animal.age }}</p>
      <p>Color: {{ animal.color }}</p>
      <p>Weight: {{ animal.weight }}</p>
      <p>Location: {{ animal.location }}</p>
      <p>Notes: {{ animal.notes }}</p>
    </div>

  <div v-if="editing">
    <FormSubmit
      :formData="animal"
      :handleSubmit="handleSubmit"
    />
  </div>
    <button @click="toggleEditing">Edit Pet</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FormSubmit from '@/components/FormSubmit.vue'

export default {
  components: {
    FormSubmit
  },
  data() {
    return {
      animal: [],
      editing: false
    }
  },
  methods: {
    ...mapActions([
      'editPet'
    ]),
    toggleEditing() {
      this.editing = !this.editing
    },
    handleSubmit() {
      const { species, age, name, breed, gender, color, weight, location, notes } = this.animal
      const payload = {
        species: species.toLowerCase(),
        index: this.$route.params.id,
        pet: {
          '-': '',
          name, 
          age,
          species: species.toLowerCase().substring(0,3),
          breed,
          gender,
          color,
          weight,
          location,
          notes
        }
      }
      this.editPet(payload)
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
    this.animal.species = this.$route.params.species[0].toUpperCase() + this.$route.params.species.slice(1)
  }
}
</script>

