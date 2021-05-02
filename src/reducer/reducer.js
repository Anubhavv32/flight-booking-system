import { combineReducers } from "redux";
import UserReducer from './userReducer';
import ProductReducer from './productReducer';
const reducer =  combineReducers({
userData:UserReducer,
productData:ProductReducer
});
export default reducer;