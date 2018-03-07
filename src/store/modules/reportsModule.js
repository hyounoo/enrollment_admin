import reportsApi from '../../api/reports-api';
import moment from 'moment';

const namespaced = true;

const state = {
  reports: [],
  surveyNames: []
};

const actions = {
  fetchReports(context, searchVM) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setReports mutation
      reportsApi.getReports(searchVM, r => {
        console.log('Reports fetched from api');
        context.commit('setReports', r);
        resolve();
      });
    });
  },
  fetchSurveyNameList(context, clientId) {
    return new Promise((resolve, reject) => {
      // make the call
      // ruen setSurveyNames mutation      
      reportsApi.getSurveyNameList(clientId, s => {
        console.log('Suvey names fetched from api');
        context.commit('setSuveyNames', s);
      })
    })
  }
};

const mutations = {
  setReports(state, reports) {
    // update surveys
    state.reports = reports;
  },
  setSuveyNames(state, surveyNames) {
    // update surveyNames
    state.surveyNames = surveyNames;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
