import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getSurveys(searchVM, callBack) {
    axios.post(url + 'SurveyList', searchVM)
    .then(response => {
      // JSON responses are automatically parsed.
      callBack(response.data);
    })
    .catch(e => {
      callBack(response.data);
    });
  },
  getSurvey(id, callBack) {
    axios.get(url + 'SurveyHeader/' + id)
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
