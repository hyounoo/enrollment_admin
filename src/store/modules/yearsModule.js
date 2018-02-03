import yearsApi from '../../api/years-api';
import moment from 'moment';

const namespaced = true;

const state = {
  years: []
};

const actions = {
  fetchYears(context) {
    return new Promise((resolve, reject) => {
      // make the call      
      yearsApi.getYears(s => {
        // run setYearList mutation
        console.log('Years fetched from api');
        context.commit('setYears', s);
        resolve();
      });
    });
  }
};

const mutations = {
  setYears(state, years) {
    // update surveys
    state.years = years;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
