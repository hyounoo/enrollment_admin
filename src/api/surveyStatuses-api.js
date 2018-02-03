import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getSurveyStatus(callBack){    
    axios.get(url + 'SurveyStatus')
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
