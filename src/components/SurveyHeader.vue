<template>  
  <v-form v-model="valid" ref="form" lazy-validation>    
    <div v-if="$store.state.loading">
      <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
    </div>
    <div v-else id="surveyHeader" class="flex xs11">
      <v-layout row wrap class="my-5" elevation-9 ml-3 mr-3 pa-4>      
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-text-field label="SVY_SURVEYTITLE"
            v-model="survey.SVY_SURVEYTITLE"
            :rules="requiredRules('SVY_SURVEYTITLE')" clearable>
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-text-field label="SVY_YEAR"
            v-model="survey.SVY_YEAR"
            :rules="requiredRules('SVY_YEAR')">
        </v-text-field>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <ClientAutoComplete :label="'SVY_CLIENTNAME'" v-model="client" :rules="requiredRules('SVY_CLIENTNAME')"></ClientAutoComplete>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-menu lazy :close-on-content-click="true" 
            v-model="startDatePicker" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px" >
            <v-text-field              
              label="SVY_SURVEYSTARTDATE"
              v-model="survey.SVY_SURVEYSTARTDATE"              
              :rules="requiredRules('SVY_SURVEYSTARTDATE')"              
              append-icon="event" slot="activator" readonly
            ></v-text-field>
            <v-date-picker v-model="survey.SVY_SURVEYSTARTDATE" no-title scrollable actions></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-menu lazy :close-on-content-click="true" 
            v-model="endDatePicker" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px" >
            <v-text-field              
              label="SVY_SURVEYENDDATE"
              v-model="survey.SVY_SURVEYENDDATE"              
              :rules="requiredRules('SVY_SURVEYENDDATE')"              
              append-icon="event" slot="activator" readonly
            ></v-text-field>
            <v-date-picker v-model="survey.SVY_SURVEYENDDATE" no-title scrollable actions></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-menu lazy :close-on-content-click="true" 
            v-model="insureranceDatePicker" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px" >
            <v-text-field              
              label="SVY_INSURANCESTARTDATEFORCALC"
              v-model="survey.SVY_INSURANCESTARTDATEFORCALC"              
              :rules="requiredRules('SVY_INSURANCESTARTDATEFORCALC')"              
              append-icon="event" slot="activator" readonly
            ></v-text-field>
            <v-date-picker v-model="survey.SVY_INSURANCESTARTDATEFORCALC" no-title scrollable actions></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-select label="SVY_ASSIGNEEUSERID"
            v-model="survey.SVY_ASSIGNEEUSERID" 
            :rules="requiredRules('SVY_ASSIGNEEUSERID')"
            :items="assignees" item-text="Value" item-value="Key" clearable>
          </v-select>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-select label="SVY_PREVIOUSPROGRAMID"
            v-model="survey.SVY_PREVIOUSPROGRAMID"
            :rules="requiredRules('SVY_PREVIOUSPROGRAMID')"
            :items="programs" item-text="Value" item-value="Key" clearable>
          </v-select>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-select label="SVY_SURVEYSTATUSCODE"
            v-model="survey.SVY_SURVEYSTATUSCODE"
            :rules="requiredRules('SVY_SURVEYSTATUSCODE')"
            :items="surveyStatuses" item-text="Value" item-value="Key" clearable>
          </v-select>
        </v-flex>        
        <v-flex xs12 pl-2 pr-2>
          <v-text-field label="SVY_DESCRIPTION"            
            v-model="survey.SVY_DESCRIPTION"
            :rules="maxCharRules('SVY_DESCRIPTION', '1000')"
            :counter="1000" multi-line>
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-checkbox label="SVY_CHILDAGECHECK_ISENABLED"
            v-model="survey.SVY_CHILDAGECHECK_ISENABLED">
          </v-checkbox>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-menu v-if="survey.SVY_CHILDAGECHECK_ISENABLED"  lazy :close-on-content-click="true" 
            v-model="childBornDatePicker" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px" >
            <v-text-field              
              label="SVY_CHILDAGECHECK_BORNSINCE"
              v-model="survey.SVY_CHILDAGECHECK_BORNSINCE"              
              :rules="requiredRules('SVY_CHILDAGECHECK_BORNSINCE')"              
              append-icon="event" slot="activator" readonly
            ></v-text-field>
            <v-date-picker v-model="survey.SVY_CHILDAGECHECK_BORNSINCE" no-title scrollable actions></v-date-picker>
          </v-menu>
        </v-flex>        
        <v-flex sm4 pl-2 pr-2>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-checkbox label="SVY_SKIPSTEP_PLANBASIC"
            v-model="survey.SVY_SKIPSTEP_PLANBASIC">
          </v-checkbox>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-checkbox label="SVY_SKIPSTEP_PLANTOPUP"
            v-model="survey.SVY_SKIPSTEP_PLANTOPUP">
          </v-checkbox>
        </v-flex>
        <v-flex sm4 pl-2 pr-2>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-checkbox label="SVY_SUMMARYDISPLAY_PLANBASIC"
            v-model="survey.SVY_SUMMARYDISPLAY_PLANBASIC">
          </v-checkbox>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-checkbox label="SVY_SUMMARYDISPLAY_PLANTOPUP"
            v-model="survey.SVY_SUMMARYDISPLAY_PLANTOPUP">
          </v-checkbox>
        </v-flex>
        <v-flex xs12 sm4 pl-2 pr-2>
          <v-checkbox label="SVY_SUMMARYDISPLAY_PREMIUM"
            v-model="survey.SVY_SUMMARYDISPLAY_PREMIUM">
          </v-checkbox>
        </v-flex>
      </v-layout>
      <v-flex xs12>
        <v-btn @click="submit" :disabled="!valid" >Submit </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-flex>
    </div>    
  </v-form>
</template>

<script>
import ClientAutoComplete from './ClientAutoComplete';

export default {
  data() {
    return {
      valid: true,
      client: null,      
      startDatePicker: false,
      endDatePicker: false,
      insureranceDatePicker: false,
      childBornDatePicker: false
    };
  },
  computed: {
    survey() {
      return this.$store.state.surveysModule.survey;
    },
    assignees() {
      return this.$store.state.assigneesModule.assignees;
    },
    programs() {
      return this.$store.state.programsModule.programs;
    },
    surveyStatuses() {
      return this.$store.state.surveyStatusesModule.surveyStatuses;
    }
  },
  watch: {
    survey(val) {
      var client = (this.survey.SVY_CLIENTID && this.survey.SVY_CLIENTNAME) ? { Key: this.survey.SVY_CLIENTID, Value: this.survey.SVY_CLIENTNAME} : null;
      this.client = client;
    }
  },
  methods: {
    maxCharRules(name, count){
      return [v => v? v.length <= count : true || 'Max ' + count + ' characters'];
    },
    requiredRules(name) {
      return [v => !!v || name + " is required"];
    },
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }    
  },
  components: { ClientAutoComplete }
};
</script>

<style scoped>
div {
  text-align: center;
}

.progress-circular {
  margin: 1rem;
}

#surveyHeader{
  margin: 0 auto;
}
</style>
