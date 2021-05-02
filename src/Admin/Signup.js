import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { changeHandler, allowLogin, submitNewUserForm } from '../Action/Action';
export const Signup = (props) => {
  const history = useHistory();
  const submitHandler =async (event) => {
    event.preventDefault();
    const {email, password, name, mobileNo, submitNewUserForm, allProfile} = props;
    const userObj = {id: allProfile.length, email, password, name, mobileNo}
    await submitNewUserForm(userObj);
    alert('User created successfully');
    history.push('/login');
    console.log(email, password, name, mobileNo );
  }
  const {changeHandler} = props;
  return (
    <div className="pagecenter signupForm m-4" style={{width: '100%'}}>
    <form onSubmit={submitHandler}>
      <div className="row">
        <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
        <div className="col-sm-5 mb-2">
          <input type="email" name="email" 
          onChange={e => changeHandler(e.target)}
          className="form-control" id="email" placeholder="Email" required />
        </div>
      </div>
      <div className="row">
        <label htmlFor="email" className="col-sm-3 col-form-label">Name:</label>
        <div className="col-sm-5 mb-2">
          <input type="text" name="name" 
          onChange={e => changeHandler(e.target)}
          className="form-control" id="name" placeholder="Name" required minLength='3' />
        </div>
      </div>
      <div className="row">
        <label htmlFor="email" className="col-sm-3 col-form-label">Contact No:</label>
        <div className="col-sm-5 mb-2">
          <input type="number" name="mobileNo" 
          onChange={e => changeHandler(e.target)}
          className="form-control" id="mobileNo" minLength = '10' maxLength='10' placeholder="Mobile No" required />
        </div>
      </div>
      <div className="row">
        <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
        <div className="col-sm-5 mb-2">
          <input type="password" autoComplete="on" name="password" required onChange={e => changeHandler(e.target)}
          className="form-control" id="password" placeholder="Password" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center mt-2">
          <button type="submit" className="button">Register</button>
        </div>
      </div>
    </form>
  </div>
  )
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
    changeHandler: (evt) =>  dispatch(changeHandler(evt)),
    allowLogin: (bool) => dispatch(allowLogin(bool)),
    submitNewUserForm: (obj) => dispatch(submitNewUserForm(obj))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
