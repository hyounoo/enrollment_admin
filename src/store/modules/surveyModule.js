import surveyApi from '../../api/survey-api';
import moment from 'moment';

const namespaced = true;

const state = {
  assignees: [],
  programs: [],
  survey: null,
  loading: false,
};

const actions = {
  fetchAssignees(context) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setAssignees mutation
      surveyApi.getAssignees(a => {
        console.log('Assignees fetched - from api');
        context.commit('setAssignees', a);
        resolve();
      });
    });
  },
  fetchSurvey(context, id) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setSurvey mutation
      surveyApi.getSurvey(id, s => {
        console.log('Survey fetched - from api: ' + id);
        s.SVY_SURVEYSTARTDATE = moment(s.SVY_SURVEYSTARTDATE).format('YYYY-MM-DD');
        s.SVY_SURVEYENDDATE = moment(s.SVY_SURVEYENDDATE).format('YYYY-MM-DD');
        s.SVY_INSURANCESTARTDATEFORCALC = moment(s.SVY_INSURANCESTARTDATEFORCALC).format('YYYY-MM-DD');
        s.SVY_CHILDAGECHECK_BORNSINCE = moment(s.SVY_CHILDAGECHECK_BORNSINCE).format('YYYY');
        context.commit('setSurvey', s);
        resolve();
      });
    });
  },
  clearSurvey(context){
    context.commit('clearSurvey');
  },
  fetchPrograms(context, clientId) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setPrograms mutation
      surveyApi.getPrograms(clientId, p => {
        console.log('Programs fetched- from api: ' + clientId);
        context.commit('setPrograms', p);
        resolve();
      });
    });
  }
};

const mutations = {
  setAssignees(state, assignees) {
    // update assignees
    state.assignees = assignees;
  },
  setPrograms(state, programs) {
    // update programs
    state.programs = programs;
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
