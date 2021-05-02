const productState ={ from: '', to: '', date: ''};

 const Reducer=(state=productState,action)=>{
    
  switch(action.type){
  
     // case "CHANGE_ADDRESS1":
     //     return {...state,address1 : action.payload }
         
     // case "CHANGE_ADDRESS2":
     //     return {...state,address2 : action.payload }
      
     // case "CHANGE_CITY":
     //     return {...state,city : action.payload }
        
     // case "CHANGE_PIN":
     //     return {...state,pincode : action.payload }         
     default:
         return state;
       
              
          
  }

}
export default Reducer;