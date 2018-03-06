<template>    
  <div v-if="$store.state.loading">
    <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
  </div>
  <div v-else id="surveyContent">
    <v-tabs color="green" dark slider-color="yellow" grow>
      <v-tab :href="'#tab-clientLogo'">
        Client Logo
      </v-tab>
      <v-tab :href="'#tab-surveyIntroduction'">
        Survey Introduction
      </v-tab>
      <v-tab :href="'#tab-familyInput'">
        Family Input
      </v-tab>
      <v-tab :href="'#tab-EmployeeChoice'">
        Employee Choice
      </v-tab>
      <v-tab :href="'#tab-Top-up'">
        Top-up
      </v-tab>
      <v-tab :href="'#tab-summary'">
        Summary
      </v-tab>
      <v-tabs-items :touchless="true">
        <v-tab-item :id="'tab-clientLogo'">
          <froala :tag="'textarea'" :config="config" v-model="this.content.SVY_CON_HEADERDESC"></froala>       
        </v-tab-item>
        <v-tab-item :id="'tab-surveyIntroduction'">
          <froala :tag="'textarea'" :config="config" v-model="this.content.SVY_CON_LOGINPAGEDESC"></froala>
        </v-tab-item>
        <v-tab-item :id="'tab-familyInput'">
          <froala :tag="'textarea'" :config="config" v-model="this.content.SVY_CON_FAMILYINFOPAGEDESC"></froala>
        </v-tab-item>
        <v-tab-item :id="'tab-EmployeeChoice'">
          <froala :tag="'textarea'" :config="config" v-model="this.content.SVY_CON_PLANBASICPAGEDESC"></froala>
        </v-tab-item>
        <v-tab-item :id="'tab-Top-up'">
          <froala :tag="'textarea'" :config="config" v-model="this.content.SVY_CON_PLANTOPUPPAGETITLE"></froala>
        </v-tab-item>
        <v-tab-item :id="'tab-summary'">
          <froala :tag="'textarea'" :config="config" v-model="this.content.SVY_CON_SUMMARYPAGETITLE"></froala>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>  
  </div>  
</template>

<script>

export default {
  data(){
    return {
      surveyId: this.$route.params.id,
      config:{
        events: {
          'froalaEditor.initialized': function () {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  },
  computed: {
    content() {
      return this.$store.state.contentsModule.content;
    }
  },
  mounted() {
    this.$store
      .dispatch("contentsModule/fetchContent", this.surveyId);
  },
};
</script>

<style>
#surveyContent {
  margin: 0 auto;
}
</style>
