<template>
  <v-form v-model="valid" ref="form" lazy-validation >    
      <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3 pa-3>
        <v-flex xs12 sm3 pl-2 pr-2>
          <ClientAutoComplete label="ClientName" v-model="client"></ClientAutoComplete>
        </v-flex>        
        <v-flex xs12 sm2 pl-2 pr-2>
          <v-select label="Survey" clearable return-object
            v-model="survey"
            :items="surveyList" item-text="Value" item-value="Key">
            <template slot="selection" slot-scope="data">
              {{ data.item.Value }}
            </template>
            <template slot="item" slot-scope="data">
              <v-list-tile-content>
                <v-list-tile-sub-title v-html="data.item.Value"></v-list-tile-sub-title>
              </v-list-tile-content>        
            </template>
          </v-select>
        </v-flex>
        <v-flex xs12 sm2 pl-2 pr-2>
          <v-select label="Family" v-model="family" :items="familyList" clearable></v-select>
        </v-flex>
        <v-flex xs12 sm5 pt-2>
          <v-btn @click="submit" :disabled="!valid" >Search</v-btn>          
          <v-btn @click="download" :to="'/survey/0'" class="right">Download</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
</template>

<script>
import ClientAutoComplete from "./ClientAutoComplete";

export default {
  name: "reports-search-form",
  data: () => ({
    valid: true,
    client: null,
    survey: null,
    family: null,
    familyList: ["All Family", "Employee only"]
  }),
  computed: {
    surveyList() {
      return this.$store.state.reportsModule.surveyNames;
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        let searchVM = {
          ReportClientId: this.client ? this.client.Key : null,
          SurveyId: this.survey ? this.survey.Key : null,
          IsAllFamily: this.family ? family == "All Family" : null
        };

        this.$store.dispatch("setLoadingStatus", true);
        this.$store
          .dispatch("reportsModule/fetchReports", searchVM)
          .then(() => this.$store.dispatch("setLoadingStatus", false));
      }
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      this.$store
        .dispatch("reportsModule/fetchSurveyNameList", v)
        .then(() => (this.loading = false));
    },
    download() {}
  },
  watch: {
    client(val) {
      if (val) {
        this.loading = true;
        this.$store
          .dispatch("reportsModule/fetchSurveyNameList", val.Key)
          .then(() => (this.loading = false));
      }
    }
  },
  components: { ClientAutoComplete }
};
</script>

<style>

</style>
