import { FETCH_PRODUCT,PRODUCT,ADDITEM,DELETEITEM,DETAILS,ISLOGIN,EMPTY,ISLOGOUT} from "./productTypes";
import {getApiDetails,getProductDetailById} from "../../api/apiRequest"; 

//regular synchronous action ceator
export const userDetails=(details)=>{
    return {
        type:DETAILS,
        payload:details
    }
}

export const empty=()=>{
    return {
        type:EMPTY,
        payload:""
    }
}

export const loginDetails=(details)=>{
    return {
        type:ISLOGIN,
        payload:details
    }
}

export const logoutDetails=(details)=>{
    return {
        type:ISLOGOUT,
        payload:details
    }
}

export const fetchProducts=(product)=>{
    return {
        type:FETCH_PRODUCT,
        payload:product
    }
}


export const fetchProductById=(product)=>{
    return {
        type:PRODUCT,
        payload:product
    }
}

export const addCart=(product)=>{
    return({
        type:ADDITEM,
        payload:product
    
    }
    )
}

export const deleteCart=(product)=>{
    return({
        type:DELETEITEM,
        payload:product
    
    }
    )
}

export const fetchAllProduct=()=>{
    return (dispatch)=>{
        //all asyc code goes here
        return getApiDetails().then(response=>{
            console.log(response.data)
            dispatch(fetchProducts(response.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const fetchProduct=(id)=>{
    return (dispatch)=>{
        //all asyc code goes here

        return getProductDetailById(id).then(response=>{
            console.log(response.data)
            dispatch(fetchProductById(response.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}