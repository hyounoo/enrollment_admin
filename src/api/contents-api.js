import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getContent(surveyId, callBack){    
    axios.get(url + 'SurveyContent/' + surveyId)
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
