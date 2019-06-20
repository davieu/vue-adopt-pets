<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend!</h1>
    <div class="pet-counter-board"> 
      Dogs: {{ getAllDogs.length }}  <b>|</b>
      Cats: {{ getAllCats.length }}  <b>|</b>
      All Pets: {{ animalsCount }} 
      <br />
      <button @click="togglePetForm" class="btn btn-primary show-form">Add New Pet</button>
    </div>

    <FormSubmit
      v-if="showPetForm"
      :formData="formData"
      :handleSubmit="handleSubmit"
      :showResetBtn="showResetBtn"
    />
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FormSubmit from '@/components/FormSubmit.vue'

export default {
  name: 'home',
  components: {
    FormSubmit
  },
  data() {
    return {
      showResetBtn: true,
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null,
        breed: '',
        gender: null,
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet', 'removePet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name, breed, gender, color, weight, location, notes } = this.formData
      const payload = {
        species: species.toLowerCase(),
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
      this.addPet(payload)
      // reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null,
        breed: '',
        gender: null,
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    }
  }
}
</script>


