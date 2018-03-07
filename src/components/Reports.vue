<template>
  <div id="reports" class="flex xs12">
    <ReportsSearchForm></ReportsSearchForm>
    <ReportList></ReportList> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ReportsSearchForm from "./ReportsSearchForm";
import ReportList from "./ReportList";

export default {
  name: "reports",
  components: { ReportsSearchForm, ReportList },
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
          .then(() => this.$store.dispatch("setLoadingStatus", false))
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#surveys {
  margin: 0 auto;
}
</style>
