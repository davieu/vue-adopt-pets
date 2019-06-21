<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend!</h1>
    <div class="pet-counter-board"> 
      Dogs: {{ getAllDogs }}  <b>|</b>
      Cats: {{ getAllCats }}  <b>|</b>
      All Pets: {{ animalsCount }} 
      <br />
      <button @click="togglePetForm" class="btn btn-primary show-form">Add New Pet</button>
    </div>
  
    <FormSubmit
      v-if="showPetForm"
      :formData="formData"
      :handleSubmit="handleSubmit"
      :onHomePage="onHomePage"
    />
    
  </div>
</template>

<script>
let moment = require('moment');
import { mapActions, mapGetters } from 'vuex'
import FormSubmit from '@/components/FormSubmit.vue'

export default {
  name: 'home',
  components: {
    FormSubmit
  },
  data() {
    return {
      onHomePage: true,
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
        notes: '',
        created: moment().format('MM/D/YYYY h:mm:ss A'),
        modified: '-'
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
      const { species, age, name, breed, gender, color, weight, location, notes, created, modified } = this.formData
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
          notes,
          created,
          modified
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
        notes: '',
        created: moment().format('MM/D/YYYY h:mm:ss A'),
        modified: '-'
      }
    }
  }
}
</script>


