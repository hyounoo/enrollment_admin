import premiumApi from '../../api/premiums-api';

const namespaced = true;

const state = {
  premiums: []
};

const actions = {
  fetchPremiums(context, premiumId) {
    return new Promise((resolve, reject) => {
      // make the call      
      premiumApi.getPremiums(premiumId, p => {
        // run premium mutation
        console.log('Premiums fetched from api');
        if (p)
          context.commit('setPremiums', p);
        resolve();
      });
    });
  },
  clearPremiums(context){
    context.commit('clearPremiums');
  }
};

const mutations = {
  setPremiums(state, premiums){
    // update premiums
    console.log('set premiums: ' + premiums.length);
    state.premiums = premiums;
  },
  clearPremiums(state){
    state.premiums = []; 
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
