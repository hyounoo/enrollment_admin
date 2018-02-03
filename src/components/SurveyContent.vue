<template>    
  <div v-if="!$store.state.loading">
    <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
  </div>
  <div v-else id="surveyContent" class="flex xs11">

  </div>  
</template>

<script>
export default {

}
</script>

<style>

</style>
