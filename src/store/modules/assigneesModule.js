import assigneesApi from '../../api/assignees-api';

const namespaced = true;

const state = {
  assignees: []
};

const actions = {
  fetchAssignees(context) {
    return new Promise((resolve, reject) => {
      // make the call      
      assigneesApi.getAssignees(s => {
        // run setAssignees mutation
        console.log('Assignees fetched from api');
        context.commit('setAssignees', s);
        resolve();
      });
    });
  }
};

const mutations = {
  setAssignees(state, assignees){
    // update assignees
    console.log('set assignees: ' + assignees.length);
    state.assignees = assignees;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
