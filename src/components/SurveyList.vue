<template>
  <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3>
    <img v-if="$store.state.loading" src="../assets/loading.gif">
    <v-data-table v-if="!$store.state.loading" :headers="headers" :items="surveys"  >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.SVY_SURVEYID }}</td>
        <td class="text-xs-center">{{ props.item.SVY_SURVEYTITLE }}</td>
        <td class="text-xs-center">{{ props.item.SVY_CLIENTNAME }}</td>
        <td class="text-xs-center">{{ props.item.SVY_YEAR }}</td>
        <td class="text-xs-center">{{ props.item.SVY_SURVEYSTARTDATE }}</td>
        <td class="text-xs-center">{{ props.item.SVY_SURVEYENDDATE }}</td>
        <td class="text-xs-center">{{ props.item.SVY_SURVEYSTATUSCODE }}</td>
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'SVY_SURVEYID', value: 'SVY_SURVEYID' },
        { text: 'SVY_SURVEYTITLE', value: 'SVY_SURVEYTITLE' },
        { text: 'SVY_CLIENTNAME', value: 'SVY_CLIENTNAME' },
        { text: 'SVY_YEAR', value: 'SVY_YEAR' },
        { text: 'SVY_SURVEYSTARTDATE', value: 'SVY_SURVEYSTARTDATE' },
        { text: 'SVY_SURVEYENDDATE', value: 'SVY_SURVEYENDDATE' },
        { text: 'SVY_SURVEYSTATUSCODE', value: 'SVY_SURVEYSTATUSCODE' }
      ]
    };
  },
  computed: {
    surveys() {
      return this.$store.state.surveysModule.surveys;
    }
  }  
};
</script>