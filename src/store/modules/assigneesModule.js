import assingeesApi from '../../api/assignees-api';
import moment from 'moment';

const namespaced = true;

const state = {
  assignees: []
};

const actions = {
  fetchAssignees(context) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setAssignees mutation
      assingeesApi.getAssignees(a => {
        console.log('Assignees fetched from api');
        context.commit('setAssignees', a);
        resolve();
      });
    });
  }
};

const mutations = {
  setAssignees(assingees){
    // update assingees
    console.log('set assingees: ' + assingees.length);
    state.assingees = assingees;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
