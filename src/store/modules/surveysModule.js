import surveysApi from '../../api/surveys-api';

const namespaced = true;

const state = {
  surveys: [],
  loading: false,
};

const actions = {
  fetchSurveys(
    context,
    searchVM
  ) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setSurveys mutation
      surveysApi.getSurveys(searchVM, s => {
        console.log(searchVM);
        context.commit('setSurveys', s);
        resolve();
      });
    });
  }
};

const mutations = {
  setSurveys(state, surveys) {
    // update surveys
    state.surveys = surveys;
  }
};

export default {
    namespaced,
    state,
    actions,
    mutations
};
