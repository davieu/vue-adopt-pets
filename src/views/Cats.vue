<template>
  <div>
    <PetTable
      species="cats"
      :pets="cats"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

<style>
  /* .rowgroup {
    color: red;
  } */
  /* hr {
    margin-bottom: -1px;
    border-width: 5px;
  } */
</style>
