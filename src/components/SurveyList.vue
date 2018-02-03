<template>
  <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3>
    <!-- <img v-if="$store.state.loading" src="../assets/loading.gif">
    <v-data-table v-if="!$store.state.loading" :headers="headers" :items="surveys" rows-per-page-text=""> -->
    <v-data-table :headers="headers" :items="surveys" rows-per-page-text="" :loading="$store.state.loading">
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.SVY_SURVEYID }}</td>
        <td class="text-xs-center">{{ props.item.SVY_SURVEYTITLE }}</td>
        <td class="text-xs-center">{{ props.item.SVY_CLIENTNAME }}</td>
        <td class="text-xs-center">{{ props.item.SVY_YEAR }}</td>
        <td class="text-xs-center">{{ props.item.SVY_SURVEYSTARTDATE | formatDate }}</td>
        <td class="text-xs-center">{{ props.item.SVY_SURVEYENDDATE | formatDate }}</td>
        <td class="text-xs-center">{{ surveyStatus.filter(s => s.Key == props.item.SVY_SURVEYSTATUSCODE)[0].Value }}</td>      
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" :to="'/survey/' + props.item.SVY_SURVEYID">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.index)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>  
    </v-data-table>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "SVY_SURVEYID", value: "SVY_SURVEYID" },
        { text: "SVY_SURVEYTITLE", value: "SVY_SURVEYTITLE" },
        { text: "SVY_CLIENTNAME", value: "SVY_CLIENTNAME" },
        { text: "SVY_YEAR", value: "SVY_YEAR" },
        { text: "SVY_SURVEYSTARTDATE", value: "SVY_SURVEYSTARTDATE" },
        { text: "SVY_SURVEYENDDATE", value: "SVY_SURVEYENDDATE" },
        { text: "SVY_SURVEYSTATUSCODE", value: "SVY_SURVEYSTATUSCODE" }
      ]
    };
  },
  computed: {
    surveys() {
      return this.$store.state.surveysModule.surveys;
    },
    surveyStatus() {
      return this.$store.state.surveyStatusesModule.surveyStatuses;
    }
  },
  methods: {
    editItem(item) {
      alert(item.SVY_SURVEYID);
    },
    deleteItem(index) {
      // alert user for delete
      alert(index);
    }
  }
};
</script>
<style>
.datatable .datatable__actions{
  justify-content: flex-start;
  /* padding-left: 10px; */
}
</style>
