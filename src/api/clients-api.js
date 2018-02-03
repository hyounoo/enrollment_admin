import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getClients(clientName, callBack){    
    axios.get(url + 'ClientList/' + clientName)
    .then(response => {
      // JSON responses are automatically parsed.
      callBack(response.data);
    })
    .catch(e => {
      console.log(e);
      callBack(e.data);
    });
  }
};
