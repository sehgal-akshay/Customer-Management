import { GET_CUSTOMER_LIST } from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  customerslist: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_LIST:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        customerslist: action.payload
      };
    default:
      return state;
  }
}
