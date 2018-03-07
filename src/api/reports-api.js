import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getReports(searchVM, callBack) {
    axios.post(url + 'SurveyReportList', searchVM)
      .then(response => {
        // JSON responses are automatically parsed.
        callBack(response.data);
      })
      .catch(e => {
        callBack(response.data);
      });
  },
  getSurveyNameList(clientId, callBack){
    var uri = url + 'SurveyNameList/' + clientId;    
    console.log(uri);
    axios.get(uri)
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
