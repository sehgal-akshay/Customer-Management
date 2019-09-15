import React, { Component } from "react";
import { getCustomersList } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import customerlistreducer from "../../../src/reducers/dataReducers";
// import { store } from "../../store";

// import Axios from "axios";

class CustomersView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     customerslist: []
  //   };
  // }
  componentDidMount() {
    // this.setState.customerslist = getCustomersList;(
    console.log("component will mount");
    this.props.getCustomersList();
  }
  render() {
    const { customersList } = this.props.data;
    return (
      <div>
        <ul>
          {customersList.map(customer => (
            <li>{customer.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
// CustomersView.propTypes = {
//   //logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
//   // getCustomersList: PropTypes.func.isRequired
// };

CustomersView.propTypes = {
  data: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  getCustomersList: () => dispatch(getCustomersList())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CustomersView));
// export default CustomersView;
