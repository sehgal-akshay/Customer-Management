import React, { Component } from "react";
import Axios from "axios";

class CustomersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerslist: []
    };
  }
  componentWillMount() {
    this.setState.customerslist = this.props.getcustomerslist();
    Axios.get();
  }
  render() {
    const customer = this.state.customerslist.map(customer => (
      <div key={customer.userid}>
        <h3>customer.name</h3>
      </div>
    ));
    return <div>{customer}</div>;
  }
}
export default CustomersView;
