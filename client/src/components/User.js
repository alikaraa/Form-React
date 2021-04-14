import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";

class User extends Component {
  static defaultProps = {
    name: "bilgi yok",
    salary: "bilgi yok",
    department: "bilgi yok",
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  state = {
    isVisible: false,
  };

  onDeleteUser = (dispatch,e) => {
    const {id} = this.props;
    dispatch({
      type: "DELETE_USER",
      payload:id
    })
  };

  componentWillUnmount() {
    console.log("Component Will Mount")
  }
  
  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return(
      <UserConsumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="col-md-8 mb-4">
            <div className="card" style = {isVisible ? {backgroundColor : "#62848d",color : "white"} : null}>
              <div className="card-header d-flex justify-content-between">
                <h4 className="d-inline" onClick={this.onClickEvent}>
                  {name}
                </h4>
                <i
                  onClick={this.onDeleteUser.bind(this,dispatch)}
                  className="far fa-trash-alt"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              {isVisible ? (
                <div className="card-body">
                  <p className="card-text">Maas : {salary} </p>
                  <p className="card-text">Department : {department}</p>
                </div>
              ) : null}
            </div>
          </div>
        );
      }}
    </UserConsumer>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id : PropTypes.string.isRequired
};

export default User;
