<template>
  <div class="home">
    <h1>Adopt a new best friend!</h1>
    Dogs: {{ getAllDogs.length }}  <b>|</b>
    Cats: {{ getAllCats.length }}  <b>|</b>
    All Pets: {{ animalsCount }}  <b>|</b>
    <br />
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          :options="['Cats', 'Dogs']"
          v-model="formData.species"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          required
          placeholder="Enter age"
          v-model="formData.age"
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
        species: null
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
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name } = this.formData
      const payload = {
        species: species.toLowerCase(),
        pet: {
          name, 
          age,
          species: species.toLowerCase().substring(0,3)
        }
      }
      this.addPet(payload)
      // reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
