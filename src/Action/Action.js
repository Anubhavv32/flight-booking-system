export const changeHandler =(evt)=>{
  return function (dispatch){
      console.log(evt);
      dispatch({type:'CHANGE_INPUTDATA_USER',payload:evt});
  }
}
export const allowLogin = bool => {
  return function(dispatch){
    dispatch({type: 'LOGIN_ALLOWED', payload:bool})
  }
}
export const submitNewUserForm = bool => {
  return function(dispatch){
    dispatch({type: 'SUBMIT_NEW_USER', payload:bool})
  }
}