import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getPremiums(planId, callBack){    
    axios.get(url + 'Premium/' + planId)
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
