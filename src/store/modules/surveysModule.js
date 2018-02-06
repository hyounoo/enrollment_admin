import surveysApi from '../../api/surveys-api';
import moment from 'moment';

const namespaced = true;

const state = {    
  surveys: [],  
  survey: null
};

const actions = {
  fetchSurveys(context, searchVM) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setSurveys mutation
      surveysApi.getSurveys(searchVM, s => {
        console.log('Surveys fetched from api');
        context.commit('setSurveys', s);
        resolve();
      });
    });
  },   
  fetchSurvey(context, id) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setSurvey mutation
      surveysApi.getSurvey(id, s => {
        console.log('Survey fetched from api for SurveyId:' + id);
        s.SVY_SURVEYSTARTDATE = moment(s.SVY_SURVEYSTARTDATE).format('YYYY-MM-DD');
        s.SVY_SURVEYENDDATE = moment(s.SVY_SURVEYENDDATE).format('YYYY-MM-DD');
        s.SVY_INSURANCESTARTDATEFORCALC = moment(s.SVY_INSURANCESTARTDATEFORCALC).format('YYYY-MM-DD');
        s.SVY_CHILDAGECHECK_BORNSINCE = s.SVY_CHILDAGECHECK_BORNSINCE ? moment(s.SVY_CHILDAGECHECK_BORNSINCE).format('YYYY-MM-DD') : null;
        context.commit('setSurvey', s);
        resolve();
      });
    });
  },
  clearSurvey(context){
    context.commit('clearSurvey');
  }
};

const mutations = {  
  setSurveys(state, surveys) {
    // update surveys
    state.surveys = surveys;
  },
  setSurvey(state, survey) {
    // update survey    
    state.survey = survey;
  },
  clearSurvey(state){
    state.survey = null;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
