import axios from 'axios';

const url = 'http://localhost/enrollmentservice/newapi/';

export default {
  getAssignees(callBack){    
    axios.get(url + 'Assignees')
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
