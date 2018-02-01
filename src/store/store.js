import Vuex from 'vuex';
import Vue from 'vue';
import surveysModule from './modules/surveysModule';
import surveyModule from './modules/surveyModule';

Vue.use(Vuex);

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
      state.loading = status;
    }
  },
  modules: {
    surveysModule: surveysModule,
    surveyModule: surveyModule
  }
});
