<template>    
  <div v-if="$store.state.loading">
    <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
  </div>
  <div v-else id="surveyPlan" class="flex xs11">
      <v-layout row wrap class="my-5" elevation-9 ml-3 mr-3 pa-4>      
          <v-flex xs12 sm6 pl-2 pr-2>
            <!-- <div id="plantree" class="col-md-12"></div>             -->
            <v-tree></v-tree>
          </v-flex>
          <v-flex xs12 sm6 pl-2 pr-2>
              table
          </v-flex>
      </v-layout>
  </div>  
</template>

<script>
import VTree from './v-tree/VTree';

export default {
  data() {
    return {
      valid: true,
      mockup: [{ "id": 100685, "text": "Child", "type": "FMM_CHILD", "children": [{ "id": 100730, "text": null, "type": "Basic", "children": [{ "id": 101031, "text": null, "type": "Top-up", "children": null }] }] }, { "id": 100683, "text": "Employee", "type": "FMM_EMPLOYEE", "children": [{ "id": 101048, "text": "topup plan", "type": "Top-up", "children": null }, { "id": 100727, "text": "p1", "type": "Basic", "children": [{ "id": 101028, "text": "T1", "type": "Top-up", "children": null }] }, { "id": 100728, "text": "p2", "type": "Basic", "children": [{ "id": 101029, "text": "T2", "type": "Top-up", "children": null }] }] }, { "id": 100684, "text": "Spouse", "type": "FMM_SPOUSE", "children": [{ "id": 100729, "text": "p3", "type": "Basic", "children": [{ "id": 101030, "text": "T3", "type": "Top-up", "children": null }] }] }]
    };
  },
  components:{
    VTree
  }
}
</script>

<style>
#surveyPlan{
  margin: 0 auto;
}
</style>
