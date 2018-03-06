import contentsApi from '../../api/contents-api';

const namespaced = true;

const state = {
  content: null
};

const actions = {
  fetchContent(context, surveyId) {
    return new Promise((resolve, reject) => {
      console.log(surveyId);
      // make the call      
      contentsApi.getContent(surveyId, p => {
        // run content mutation
        console.log('Content fetched from api');
        context.commit('setContent', p);
        resolve();
      });
    });
  }
};

const mutations = {
  setContent(state, content){
    // update assignees
    console.log('set content: ' + content.length);
    state.content = content;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
