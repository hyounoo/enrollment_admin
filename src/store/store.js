import Vuex from 'vuex';
import Vue from 'vue';
import surveysApi from '../api/surveys-api';

Vue.use(Vuex);

const surveysModule = {
  namespaced: true,
  state: {
    surveys: [],
    loading: false,
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
};

const surveyModule = {
  namespaced: true,
  state: {
    survey: null    
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
          console.log('Does nothing it\'s a test');          
          resolve();          
        });
      });
    }
  },
}

export default new Vuex.Store({
  state:{
    loading: false,
  },
  actions: {
    setLoadingStatus(context, status){
      context.commit('setLoading', status);
    }
  },
  mutations: {    
    setLoading(state, status){
      console.log('Loading status changed: ' + status);
      state.loading = status;
    }
  },
  modules: {
    surveysModule: surveysModule,
    surveyModule: surveyModule
  }
});
