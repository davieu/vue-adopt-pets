<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend!</h1>
    Dogs: {{ getAllDogs.length }}  <b>|</b>
    Cats: {{ getAllCats.length }}  <b>|</b>
    All Pets: {{ animalsCount }} 
    <br />
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-1" class="form-group" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" class="form-group" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          :options="['Cats', 'Dogs']"
          v-model="formData.species"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" class="form-group" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          required
          placeholder="Enter age"
          v-model="formData.age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" class="form-group" label="Breed:" label-for="input-4">
        <b-form-input
          id="input-4"
          type="text"
          required
          placeholder="Enter breed"
          v-model="formData.breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" class="form-group" label="Gender:" label-for="input-5">
        <b-form-select
          id="input-5"
          type="text"
          required
          :options="['male', 'female']"
          v-model="formData.gender"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-6" class="form-group" label="Color:" label-for="input-6">
        <b-form-input
          id="input-6"
          type="text"
          required
          placeholder="Enter color"
          v-model="formData.color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" class="form-group" label="Weight:" label-for="input-7">
        <b-form-input
          id="input-7"
          type="number"
          required
          placeholder="Enter weight"
          v-model="formData.weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" class="form-group" label="Location:" label-for="input-8">
        <b-form-input
          id="input-8"
          type="text"
          required
          placeholder="Enter location"
          v-model="formData.location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" class="form-group" label="Notes:" label-for="input-9">
        <b-form-input
          id="input-9"
          type="text"
          required
          placeholder="Enter notes"
          v-model="formData.notes"
        ></b-form-input>
      </b-form-group>
      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
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


