import surveyApi from '../../api/survey-api';

const namespaced = true;

const state = {
  survey: null,
  loading: false,
};

const actions = {
  fetchSurvey(
    context,
    id
  ) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setSurveys mutation
      surveyApi.getSurvey(id, s => {
        console.log('Survey fetched: '+ id);
        context.commit('setSurvey', s);
        resolve();
      });
    });
  }
};

const mutations = {
  setSurvey(state, survey) {
    // update survey
    state.survey = survey;
  }
};

export default {
    namespaced,
    state,
    actions,
    mutations
};
