<template>
  <div>
    <SurveysSearchForm></SurveysSearchForm>
    <SurveyList></SurveyList> 
  </div>
</template>

<script>
import SurveysSearchForm from "./SurveysSearchForm";
import SurveyList from "./SurveyList";

export default {
  name: "surveys",  
  components: { SurveysSearchForm, SurveyList }
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
