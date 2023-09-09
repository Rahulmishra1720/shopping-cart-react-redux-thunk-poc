import {
  FETCH_PRODUCT,
  PRODUCT,
  ADD_ITEM,
  DELETE_ITEM,
  DETAILS,
  USERNAME,
  PASSWORD,
  IS_LOGIN,
  IS_LOGOUT,
  EMPTY,
  NAME
} from "./productTypes";

const initialstate = {
  products: []
};

function productReducer(state = initialstate, action) {
  switch (action.type) {
    case FETCH_PRODUCT: console.log(action.payload)
      return action.payload
    default: return state
  }
};

function productDetailsReducer(state = null, action) {
  switch (action.type) {
    case PRODUCT: return action.payload
    default: return state
  }
};

function userDetailsReducer(state = {}, action) {
  switch (action.type) {
    case DETAILS: console.log(action.payload)
      return action.payload
    default: return state
  }
};

const login = {
  username: "user@gmail.com",
  password: "12345",
  name: "Rahul Kumar Mishra"
};

function loginDetailsReducer(state = login, action) {
  switch (action.type) {
    case USERNAME: return state.username
    case PASSWORD: return state.password
    case NAME: return state.Name
    default: return state
  }
};

function isLoginReducer(state = false, action) {
  switch (action.type) {
    case IS_LOGIN: return action.payload
    case IS_LOGOUT:
      return action.payload
    default: return state
  }
};

function isLogoutReducer(state = true, action) {
  switch (action.type) {
    case IS_LOGOUT:
      return action.payload
    default: return state
  }
};

const cart = [];

const cartReducer = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case ADD_ITEM: const exist = state.find((x) => x.id === product.id)
      if (exist) {
        return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
      }
      else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1
          }
        ]
      }
    case DELETE_ITEM:
      const exist1 = state.find((x) => x.id === product.id)
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id)
      }
      else {
        return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
      }
    case EMPTY: return cart;
    default: return state
  }
};

export { productReducer, productDetailsReducer, cartReducer, userDetailsReducer, loginDetailsReducer, isLoginReducer, isLogoutReducer }