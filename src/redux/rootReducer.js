import {combineReducers} from 'redux'
import {ProductReducer,ProductReducer2,cartReducer,
        userDetails,loginDetails,islogin,islogout} from "./product/productReducer";

const rootReducer=combineReducers({product:ProductReducer,productDetail:ProductReducer2,
                                    cart:cartReducer,user:userDetails,
                                    login:loginDetails,islogin:islogin,
                                    islogout:islogout
                                })
export default rootReducer