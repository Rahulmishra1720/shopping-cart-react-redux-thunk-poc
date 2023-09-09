import {
    FETCH_PRODUCT,
    PRODUCT,
    ADD_ITEM,
    DELETE_ITEM,
    DETAILS,
    IS_LOGIN,
    EMPTY,
    IS_LOGOUT
} from "./productTypes";
import {
    getApiDetails,
    getProductDetailById
} from "../../api/apiRequest";

//regular synchronous action ceator
export const userDetails = (details) => {
    return {
        type: DETAILS,
        payload: details
    }
};

export const empty = () => {
    return {
        type: EMPTY,
        payload: ""
    }
};

export const loginDetails = (details) => {
    return {
        type: IS_LOGIN,
        payload: details
    }
};

export const logoutDetails = (details) => {
    return {
        type: IS_LOGOUT,
        payload: details
    }
};

export const fetchProducts = (product) => {
    return {
        type: FETCH_PRODUCT,
        payload: product
    }
};


export const fetchProductById = (product) => {
    return {
        type: PRODUCT,
        payload: product
    }
};

export const addCart = (product) => {
    return {
        type: ADD_ITEM,
        payload: product

    }
};

export const deleteCart = (product) => {
    return ({
        type: DELETE_ITEM,
        payload: product

    })
};

export const fetchAllProduct = () => {
    return (dispatch) => {
        //all asyc code goes here
        return getApiDetails().then(response => {
            console.log(response.data)
            dispatch(fetchProducts(response.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const fetchProduct = (id) => {
    return (dispatch) => {
        //all asyc code goes here
        return getProductDetailById(id).then(response => {
            console.log(response.data)
            dispatch(fetchProductById(response.data))
        }).catch(err => {
            console.log(err)
        })
    }
};