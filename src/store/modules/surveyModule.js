// import surveyApi from '../../api/survey-api';
// import moment from 'moment';

// const namespaced = true;

// const state = {
//   assignees: [],
//   programs: [],
//   survey: null,
//   loading: false,
// };

// const actions = {
//   fetchPrograms(context, clientId) {
//     return new Promise((resolve, reject) => {
//       // make the call
//       // run setPrograms mutation
//       surveyApi.getPrograms(clientId, p => {
//         console.log('Programs fetched from api for ' + clientId);
//         context.commit('setPrograms', p);
//         resolve();
//       });
//     });
//   }
// };

// const mutations = {  
//   setPrograms(state, programs) {
//     // update programs
//     state.programs = programs;
//   }
// };

// export default {
//   namespaced,
//   state,
//   actions,
//   mutations
// };
