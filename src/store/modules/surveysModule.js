import surveysApi from '../../api/surveys-api';

const namespaced = true;

const state = {
  clients: [],
  years: [],
  surveys: [],
  loading: false,
};

const actions = {
  fetchClients(context, clientName) {
    return new Promise((resolve, reject) => {
      // make the call      
      surveysApi.getClients(clientName, c => {
        // run clientList mutation
        context.commit('setClients', c);
        resolve();
      });
    });
  },
  fetchYears(context) {
    return new Promise((resolve, reject) => {
      // make the call      
      surveysApi.getYears(s => {
        // run setYearList mutation
        context.commit('setYears', s);
        resolve();
      });
    });
  },
  fetchSurveys(context, searchVM) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setSurveys mutation
      surveysApi.getSurveys(searchVM, s => {
        context.commit('setSurveys', s);
        resolve();
      });
    });
  }
};

const mutations = {
  setClients(state, clients) {
    // update clients
    state.clients = clients;
  },
  setYears(state, years) {
    // update surveys
    state.years = years;
  },
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
