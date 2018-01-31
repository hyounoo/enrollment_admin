<template>
  <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3>    
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
    <v-data-table v-if="!loading" :headers="headers" :items="surveys" hide-actions >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.SVY_SURVEYID }}</td>
        <td class="text-xs-right">{{ props.item.SVY_SURVEYTITLE }}</td>
        <td class="text-xs-right">{{ props.item.SVY_CLIENTNAME }}</td>
        <td class="text-xs-right">{{ props.item.SVY_YEAR }}</td>
        <td class="text-xs-right">{{ props.item.SVY_SURVEYSTARTDATE }}</td>
        <td class="text-xs-right">{{ props.item.SVY_SURVEYENDDATE }}</td>
        <td class="text-xs-right">{{ props.item.SVY_SURVEYSTATUSCODE }}</td>        
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>

export default {  
  data() {
    return {
      loading: false,
      headers: [
        { text: "SVY_SURVEYID", value: "SVY_SURVEYID" },
        { text: "SVY_SURVEYTITLE", value: "SVY_SURVEYTITLE" },
        { text: "SVY_CLIENTNAME", value: "SVY_CLIENTNAME" },
        { text: "SVY_YEAR", value: "SVY_YEAR" },
        { text: "SVY_SURVEYSTARTDATE", value: "SVY_SURVEYSTARTDATE" },
        { text: "SVY_SURVEYENDDATE", value: "SVY_SURVEYENDDATE" },
        { text: "SVY_SURVEYSTATUSCODE", value: "SVY_SURVEYSTATUSCODE" }
      ],
      items: [
        {
          value: false,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          value: false,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          value: false,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          value: false,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          value: false,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          value: false,
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          value: false,
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          value: false,
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          value: false,
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          value: false,
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ]
    };
  },
  computed: {
    surveys(){
      return this.$store.state.surveys;
    }
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchSurveys").then(() => (this.loading = false));
  },
};
</script>