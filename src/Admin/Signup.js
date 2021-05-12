import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { changeHandler, allowLogin, submitNewUserForm } from '../Action/Action';
const initialValues = {
  // used to populate "account" reducer when "Load" is clicked
  name: 'Jane',
  email: 'anubhavk.258@gmail.com',
  password: '12345',
  notes: 'Hello India'
} 
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
  const {changeHandler, handleSubmit, initialize, email, password, name, mobileNo} = props;
  useEffect(() =>{
    initialize(initialValues);
  }, []) 
  return (
    <div className="pagecenter signupForm m-4" style={{width: '100%'}}>
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="row">
        <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
        <div className="col-sm-5 mb-2">
          <Field component='input' type="email" name="email" 
          onChange={e => changeHandler(e.target)}
          className="form-control" id="email" placeholder="Email" value={email} />
        </div>
      </div>
      <div className="row">
        <label htmlFor="email" className="col-sm-3 col-form-label">Name:</label>
        <div className="col-sm-5 mb-2">
          <Field component='input' type="text" name="name" 
          onChange={e => changeHandler(e.target)}
          className="form-control" id="name" placeholder="Name" required minLength='3' value={name} />
        </div>
      </div>
      <div className="row">
        <label htmlFor="email" className="col-sm-3 col-form-label">Contact No:</label>
        <div className="col-sm-5 mb-2">
          <Field component='input' type="number" name="mobileNo" 
          onChange={e => changeHandler(e.target)}
          className="form-control" id="mobileNo" minLength = '10' maxLength='10' placeholder="Mobile No" required value={mobileNo}/>
        </div>
      </div>
      <div className="row">
        <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
        <div className="col-sm-5 mb-2">
          <Field component='input' type="password" autoComplete="on" name="password" required onChange={e => changeHandler(e.target)}
          className="form-control" id="password" placeholder="Password" value={password} />
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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'initializeFromState',
  enableReinitialize : true,
  // validate
})(Signup))
