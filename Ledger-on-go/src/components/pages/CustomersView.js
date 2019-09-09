import React, { Component } from "react";
import { getCustomersList } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { store } from "../../store";

// import Axios from "axios";

class CustomersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerslist: []
    };
  }
  componentWillMount() {
    // this.setState.customerslist = getCustomersList;(
    console.log("component will mount");
    this.props.getCustomersList();
  }
  render() {
    // const { customer } = this.props.auth;
    // const customerDeatils = this.props.customerslist.map(customer => (
    //   <div key={customer.userid}>
    //     <h3>{customer.name}</h3>
    //   </div>
    // ));
    console.log("this" + this.state.customerslist);
    return (
      <div>
        <h3>Hello</h3>
      </div>
    );
  }
}
CustomersView.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // getCustomersList: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { getCustomersList }
)(withRouter(CustomersView));
// export default CustomersView;
