<template>
  <div>
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
      ClientName: "m",
      Year: this.year
    };
    
    this.$store.dispatch("setLoadingStatus", true);
    this.$store
      .dispatch("surveysModule/fetchYears")
      .then(
        this.$store
          .dispatch("surveysModule/fetchSurveys", searchVM)
          .then(() => this.$store.dispatch("setLoadingStatus", false))
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
