// import axios from 'axios';

// const url = 'http://localhost/enrollmentservice/newapi/';

// export default {
//   getAssignees(callBack){    
//     axios.get(url + 'Assignees')
//     .then(response => {
//       // JSON responses are automatically parsed.
//       callBack(response.data);
//     })
//     .catch(e => {
//       callBack(response.data);
//     });
//   },
//   getPrograms(clientId, callBack){    
//     axios.get(url + 'ProgramList/' + clientId)
//     .then(response => {
//       // JSON responses are automatically parsed.
//       callBack(response.data);
//     })
//     .catch(e => {
//       callBack(response.data);
//     });
//   },
//   getSurvey(id, callBack) {
//     axios.get(url + 'SurveyHeader/' + id)
//     .then(response => {
//       // JSON responses are automatically parsed.
//       callBack(response.data);
//     })
//     .catch(e => {
//       callBack(response.data);
//     });
//   }
// };
