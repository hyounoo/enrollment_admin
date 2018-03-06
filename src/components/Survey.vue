<template>
  <v-tabs color="cyan" dark slider-color="yellow" grow>
    <v-tab :href="'#tab-header'">
      Survey Header
    </v-tab>
    <v-tab v-if="survey && survey.SVY_SURVEYID != 0" :href="'#tab-plan'">
      Survey Plan
    </v-tab>
    <v-tab v-if="survey && survey.SVY_SURVEYID != 0" :href="'#tab-content'">
      Survey Content
    </v-tab>
    <v-tabs-items :touchless="true">
      <v-tab-item :id="'tab-header'">
        <SurveyHeader></SurveyHeader>        
      </v-tab-item>
      <v-tab-item :id="'tab-plan'">
        <SurveyPlan></SurveyPlan>
      </v-tab-item>
      <v-tab-item :id="'tab-content'">
        <SurveyContent></SurveyContent>
      </v-tab-item>
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
    this.$store.dispatch("surveyStatusesModule/fetchSurveyStatus");
    this.$store.dispatch("assigneesModule/fetchAssignees");
    this.$store
      .dispatch("surveysModule/fetchSurvey", this.surveyId)
      .then(() => {
        this.$store
          .dispatch("programsModule/fetchPrograms", this.survey.SVY_CLIENTID)
          .then(() => this.$store.dispatch("setLoadingStatus", false));
      });
  },
  components: { SurveyHeader, SurveyPlan, SurveyContent }
};
</script>

<style>

</style>
