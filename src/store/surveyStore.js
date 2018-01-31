import Vuex from 'vuex';
import Vue from 'vue';
import surveysApi from '../api/surveys-api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surveys: []
  },
  getters: {

  },
  actions: {
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
  },
  mutations: {
    setSurveys(state, surveys) {
      // update surveys
      state.surveys = surveys;
    }
  }
});
