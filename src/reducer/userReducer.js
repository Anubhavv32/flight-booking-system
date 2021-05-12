const userState ={ name: '', email: '', mobileNo: '', password: '', id: 0, allProfile: [{id: 0, name: 'Admin', email: 'admin123@gmail.com', mobileNo: 9292929292, password: 'admin123', type: 'Admin'}], isLogin: false};

const Reducer=(state=userState,action)=>{
  switch(action.type){
    case "CHANGE_INPUTDATA_USER":
      console.log(action.payload.name, action.payload.value);
      return {...state, [action.payload.name] : action.payload.value }
    case "LOGIN_ALLOWED":
      return {...state, isLogin: action.payload} //
    case "SUBMIT_NEW_USER":
      return {...state, allProfile: [...state.allProfile, action.payload]}         
    default:
      return {...state};          
  }

}
export default Reducer;