import { combineReducers } from 'redux'
import {
        productReducer,
        productDetailsReducer,
        cartReducer,
        userDetailsReducer,
        loginDetailsReducer,
        isLoginReducer,
        isLogoutReducer
} from "./product";

const rootReducer = combineReducers({
        product: productReducer,
        productDetail: productDetailsReducer,
        cart: cartReducer,
        user: userDetailsReducer,
        login: loginDetailsReducer,
        islogin: isLoginReducer,
        islogout: isLogoutReducer
});
export default rootReducer;