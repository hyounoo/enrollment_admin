import programsApi from '../../api/programs-api';

const namespaced = true;

const state = {
  programs: []
};

const actions = {
  fetchPrograms(context, clientId) {
    return new Promise((resolve, reject) => {
      // make the call
      // run setPrograms mutation
      programsApi.getPrograms(clientId, p => {
        console.log('Programs fetched from api for ' + clientId);
        context.commit('setPrograms', p);
        resolve();
      });
    });
  }
};

const mutations = {
  setPrograms(state, programs) {
    // update programs
    state.programs = programs;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
