<template>
  <v-data-table :headers="headers" :items="reports" class="elevation-9 mx-3"
    rows-per-page-text="" :loading="$store.state.loading" :disable-initial-sort="disableInitialSort">
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.CLI_DISPLAYNAME }}</td>
      <td class="text-xs-center">{{ props.item.SVY_SURVEYTITLE }}</td>
      <td class="text-xs-center">{{ props.item.SDM_MEMBERNAME }}</td>
      <td class="text-xs-center">{{ props.item.SDM_FAMILYMEMBERDESCRIPTION }}</td>
      <td class="text-xs-center">{{ props.item.SDM_FAMILYMEMBERNAME }}</td>
      <td class="text-xs-center">{{ props.item.SDM_BASICPLANNAME }}</td>
      <td class="text-xs-center">{{ props.item.SDH_LASTSUBMITTEDDATE | formatDate }}</td>      
    </template>  
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      disableInitialSort: true,
      headers: [
        { text: "CLI_DISPLAYNAME", value: "CLI_DISPLAYNAME", align: 'center' },
        { text: "SVY_SURVEYTITLE", value: "SVY_SURVEYTITLE", align: 'center' },
        { text: "SDM_MEMBERNAME", value: "SDM_MEMBERNAME", align: 'center' },
        { text: "SDM_FAMILYMEMBERDESCRIPTION", value: "SDM_FAMILYMEMBERDESCRIPTION", align: 'center' },
        { text: "SDM_FAMILYMEMBERNAME", value: "SDM_FAMILYMEMBERNAME", align: 'center' },
        { text: "SDM_BASICPLANNAME", value: "SDM_BASICPLANNAME", align: 'center' },
        { text: "SDH_LASTSUBMITTEDDATE", value: "SDH_LASTSUBMITTEDDATE", align: 'center' }
      ]
    };
  },
  computed: {
    reports() {
      return this.$store.state.reportsModule.reports;
    },
    surveyStatus() {
      return this.$store.state.surveyStatusesModule.surveyStatuses;
    }
  },
  methods: {
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
