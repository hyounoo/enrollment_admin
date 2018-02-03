<template>    
  <div v-if="$store.state.loading">
    <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
  </div>
  <div v-else id="surveyPlan" class="flex xs11">
      <v-layout row wrap class="my-5" elevation-9 ml-3 mr-3 pa-4>      
          <v-flex xs12 sm6 pl-2 pr-2>
            <div id="plantree" class="col-md-12"></div>            
          </v-flex>
          <v-flex xs12 sm6 pl-2 pr-2>
              table
          </v-flex>
      </v-layout>
  </div>  
</template>

<script>
export default {

}
</script>

<style>
#surveyPlan{
  margin: 0 auto;
}
</style>
