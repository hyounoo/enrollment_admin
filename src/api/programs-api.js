import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getPrograms(clientId, callBack){    
    axios.get(url + 'ProgramList/' + clientId)
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
