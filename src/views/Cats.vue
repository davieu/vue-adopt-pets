<template>
  <div>
    <h1> Cats for Adoption</h1>
    <b-table striped hover :items="cats"></b-table>
  </div>
</template>

<script>
import cats from '@/data/cats.js'
export default {
  data () {
    return {
      cats
    }
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
