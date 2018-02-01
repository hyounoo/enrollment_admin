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
  },
  getYears(callBack){    
    axios.get(url + 'YearList')
    .then(response => {
      // JSON responses are automatically parsed.
      callBack(response.data);
    })
    .catch(e => {
      callBack(response.data);
    });
  },
  getSurveys(searchVM, callBack) {
    axios.post(url + 'SurveyList', searchVM)
    .then(response => {
      // JSON responses are automatically parsed.
      callBack(response.data);
    })
    .catch(e => {
      callBack(response.data);
    });
  }
};
