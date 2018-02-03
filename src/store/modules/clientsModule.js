import clientsApi from '../../api/clients-api';
import moment from 'moment';

const namespaced = true;

const state = {
  clients: []
};

const actions = {
  fetchClients(context, clientName) {
    return new Promise((resolve, reject) => {
      // make the call      
      clientsApi.getClients(clientName, c => {
        // run clientList mutation
        console.log('Clients fetched from api');
        context.commit('setClients', c);
        resolve();
      });
    });
  },
  setClient(context, client){
    return new Promise((resolve, reject) => {      
      console.log('Set client in api');
      context.commit('setClients', [client]);
      resolve();
    });
  }
};

const mutations = {
  setClients(state, clients) {
    // update clients
    console.log('set clients: ' + clients.length);
    state.clients = clients;
  }
};

export default {
  namespaced,
  state,
  actions,
  mutations
};
