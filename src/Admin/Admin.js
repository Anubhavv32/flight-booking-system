import React, { Component } from 'react'
import Signup from './Signup';
import UserList from './UserList';
import { changeHandler, allowLogin, submitNewUserForm } from '../Action/Action';
import { connect } from 'react-redux';
import Header from '../Component/Header/Header';

class Admin extends Component {
  render() {
    const { allProfile } = this.props;
    return (
      <div className='container-fluid px-0'>
        <Header />
        <div className="row mt-5 mx-3">
        <div className="col-sm-6">
          <div className="card h-100">
            <div className="card-body">
              <Signup />
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <UserList allProfile={allProfile} />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    email: state.userData.email,
    password: state.userData.password,
    name: state.userData.name,
    mobileNo: state.userData.mobileNo,
    allProfile: state.userData.allProfile
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin)