<template>
  <div id="surveys" class="flex xs11">
    <SurveysSearchForm></SurveysSearchForm>
    <SurveyList></SurveyList> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SurveysSearchForm from "./SurveysSearchForm";
import SurveyList from "./SurveyList";

export default {
  name: "surveys",
  components: { SurveysSearchForm, SurveyList },
  created() {
    let searchVM = {
      ClientName: "",
      Year: this.year
    };

    this.$store.dispatch("setLoadingStatus", true);
    this.$store
      .dispatch("surveyStatusesModule/fetchSurveyStatus")
      .then(
        this.$store
          .dispatch("yearsModule/fetchYears")
          // .then(
          //   this.$store
          //     .dispatch("surveysModule/fetchSurveys", searchVM)
              .then(() => this.$store.dispatch("setLoadingStatus", false))
          //)
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#surveys{
  margin: 0 auto;
}
</style>
