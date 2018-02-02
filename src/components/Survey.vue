<template>
<v-tabs fixed centered>
    <v-tabs-bar class="cyan" dark>
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item :href="'#tab-header'">
        Survey Header
      </v-tabs-item>
      <v-tabs-item :href="'#tab-plan'">
        Survey Plan
      </v-tabs-item>
      <v-tabs-item :href="'#tab-content'">
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
      return this.$store.state.surveyModule.survey;
    }
  },
  created() {
    this.$store.dispatch("setLoadingStatus", true);
    this.$store.dispatch("surveyModule/clearSurvey");
    this.$store.dispatch("surveyModule/fetchSurvey", this.surveyId).then(() => {
      this.$store.dispatch("surveyModule/fetchAssignees").then(() => {
        this.$store.dispatch("surveysModule/fetchSurveyStatus").then(() => {
          this.$store
            .dispatch("surveyModule/fetchPrograms", this.survey.SVY_CLIENTID)
            .then(() => this.$store.dispatch("setLoadingStatus", false));
        });
      });
    });
    // this.$store.dispatch("setLoadingStatus", true);
    // this.$store.dispatch("surveyModule/clearSurvey");    
    // this.$store.dispatch("surveyModule/fetchAssignees").then(() => {
    //   this.$store
    //     .dispatch("surveyModule/fetchSurvey", this.surveyId)
    //     .then(() => {
    //       if (this.survey.SVY_CLIENTID) {
    //         this.$store
    //           .dispatch("surveyModule/fetchPrograms", this.survey.SVY_CLIENTID)
    //           .then(() => this.$store.dispatch("setLoadingStatus", false));
    //       }
    //     });
    // });
  },
  components: { SurveyHeader, SurveyPlan, SurveyContent }
};
</script>

<style>

</style>
