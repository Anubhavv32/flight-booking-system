import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import { changeHandler, allowLogin } from '../Action/Action';
import Header from '../Component/Header/Header';
export const Login = (props) => {
  const history = useHistory();
  const loginForm =async (event) => {
    const {email, password, allProfile, allowLogin} = props;
    event.preventDefault();
    const user = allProfile.filter(user => user.email === email && user.password === password);
    if (!user.length) {
      allowLogin(true);
      alert('Email and password didn\'t match. Please check.');  
    } else {
      localStorage.setItem('currentUser', user);
      allowLogin(true);
      history.push('/booking');
    }
    
  }
  const { errors, email, password, submitted, loginStatus, inputChange } = props;
  return (
    <div className="pagecenter loginForm" style={{width: '100%'}}>
        <Header title='Login'>
          <Link className="alt active" to='/'>Logout</Link>
        </Header>
        <form onSubmit={loginForm}>
          <div className="row mt-5">
            <div className="col-sm-4"></div>
            <label htmlFor="email" className="col-sm-1 col-form-label">Email:</label>
            <div className="col-sm-3 mb-2">
              <input type="email" name="email" 
              onChange={e => changeHandler(e.target)}
              className="form-control" id="username" placeholder="Email" required />
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <label htmlFor="password" className="col-sm-1 col-form-label">Password:</label>
            <div className="col-sm-3 mb-2">
              <input type="password" autoComplete="on" name="password" required onChange={e => changeHandler(e.target)}
              className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center mt-1">
              { submitted && loginStatus.length > 0 &&  <span className='error'>{loginStatus}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center mt-2">
              <button type="submit" className="button">Login</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mt-2"></div>
            <div className="col-sm-4 right">
              <p>Are you admin?</p>
              <Link to="/sign-up">Register</Link>
            </div>
            <div className="col-sm-4 mt-2"></div>
          </div>
        </form>
      </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    email: state.userData.email,
    password: state.userData.password,
    allProfile: state.userData.allProfile
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    changeHandler: (evt) =>  dispatch(changeHandler(evt)),
    allowLogin: (bool) => dispatch(allowLogin(bool))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
