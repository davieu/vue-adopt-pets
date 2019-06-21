<template>
  <div>
    <h1>{{animal.name}} ({{ $route.params.species.substring(3,0) }})</h1>

    <div  v-if="editing === false">
      <b-jumbotron>
        <b-row class="pet-detail-stripe">
          <b-col>
            <p><strong>Age</strong>: {{ animal.age }} years old</p>
          </b-col>
          <b-col>
            <p><strong>Breed</strong>: {{ animal.breed }}</p>
          </b-col>
        </b-row>

        <b-row >
          <b-col>
            <p><strong>Gender</strong>: {{ animal.gender }}</p>
          </b-col>
          <b-col>
            <p><strong>Color</strong>: {{ animal.color }}</p>
          </b-col>
        </b-row>

        <b-row class="pet-detail-stripe">
          <b-col>
            <p><strong>Weight</strong>:{{ animal.weight }}</p>
          </b-col>
          <b-col>
            <p><strong>Location</strong>: {{ animal.location }}</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p><strong>Created</strong>: {{ animal.created }}</p>
          </b-col>
          <b-col>
            <p><strong>Modified</strong>: {{ animal.modified }}</p>
          </b-col>
        </b-row>

        <b-row class="pet-detail-stripe">
          <b-col>
            <p><strong>Notes</strong>: {{ animal.notes }}</p>
          </b-col>
          <b-col>
          </b-col>
        </b-row>
          <button v-if="editing === false" @click="toggleEditing">Edit Pet</button>
      </b-jumbotron>
    </div>

    <div v-if="editing">
      <FormSubmit
        :formData="getAnimal"
        :editing="editing"
        :toggleEditing="toggleEditing"
        :leaveEdit="leaveEdit"
      />
    </div>
  </div>
</template>

<script>
let moment = require('moment');
import { mapState, mapActions, mapGetters } from 'vuex'
import FormSubmit from '@/components/FormSubmit.vue'

export default {
  components: {
    FormSubmit
  },
  data() {
    return {
      animal: [],
      editing: false,
      canceled: false,
    }
  },
  methods: {
    ...mapActions([
      'editPet'
    ]),
    toggleEditing() {
      this.editing = true
      this.canceled = false
    },
    leaveEdit() {
      this.editing = false
      this.canceled = true
    }
  },
  computed: {
    ...mapState([
      'cats', 
      'dogs'
    ]),
    ...mapGetters([
      'getAnimalDetail'
    ]),
    getAnimal() {
      console.log(this.getAnimalDetail[this.$route.params.species][this.$route.params.id].name)
      return this.getAnimalDetail[this.$route.params.species][this.$route.params.id]
    }
    // cats() {
    //   return this.$store.state.cats
    // }
  },
  watch: {
    getAnimal() {
      this.animal.modified = moment().format('MM/D/YYYY h:mm:ss A')
    }
  },
  mounted() {
    //this['cats'][0] is what it looks like. To access the state for the specific animal 
    let animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
    this.animal.species = this.$route.params.species[0].toUpperCase() + this.$route.params.species.slice(1)

  }
}
</script>

