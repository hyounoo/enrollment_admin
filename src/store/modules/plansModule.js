import plansApi from '../../api/plans-api';

const namespaced = true;

const state = {
  assignees: null
};

const actions = {
  fetchPlan(context, surveyId) {
    return new Promise((resolve, reject) => {
      console.log(surveyId);
      // make the call      
      plansApi.getPlan(surveyId, p => {
        // run plan mutation
        console.log('Plan fetched from api');
        context.commit('setPlan', p);
        resolve();
      });
    });
  }
};

const mutations = {
  setPlan(state, plan){
    // update assignees
    console.log('set plan: ' + plan.length);
    state.plan = plan;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
