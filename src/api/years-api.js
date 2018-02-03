import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getYears(callBack){    
    axios.get(url + 'YearList')
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
