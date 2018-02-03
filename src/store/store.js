import Vuex from 'vuex';
import Vue from 'vue';
import assigneesModule from './modules/assigneesModule';
import clientsModule from './modules/clientsModule';
import programsModule from './modules/programsModule';
import surveysModule from './modules/surveysModule';
import surveyStatusesModule from './modules/surveyStatusesModule';
import yearsModule from './modules/yearsModule';
// import surveyModule from './modules/surveyModule';

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
    assigneesModule: assigneesModule,
    clientsModule: clientsModule,
    programsModule: programsModule,
    surveysModule: surveysModule,
    surveyStatusesModule: surveyStatusesModule,
    yearsModule: yearsModule
  }
});
