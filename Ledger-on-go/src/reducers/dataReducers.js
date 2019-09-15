import { GET_CUSTOMER_LIST } from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  customersList: [{}],
  isAuthenticated: false
};
export default function customerlistreducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_LIST:
      return {
        ...state,
        customersList: action.payload,
        isAuthenticated: !isEmpty(action.payload)
      };
    default:
      return state;
  }
}
export const getCustomersList = state => state.customersList;
