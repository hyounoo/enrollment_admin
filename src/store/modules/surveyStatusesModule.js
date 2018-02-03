import surveyStatusesApi from '../../api/surveyStatuses-api';

const namespaced = true;

const state = {
  surveyStatuses: []
};

const actions = {
  fetchSurveyStatus(context) {
    return new Promise((resolve, reject) => {
      // make the call      
      surveyStatusesApi.getSurveyStatus(s => {
        // run setSurveyStatusList mutation
        console.log('SurveyStatus fetched from api');
        context.commit('setSurveyStatus', s);
        resolve();
      });
    });
  }
};

const mutations = {
  setSurveyStatus(state, surveyStatuses){
    // update surveyStatuses
    state.surveyStatuses = surveyStatuses;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
