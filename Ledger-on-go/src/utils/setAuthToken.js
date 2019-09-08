import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;

// export default function getNextSequence(name) {
//   var ret = db.counter.findAndModify(
//          {
//            query: { _id: name },
//            update: { $inc: { seq: 1 } },
//            new: true
//          }
//   );

//   return ret.seq;
// }
