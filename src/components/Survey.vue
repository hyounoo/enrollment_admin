<template>
<v-tabs app centered>
    <v-tabs-bar class="cyan" dark>
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item :href="'#tab-header'">
        Survey Header
      </v-tabs-item>
      <v-tabs-item v-if="survey && survey.SVY_SURVEYID != 0" :href="'#tab-plan'">
        Survey Plan
      </v-tabs-item>
      <v-tabs-item v-if="survey && survey.SVY_SURVEYID != 0" :href="'#tab-content'">
        Survey Content
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content :id="'tab-header'">
        <SurveyHeader></SurveyHeader>          
      </v-tabs-content>
      <v-tabs-content :id="'tab-plan'">
        <SurveyPlan></SurveyPlan>          
      </v-tabs-content>
      <v-tabs-content :id="'tab-content'">
        <SurveyContent></SurveyContent>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import SurveyHeader from "./SurveyHeader";
import SurveyPlan from "./SurveyPlan";
import SurveyContent from "./SurveyContent";

export default {
  data() {
    return {
      active: null,
      text: 'test',
      model: 'tab-header',
      surveyId: this.$route.params.id
    };
  },
  computed: {
    survey() {
      return this.$store.state.surveysModule.survey;
    }
  },
  created() {
    this.$store.dispatch("setLoadingStatus", true);
    this.$store.dispatch("surveysModule/clearSurvey");
    // this.$store.dispatch("assingeesModule/fetchAssignees");
    this.$store.dispatch("surveyStatusesModule/fetchSurveyStatus");    
    this.$store.dispatch("surveysModule/fetchSurvey", this.surveyId).then(() => {
      this.$store.dispatch("programsModule/fetchPrograms", this.survey.SVY_CLIENTID)
      //.then(() => this.$store.dispatch("surveysModule/fetchClients", this.survey.SVY_CLIENTNAME)
        .then(() => this.$store.dispatch("setLoadingStatus", false));
    });
  },
  components: { SurveyHeader, SurveyPlan, SurveyContent }
};
</script>

<style>

</style>
